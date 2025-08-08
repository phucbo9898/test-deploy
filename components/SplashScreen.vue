<template>
  <div>
    <div v-if="showSplash" class="splash-screen">
      <div
        class="w-full h-full inset-0 bg-white flex items-center justify-center z-50"
      >
        <div class="flex flex-col items-center">
          <!-- Logo zoom nhẹ -->
          <img src="/image/logo.png" alt="Logo" class="logo animate-pulse-scale mb-4" />

          <!-- Spinner xoay -->
          <div
            class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const showSplash = ref(true);

onMounted(() => {
  setTimeout(() => {    
    showSplash.value = false;
  }, 5000);
});
</script>

<style scoped>
/* Fade in - fade out transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.splash-screen {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
}

/* Custom pulse scale cho logo */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-pulse-scale {
  animation: pulse-scale 1.5s ease-in-out infinite;
}
</style>