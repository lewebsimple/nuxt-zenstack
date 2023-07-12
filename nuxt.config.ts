// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["bcryptjs", "jsonwebtoken", "trpc-nuxt"],
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/assets/svg", extensions: ["svg"], prefix: "svg" },
  ],
  devtools: { enabled: true },
  modules: ["@lewebsimple/nuxt3-svg", "@nuxthq/ui"],
  runtimeConfig: {
    auth: {
      cookieName: "",
      jwtSecret: "",
    },
    public: {
      siteName: "Nuxt ZenStack",
      siteDescription: "ZenStack boilerplate for Nuxt",
    },
  },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: true },
});
