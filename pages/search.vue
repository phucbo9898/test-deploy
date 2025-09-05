<template>
  <div>
    <div v-show="loading" class="flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
      ></div>
    </div>
    <div v-show="!loading">
      <section
        class="relative h-[200px] flex items-center justify-center overflow-hidden bg-[rgb(181,232,213)]"
      >
        <div class="relative z-10 text-center">
          <span
            class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center uppercase"
            >Kết quả tìm kiếm</span
          >
        </div>
      </section>
      <section class="px-2" v-if="products && products.length > 0">
        <SidebarFilter @filter="fetchProducts" />
        <ProductGrid :products="products" title="Danh sách sản phẩm theo từ khóa" :keyword="keyword" />
        <!-- Pagination -->
        <Pagination
          :total-pages="totalPages"
          :current-page="currentPage"
          @page-change="fetchProducts"
          class="mb-4"
        />
      </section>
      <section v-else class="text-center mt-10">
        <h2 class="text-xl font-bold">Không có sản phẩm nào</h2>
        <p class="text-gray-500">Vui lòng thử lại sau.</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted, onBeforeUnmount, watch } from "vue";
const { axios } = useAxios();
const products = ref(null);
const loading = ref(true);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const limit = ref(10);
const keyword = ref('')
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const currentUrl = computed(() => {
  return `${runtimeConfig.public.siteName}${route.fullPath}`;
});

useHead({
  title: "Sang Apollo - Cam Kết Chất Lượng Sản phẩm",
  meta: [
    {
      property: "og:title",
      content: "You searched for " + route.query.keyword + " Sang Apollo - Cam Kết Chất Lượng Sản phẩm",
    },
    { property: "og:type", content: "article" },
    {
      name: "description",
      content:
        "Sang Apollo là website bán lẻ online các sản phẩm chính hãng nội địa Đức với Giá Tốt Nhất - Cam Kết Chất Lượng Sản Phẩm - Ship COD Toàn Quốc.",
    },
    { property: "og:url", content: currentUrl.value },
    {
      property: "og:site_name",
      content: "Sang Apollo - Uy tín - Cam kết chất lượng sản phẩm",
    },
  ],
});

async function fetchProducts(params: any) {
  currentPage.value = params.page;
  loading.value = true;

  try {
    let paramSearch: any = {};
    paramSearch.page = params.page || currentPage.value;
    paramSearch.limit = params.limit || limit.value;
    paramSearch.keyword = route.query.keyword;
    if (params.name) {
      paramSearch.keyword = params.name;
    }

    const responseProducts = await axios.post("/api/product/search", paramSearch)
    products.value = responseProducts.data.data.items;
    totalPages.value = responseProducts.data.data.pagination.totalPage;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    loading.value = false;
  } catch (err: any) {
    showError({
      statusCode: 404,
      statusMessage: err.response?.statusText,
    });
  }
}

onMounted(async () => {
  let params = {
    page: currentPage.value,
    limit: limit.value,
  };
  fetchProducts(params);
  keyword.value = route.query.keyword
});

watch(
  () => route.fullPath,
  (newPath: String, oldPath: String) => {
    let params = {
    page: currentPage.value,
    limit: limit.value,
    keyword: route.query.keyword
  };
    fetchProducts(params)
  }
)
</script>

<style></style>
