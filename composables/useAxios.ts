import axios from "axios";

export const useAxios = () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { axios: instance };
};
