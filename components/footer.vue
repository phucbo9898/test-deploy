<template>
  <footer class="bg-black text-white py-10">
    <div class="container mx-auto mt-2 xl:justify-center gap-3 px-5 lg:px-10">
      <div class="block md:flex md:justify-center gap-5">
        <div>
          <span class="text-sm md:text-md font-bold mb-4 text-white uppercase"
            >Địa chỉ</span
          >
          <p
            class="text-xs md:text-sm leading-relaxed text-white mt-2 break-words"
          >
            500 Đường Terry Francine, San Francisco, CA 94158
          </p>
        </div>

        <div class="">
          <label class="text-sm md:text-md font-bold mb-4 uppercase text-white"
            >Giờ mở cửa</label
          >
          <div
            class="text-xs md:text-sm leading-relaxed text-white mt-2 uppercase break-words"
          >
            Mở cửa hàng ngày
          </div>
          <div
            class="text-xs md:text-sm leading-relaxed text-white mt-2 uppercase break-words"
          >
            10am-10pm
          </div>
        </div>
        <div class="mt-5 md:mt-0">
          <span class="text-sm md:text-md font-bold mb-4 uppercase text-white"
            >Liên hệ</span
          >
          <p class="text-xs md:text-sm leading-relaxed mt-2 text-white">
            Sangapollo140397@gmail.com
          </p>
          <p class="text-xs md:text-sm leading-relaxed mt-2 text-white">
            Số điện thoại: 0374575389
          </p>
        </div>
        <div>
          <span class="text-sm md:text-md font-bold mb-4 uppercase text-white"
            >Danh sách gửi thư</span
          >
          <div class="mt-2">
            <label for="price" class="block text-xs md:text-sm text-white"
              >Nhập email của bạn tại đây*</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-black pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
              >
                <input
                  id="price"
                  type="email"
                  name="email"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 h-12 text-xs md:text-sm text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
            <div class="mt-2">
              <input type="checkbox" id="myCheckbox" class="custom-checkbox" />
              <label
                for="myCheckbox"
                class="text-xs md:text-sm custom-label text-white"
                >Vâng, hãy đăng ký cho tôi nhận bản tin của bạn.*</label
              >
            </div>
            <div class="mt-2">
              <button
                class="border-[2px] w-full text-xs md:text-sm border-white text-white py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 md:flex md:justify-center text-center gap-3 px-5 lg:px-50"
    >
      <div class="">
        <p class="text-white text-xs md:text-sm">
          © Bản quyền thuộc về Kênh Xách Tay Đức
        </p>
      </div>
      <div
        class="space-x-3 md:space-x-2 flex justify-center text-center items-center text-white mb-3"
      >
        <a
          href="https://www.facebook.com/share/1BCBAUAv86/?mibextid=wwXIfr"
          aria-label="Facebook"
          target="_blank"
        >
          <FontAwesomeIcon
            :icon="['fab', 'facebook']"
            :style="{
              width: '1.5rem',
              height: '1.5rem',
            }"
          />
        </a>
        <a href="https://zalo.me/pc" aria-label="Zalo" target="_blank">
          <img src="/image/brands/icons8-zalo-30.png" alt="Zalo" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref(false);
function handleCheckbox(event) {
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

.custom-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
}

.custom-label::before {
  content: "";
  width: 18px;
  height: 18px;
  border: 2px solid #666;
  border-radius: 4px;
  margin-right: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;

  transition: background 0.2s;
  font-size: 14px;
}

.custom-checkbox:checked + .custom-label::before {
  content: "✔";
  color: white;
}
</style>
