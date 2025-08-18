import axios from "axios";

export const useAxios = () => {
  const config = useRuntimeConfig();
  const instance = axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { axios: instance };
};
