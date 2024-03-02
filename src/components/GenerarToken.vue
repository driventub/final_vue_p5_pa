<template>
    <div class="container">
        <div class="form">
            <h1>Token</h1>
            <label for="semilla">Semilla</label>
            <input id="semilla" v-model="semilla" type="text" />
            <label for="tiempo">Tiempo de Expiracion</label>
            <input id="tiempo" v-model="tiempo" type="number" />
            <label for="token">Token</label>
            <textarea v-model="token" name="" id="" cols="30" rows="10" disabled></textarea>
            <button @click="validar">Generar</button>
        </div>
    </div>
</template>

<script>
import { generarTokenFachada } from '@/helpers/clienteEstudiante';

export default {
    data() {
        return {
            semilla: null,
            tiempo: null,
            token: null,
        }
    },
    methods: {
        async validar() {
            const datos = {
                nombre: "usuario",
                password: "ExamenFinal2",
                semilla: this.semilla,
                tiempoExp: this.tiempo
            }
            console.log(datos);
            
            const token = await generarTokenFachada(datos);
            console.log(token);
            this.token = token
        }
    },
}
</script>

<style scoped></style>