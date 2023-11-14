"use server";
import axios from "axios";
import { BASE_API_URL } from "@/utils/env";

const baseURL = BASE_API_URL;

export const API = axios.create({
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  baseURL,
});

// Todo create something like this
// export const getAuthHeader = (token) => {
//   const token = localStorage.getItem("token");
//   if (request && token) {
//     request.headers.Authorization = "Bearer " + token;
//   }
//   return request;
// };
