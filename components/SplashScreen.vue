<template>
  <Transition name="fade" @after-leave="onAfterLeave" appear>
    <div
      v-if="visible"
      class="splash-screen fixed inset-0 bg-white flex items-center justify-center z-50"
      :class="{ 'opacity-0': !showSplash, 'opacity-100': showSplash }"
    >
      <div class="flex flex-col items-center">
        <img
          src="/image/logo.png"
          alt="Logo"
          class="logo animate-pulse-scale mb-4"
        />
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const showSplash = useSplashState();

const visible = ref(true);

function onAfterLeave() {
  visible.value = false;
}

onMounted(async () => {
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 3000));
  showSplash.value = false;
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.splash-screen {
  transition: opacity 0.5s ease;
  opacity: 1;
}

.opacity-0 {
  opacity: 0 !important;
}
.opacity-100 {
  opacity: 1 !important;
}

@keyframes pulse-scale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-pulse-scale {
  animation: pulse-scale 1.5s ease-in-out infinite;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

body {
  overflow: hidden;
}
</style>
