<template>
  <div class="container m-auto p-5 xl:px-96 relative">
    <h3 class="text-center text-xl">Liên hệ với chúng tôi</h3>
    <div class="p-5">
      <span>
        Chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi vấn đề liên quan đến sản
        phẩm và dịch vụ.
      </span>
      <div class="mt-3">
        <h3>Thông tin liên hệ</h3>
        <div>📞 Hotline: 0374575389</div>
        <div>📧 Email: Sangapollo140397@gmail.com</div>
      </div>
      <div class="mt-3">
        <h3>Giờ làm việc</h3>
        <div>Thứ 2 - Chủ nhật: 8h - 22h</div>
      </div>
      <div class="mt-3">
        <div class="social-links">
          <h3>Kết nối với chúng tôi</h3>
          <p>
            Theo dõi và nhắn tin trực tiếp qua các kênh mạng xã hội của chúng
            tôi:
          </p>
          <div class="flex">
            <a
              href="https://www.facebook.com/share/1BCBAUAv86/?mibextid=wwXIfr"
              target="_blank"
              style="margin: 0 10px; text-decoration: none"
            >
              <img
                src="/image/brands/facebook-icon.png"
                alt="Facebook"
                width="40"
                height="40"
                style="vertical-align: middle"
              />
              Facebook
            </a>

            <a
              href="https://zalo.me/0374575389"
              target="_blank"
              style="margin: 0 10px; text-decoration: none"
            >
              <img
                src="/image/brands/Icon_of_Zalo.svg"
                alt="Zalo"
                width="40"
                height="40"
                style="vertical-align: middle"
              />
              Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const currentUrl = computed(() => {
  return `${runtimeConfig.public.siteName}${route.fullPath}`;
});
const now = ref(new Date());

useHead({
  title: "Thông tin liên liên hệ",
  meta: [
    {
      property: "og:title",
      content: "Thông Tin Liên Hệ - Cam Kết Chất Lượng Sản Phẩm",
    },
    { property: "og:type", content: "article" },
    {
      name: "description",
      content:
        "Chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi vấn đề liên quan đến sản phẩm và dịch vụ. Thông tin liên hệ Hotline: 0374575389 Email: Sangapollo140397@gmail.com",
    },
    { property: "og:url", content: currentUrl.value },
    {
      property: "og:site_name",
      content: "Sang Apollo - Uy tín - Cam kết chất lượng sản phẩm",
    },
  ],
});
</script>

<style></style>
