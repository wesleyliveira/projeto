import axios from 'axios';

// Configuração da base URL da API Laravel
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Ajuste a URL conforme necessário
});

export default {
  // Busca todos os clientes
  getClients() {
    return api.get('/client'); // A URL final será: http://localhost:8000/api/client
  },

  // Cria um novo cliente
  createClient(clientData) {
    return api.post('/client', clientData); // A URL final será: http://localhost:8000/api/client
  },

  // Atualiza um cliente
  updateClient(clientId, clientData) {
    return api.put(`/client/${clientId}`, clientData); // A URL final será: http://localhost:8000/api/client/{clientId}
  },

  // Remove um cliente
  deleteClient(clientId) {
    return api.delete(`/client/${clientId}`); // A URL final será: http://localhost:8000/api/client/{clientId}
  },
};
