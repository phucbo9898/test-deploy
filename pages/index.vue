<template>
  <div>
    <ReusableBanner
      v-for="(banner, index) in banners"
      :key="index"
      v-bind="banner"
    />
    <section
      ref="stripeSection"
      class="h-[100px] md:h-[200px] lg:h-[400px] xl:h-[300px] 2xl:h-[900px] w-full bg-stripe relative mb-8"
      :style="{ backgroundPosition: `${bgX}px ${bgY}px` }"
    >
      <img
        src="/image/banner11-1.png"
        alt="banner"
        class="w-full h-full md:h-[200px] lg:h-[400px] xl:h-[300px] 2xl:h-[900px] z-10 object-contain"
      />
    </section>
    <section class="">
      <CategoryGrid :categories="categories" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const { axios } = useAxios();
const categories = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("/Category");
    categories.value = response.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
});

const banners = [
  {
    flag: "slide",
    image: "/image/banner/banner1.png",
    title_banner: "Hand crafted",
    content: "Ice cream",
    button_text_banner: "banner 1",
    bg_color: "bg-[rgb(249,219,121)]",
  },
  {
    flag: "banner-ltr",
    image: "/image/banner1.jpg",
    title_banner: "Out flavors",
    sub_title_banner: "Fresh n' Tasty!",
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "Menu",
  },
  {
    flag: "slide",
    image: "/image/banner/banner2.png",
    title_banner: "Enjoy",
    content: "Dairy free",
    button_text_banner: "banner 2",
    bg_color: "bg-[rgb(181,232,213)]",
  },
  {
    flag: "banner-rtr",
    image: "/image/banner2.jpg",
    title_banner: "Out Place",
    sub_title_banner: "Ice cream by the sea",
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "Read more",
  },
  {
    flag: "slide",
    image: "/image/banner/banner3.png",
    title_banner: "Get yours",
    content: "We deliver",
    button_text_banner: "banner 3",
    bg_color: "bg-[rgb(255,191,179)]",
  },
  {
    flag: "banner-ltr",
    image: "/image/banner/banner4.png",
    title_banner: "Desserts",
    sub_title_banner: "Ice cream goodies",
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "order online",
  },
];

const stripeSection = ref(null);
const bgX = ref(0);
const bgY = ref(0);

const updateBackgroundPosition = () => {
  const scrollY = window.scrollY;
  bgX.value = -scrollY * 0.3;
  bgY.value = 0;
};
onMounted(() => {
  setTimeout(() => {
    if (stripeSection.value) {
      stripeSection.value.style.backgroundPosition = `${bgX.value}px ${bgY.value}px`;
    }
  }, 100);
  window.addEventListener("scroll", updateBackgroundPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackgroundPosition);
});
</script>

<style scoped>
.bg-stripe {
  will-change: background-position;
}
</style>
