<template>
  <div>
    <div v-show="loading" class="flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
      ></div>
    </div>
    <div v-show="!loading" class="relative mt-10 mb-10">
      <div v-for="(category, index) in categories" :key="index" class="mb-4">
        <div class="text-xl md:text-2xl font-bold uppercase text-center">
          {{ category.name }}
        </div>
        <CategorySlide
          v-if="category.child && category.child.length > 0"
          :categoryChild="category.child"
        />
        <section class="px-2">
          <ProductGrid
            :products="category.products"
            :categoryName="category.name || ''"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
const route = useRoute();
console.log(route.query);
console.log(route.path);

const loading = ref(true);
const { axios } = useAxios();
const categories = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("/api/categoryProducts");
    categories.value = response.data.data;
  } catch (err) {
    error.value = err;
    console.log("Error fetching categories:", err);
  } finally {
    loading.value = false;
  }
});

const products = [
  {
    id: 1,
    title: "Sản phẩm 1",
    image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
    price: "100.000₫",
  },
  {
    id: 2,
    title: "Sản phẩm 2",
    image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
    price: "200.000₫",
  },
  {
    id: 3,
    title: "Sản phẩm 3",
    image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
    price: "300.000₫",
  },
];
</script>

<style></style>
