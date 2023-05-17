module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'vue/no-template-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
