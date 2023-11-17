"use server";
import axios from "redaxios";
import { BASE_API_URL } from "@/utils/env";

const baseURL = BASE_API_URL;

export const API = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL,
});

export const getApiHeaders = async (clerkAuth: {
  getToken: () => Promise<string | null>;
}) => {
  const token = await clerkAuth.getToken();

  if (!token) {
    return undefined;
  }

  return { Authorization: "Bearer " + token };
};
