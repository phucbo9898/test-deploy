<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    { property: "og:locale", content: "vi_VN" },
    { name: "author", content: "My Company" },
    { name: "robots", content: "index, follow" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      property: "article:publisher",
      content: "https://www.facebook.com/share/1BCBAUAv86/?mibextid=wwXIfr",
    },
  ],
});
</script>
