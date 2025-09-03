import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const body = await readBody(event);

  try {
    const response = await axios.post("/Product", body);
    return response.data;
  } catch (error: any) {
    throw createError({
      status: error.response.status,
      statusText: error.response.statusText,
    });
  }
});
