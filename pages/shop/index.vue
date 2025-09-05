<template>
  <div>
    <section
      class="relative h-[200px] flex items-center justify-center overflow-hidden bg-[rgb(181,232,213)]"
    >
      <div class="relative z-10 text-center">
        <span
          class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center uppercase"
          >Shop</span
        >
      </div>
    </section>
    <section>
      <ProductCategoryGrid />
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const currentUrl = computed(() => {
  return `${runtimeConfig.public.siteName}${route.fullPath}`;
});

useHead({
  title: "Sang Apollo - Chính Hãng - Cam Kết Chất Lượng Sản Phẩm",
  meta: [
    {
      property: "og:title",
      content: "Sang Apollo - Chính Hãng - Cam Kết Chất Lượng Sản Phẩm",
    },
    { property: "og:type", content: "article" },
    {
      name: "description",
      content:
        "Sang Apollo là website bán lẻ online các sản phẩm xách tay Đức với giá tốt nhất. Cam kết 100% hàng chính hãng mua trực tiếp tại Đức mang về.",
    },
    { property: "og:url", content: currentUrl.value },
    {
      property: "og:site_name",
      content: "Sang Apollo - Uy tín - Cam kết chất lượng sản phẩm",
    },
  ],
});
</script>

<style></style>
