<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{ $t('home') }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>

<style></style>
