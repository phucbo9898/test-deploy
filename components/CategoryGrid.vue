<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <h3 class="section-title section-title-bold">
      <b></b>
      <div class="text-xs lg:text-xl font-bold text-center">
        <span>{{ text }}</span>
      </div>
      <b></b>
    </h3>
    <div class="flex gap-2 mt-10">
      <div v-for="category in categories" :key="category.id">
        <div class="p-4 flex flex-col transition product-item">
          <NuxtLink :to="category.url || '#'">
            <div class="product-image">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-40 object-contain mb-2"
              />
              <div class="overlay">
                <span
                  class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                >
                  {{ category.name }}
                </span>
                <span class="text-center uppercase text-xs"
                  >{{ category.total_product || 10 }} sản phẩm</span
                >
              </div>
              <div class="block md:hidden">
                <span
                  class="text-sm font-medium mb-1 text-center line-clamp-2 uppercase"
                >
                  {{ category.name }}
                </span>
                <span class="text-xs mb-1 text-center line-clamp-2 uppercase">
                  {{ category.total_product || 10 }} sản phẩm
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text?: string;
}>();
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const { data: categories, error } = await useAsyncData("menu", () =>
  $fetch("/api/menu")
);

// const { axios } = useAxios()
// const categories = ref(null)
// const loading = ref(true)
// const error = ref(null)

// onMounted(async () => {
//     try {
//         const response = await axios.get('/admin/v1/Category')
//         console.log(response.data.data.items);

//         categories.value = response.data.data.items
//     } catch (err) {
//         error.value = err
//     } finally {
//         loading.value = false
//     }
// })
</script>

<style>
/* .section-title-bold span,
.section-title-bold-center span {
  border: 2px solid rgb(0 0 0 / 0.1);
  padding: 0.3em 0.8em;
}
.section-title span {
  text-transform: uppercase;
}
.section-title-bold b:first-of-type {
  display: none;
}
.section-title {
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
.heading-font,
.banner h1,
.banner h2 {
  font-weight: 700;
  font-style: normal;
}
h1,
h2,
h3,
h4,
h5,
h6,
.heading-font,
.off-canvas-center .nav-sidebar.nav-vertical > li > a {
  font-family: Lato, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #555;
  margin-bottom: 0.5em;
  margin-top: 0;
  text-rendering: optimizeSpeed;
  width: 100%;
}

.section-title b {
  background-color: currentColor;
  display: block;
  flex: 1;
  height: 2px;
  opacity: 0.1;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
} */
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.product-image:hover img {
  transform: scale(1.15);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
  position: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-image:hover .overlay {
  opacity: 1;
  color: white !important;
}
</style>
