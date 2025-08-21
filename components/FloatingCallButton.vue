<template>
  <div style="margin-top: 30px;">
    <a
      href="tel:0123456789"
      class="fixed bottom-0 left-0 right-0 bg-green-600 text-white text-center py-3 font-bold text-lg z-50 block md:hidden"
    >
      <FontAwesomeIcon
        :icon="['fas', 'phone']"
        class="w-3 h-3 text-black-400"
      />
      <span class="text-xs">Call now 0988592486</span>
    </a>
    <footer class="bg-gray-500 text-white py-10 hidden md:block">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:justify-center gap-3 lg:px-50"
      >
        <!-- About Us -->
        <div>
          <span class="text-md font-bold mb-4 text-white uppercase"
            >About us</span
          >
          <div class=""></div>
          <p class="text-sm leading-relaxed">
            Sang Apollo là website bán lẻ online các sản phẩm chính hãng
            nội địa Đức với giá tốt nhất.
          </p>
        </div>

        <!-- Customer Support -->
        <div>
          <span class="text-lg font-bold mb-4 uppercase"
            >Hỗ trợ khách hàng</span
          >
          <ul class="space-y-2 text-sm">
            <li>Hướng dẫn mua hàng</li>
            <li>Chính sách giao hàng</li>
            <li>Chính sách đổi/ trả hàng</li>
            <li>Điều khoản và điều kiện chung</li>
            <li>Bảo mật thông tin</li>
            <li>Thông tin liên hệ</li>
          </ul>
        </div>
        <div>
          <FacebookFanpageEmbed
            url="https://www.facebook.com/kenhxachtayduc"
            pageTitle="Sang Apollo"
          />
        </div>
        <!-- Latest Reviews -->
        <div>
          <span class="text-lg font-bold mb-4 uppercase"
            >Đánh giá mới nhất</span
          >
          <div class="space-y-4 text-sm">
            <div>
              <p class="font-semibold">
                Viên Uống Doppelherz Aktiv Meno Cân Bằng Nội Tiết Tố Nữ, 30 Viên
              </p>
              <p class="text-orange-400">★★★★★</p>
              <p>bởi Phan Thùy</p>
            </div>
            <div>
              <p class="font-semibold">
                Nước Tẩy Trang Garnier Hai Lớp Cho Make-up Không Thấm Nước, 400
                ml
              </p>
              <p class="text-orange-400">★★★★★</p>
              <p>bởi Lê Nhung</p>
            </div>
            <div>
              <p class="font-semibold">
                Viên nhai Doppelherz Omega-3 Vitamin D3 Kids, 27 Viên
              </p>
              <p class="text-orange-400">★★★★★</p>
              <p>bởi Lê Nhung</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="bg-gray-700 hidden md:block">
      <div
        class="container mx-auto py-10 px-50 flex flex-col md:flex-row justify-between items-center text-xs border-gray-600 pt-4"
      >
        <p class="text-white text-sm">© Bản quyền thuộc về Sang Apollo</p>
        <div class="flex space-x-2 mt-2 md:mt-0">
          <!-- <img src="/path/to/visa.png" alt="Visa" class="h-6" /> -->
          <!-- <img src="/path/to/paypal.png" alt="PayPal" class="h-6" /> -->
          <!-- <img src="/path/to/stripe.png" alt="Stripe" class="h-6" /> -->
          <!-- <img src="/path/to/cashondelivery.png" alt="COD" class="h-6" /> -->
        </div>
      </div>
    </footer>
  </div>
</template>

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
</style>
