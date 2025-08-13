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
        <swiper
          :slides-per-view="2"
          :space-between="0"
          :breakpoints="{
            640: { slidesPerView: 3, spaceBetween: 0 },
            768: { slidesPerView: 4, spaceBetween: 0 },
            1024: { slidesPerView: 6, spaceBetween: 0 },
          }"
        >
          <swiper-slide
            v-for="categoryChild in category.child"
            :key="categoryChild.id"
            style="margin-right: 0"
          >
            <NuxtLink
              :to="localePath('/shop/' + categoryChild.slug)"
              class="p-4 flex flex-col transition product-item"
            >
              <div class="product-image">
                <img
                  :src="
                    categoryChild.thumbnail ||
                    '/image/category/Baby-catagories.jpg'
                  "
                  :alt="categoryChild.name"
                  class="w-full h-40 object-contain mb-2"
                />
                <div class="overlay">
                  <span
                    class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                  >
                    {{ categoryChild.name }}
                  </span>
                </div>
                <div class="block md:hidden">
                  <span
                    class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                  >
                    {{ categoryChild.name }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper>
        <section class="px-2">
          <h3 class="text-lg md:text-xl uppercase">Sản phẩm nổi bật</h3>
          <ProductGrid :products="category.products" :categoryName="category.name || ''" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
    const response = await axios.get("/Product/categories");
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

<style>
.swiper-button-prev,
.swiper-button-next {
  width: 50px !important;
  height: 50px !important;
  opacity: 0.5;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: 0.8;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: none !important;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.product-image-mb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.product-image:hover img {
  transform: scale(1.15);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
  position: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-image:hover .overlay {
  opacity: 1;
  color: white !important;
}
</style>
