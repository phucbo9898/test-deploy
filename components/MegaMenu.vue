<template>
  <header class="bg-white sticky top-0 z-50 transition-shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 py-2"
      >
        <div class="flex justify-between items-center">
          <button class="lg:hidden text-2xl" @click="isMobileMenuOpen = true">
            ☰
          </button>
          <div class="text-xl font-bold text-blue-600">
            <NuxtLink :to="localePath('/')" class="logo-link">
              <img src="/image/logo.png" alt="Logo" class="h-20" />
            </NuxtLink>
          </div>
          <button></button>
        </div>
        <div class="w-full lg:w-1/3 flex relative">
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="performSearch"
            @input="fetchSuggestions"
            :placeholder="$t('Quý khách tìm gì...')"
            class="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            🔍
          </div>
          <div
            v-if="isLoading"
            class="absolute right-12 top-1/2 transform -translate-y-1/2"
          >
            <svg
              class="animate-spin h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
          <transition name="fade-slide">
            <ul
              v-if="suggestions.length"
              class="absolute top-full left-0 right-0 bg-white shadow-lg border rounded-b-lg z-50"
            >
              <li
                v-for="(suggestion, idx) in suggestions"
                :key="idx"
                @click="selectSuggestion(suggestion)"
                class="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                {{ suggestion }}
              </li>
            </ul>
          </transition>
        </div>
        <div class="hidden lg:flex justify-between items-center">
          <a
            href="tel:0988592486"
            class="flex items-center text-gray-400 group"
          >
            <FontAwesomeIcon
              :icon="['fas', 'phone']"
              class="w-3 h-3 mr-1 group-hover:text-black"
            />
            <div class="relative inline-block">
              <span class="text-xs group-hover:text-black">0917896658</span>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50"
              >
                0917896658
                <div
                  class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-black"
                ></div>
              </div>
            </div>
          </a>

          <div
            class="ml-2 mr-2"
            style="border-left: 2px solid rgb(0 0 0 / 0.1)"
          >
            &ensp;
          </div>
          <div>
            <button class="p-2 border-solid bg-blue-800 rounded">
              <FontAwesomeIcon
                :icon="['fas', 'cart-shopping']"
                class="w-1 h-1 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative bg-white">
      <nav
        class="container mx-auto px-4"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <ul class="flex space-x-6">
          <li
            v-for="(item, idx) in menuData"
            :key="idx"
            class="group py-4"
            @mouseenter="hoveredIdx = idx"
          >
            <NuxtLink :to="siteName + item.url">
              <span class="font-medium cursor-pointer hover:text-blue-600">
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
        <!-- Mega menu -->
        <transition name="fade">
          <div
            v-if="
              isHovering && hoveredIdx !== null && menuData[hoveredIdx]?.child
            "
            class="absolute left-0 right-0 top-full z-50 bg-white border-t shadow-lg animate-fadeIn"
          >
            <div class="container mx-auto px-6 py-6 grid grid-cols-4 gap-6">
              <div
                v-for="(child, cidx) in menuData[hoveredIdx].child"
                :key="cidx"
                class="text-sm"
              >
                <NuxtLink :to="siteName + child.url">
                  <h3 class="font-semibold mb-2 text-gray-800">
                    {{ child.name }}
                  </h3>
                </NuxtLink>
                <ul>
                  <li
                    v-for="(grandChild, gcidx) in child.child || []"
                    :key="gcidx"
                  >
                    <NuxtLink
                      :to="siteName + grandChild.url || '#'"
                      class="block py-1 text-gray-600 hover:text-blue-500 transition-colors duration-150"
                    >
                      {{ grandChild.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </nav>
    </div>
    <transition name="fade-slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-white z-50 overflow-y-auto"
      >
        <div class="flex justify-between items-center p-4 border-b">
          <div class="text-xl font-bold text-blue-600">
            <img src="/image/logo.png" alt="Logo" class="h-8 w-auto" />
          </div>
          <button @click="isMobileMenuOpen = false" class="text-2xl">✕</button>
        </div>
        <ul class="max-h-[80vh] overflow-y-auto">
          <li v-for="(item, idx) in menuData" :key="idx" class="border-b">
            <div
              @click="toggleAccordion(idx)"
              class="flex justify-between items-center py-3 px-4 font-medium hover:bg-gray-100 cursor-pointer"
            >
              {{ item.name }}
              <span v-if="item.child">{{
                openAccordion === idx ? "▲" : "▼"
              }}</span>
            </div>
            <transition name="fade-slide">
              <div v-if="openAccordion === idx" class="pl-4">
                <div
                  v-for="(child, cidx) in item.child"
                  :key="cidx"
                  class="border-b"
                >
                  <div
                    v-if="child.child"
                    @click="toggleSubAccordion(cidx)"
                    class="flex justify-between items-center py-3 px-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {{ child.name }}
                    <span>{{ openSubAccordion === cidx ? "▲" : "▼" }}</span>
                  </div>
                  <NuxtLink
                    v-else
                    :to="child.url || '#'"
                    class="block py-3 px-2 text-sm hover:bg-gray-50"
                  >
                    {{ child.name }}
                  </NuxtLink>
                  <transition name="fade-slide">
                    <div v-if="openSubAccordion === cidx" class="pl-4">
                      <NuxtLink
                        v-for="(grandChild, gcidx) in child.child"
                        :key="gcidx"
                        :to="grandChild.url || '#'"
                        class="block py-3 px-2 text-sm hover:bg-gray-50"
                      >
                        {{ grandChild.name }}
                      </NuxtLink>
                    </div>
                  </transition>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronRight } from "lucide-vue-next";
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
const config = useRuntimeConfig()

const siteName = config.public.siteName
const apiUrl = config.public.apiUrl

const { data: menuData, error } = await useAsyncData("menu", () =>
  $fetch("/api/menu")
);

const isMobileMenuOpen = ref(false);
const openAccordion = ref<number | null>(null);
const openSubAccordion = ref<number | null>(null);
const searchQuery = ref("");
const suggestions = ref([]);
const isLoading = ref(false);
const isScrolled = ref(false);
const hoveredIdx = ref(null);
const isHovering = ref(false);

function toggleAccordion(idx: number) {
  openAccordion.value = openAccordion.value === idx ? null : idx;
  openSubAccordion.value = null;
}

function toggleSubAccordion(cidx: number) {
  openSubAccordion.value = openSubAccordion.value === cidx ? null : cidx;
}

function performSearch() {
  if (searchQuery.value.trim() !== "") {
    console.log("Searching for:", searchQuery.value);
    suggestions.value = [];
  }
}

function fetchSuggestions() {
  if (searchQuery.value.trim() === "") {
    suggestions.value = [];
    isLoading.value = false;
    return;
  }
  isLoading.value = true;
  setTimeout(() => {
    suggestions.value = [
      searchQuery.value + " Result 1",
      searchQuery.value + " Result 2",
      searchQuery.value + " Result 3",
    ];
    isLoading.value = false;
  }, 500);
}

function selectSuggestion(suggestion: string) {
  searchQuery.value = suggestion;
  performSearch();
}

function handleOutsideClick(event: any) {
  if (!event.target.closest("input") && !event.target.closest("ul")) {
    suggestions.value = [];
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
  window.removeEventListener("scroll", handleScroll);
});

if (error.value) {
  console.error("Failed to fetch menu:", error.value);
}
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
