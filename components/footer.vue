<template>
  <footer class="bg-black text-white py-10">
    <div
      class="container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 xl:justify-center gap-3 px-5 lg:px-10"
    >
      <div class="block grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <span class="text-md font-bold mb-4 text-white uppercase"
            >Address</span
          >
          <p class="text-sm leading-relaxed text-white mt-2 break-words">
            Kênh xách tay đức là website bán lẻ online các sản phẩm chính hãng
            nội địa Đức với giá tốt nhất.
          </p>
        </div>

        <div
          class="block md:flex grid md:grid-cols-2 xl:gap-20 md:justify-start gap-5"
        >
          <div class="">
            <label class="text-lg font-bold mb-4 uppercase text-white"
              >Hours</label
            >
            <div
              class="text-sm leading-relaxed text-white mt-2 uppercase break-words"
            >
              open daily
            </div>
            <div
              class="text-sm leading-relaxed text-white mt-2 uppercase break-words"
            >
              10am-10pm
            </div>
          </div>
          <div class="mt-5 md:mt-0">
            <span class="text-lg font-bold mb-4 uppercase text-white"
              >Contacts</span
            >
            <p class="text-sm leading-relaxed mt-2 text-white">
              info@mysite.com
            </p>
            <p class="text-sm leading-relaxed mt-2 text-white">
              Tel: 123-456-7890
            </p>
          </div>
        </div>
      </div>
      <div>
        <span class="text-lg font-bold mb-4 uppercase text-white"
          >Mailing List</span
        >
        <div class="mt-2">
          <label for="price" class="block text-sm/6 text-white"
            >Enter your email here*</label
          >
          <div class="mt-2">
            <div
              class="flex items-center rounded-md bg-black pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
            >
              <input
                id="price"
                type="email"
                name="email"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 h-12 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
          <div class="mt-2">
            <input type="checkbox" id="myCheckbox" class="custom-checkbox" />
            <label for="myCheckbox" class="text-xs custom-label text-white"
              >Yes, subscribe me to your newsletter. *</label
            >
          </div>
          <div class="mt-2">
            <button
              class="border-[2px] w-full border-white text-white py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 md:flex md:justify-center text-center gap-3 px-5 lg:px-50"
    >
      <div class="">
        <p class="text-white text-sm">© Bản quyền thuộc về Kênh Xách Tay Đức</p>
      </div>
      <div class="space-x-3 md:space-x-2 text-center text-white mb-3">
        <a href="#" aria-label="Facebook" class="">
          <FontAwesomeIcon
            :icon="['fab', 'facebook']"
            :style="{
              width: '1.5rem',
              height: '1.5rem',
            }"
          />
        </a>
        <a href="#" aria-label="X (Twitter)" class="">
          <FontAwesomeIcon
            :icon="['fab', 'twitter']"
            :style="{
              width: '1.5rem',
              height: '1.5rem',
            }"
          />
        </a>
        <a href="#" aria-label="Instagram" class="">
          <FontAwesomeIcon
            :icon="['fab', 'instagram']"
            :style="{
              width: '1.5rem',
              height: '1.5rem',
            }"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref(false);
function handleCheckbox(event) {
  console.log("Trạng thái mới:", event.target.checked);
  if (event.target.checked) {
    checked.value = true;
  } else {
    checked.value = false;
  }
}
</script>
<style>
.is-divider {
  background-color: hsl(0 0% 100% / 0.3);
  margin-top: 0.66em;
  display: block;
  height: 3px;
  margin: 1em 0;
  max-width: 30px;
  width: 100%;
}

.custom-checkbox {
  display: none;
}

/* Tạo style cho label đóng vai trò là checkbox */
.custom-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* Ô vuông checkbox */
.custom-label::before {
  content: "";
  width: 18px;
  height: 18px;
  border: 2px solid #666;
  border-radius: 4px;
  margin-right: 8px;
  transition: background 0.2s;
}

/* Khi được tích */
.custom-checkbox:checked + .custom-label::before {
  /* background: #4caf50; */
  /* border-color: #4caf50; */
  content: "✔";
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
