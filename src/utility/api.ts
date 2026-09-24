import axios from 'axios';

const api_route = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: api_route,
  headers: {
    "Content-Type":"application/json"
  }
});

export default api;