<template>
  <SplashScreen v-if="showSplash" />
  <div
    :class="{
      'opacity-0 pointer-events-none select-none': showSplash,
      'opacity-100 pointer-events-auto select-auto': !showSplash,
    }"
    class="transition-opacity duration-500"
  >
    <Topbar />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const showSplash = useSplashState();
</script>