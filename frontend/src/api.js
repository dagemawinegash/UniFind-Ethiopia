import axios from "axios";

const isDevelopment = import.meta.env.MODE === 'development';
const myBaseUrl = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;

const api = axios.create({
  baseURL: myBaseUrl,
  headers: {
    'X-Secret-Key': import.meta.env.VITE_SECRET_KEY,
  },
  withCredentials: true,
});

export default api;

