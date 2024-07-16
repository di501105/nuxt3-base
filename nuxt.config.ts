// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  dayjs: {
    locales: ['zh-tw', 'en'],
    plugins: ['customParseFormat', 'localeData', 'duration']
  },
})
