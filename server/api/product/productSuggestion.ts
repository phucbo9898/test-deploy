import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const query = getQuery(event);
  const keyword = query.keyword;

  try {
    const response = await axios.get("/Product/search?keyword=" + keyword);
    return response.data;
  } catch (error) {
    console.error("API Search error:", error);
    return { error: "Không thể lấy sản phẩm" };
  }
});
