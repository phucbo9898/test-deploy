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

    <ProductGrid :text="$t('best_seller')" :products="bestSellers" />
    <ProductGrid :text="$t('new_product')" :products="newProducts" />
    <ProductGrid :text="$t('featured_product')" :products="featuredProducts" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const bestSellers = [
  {
    id: 5,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Sữa Bột Ensure Vani",
    price: "410000",
  },
  {
    id: 6,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Kem Đánh Răng Signal Kids",
    price: "75000",
  },
  {
    id: 7,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Giải Độc Gan Zirkulin Leber Vital",
    price: "210000",
  },
  {
    id: 8,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Viên Sủi Multivitamin C Movivit",
    price: "230000",
  },
  {
    id: 9,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Kem Bôi Tĩnh Mạch Abtei Venen Aktiv",
    price: "230000",
  },
];

const newProducts = [
  {
    id: 1,
    image: "/image/products/Kem-boi-gian-tinh-mach-Abtei-Venen-Aktiv-Balsam-125ml-1-247x329.jpg",
    title: "Chống Lão Hóa Da Diadermine",
    price: "120000",
  },
  {
    id: 2,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Kem Đánh Răng Y tế Ajona",
    price: "80000",
  }
];

const featuredProducts = [
  {
    id: 3,
    image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
    title: "Tinh Dầu Khuynh Diệp Medivital",
    price: "135000",
  },
  {
    id: 4,
    image: "/image/products/Kem-danh-rang-y-te-Ajona-25ml-247x329.jpg",
    title: "Thuốc Tóc Merz Spezial Haar Activ",
    price: "640000",
  }
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
