<template>
  <div class="relative mt-10">
    <!-- Swiper -->
    <div class="hidden md:block">
      <swiper
        :modules="[Navigation]"
        :slides-per-view="2"
        :space-between="16"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
        }"
      >
        <swiper-slide v-for="category in categories" :key="category.id">
          <NuxtLink
            :to="category.url || '#'"
            class="p-4 flex flex-col transition product-item"
          >
            <div class="product-image">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-40 object-contain mb-2"
              />
              <div class="overlay">
                <span
                  class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                >
                  {{ category.name }}
                </span>
                <span class="text-center uppercase text-xs">
                  {{ category.total_product || 10 }} sản phẩm
                </span>
              </div>
              <div class="block md:hidden">
                <span
                  class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                >
                  {{ category.name }}
                </span>
                <span class="text-xs mb-1 text-center line-clamp-2 uppercase">
                  {{ category.total_product || 10 }} sản phẩm
                </span>
              </div>
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper>

      <!-- Navigation Buttons -->
      <div
        class="swiper-button-prev absolute top-1/2 -left-6 z-10 bg-white rounded-full shadow p-2 cursor-pointer"
      >
        <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
      </div>
      <div
        class="swiper-button-next absolute top-1/2 -right-6 z-10 bg-white rounded-full shadow p-2 cursor-pointer"
      >
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
      </div>
    </div>
    <div class="flex flex-col md:hidden">
      <div v-for="category in categories" :key="category.id">
        <NuxtLink
          :to="category.url || '#'"
          class="p-4 flex flex-col transition product-item"
        >
          <div class="product-image-mb">
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-40 object-contain mb-2"
            />
            <div class="overlay">
              <span
                class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
              >
                {{ category.name }}
              </span>
              <span class="text-center uppercase text-xs">
                {{ category.total_product || 10 }} sản phẩm
              </span>
            </div>
            <div class="block md:hidden">
              <span
                class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
              >
                {{ category.name }}
              </span>
              <span class="text-xs mb-1 text-center line-clamp-2 uppercase">
                {{ category.total_product || 10 }} sản phẩm
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const { data: categories, error } = await useAsyncData("menu", () =>
  $fetch("/api/menu")
);

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
// const { axios } = useAxios()
// const categories = ref(null)
// const loading = ref(true)
// const error = ref(null)

// onMounted(async () => {
//     try {
//         const response = await axios.get('/admin/v1/Category')
//         console.log(response.data.data.items);

//         categories.value = response.data.data.items
//     } catch (err) {
//         error.value = err
//     } finally {
//         loading.value = false
//     }
// })
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
