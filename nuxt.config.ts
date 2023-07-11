// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["bcryptjs", "jsonwebtoken", "trpc-nuxt"],
  },
  devtools: { enabled: true },
  runtimeConfig: {
    auth: {
      cookieName: "",
      jwtSecret: "",
    },
  },
  typescript: { typeCheck: true },
});
