import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/wp-json/wp/v2/', // URL padrão
});

export default api;
