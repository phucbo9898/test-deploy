<template>
  <div class="flex items-center justify-center space-x-1 mt-4">
    <!-- Nút Previous -->
    <button
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Trang trước
    </button>

    <!-- Số trang -->
    <!-- <button
      v-for="page in totalPages"
      :key="page"
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
      :class="{ 'bg-indigo-500 text-white': page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button> -->

    <button
      v-for="(page, index) in pages"
      :key="index"
      @click="page !== '...' && changePage(page)"
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
      :class="{ 'bg-indigo-500 text-white': page === currentPage }"
      :disabled="page === '...'"
    >
      {{ page }}
    </button>

    <!-- Nút Next -->
    <button
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Tiếp theo
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
});

onMounted(() => {
  getPages(props.totalPages, props.currentPage);
});

function getPages(totalPages: number, currentPage: number, delta = 2) {
  const range: (number | string)[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (Number(i) - Number(l) === 2) {
        rangeWithDots.push(Number(l) + 1);
      } else if (Number(i) - Number(l) > 2) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const pages = computed(() => getPages(props.totalPages, props.currentPage));

const emit = defineEmits(["page-change"]);

function changePage(page: Number) {
  let params: any = {};
  if (page >= 1 && page <= props.totalPages) {
    params.page = page;
    emit("page-change", params);
  }
}
</script>
