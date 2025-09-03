import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  try {
    const response = await axios.get("/Category");
    return response.data;
  } catch (error: any) {
    throw createError({
      status: error.response.status,
      statusText: error.response.statusText,
    });
  }
});
