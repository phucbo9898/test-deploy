<template>
  <div class="max-w-7xl mx-auto p-1 mb-3 mt-3">
    <h3 class="text-lg md:text-xl uppercase">{{ title }}</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :categoryName="categoryName"
      />
    </div>

    <!-- scroll ngang sản phẩm -->
    <!-- <div class="relative">
      <div ref="slider" class="flex gap-4 overflow-x-auto scrollbar-hide">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] border rounded-lg p-4 shadow hover:shadow-lg transition bg-white flex-shrink-0"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-32 object-contain mb-2"
          />
          <h3 class="text-sm font-medium mb-1 line-clamp-2">
            {{ item.title }}
          </h3>
          <div class="flex items-center mb-1">
            <span v-for="star in 5" :key="star" class="text-yellow-400 text-xs"
              >★</span
            >
          </div>
          <p class="text-red-500 font-semibold">{{ item.price }}₫</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
  products: Object,
  categoryName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Sản phẩm nổi bật"
  },
  keyword: {
    type: String,
    default: ''
  }
});
</script>

<style>
.section-title-bold span,
.section-title-bold-center span {
  border: 2px solid rgb(0 0 0 / 0.1);
  padding: 0.3em 0.8em;
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
h1,
h2,
h3,
h4,
h5,
h6,
.heading-font,
.banner h1,
.banner h2 {
  font-weight: 700;
  font-style: normal;
}
h1,
h2,
h3,
h4,
h5,
h6,
.heading-font,
.off-canvas-center .nav-sidebar.nav-vertical > li > a {
  font-family: Lato, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #555;
  margin-bottom: 0.5em;
  margin-top: 0;
  text-rendering: optimizeSpeed;
  width: 100%;
}

.section-title b {
  background-color: currentColor;
  display: block;
  flex: 1;
  height: 2px;
  opacity: 0.1;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
</style>
