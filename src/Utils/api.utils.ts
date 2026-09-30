import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://ciitm-backend.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
