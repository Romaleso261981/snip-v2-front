import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  headers: {
    "Content-Type": "application/json"
  },
  params: {
    populate: "*",
    locale: "en"
  }
});

api.interceptors.request.use(
  config => {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Cache-Control"] = "no-cache";
    return config;
  },
  error => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);
