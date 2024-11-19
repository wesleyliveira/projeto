<template>
    <div id="app">
      <router-view></router-view> <!-- Aqui o conteúdo das rotas será carregado -->
    </div>
  </template>
  
  <script>
  // Importar a configuração do router
  import { createRouter, createWebHistory } from 'vue-router';
  import Clients from './components/Client.vue';
  
  const routes = [
    { path: '/client', component: Clients },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default {
    name: 'App',
    router,
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    padding: 20px;
  }
  </style>
  