// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  preset: "vercel",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/fonts.css",
    "~/assets/css/css.css",
    "~/assets/css/swiper.css",
    "~/assets/css/bootstrap.scss",
  ],
  modules: ["@nuxt/image", "@nuxt/scripts", "@nuxt/ui", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "vi",
        name: "Tiếng Việt",
        file: "vi.json",
      },
    ],
    defaultLocale: "vi",
    lazy: true,
    strategy: "prefix_except_default",
    vueI18nRouting: true,
    // langDir: "locales/",
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      siteName: process.env.NUXT_URL,
    },
  },
});
