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
      <CategoryGrid :categories="categories" class="text-yellow-300" />
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
    title_banner: "Chăm sóc bé yêu mỗi ngày",
    content: "Baby",
    button_text_banner: "Khám phá sản phẩm cho bé →",
    bg_color: "bg-[rgb(249,219,121)]",
    // color_text: 'text-yellow-300',
    url: "/shop/baby"
  },
  {
    flag: "banner-ltr",
    image: "/image/banner1.jpg",
    title_banner: "Chăm sóc bé yêu mỗi ngày",
    sub_title_banner: "An toàn – Dịu nhẹ – Yêu thương",
    content: "Mang đến cho bé yêu những sản phẩm an toàn, dịu nhẹ và phù hợp với làn da nhạy cảm. Từ tã bỉm, sữa tắm, đến đồ chơi an toàn – tất cả đều được chọn lọc kỹ lưỡng để giúp bé phát triển khỏe mạnh và vui vẻ.",
    button_text_banner: "Khám phá sản phẩm cho bé →",
    url: "/shop/baby"
  },
  {
    flag: "slide",
    image: "/image/banner/banner2.png",
    title_banner: "Nụ cười khỏe – Cuộc sống tươi",
    content: "Răng miệng",
    button_text_banner: "Xem sản phẩm răng miệng →",
    bg_color: "bg-[rgb(181,232,213)]",
    url: "/shop/rang-mieng",
    // color_text: 'text-yellow-300',
  },
  {
    flag: "banner-rtr",
    image: "/image/banner2.jpg",
    title_banner: "Nụ cười khỏe – Cuộc sống tươi",
    sub_title_banner: "Chăm sóc răng miệng toàn diện",
    content:
      "Giữ gìn sức khỏe răng miệng cho cả gia đình với các sản phẩm chất lượng: bàn chải, kem đánh răng, nước súc miệng… Giúp hơi thở thơm mát, răng trắng sáng và nụ cười luôn rạng rỡ.",
    button_text_banner: "Xem sản phẩm răng miệng →",
    url: "/shop/rang-mieng"
  },
  {
    flag: "slide",
    image: "/image/banner/banner3.png",
    title_banner: "Tóc đẹp, tự tin tỏa sáng",
    content: "Tóc",
    button_text_banner: "Khám phá sản phẩm cho tóc →",
    bg_color: "bg-[rgb(255,191,179)]",
    url: "/shop/toc"
  },
  {
    flag: "banner-ltr",
    image: "/image/banner/banner4.png",
    title_banner: "Tóc đẹp, tự tin tỏa sáng",
    sub_title_banner: "Nuôi dưỡng từ gốc đến ngọn",
    content:
      "Bộ sưu tập chăm sóc tóc giúp bạn sở hữu mái tóc khỏe mạnh, óng mượt. Dầu gội, dầu xả, tinh dầu dưỡng – tất cả được chọn lọc để nuôi dưỡng và bảo vệ mái tóc mỗi ngày.",
    button_text_banner: "Khám phá sản phẩm cho tóc →",
    url: "/shop/toc"
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
