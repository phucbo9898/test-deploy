<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <h3 class="section-title section-title-bold">
      <b></b>
      <div class="text-xs lg:text-2xl font-bold text-center"><span>{{ $t('best_seller') }}</span></div>
      <b></b>
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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
        <p class="text-red-500 font-semibold">{{ item.price }}₫</p>
      </div> -->
    </div>

    <!-- scroll ngang sản phẩm -->
    <!-- <div class="relative">
      <div ref="slider" class="flex gap-4 overflow-x-auto scrollbar-hide">
        <div v-for="(item, index) in products" :key="index" class="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] border rounded-lg p-4 shadow hover:shadow-lg transition bg-white flex-shrink-0">
          <img :src="item.image" :alt="item.title" class="w-full h-32 object-contain mb-2" />
          <h3 class="text-sm font-medium mb-1 line-clamp-2">{{ item.title }}</h3>
          <div class="flex items-center mb-1">
            <span v-for="star in 5" :key="star" class="text-yellow-400 text-xs">★</span>
          </div>
          <p class="text-red-500 font-semibold">{{ item.price }}₫</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  products: Array,
});

const products = [
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
  },
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
  },
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
</script>

<style>
.section-title-bold span, .section-title-bold-center span {
    border: 2px solid rgb(0 0 0 / .1);
    padding: .3em .8em;
}
.section-title span {
    text-transform: uppercase;
}
.section-title-bold b:first-of-type {
    display: none;
}
.section-title {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
}
h1, h2, h3, h4, h5, h6, .heading-font, .banner h1, .banner h2 {
    font-weight: 700;
    font-style: normal;
}
h1, h2, h3, h4, h5, h6, .heading-font, .off-canvas-center .nav-sidebar.nav-vertical > li > a {
    font-family: Lato, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    color: #555;
    margin-bottom: .5em;
    margin-top: 0;
    text-rendering: optimizeSpeed;
    width: 100%;
}

.section-title b {
    background-color: currentColor;
    display: block;
    flex: 1;
    height: 2px;
    opacity: .1;
}
b, strong {
    font-weight: inherit;
    font-weight: bolder;
}
</style>
