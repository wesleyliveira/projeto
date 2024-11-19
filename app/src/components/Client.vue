<template>
  <div>
    <h1>Lista de Clientes</h1>
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.id">
          <td>{{ client.id }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ new Date(client.created_at).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clients: [],
    };
  },
  mounted() {
    // Buscando os dados da API
    axios
      .get('http://127.0.0.1:8000/api/client')
      .then((response) => {
        // Salvando os dados retornados no array 'clients'
        this.clients = response.data[1];
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
      });
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
table {
  width: 100%;
  margin: 20px auto;
  border-collapse: collapse;
}
th {
  background-color: #f4f4f4;
}
td,
th {
  padding: 8px;
  text-align: left;
}
</style>
