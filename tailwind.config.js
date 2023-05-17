module.exports = {
  important: true,
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { max: '767px' },
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px'
    },
    extend: {}
  },
  plugins: []
}
