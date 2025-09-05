<template>
  <div>
    <ReusableBanner
      v-for="(banner, index) in sortedBanners"
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
    <div v-show="loading" class="flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
      ></div>
    </div>
    <section v-show="!loading">
      <CategoryGrid :categories="categories" class="" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const { axios } = useAxios();
const categories = ref(null);
const loading = ref(true);
const error = ref(null);

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const currentUrl = computed(() => {
  return `${runtimeConfig.public.siteName}${route.fullPath}`;
});

useHead({
  title: "Sang Apollo - Cam Kết Chất Lượng Sản phẩm",
  meta: [
    {
      property: "og:title",
      content: "Sang Apollo - Cam Kết Chất Lượng Sản phẩm",
    },
    { property: "og:type", content: "website" },
    {
      name: "description",
      content:
        "Sang Apollo là website bán lẻ online các sản phẩm chính hãng nội địa Đức với Giá Tốt Nhất - Cam Kết Chất Lượng Sản Phẩm - Ship COD Toàn Quốc.",
    },
    { property: "og:url", content: currentUrl.value },
    {
      property: "og:site_name",
      content: "Sang Apollo - Uy tín - Cam kết chất lượng sản phẩm",
    },
  ],
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/categories");
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
    image: "/image/banner/thuc-pham-chuc-nang.png",
    title_banner: "Thực phẩm chức năng",
    content: "",
    button_text_banner: "Xem sản phẩm thực phẩm chức năng →",
    bg_color: "bg-[rgb(249,219,121)]",
    // color_text: 'text-yellow-300',
    url: "/shop/thuc-pham-chuc-nang",
    order: 0,
  },
  {
    flag: "slide",
    image: "/image/banner/category-baby.png",
    title_banner: "Chăm sóc bé yêu mỗi ngày",
    content: "Baby",
    button_text_banner: "Khám phá sản phẩm cho bé →",
    bg_color: "bg-[rgb(249,219,121)]",
    // color_text: 'text-yellow-300',
    url: "/shop/baby",
    order: 3,
  },
  {
    flag: "banner-ltr",
    image: "/image/banner/category-baby.jpg",
    title_banner: "Chăm sóc bé yêu mỗi ngày",
    sub_title_banner: "An toàn – Dịu nhẹ – Yêu thương",
    content:
      "Mang đến cho bé yêu những sản phẩm từ Đức, an toàn, dịu nhẹ và phù hợp với làn da nhạy cảm.",
    button_text_banner: "Khám phá sản phẩm cho bé →",
    url: "/shop/baby",
    order: 4,
  },
  {
    flag: "slide",
    image: "/image/banner/category-rang.png",
    title_banner: "Nụ cười tươi – Răng chắc khỏe",
    content: "",
    button_text_banner: "Xem sản phẩm răng miệng →",
    bg_color: "bg-[rgb(181,232,213)]",
    url: "/shop/rang-mieng",
    order: 1,
    // color_text: 'text-yellow-300',
  },
  {
    flag: "banner-rtr",
    image: "/image/banner/category-rang.png",
    title_banner: "Nụ cười tươi – Răng chắc khỏe",
    sub_title_banner: "",
    content:
      "Chăm sóc sức khỏe răng miệng cho cả nhà với các sản phẩm nội địa Đức",
    button_text_banner: "Xem sản phẩm răng miệng →",
    url: "/shop/rang-mieng",
    order: 2,
  },
  {
    flag: "slide",
    image: "/image/banner/category-toc.png",
    title_banner: "Tóc đẹp chuẩn Salon",
    content: "",
    button_text_banner: "Khám phá sản phẩm cho tóc →",
    bg_color: "bg-[rgb(255,191,179)]",
    url: "/shop/toc",
    order: 5,
  },
  {
    flag: "banner-ltr",
    image: "/image/banner/category-toc.png",
    title_banner: "Tóc đẹp chuẩn Salon",
    sub_title_banner: "",
    content:
      "Nuôi dưỡng và bảo vệ mái tóc từ gốc đến ngọn cùng các sản phẩm đến từ các thương hiệu nổi tiếng",
    button_text_banner: "Khám phá sản phẩm cho tóc →",
    url: "/shop/toc",
    order: 6,
  },
];

const sortedBanners = banners.sort((a, b) => a.order - b.order);

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
