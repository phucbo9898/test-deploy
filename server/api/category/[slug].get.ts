import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const slug = getRouterParam(event, "slug");

  try {
    const response = await axios.get(`/Category/${slug}`);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return { error: "Không thể lấy dữ liệu" };
  }
});
