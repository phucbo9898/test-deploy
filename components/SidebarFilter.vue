<template>
  <div class="border rounded-lg p-4 mb-4">
    <h3 class="font-bold mb-2">Lọc Theo Giá</h3>
    <div class="flex items-center space-x-2">
      <input type="range" min="0" max="500000" v-model="price" class="w-full">
      <span>{{ price.toLocaleString() }} đ</span>
    </div>
    <button @click="applyFilter" class="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Lọc</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

const price = ref(300000)
const emit = defineEmits(['filter'])

const applyFilter = () => {
  emit('filter', price.value)
}
</script>

<style>

</style>