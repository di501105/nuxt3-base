import { createI18n } from 'vue-i18n'
/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */

const localPathPrefix = '/locales/'

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(import.meta.glob('@/locales/*.json', { import: 'default', eager: true })).map(
    ([key, value]) => {
      return [key.slice(localPathPrefix.length, -5), value as any]
    }
  )
)

// 設置 i18n
const defaultLocale = 'en_US'
// 判斷browser 語系
// if (navigator.languages !== undefined && navigator.languages[0]) {
//   defaultLocale = split(navigator.languages[0], '-').join('_')
// }
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale, // 指定現在這個 app 使用的語言
  fallbackLocale: 'en_US', // 當 locale 未指定就會使用 en-US
  messages // 直接載入翻譯好的翻譯文件
})

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})
