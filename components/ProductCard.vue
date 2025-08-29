<template>
  <div class="p-4 flex flex-col hover:shadow-lg transition product-item">
    <div class="product-image">
      <NuxtLink :to="localePath('/products/' + product.slug)">
        <img
          :src="product.image || '/image/default-image.jpg'"
          :alt="product.name"
          class="md:w-full h-40 object-contain mb-2"
        />
      </NuxtLink>
      <!-- <button
        class="quick-view opacity-90"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal-' + product.slug"
      >
        XEM NHANH
      </button>
      <DetailProduct :product="product" /> -->
    </div>
    <span class="text-xs text-gray-400 my-2">{{
      product.category || categoryName
    }}</span>
    <NuxtLink :to="localePath('/products/' + product.slug)">
      <h3 class="text-sm font-medium mb-1 line-clamp-2">{{ product.name }}</h3>
    </NuxtLink>
    <div class="flex mb-1">
      <div v-for="star in 5" :key="star">
        <span
          v-if="star <= fullStars(product.averangeRating)"
          class="text-yellow-400 text-xl"
        >
          ★
        </span>
        <span
          v-else-if="
            star === fullStars(product.averangeRating) + 1 &&
            hasHalfStar(product.averangeRating)
          "
          class="text-yellow-400 text-xl relative"
        >
          <span
            style="
              position: absolute;
              overflow: hidden;
              width: 50%;
              color: gold;
            "
          >
            ★
          </span>
          <span style="color: #ddd">★</span>
        </span>
        <span v-else class="text-gray-300 text-xl"> ★ </span>
      </div>
    </div>
    <p class="font-semibold">{{ formatPrice(product.price) }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const props = defineProps({
  product: Object,
  categoryName: {
    type: String,
    default: "",
  },
});

const localePath = useLocalePath();
const { locale } = useI18n();
const selectedProduct = ref(null);

function formatPrice(value: number) {
  const number =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;
  return number.toLocaleString("vi-VN") + "₫";
}

function setProduct(product: object) {
  console.log("selectedProduct");

  selectedProduct.value = product;
}

function hasHalfStar(rating: number) {
  return rating % 1 >= 0.25 && rating % 1 < 0.75;
}

function fullStars(rating: number) {
  return Math.floor(rating);
}
</script>

<style>
.product-image {
  position: relative;
  overflow: hidden;
}

.product-image img {
  display: block;
  width: 100%;
  height: auto;
}

.quick-view {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #002d72;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  font-weight: bold;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  border: none;
  cursor: pointer;
}

.product-item:hover .quick-view {
  transform: translateY(0);
}
</style>
