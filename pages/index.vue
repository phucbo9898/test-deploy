<template>
  <div>
    <div
      class="bg-center bg-cover bg-no-repeat blur-none z-0"
      style="
        background-image: -webkit-image-set(
          url('/image/Slider-banner-3.png') 1x,
          url('/image/Slider-banner-3.png') 2x
        );
      "
    >
      <div
        class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
      >
        <div
          class="-mx-4 flex flex-wrap items-center justify-center mt-24 space-y-6 lg:space-y-0"
        >
          <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12"></div>
        </div>
      </div>
    </div>
    <div class="p-4 max-w-6xl mx-auto block lg:flex md:flex">
      <NuxtLink
        to="child.link || '#'"
        class="block py-4 px-2 text-sm hover:bg-gray-50"
      >
        <img src="/image/From-Germany.jpg" alt="">
      </NuxtLink>
      <NuxtLink
        to="child.link || '#'"
        class="block py-4 px-2 text-sm hover:bg-gray-50"
      >
        <img src="/image/Free-Ship-300k.jpg" alt="">
      </NuxtLink>
      <NuxtLink
        to="child.link || '#'"
        class="block py-4 px-2 text-sm hover:bg-gray-50"
      >
        <img src="/image/Ship-COD.jpg" alt="">
      </NuxtLink>
    </div>

    <ProductGrid />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const products = [
  { image: '/image/diadermine.png', title: 'Chống Lão Hóa Da Diadermine', price: '120.000' },
  { image: '/image/achra.png', title: 'Kem Đánh Răng Y tế Ajona', price: '80.000' },
  { image: '/image/medivital.png', title: 'Tinh Dầu Khuynh Diệp Medivital', price: '135.000' },
  { image: '/image/merz.png', title: 'Thuốc Tóc Merz Spezial Haar Activ', price: '640.000' },
  { image: '/image/ensure.png', title: 'Sữa Bột Ensure Vani', price: '410.000' },
  { image: '/image/signal.png', title: 'Kem Đánh Răng Signal Kids', price: '75.000' },
  { image: '/image/zirkulin.png', title: 'Giải Độc Gan Zirkulin Leber Vital', price: '210.000' },
  { image: '/image/movivit.png', title: 'Viên Sủi Multivitamin C Movivit', price: '230.000' },
  { image: '/image/venen.png', title: 'Kem Bôi Tĩnh Mạch Abtei Venen Aktiv', price: '230.000' }
];

// const maxPrice = ref(300000);

// const filteredProducts = computed(() =>
//   products.filter((product) => product.price <= maxPrice.value)
// );

// const filterPrice = (price) => {
//   maxPrice.value = price;
// };
</script>

<style scoped></style>
