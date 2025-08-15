<template>
  <div>
    <section
      v-if="flag === 'slide'"
      class="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden"
      :class="bg_color"
    >
      <div class="absolute">
        <img
          :src="image"
          alt="Banner"
          class="w-[300px] md:w-[400px] h-[200px] md:h-[500px] object-contain"
        />
      </div>
      <div class="relative z-10 text-center">
        <span
          class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center uppercase"
          :class="color_text || 'text-gray-600'"
          >{{ title_banner }}</span
        ><br />
        <span
          class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center uppercase"
          :class="color_text || 'text-gray-600'"
          >{{ content }}</span
        >
        <br /><br /><br />
        <div class="text-center">
          <NuxtLink
            :to="localePath(url)"
            class="border-[2px] bg-white border-gray-600 text-gray-600 px-5 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
          >
            {{ button_text_banner }}
          </NuxtLink>
          <!-- <button
            class="border-[2px] bg-white border-gray-600 text-gray-600 px-5 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
          >
            {{ button_text_banner }}
          </button> -->
        </div>
      </div>
    </section>
    <section
      v-else-if="flag === 'banner-ltr'"
      class="block md:flex md:flex-col md:flex-row w-full h-full md:h-[600px] overflow-hidden"
    >
      <div class="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img :src="image" alt="Banner" class="w-full h-full object-cover" />
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 class="text-2xl md:text-4xl font-bold">{{ title_banner }}</h2>
        <h3 class="text-xl md:text-3xl mb-4 font-belinda">
          {{ sub_title_banner }}
        </h3>
        <p class="text-md md:text-lg mb-6">
          {{ content }}
        </p>
        <!-- <button
          class="border-2 border-gray-600 text-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
        >
          {{ button_text_banner }}
        </button> -->
        <NuxtLink
          :to="localePath(url)"
          class="border-2 border-gray-600 text-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
        >
          {{ button_text_banner }}
        </NuxtLink>
      </div>
    </section>
    <section
      v-else-if="flag === 'banner-rtr'"
      class="block md:flex md:flex-col md:flex-row w-full h-full md:h-[600px] overflow-hidden"
    >
      <div
        class="w-full md:w-1/2 h-64 md:h-full overflow-hidden"
        :class="flag === 'banner-rtr' ? 'md:order-last' : ''"
      >
        <img :src="image" alt="Banner" class="w-full h-full object-cover" />
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 class="text-2xl md:text-4xl font-bold">{{ title_banner }}</h2>
        <h3 class="text-xl md:text-3xl mb-4 font-belinda">
          {{ sub_title_banner }}
        </h3>
        <p class="text-md md:text-lg mb-6">
          {{ content }}
        </p>
        <!-- <button
          class="border-2 border-gray-600 text-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
        >
          {{ button_text_banner }}
        </button> -->
        <NuxtLink
          :to="localePath(url)"
          class="border-2 border-gray-600 text-gray-600 px-6 py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer transition uppercase"
        >
          {{ button_text_banner }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
const props = defineProps({
  flag: String,
  image: String,
  content: String,
  button_text_banner: String,
  title_banner: String,
  sub_title_banner: String,
  bg_color: String,
  url: String,
  color_text: String,
});
</script>
