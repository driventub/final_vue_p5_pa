<template>
    <div>
      <ul>
        <li><router-link to="/token">Generar Token</router-link></li>
        <li><router-link to="/guardar">Guardar</router-link></li>
        
      </ul>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    margin: 0px 200px;
    padding: 0;
    overflow: hidden;
    background-color: #14213d;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #111;
  }
  </style>