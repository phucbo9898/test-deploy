<template>
  <div
    class="modal fade"
    id="exampleModal-{{ product.slug }}"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog bg-white rounded-xl">
      <div class="modal-content rounded-lg overflow-hidden">
        <div class="modal-body p-4 block md:flex md:justify-between gap-2">
          <div class="w-64 h-80 relative">
            <img
              :src="product.image || ''"
              :alt="product.name"
              class="w-full h-auto object-contain mb-2"
              loading="eager"
              style="transform: none !important"
            />
            <div
              class="absolute top-2 left-2 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm"
            >
              -20%
            </div>
          </div>
          <div id="infor">
            <div id="name-product" class="text-lg font-bold mb-2 text-gray-600">
              {{ product.name }}
            </div>
            <div id="price">
              <div class="text-lg text-gray-600 line-through">
                {{ product.originalPrice }} đ
              </div>
              <div class="text-lg font-bold">{{ product.price }} đ</div>
            </div>
            <div id="brand">
              <span class="text-sm text-gray-500">
                Thương hiệu: {{ product.brand || "Không có" }}
              </span>
            </div>
            <div>
              <span class="text-sm text-gray-500">
                Xuất xứ: {{ product.made_in || "Không có" }}
              </span>
            </div>
            <div>
              <span class="text-sm text-gray-500">
                Đóng gói: {{ product.included_items || "Không có" }}
              </span>
            </div>
            <hr class="text-gray-500" />
            <div>
              <span class="text-sm text-gray-500">
                SKU: {{ product.sku || "Không có" }}
              </span>
            </div>
            <div>
              <span class="text-sm text-gray-500">
                Danh mục: {{ product.sku || "Không có" }}
              </span>
            </div>
            <!-- {{ product }} -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { axios } = useAxios();
const error = ref(null);
const loading = ref(true);
const productDetail = ref({
  image: "",
  name: "",
  originalPrice: "",
  price: "",
  brand: "",
  made_in: "",
  included_items: "",
  sku: "",
});
const { locale } = useI18n();
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

// watch(
//   () => props.productSlug,
//   async (productSlug: String) => {
//     if (!productSlug) return;
//     loading.value = true;
//     try {
//       const response = await axios.get(`/Product/${productSlug}`);
//       productDetail.value = response.data.data;
//     } catch (err) {
//       error.value = err;
//       console.error("Error fetching product:", err);
//     } finally {
//       loading.value = false;
//     }
//   },
//   { immediate: true } // chạy luôn nếu props đã có từ đầu
// );

function formatPrice(value: number) {
  const number =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;
  return number.toLocaleString("vi-VN") + "₫";
}
</script>

<style></style>
