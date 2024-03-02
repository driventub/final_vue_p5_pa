<template>
    <div>
        <table id="estudiantes">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="lista.length > 0" v-for="e in lista" :key="e.id">
                    <td>{{ e.id }}</td>
                    <td>{{ e.nombre }}</td>
                    <td>{{ e.apellido }}</td>
                    <td>{{ e.cedula }}</td>
                </tr>
                <p v-else>No se han insertado estudiantes</p>
            </tbody>
        </table>


    </div>
</template>
  
<script>
export default {
    props: {
        estu: {
            required: true,
        },
    },
    data() {
        return {
            lista: [],
        };
    },
    watch: {
        estu: {
            immediate: true, // Run the handler immediately on component creation
            handler(newValue) {
                if (newValue) {
                    this.lista.push(newValue);
                }
            },
        },
    },
};
</script>
  
<style scoped>
#estudiantes {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    
    
}

#estudiantes td,
#estudiantes th {
    border: 1px solid #ddd;
    padding: 8px;
}

#estudiantes tr:nth-child(even) {
    background-color: #f2f2f2;
}

#estudiantes tr:hover {
    background-color: #ddd;
}

#estudiantes th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #14213d;
    color: white;
}
</style>
  