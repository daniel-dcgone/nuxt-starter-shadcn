import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/scripts",
  ],

  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2025-07-15",

  nitro: {
    prerender: {
      crawlLinks: true,

    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-PJ72N4LZ",
        defer: false,
        enabled: true,
        async: true,
        scriptInput: {
          src: "https://gtm-nuxt-scripts.netlify.app/gtm.js",
        },
      },
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
})
