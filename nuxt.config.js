export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Delivery App',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    script: [
      // {src: "/js/twa-tg.js", type: 'text/javascript', async: false, body: true, defer: false},
      //
      // {src: "https://cdn.jsdelivr.net/npm/eruda@3.0.1/eruda.min.js", async: true}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/twa.js',
    '~/plugins/axios.js'
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/amp'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // retry: { retries: 1 },
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://cargowetao.fly.dev/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    },
    icon: {
      /* icon options */
    },
    meta: {
      /* meta options */
      mobileApp: true,
      mobileAppIOS: true,
      nativeUI: true
    }
  },

  amp: {
    //module options here
    origin: 'https://localhost:3000',
    mode: false,
    /* validator: false */ /* Produces a bug, nuxt will crashes if this is set to true */
    validator: false,
    removeInlineStyles: false
  },

  // Or with dynamic configuration variables passed via lodash template syntax
  loading: "~/components/LoadingBar.vue",

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
