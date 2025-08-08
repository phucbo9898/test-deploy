<template>
  <div>
    <ReusableBanner
        v-for="(banner, index) in banners"
        :key="index"
        v-bind="banner"
    />

<!--    <section-->
<!--        ref="stripeSection"-->
<!--        class="h-[300px] md:h-[600px] overflow-hidden w-full bg-stripe"-->
<!--        :style="{ backgroundPosition: `${bgX}px ${bgY}px` }"-->
<!--    >-->
<!--      <img src="/image/banner11.png" alt="banner" class="w-full h-auto">-->
<!--    </section>-->

    <section
        ref="stripeSection"
        class="h-[300px] md:h-[800px] w-full bg-stripe relative mb-8"
        :style="{ backgroundPosition: `${bgX}px ${bgY}px` }"
    >
      <img
          src="/image/banner11.png"
          alt="banner"
          class="w-full h-full md:h-auto z-10"
      />
    </section>
    <section class="">
      <span>#DOUBLE TAP</span>
    </section>
  </div>
</template>

<script setup lang="ts">
const banners = [
  {
    flag: "slide",
    image: "/image/banner1.jpg",
    content: "text 1",
    button_text_banner: "banner 1",
    bg_color: "bg-[rgb(249,219,121)]",
  },
  {
    flag: "banner-ltr",
    image: "/image/banner1.jpg",
    title_banner: "Title banner 1",
    sub_title_banner: "sub_title banner 1",
    content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "Menu",
  },
  {
    flag: "slide",
    image: "/image/banner2.jpg",
    content: "text 2",
    button_text_banner: "banner 2",
    bg_color: "bg-[rgb(181,232,213)]",
  },
  {
    flag: "banner-rtr",
    image: "/image/banner2.jpg",
    title_banner: "Title banner 2",
    sub_title_banner: "sub_title banner 2",
    content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "READ MORE",
  },
  {
    flag: "slide",
    image: "/image/banner3.jpg",
    content: "text 3",
    button_text_banner: "banner 3",
    bg_color: "bg-[rgb(255,191,179)]",
  },
  {
    flag: "banner-ltr",
    image: "/image/banner3.jpg",
    title_banner: "Title banner 3",
    sub_title_banner: "sub_title banner 3",
    content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    button_text_banner: "order online",
  },
];

import { ref, onMounted, onBeforeUnmount } from 'vue'

const stripeSection = ref(null)
const bgX = ref(0)
const bgY = ref(0)

const updateBackgroundPosition = () => {
  const scrollY = window.scrollY
  bgX.value = -scrollY * 0.3
  bgY.value = 0
}

onMounted(() => {
  window.addEventListener('scroll', updateBackgroundPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateBackgroundPosition)
})
</script>

<style scoped>
.bg-stripe {
  will-change: background-position;
}
</style>
