<template>
  <div class="max-w-7xl mx-auto p-1 text-right">
    <!-- <button
      class="text-white p-2 bg-yellow-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
      data-bs-toggle="modal"
      data-bs-target="#modal-search"
    >
      Tìm kiếm sản phẩm
    </button> -->
    <button
      class="text-white p-2 bg-yellow-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
      data-bs-toggle="modal"
      data-bs-target="#modal-search"
    >
      <FontAwesomeIcon
        :icon="['fas', 'magnifying-glass']"
        class="w-3 h-3 text-black-400"
      />
    </button>
    <div
      class="modal fade z-[9999]"
      id="modal-search"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog bg-white rounded-xl">
        <div class="modal-content rounded-lg">
          <div class="modal-body p-4 h-3/5">
            <div class="bg-white px-1 pt-5 pb-4 sm:p-2 sm:pb-4">
              <div class="">
                <div class="text-center sm:text-left">
                  <h3
                    id="dialog-title"
                    class="text-xl font-semibold text-gray-900 uppercase text-center"
                  >
                    Tìm kiếm sản phẩm
                  </h3>
                  <div class="mt-2 text-start">
                    <div class="mb-4 relative">
                      <div>
                        <input
                          type="text"
                          v-model="filterName"
                          @keyup.enter="performSearch"
                          @input="fetchSuggestions"
                          @click="fetchSuggestions"
                          :placeholder="$t('Quý khách tìm gì...')"
                          class="w-full border py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
                      </div>
                      <transition name="fade-slide">
                        <ul
                          v-if="suggestions && suggestions.length > 0"
                          class="top-full left-0 right-0 bg-white shadow-lg border rounded-b-lg z-50 border-gray-200 h-50 overflow-auto"
                        >
                          <li
                            v-for="(suggestion, idx) in suggestions"
                            :key="idx"
                            @click="selectSuggestion(suggestion.slug)"
                            class="py-2 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                          >
                            <div class="flex">
                              <div
                                class="img w-1/5 flex items-center justify-start"
                              >
                                <img
                                  :src="suggestion.image"
                                  alt="Suggestion image"
                                  class="w-8 h-10 rounded"
                                />
                              </div>
                              <div
                                class="product-name w-3/5 mx-2 text-sm md:text-md"
                              >
                                {{ suggestion.name }}
                              </div>
                              <div
                                class="product-price w-1/4 flex items-center justify-end text-xs md:text-md"
                              >
                                {{ formatPrice(suggestion.price) }}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              command="close"
              commandfor="dialog"
              @click="applyFilter"
              data-bs-dismiss="modal"
              class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-300 sm:ml-3 sm:w-auto"
            >
              Tìm kiếm
            </button>
            <button
              ref="closeBtn"
              type="button"
              data-bs-dismiss="modal"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring sm:ml-3 inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, onMounted, onBeforeUnmount } from "vue";

const filterName = ref("");
const router = useRouter();
const suggestions = ref([]);
const isLoading = ref(false);
const isScrolled = ref(false);
const { axios } = useAxios();
const error = ref(null);
const localePath = useLocalePath();
const { locale } = useI18n();
const closeBtn = ref(null);

const applyFilter = () => {
  if (filterName.value.trim() != "") {
    router.push("/search?keyword=" + filterName.value);
    filterName.value = "";
  }
};

function performSearch() {
  if (filterName.value.trim() !== "") {
    console.log("Searching for:", filterName.value);
    suggestions.value = [];
  }
}

function fetchSuggestions() {
  if (filterName.value.trim() === "") {
    suggestions.value = [];
    isLoading.value = false;
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    getSuggestion();
  }, 500);
}

async function getSuggestion() {
  try {
    const response = await axios.get(
      `/api/product/productSuggestion?keyword=${filterName.value}`
    );

    suggestions.value = response.data.data;
    isLoading.value = false;
  } catch (err) {
    showError({
      statusCode: 404,
      statusMessage: err.response?.statusText,
    });
  }
}

function selectSuggestion(slug: String) {
  performSearch();
  router.push("/products/" + slug);
  closeBtn.value?.click();
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

function formatPrice(value: number) {
  const number =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;
  return number.toLocaleString("vi-VN") + "₫";
}
</script>

<style>
.modal {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 1055 !important;
}
.modal-backdrop {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 1050 !important;
}
</style>
