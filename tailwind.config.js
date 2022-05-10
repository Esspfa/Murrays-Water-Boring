const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  plugins: [plugin],
  theme: {
    screens: {
      xs: { min: '480px' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: { darkBlue: '#033A90', darkLight: '#247CCA', Gray: '#666666' },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
