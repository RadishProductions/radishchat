const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...colors,
      colors:{
        'radish': {  DEFAULT: '#E63754',  '50': '#F39DAC',  '100': '#F292A2',  '200': '#EF7B8F',  '300': '#EC657B',  '400': '#E94E68',  '500': '#E63754',  '600': '#DA1B3B',  '700': '#B61631',  '800': '#911227',  '900': '#6D0D1D'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
