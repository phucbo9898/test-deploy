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
            placeholder="Quý khách tìm gì..."
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
        <nav class="hidden lg:block relative">
          <ul class="flex space-x-8">
            <li
              v-for="(item, idx) in menuData"
              :key="idx"
              class="relative group"
            >
              <div
                class="py-2 px-3 font-medium hover:text-blue-600 cursor-pointer"
              >
                {{ item.title }}
              </div>
              <div
                class="absolute left-0 top-full hidden group-hover:block z-50"
              >
                <ul
                  v-if="item.children"
                  class="bg-white shadow-xl border rounded-lg mt-2 flex flex-col min-w-[220px]"
                >
                  <li
                    v-for="(child, cidx) in item.children"
                    :key="cidx"
                    class="relative group/sub"
                  >
                    <div
                      class="block py-2 px-4 text-sm hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                    >
                      <NuxtLink
                        :to="child.link || '#'"
                        class="block py-2 px-4 text-sm hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                      >
                        {{ child.title }}
                        <ChevronRight
                          v-if="child.children"
                          class="w-4 h-4 text-gray-400"
                        />
                      </NuxtLink>
                    </div>
                    <div
                      class="absolute left-full top-0 hidden group/sub-hover:block z-50"
                    >
                      <ul
                        v-if="child.children"
                        class="bg-white shadow-xl border rounded-lg flex flex-col min-w-[220px]"
                      >
                        <li
                          v-for="(grandChild, gcidx) in child.children"
                          :key="gcidx"
                        >
                          <NuxtLink
                            :to="grandChild.link"
                            class="block py-4 px-2 text-sm hover:bg-gray-100"
                          >
                            {{ grandChild.title }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
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
        <div class="p-4 flex relative">
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="performSearch"
            @input="fetchSuggestions"
            placeholder="Quý khách tìm gì..."
            class="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            class="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            🔍
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
        <ul class="flex flex-col p-4">
          <li v-for="(item, idx) in menuData" :key="idx" class="border-b">
            <div
              @click="toggleAccordion(idx)"
              class="flex justify-between items-center py-3 px-4 font-medium hover:bg-gray-100 cursor-pointer"
            >
              {{ item.title }}
              <span v-if="item.children">{{
                openAccordion === idx ? "▲" : "▼"
              }}</span>
            </div>
            <transition name="fade-slide">
              <div v-if="openAccordion === idx" class="pl-4">
                <NuxtLink
                  v-for="(child, cidx) in item.children"
                  :key="cidx"
                  :to="child.link || '#'"
                  class="block py-4 px-2 text-sm hover:bg-gray-50"
                >
                  {{ child.title }}
                </NuxtLink>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronRight } from "lucide-vue-next";
import { useLocalePath } from '#i18n';

const localePath = useLocalePath();

const { data: menuData, error } = await useAsyncData("menu", () =>
  $fetch("/api/menu")
);
const isMobileMenuOpen = ref(false);
const openAccordion = ref(null);
const searchQuery = ref("");
const suggestions = ref([]);
const isLoading = ref(false);
const isScrolled = ref(false);

function toggleAccordion(idx) {
  openAccordion.value = openAccordion.value === idx ? null : idx;
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
  }, 500); // Simulate API delay
}

function selectSuggestion(suggestion) {
  searchQuery.value = suggestion;
  performSearch();
}

function handleOutsideClick(event) {
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
</style>
