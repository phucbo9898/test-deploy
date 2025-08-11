<template>
  <header class="bg-[rgb(249,219,121)] sticky top-0 z-50 transition-shadow">
    <div
      class="flex items-center justify-between lg:justify-between gap-4 py-2 relative"
    >
      <div class="w-1/3 flex justify-start items-center px-2">
        <button class="lg:hidden text-2xl" @click="isMobileMenuOpen = true">
          ☰
        </button>
        <div class="hidden lg:block relative">
          <nav class="mx-auto px-4">
            <ul class="flex space-x-4">
              <li v-for="(item, idx) in menuData" :key="idx" class="group py-4">
                <NuxtLink :to="localePath('/') + item.url">
                  <span
                    class="font-medium cursor-pointer hover:text-[#79869c] uppercase"
                  >
                    {{ item.name }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="w-1/3 flex justify-center items-center">
        <NuxtLink :to="localePath('/')" class="logo-link">
          <img
            src="/image/logo.png"
            alt="Logo"
            class="h-10 max-h-10 object-contain"
          />
        </NuxtLink>
      </div>

      <div class="w-1/3 flex justify-end items-center"></div>
    </div>
    <transition name="fade-slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-white z-50 overflow-hidden"
      >
        <div class="flex justify-between items-center p-4">
          <button @click="isMobileMenuOpen = false" class="text-2xl">✕</button>
        </div>
        <ul class="max-h-[80vh] overflow-hidden mx-auto">
          <li v-for="(item, idx) in menuData" :key="idx" class="items-center">
            <NuxtLink :to="localePath('/') + item.url">
              <div
                class="flex justify-center items-center py-3 px-4 font-medium hover:bg-gray-100 cursor-pointer"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
const config = useRuntimeConfig();

const siteName = config.public.siteName;
const apiUrl = config.public.apiUrl;

const menuData = [
  {
    name: $t("Menu"),
    url: "shop",
  },
  {
    name: $t("About us"),
    url: "about",
  },
  {
    name: $t("Contact"),
    url: "home",
  },
];

const isMobileMenuOpen = ref(false);

// if (error.value) {
//   console.error("Failed to fetch menu:", error.value);
// }
</script>

<style scoped>
.group:hover .group-hover\:block,
.group\/sub:hover .group\/sub-hover\:block {
  display: block;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.router-link-active:not(.logo-link) {
  color: #2563eb;
  font-weight: bold;
  position: relative;
}

.router-link-active:not(.logo-link)::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
