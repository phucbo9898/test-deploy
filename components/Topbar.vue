<template>
  <header class="bg-black text-white py-2">
    <div
      class="container mx-auto max-w-6xl block md:flex items-center justify-center px-4"
    >
      <div class="text-xs md:text-sm tracking-wider text-center mr-3 mb-3 md:mb-0">
        {{ $t("address_shop") }} &ensp;| &ensp;{{ $t("time_open_shop") }}
      </div>
      <div class="space-x-3 md:space-x-2 text-center">
        <a href="#" aria-label="Facebook" class="">
          <FontAwesomeIcon
            :icon="['fab', 'facebook']"
            :style="{
              width: '1.5rem',
              height: '1.5rem'
            }"
          />
        </a>
        <a href="#" aria-label="X (Twitter)" class="">
          <FontAwesomeIcon
            :icon="['fab', 'twitter']"
            :style="{
              width: '1.5rem',
              height: '1.5rem'
            }"
          />
        </a>
        <a href="#" aria-label="Instagram" class="">
          <FontAwesomeIcon
            :icon="['fab', 'instagram']"
            :style="{
              width: '1.5rem',
              height: '1.5rem'
            }"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style></style>
