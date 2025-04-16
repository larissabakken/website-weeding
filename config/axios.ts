import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 25000,
});

console.log("API URL", process.env.NEXT_PUBLIC_API_URL);
