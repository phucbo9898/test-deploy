<template>
  <header class="">
    <MegaMenu />
  </header>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onMounted } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const activeMenu = ref("");
const menus = ref([]);
const megaMenuData = ref([]);

onMounted(async () => {
  // Fake API fetch
  menus.value = [
    "Trang Điểm",
    "Chăm Sóc & Nước Hoa",
    "Thực Phẩm Chức Năng",
    "Răng Miệng",
    "Thực Phẩm",
    "Baby",
    "Hộ Gia Đình",
  ];
  megaMenuData.value = [
    {
      title: "Tăng Cường Chức Năng",
      items: ["Dạ Dày & Tiêu Hóa", "Gan Mật", "Cơ & Khớp"],
    },
    { title: "Vitamin", items: ["Vitamin A", "Vitamin B", "Vitamin C"] },
    { title: "Khoáng Chất", items: ["Magie", "Canxi", "Kẽm"] },
    { title: "Làm Đẹp Từ Trong", items: ["Da", "Tóc", "Móng"] },
    { title: "Lạnh", items: ["Cảm Lạnh", "Ho", "Tăng Cường Miễn Dịch"] },
  ];
});
</script>

<style>
.icon-search::before {
  content: "";
}
</style>
