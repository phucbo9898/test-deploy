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
                    <div class="mb-4">
                      <input
                        type="text"
                        v-model="filterName"
                        @keyup.enter="applyFilter"
                        :placeholder="$t('Quý khách tìm gì...')"
                        class="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
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
import { ref, defineEmits } from "vue";

const filterName = ref("");
const router = useRouter()

const applyFilter = () => {
  if (filterName.value.trim() != '') {
    router.push('/search?keyword=' + filterName.value)
    filterName.value = ''
  }
};
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
