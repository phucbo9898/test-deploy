import { useAxios } from "~/composables/useAxios";

export default defineEventHandler(async (event) => {
  const { axios } = useAxios();
  const body = await readBody(event);

  try {
    const response = await axios.post("/Product", body);
    return response.data;
  } catch (error) {
    console.error("API /Product error:", error);
    return { error: "Không thể lấy sản phẩm" };
  }
});
