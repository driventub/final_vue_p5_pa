<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.form {
  margin-top: 2rem;
  display: grid;
  padding: 1rem;
  background-color: #FCA311;
  border-radius: 2rem;

}

label {
  text-align: left;
}

input, textarea{
  background-color: #E5E5E5;
}

.form button{
  margin:0rem 100px;
  margin-top: 10px;
}
</style>
