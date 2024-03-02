<template>
    <div class="container">

        <div class="form">
            <h1 for="">Estudiantes</h1>
            <label for="token">Token</label>
            <textarea v-model="token" name="" id="token" cols="30" rows="10"></textarea>
            <label for="nombre">Nombre</label>
            <input id="nombre" v-model="nombre" type="text" />
            <label for="apellido">Apellido</label>
            <input id="apellido" v-model="apellido" type="text" />
            <label for="cedula">Cedula</label>
            <input id="cedula" v-model="cedula" type="text" />
            <button @click="insertar">Insertar</button>
        </div>
    </div>
</template>

<script>
import { insertarFachada, consultarCedulaFachada } from '@/helpers/clienteEstudiante';



export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            cedula: null,
            token: null,
        }
    },
    methods: {
        async insertar() {

            const datos = {
                "nombre": this.nombre,
                "apellido": this.apellido,
                "cedula": this.cedula,
            }

            await insertarFachada(datos, this.token);
            console.log("Insertado!")
            const estu = await consultarCedulaFachada(this.cedula, this.token)
            console.log(estu);
            this.$emit("estu", estu)

        },
    },
}
</script>

<style scoped></style>