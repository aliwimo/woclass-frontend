import axios from 'axios';
import type { AxiosInstance } from 'axios';

// Define the base URL and default headers
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Change this to your API URL
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Interceptor to automatically set Authorization header if token exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
