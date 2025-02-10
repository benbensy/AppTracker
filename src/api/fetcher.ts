import axios from "axios";
import { useBoundStore } from "@/store";

const $axios = axios.create({ withXSRFToken: true, withCredentials: true });

$axios.interceptors.request.use((config) => {
  const accessToken = useBoundStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export const request = $axios;