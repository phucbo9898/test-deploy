<template>
  <div>
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
    <SidebarFilter @filter="fetchProducts" />
    <section class="px-2" v-if="products && products.length > 0">
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
    // const response = await axios.post("/Product", paramSearchs);
    const [responseProducts, responseCategory] = await Promise.all([
      axios.post("/Product", paramSearchs),
      axios.get(`/Category/${route.params.slug}`),
    ]);
    products.value = responseProducts.data.data.items;
    totalPages.value = responseProducts.data.data.pagination.totalPage;
    category.value = responseCategory.data.data;
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
const category = ref({
  name: "Mắt / Eyes",
  slug: "mat-eyes",
  products: [
    {
      id: 1,
      title: "Sản phẩm 1",
      image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
      price: "100.000₫",
    },
    {
      id: 2,
      title: "Sản phẩm 2",
      image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
      price: "200.000₫",
    },
    {
      id: 3,
      title: "Sản phẩm 3",
      image: "/image/products/Kem-danh-rang-Signal-0-6-tuoi-247x329.jpg",
      price: "300.000₫",
    },
  ],
});
</script>

<style></style>
