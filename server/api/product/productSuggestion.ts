import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const query = getQuery(event);
  const keyword = query.keyword;

  try {
    const response = await axios.get("/Product/search?keyword=" + keyword);
    return response.data;
  } catch (error: any) {
    throw createError({
      status: error.response.status,
      statusText: error.response.statusText,
    });
  }
});
