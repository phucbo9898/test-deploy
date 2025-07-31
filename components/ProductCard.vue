<template>
  <div
    class="border rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="w-full h-40 object-contain mb-2"
    />
    <h3 class="text-sm font-medium mb-1 line-clamp-2">{{ product.title }}</h3>
    <div class="flex items-center mb-1">
      <span v-for="star in 5" :key="star" class="text-yellow-400 text-xs"
        >★</span
      >
    </div>
    <p class="text-red-500 font-semibold">{{ formatPrice(product.price) }}</p>
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
import { useI18n } from 'vue-i18n';

const props = defineProps({
  product: Object,
});

const { locale } = useI18n();

function formatPrice(value) {
  console.log('locale', locale.value);
  
  const number = typeof value === 'string' ? parseFloat(value.replace(/\./g, '')) : value;
  return number.toLocaleString('vi-VN') + '₫';
}
</script>

<style></style>
