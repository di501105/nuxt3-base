// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    locales: [
      { code: 'en_US', iso: 'en-US', file: 'en_US.json', name: 'English' },
      { code: 'zh_TW', iso: 'zh-TW', file: 'zh_TW.json', name: '繁體中文' }
      // { code: 'zh_CN', iso: 'zh-CN', file: 'zh_CN.json', name: '简体中文' }
    ],
    defaultLocale: 'en_US',
    strategy: 'no_prefix',
    langDir: '/locales/'
  }
})
