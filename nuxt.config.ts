// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthub/core"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
});
