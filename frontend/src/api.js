import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-Secret-Key': import.meta.env.VITE_SECRET_KEY,
  },
  withCredentials: true,
});

export default api;

