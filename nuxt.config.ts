// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: ["./assets/sass/main.scss", "swiper/swiper-bundle.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/sass/abstracts/_mixins.scss";
          `,
        },
      },
    },
  },

  modules: ["@nuxt/icon", "@pinia/nuxt"],
  plugins: ["@/plugins/axiosConfig.js"],
});
