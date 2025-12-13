import axios from 'axios';
import { Platform } from 'react-native';

// Configuração do IP do Backend
// O usuário solicitou explicitamente o IP 192.168.1.4
const SERVER_IP = '192.168.1.4';
const PORT = '3000';

const BASE_URL = `http://${SERVER_IP}:${PORT}`;

console.log(`API Base URL: ${BASE_URL}`);

const api = axios.create({
  baseURL: BASE_URL,
});

// Interceptor para logar todas as chamadas
api.interceptors.request.use(request => {
  console.log(`[API Call] ${request.method.toUpperCase()} ${request.url}`);
  return request;
}, error => {
  console.log('[API Request Error]', error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
    // Opcional: Logar sucesso
    // console.log(`[API Success] ${response.status} ${response.config.url}`);
    return response;
}, error => {
    console.log(`[API Response Error] ${error.message} URL: ${error.config?.url}`);
    return Promise.reject(error);
});

export default api;
