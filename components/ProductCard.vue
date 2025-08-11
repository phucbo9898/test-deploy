<template>
  <div class="p-4 flex flex-col hover:shadow-lg transition product-item">
    <div class="product-image">
      <img
        :src="product.image"
        :alt="product.name"
        class="md:w-full h-40 object-contain mb-2"
      />
      <button class="quick-view opacity-90">XEM NHANH</button>
    </div>
    <h3 class="text-sm font-medium mb-1 line-clamp-2">{{ product.name }}</h3>
    <div class="flex mb-1">
      <span v-for="star in 5" :key="star" class="text-yellow-400 text-xl"
        >★</span
      >
    </div>
    <p class="font-semibold">{{ formatPrice(product.price) }}</p>
  </div>
  <!-- <div
    v-for="(item, index) in products"
    :key="index"
    class="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
  >
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full h-40 object-contain mb-2"
    />
    <h3 class="text-sm font-medium mb-1 line-clamp-2">{{ item.title }}</h3>
    <div class="flex items-center mb-1">
      <span v-for="star in 5" :key="star" class="text-yellow-400 text-xs"
        >★</span
      >
    </div>
    <p class="text-red-500 font-semibold">{{ item.price }}₫</p> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const props = defineProps({
  product: Object,
});

const { locale } = useI18n();

function formatPrice(value: number) {
  console.log("locale", locale.value);

  const number =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;
  return number.toLocaleString("vi-VN") + "₫";
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
