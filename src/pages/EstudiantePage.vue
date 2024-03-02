<template>
    <div>
        <Guardar @estu = "listar"/>
        <Todos :estu="estudiante" />
    </div>
</template>

<script>
import Guardar from '@/components/Guardar.vue';
import Todos from '@/components/Todos.vue';
export default {
    data() {
        return {
            estudiante: null,
        }
    },
    components: {
        Guardar,
        Todos
    },
    methods: {
        listar(estu){
            this.estudiante = estu;
        }
    },
}
</script>

<style scoped></style>