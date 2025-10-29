// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    preset: "deno",
  },
  modules: ["vuetify-nuxt-module"],
  // 添加构建配置
  build: {
    transpile: ["vuetify"],
  },
  ssr: process.env.NUXT_SSR === "true",
  // compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  devServer: {
    port: 3000,
    // host: "0.0.0.0",
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
      icons: {
        defaultSet: "mdi",
        sets: "mdi",
        // sets: {},
      },
    },
  },
});
