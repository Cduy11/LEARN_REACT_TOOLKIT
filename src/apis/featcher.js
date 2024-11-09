import axios from "axios";
import { API_URL, TOKENT } from "../constants";


// nơi chứa api
const fetcher = axios.create({
  baseURL: API_URL,
  headers: {
    TokenCybersoft: TOKENT,
  },
});

// Interceptor to add Authorization token if available
fetcher.interceptors.request.use((config) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser) {
    config.headers.Authorization = `Bearer ${currentUser.accessToken}`;
  }
  return config;
})
export default fetcher;
