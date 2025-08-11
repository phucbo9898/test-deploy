<template>
  <div class="flex items-center justify-center space-x-1 mt-4">
    <!-- Nút Previous -->
    <button
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Prev
    </button>

    <!-- Số trang -->
    <button
      v-for="page in totalPages"
      :key="page"
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
      :class="{ 'bg-indigo-500 text-white': page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <!-- Nút Next -->
    <button
      class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
});

const emit = defineEmits(["page-change"]);

function changePage(page) {
  let params: any = {};
  if (page >= 1 && page <= props.totalPages) {
    params.name = page;
    emit("page-change", params);
  }
}
</script>
