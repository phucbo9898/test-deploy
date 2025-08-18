<template>
  <div>
    <swiper
      :slides-per-view="2"
      :space-between="0"
      :breakpoints="breakpoints"
      :center-insufficient-slides="true"
    >
      <swiper-slide
        v-for="category in categoryChild"
        :key="category.id"
        style="margin-right: 0; height: 300px"
      >
        <NuxtLink
          :to="localePath('/shop/' + category.slug)"
          class="p-4 flex flex-col transition product-item h-full"
        >
          <div class="product-image h-full">
            <img
              :src="category.thumbnail || '/image/default-image.jpg'"
              :alt="category.name"
              class="w-full h-40 object-contain mb-2"
            />
            <div class="overlay">
              <span
                class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
              >
                {{ category.name }}
              </span>
            </div>
            <div class="block md:hidden">
              <span
                class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
              >
                {{ category.name }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLocalePath } from "#i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const localePath = useLocalePath();
const props = defineProps({
  categoryChild: {
    type: Array,
    default: () => [],
  },
});

const breakpoints = {
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 6 },
};

const maxSlides = computed(() => {
  const values = Object.values(breakpoints).map(bp => bp.slidesPerView || 0)
  
   return values.length ? Math.max(...values) : 1
})

const wrapperClass = computed(() => {
  return props.categoryChild && props.categoryChild.length < maxSlides.value ? "custom-center" : ""
})
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

.custom-swiper .swiper-wrapper {
  justify-content: center;
}
</style>
