<template>
  <div class="max-w-7xl mx-auto p-1 text-right">
    <button
      class="border bg-white border-gray-600 text-gray-600 px-5 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
      data-bs-toggle="modal"
      data-bs-target="#modal-filter"
    >
      Lọc sản phẩm
    </button>
    <!-- <DetailProduct :product="product" /> -->
    <div
      class="modal fade"
      id="modal-filter"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog bg-white rounded-xl">
        <div class="modal-content rounded-lg overflow-hidden">
          <div class="modal-body p-4">
            <div class="bg-white px-1 pt-5 pb-4 sm:p-2 sm:pb-4">
              <div class="">
                <div class="text-center sm:text-left">
                  <h3
                    id="dialog-title"
                    class="text-xl font-semibold text-gray-900 uppercase text-center"
                  >
                    Lọc sản phẩm
                  </h3>
                  <div class="mt-2 text-start">
                    <div class="mb-4">
                      <label for="">Chọn theo khoảng giá</label>
                      <input
                        type="text"
                        v-model="filterName"
                        class="w-full h-10 p-2 mt-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Nhập tên sản phẩm"
                      />
                    </div>
                    <div class="mb-4">
                      <label for="">Chọn theo khoảng giá</label>
                      <div class="">
                        <select
                          name="filter-price"
                          v-model="filterPrice"
                          class="w-full h-10 p-2 mt-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                        >
                          <option value="">Tất cả</option>
                          <option value="0-100000">Dưới 100.000đ</option>
                          <option value="100000-200000">
                            100.000đ-200.000đ
                          </option>
                          <option value="200000-500000">
                            200.000đ-500.000đ
                          </option>
                          <option value="500000-1000000">
                            500.000đ-1.000.000đ
                          </option>
                          <option value="1000000-2000000">
                            1.000.000đ-2.000.000đ
                          </option>
                          <option value="2000000-">Trên 2.000.000đ</option>
                        </select>
                      </div>
                    </div>
                    <div class="">
                      <label for="">Sắp xếp sản phẩm</label>
                      <div class="">
                        <select
                          name="filter-sort"
                          v-model="filterSort"
                          class="w-full h-10 p-2 mt-2 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                        >
                          <option value="">Tất cả</option>
                          <option value="0">
                            Sắp xếp theo mức độ phổ biến
                          </option>
                          <option value="1">
                            Sắp xếp theo xếp hạng trung bình
                          </option>
                          <option value="2">Sắp xếp theo mới nhất</option>
                          <option value="3">Sắp xếp theo giá tăng dần</option>
                          <option value="4">Sắp xếp theo giá giảm dần</option>
                        </select>
                      </div>
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
            <button
              type="button"
              command="close"
              commandfor="dialog"
              @click="ResetFilter"
              data-bs-dismiss="modal"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring sm:ml-3 inset-ring-gray-300 hover:bg-gray-400 sm:mt-0 sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-dialog>
      <dialog
        id="dialog"
        aria-labelledby="dialog-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      >
        <el-dialog-backdrop
          class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        ></el-dialog-backdrop>

        <div
          tabindex="0"
          class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
        >
          <el-dialog-panel
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            style="width: 100%; max-width: 500px; margin: auto"
          >
            
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
// import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/vue";

const emit = defineEmits(["filter"]);
const filterName = ref("");
const filterPrice = ref("");
const filterSort = ref("");
const applyFilter = () => {
  let params: any = {};
  if (filterName.value) {
    params.name = filterName.value;
  }
  if (filterPrice.value) {
    const [min, max] = filterPrice.value.split("-");
    params.price_min = min ? parseInt(min) : 0;
    params.price_max = max ? parseInt(max) : undefined;
  }
  if (filterSort.value) {
    params.sort = filterSort.value;
  }
  emit("filter", params);
};

const ResetFilter = () => {
  filterName.value = "";
  filterPrice.value = "";
  filterSort.value = "";
  emit("filter", {});
};
</script>

<style></style>
