import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  try {
    const response = await axios.get("/Product/categories");
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return { error: "Không thể lấy dữ liệu" };
  }
});
