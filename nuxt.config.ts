// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta:[
        { name: 'google-site-verification', content: 'kjrkbY275xfTogtCQAB595RrluL1mTIFozX-tL_oa4U' },
      ]
    }
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase", "@nuxt/ui", "vue-global-loader/nuxt",'@nuxtjs/sitemap',],
  supabase: {
    redirect: false,
  },
  site:{
    url: 'https://hostinaar.netlify.app/',
  }
});
