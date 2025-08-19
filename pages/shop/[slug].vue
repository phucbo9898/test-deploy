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
            >{{ category.name }}</span
          >
        </div>
      </section>
      <section class="">
        <CategorySlide
          v-if="category.child && category.child.length > 0"
          :categoryChild="category.child"
        />
      </section>
      <section class="px-2" v-if="products && products.length > 0">
        <SidebarFilter @filter="fetchProducts" />
        <ProductGrid :products="products" />
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
const route = useRoute();
// console.log(route.query);
// console.log(route.params);
import { ref, onMounted, onBeforeUnmount } from "vue";
const { axios } = useAxios();
const products = ref(null);
const loading = ref(true);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const limit = ref(10);

async function fetchProducts(params: any) {
  currentPage.value = params.page;
  loading.value = true;

  try {
    let paramSearchs: any = {};
    paramSearchs.categorySlug = params.categorySlug || route.params.slug;
    paramSearchs.page = params.page || currentPage.value;
    paramSearchs.limit = params.limit || limit.value;
    if (params.name) {
      paramSearchs.keyword = params.name;
    }

    if (params.name) {
      paramSearchs.keyword = params.name;
    }
    if (params.price_min) {
      paramSearchs.minPrice = params.price_min;
    }
    if (params.price_max) {
      paramSearchs.maxPrice = params.price_max;
    }
    if (params.sort) {
      paramSearchs.sortBy = params.sort;
    }

    const [responseProducts, responseCategory] = await Promise.all([
      axios.post("/api/product/search", paramSearchs),
      axios.get(`/api/category/${route.params.slug}`),
    ]);
    products.value = responseProducts.data.data.items;
    totalPages.value = responseProducts.data.data.pagination.totalPage;
    category.value = responseCategory.data.data;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  let params = {
    categorySlug: route.params.slug,
    page: currentPage.value,
    limit: limit.value,
  };
  fetchProducts(params);
});
const category = ref({});
</script>

<style></style>
