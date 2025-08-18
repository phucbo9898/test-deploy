<template>
  <header class="bg-black text-white py-2">
    <div
      class="container mx-auto max-w-6xl block md:flex items-center justify-center px-4"
    >
      <div
        class="text-xs md:text-sm tracking-wider text-center mr-3 mb-3 md:mb-0"
      >
        {{ $t("address_shop") }} &ensp;| &ensp;{{ $t("time_open_shop") }}
      </div>
      <div
        class="space-x-3 md:space-x-2 flex justify-center text-center items-center"
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
  </header>
</template>

<script lang="ts" setup></script>

<style></style>
