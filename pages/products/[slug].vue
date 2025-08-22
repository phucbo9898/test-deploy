<template>
  <div class="p-2">
    <div v-if="loading" class="flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
      ></div>
    </div>
    <div v-else class="p-2 lg:p-5 lg:px-20 xl:p-10 xl:px-50">
      <div class="container m-auto block md:flex md:justify-between gap-4">
        <!-- {{ productDetail }} -->
        <div class="relative md:w-[500px] md:h-[600px]">
          <img
            :src="productDetail.image || ''"
            :alt="productDetail.name"
            class="w-full h-full object-contain mb-2"
            loading="eager"
            style="transform: none !important"
          />
          <div
            v-if="productDetail.discount"
            class="absolute top-2 left-2 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm"
          >
            -20%
          </div>
        </div>
        <div id="infor">
          <div
            id="name-product"
            class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-gray-600"
          >
            {{ productDetail.name }}
          </div>
          <div id="price">
            <div>
              <span
                class="flex items-start text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-400"
                :class="{ 'text-gray-600': !productDetail.discount }"
              >
                {{
                  productDetail.originalPrice
                    ? formatPrice(productDetail.originalPrice)
                    : ""
                }}
                <span class="text-sm align-top relative -top-0.5 ml-0.5"
                  >đ</span
                >
              </span>
            </div>
            <div
              v-if="productDetail.discount"
              class="text-lg text-gray-500 line-through"
              :class="{ 'line-through': productDetail.discount }"
            >
              <span
                class="flex items-start text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800"
              >
                {{
                  productDetail.price ? formatPrice(productDetail.price) : ""
                }}
                <span class="text-sm align-top relative -top-0.5 ml-0.5"
                  >đ</span
                >
              </span>
            </div>
          </div>
          <div class="mt-2">
            <span class="text-sm md:text-lg text-gray-500">
              Thương hiệu: {{ productDetail.brandName || "Không có" }}
            </span>
          </div>
          <div class="mt-2 hidden">
            <span class="text-sm md:text-lg text-gray-500">
              Xuất xứ: {{ productDetail.made_in || "Không có" }}
            </span>
          </div>
          <div class="mt-2">
            <span class="text-sm md:text-lg text-gray-500">
              Đóng gói: {{ productDetail.includedItems || "Không có" }}
            </span>
          </div>
          <hr
            class="hidden mt-2 border-t-2 border-gray-400 border-dashed !border-0 !border-t-2 !border-gray-400 !border-dashed"
            style="border: none; border-top: 2px dashed #9ca3af"
          />
          <div class="mt-2 hidden">
            <span class="text-sm md:text-lg text-gray-500">
              SKU: {{ productDetail.sku || "Không có" }}
            </span>
          </div>
          <hr
            class="mt-2 border-t-2 border-gray-400 border-dashed !border-0 !border-t-2 !border-gray-400 !border-dashed"
            style="border: none; border-top: 2px dashed #9ca3af"
          />
          <div class="flex mt-2 md:items-center md:text-center">
            <span class="text-sm md:text-lg text-gray-500">
              Danh mục:
              <span
                v-if="
                  productDetail.catagories &&
                  productDetail.catagories.length > 0
                "
              >
                <NuxtLink
                  v-for="(category, index) in productDetail.catagories"
                  :key="index"
                  :to="localePath('/shop/' + category.slug)"
                  class="!text-blue-600 hover:!text-blue-400"
                >
                  {{ category.name
                  }}{{
                    index === productDetail.catagories.length - 1 ? "" : ", "
                  }}
                </NuxtLink>
              </span>
              <span v-else>Không có</span></span
            >
          </div>
          <hr
            class="mt-2 border-t-2 border-gray-400 border-dashed !border-0 !border-t-2 !border-gray-400 !border-dashed"
            style="border: none; border-top: 2px dashed #9ca3af"
          />
          <div class="mt-2">
            <span class="text-sm md:text-lg text-gray-500"
              >Thẻ:
              <span v-if="productDetail.tags && productDetail.tags.length > 0">
                <span
                  v-for="(tag, index) in productDetail.tags"
                  :key="index"
                  class="text-sm md:text-lg"
                >
                  {{ tag.name
                  }}{{ index === productDetail.tags.length - 1 ? "" : ", " }}
                </span>
              </span>
              <span v-else>Không có</span></span
            >
          </div>
        </div>
      </div>
      <div
        class="container product-content mt-3 md:p-5"
        v-html="safeContent"
      ></div>
      <hr
        class="mt-2 border-t-2 border-gray-400 border !border-0 !border-t-2 !border-gray-400"
        style="border: none; border-top: 2px solid #9ca3af"
      />
      <div class="mt-2">
        <span class="uppercase text-lg md:text-xl">Có thể bạn thích...</span>
        <div class="grid grid-cols-2 md:grid-cols-5">
          <ProductCard
            v-for="product in productDetail.suggestions"
            :key="product.id"
            :product="product"
            :category="product.category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";
import DOMPurify from "dompurify";

const loading = ref(true);
const { axios } = useAxios();
const productDetail = ref(null);
const error = ref(null);
const route = useRoute();
const { locale } = useI18n();
const localePath = useLocalePath();
const rawContent = ref("");
const safeContent = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`/api/productDetail/${route.params.slug}`);
    
    productDetail.value = response.data.data;
    rawContent.value = await response.data.data.description;

    const parser = new DOMParser();
    const doc = parser.parseFromString(rawContent.value, "text/html");
    doc.querySelectorAll("img").forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
    });

    safeContent.value = DOMPurify.sanitize(doc.body.innerHTML);
  } catch (err) {
    error.value = err;
    console.log("Error fetching product detail:", err);
  } finally {
    loading.value = false;
  }
});

function formatPrice(value: number) {
  console.log("locale", locale.value);

  const number =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;
  return number.toLocaleString("vi-VN");
}
</script>

<style></style>
