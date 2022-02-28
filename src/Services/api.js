import axios from "axios";
import { getId } from "./authService";

const api = axios.create({
  baseURL: "https://localhost:4000/api/",
});

api.interceptors.request.use(async (config) => {
  const id = getId();
  if (id) {
    config.headers.Authorization = `Bearer ${id}`;
  }
  return config;
});

export default api;
