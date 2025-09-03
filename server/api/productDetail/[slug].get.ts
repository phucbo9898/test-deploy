import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const slug = getRouterParam(event, "slug");

  try {
    const response = await axios.get(`/Product/${slug}`);
    return response.data;
  } catch (error) {
    throw createError({
      statusCode: error.response?.status,
      statusMessage: error.response?.statusText,
      fatal: true,
    });
  }
});
