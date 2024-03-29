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
      colors: {
        darkBlue: '#033A90',
        lightBlue: '#247CCA',
        Gray: '#666666',
        borderColor: '#EEEEEE',
        darkGray: '#E5E5E5',
        grayShade1: '#FAFAFA',
        grayShade2: '#999',
        blackShade: '#212121',
      },
      fontSize: {
        '46px': '46px',
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        1920: '1920px',
      },
      minWidth: {
        '1.25rem': '1.25rem',
      },
      width: {
        '10px': '10px',
        '50%': '50%',
        '65%': '65%',
      },
      lineHeight: {
        '70px': '70px',
      },
      height: {
        '44rem': '44rem',
        '55rem': '55rem',
        '34rem': '34rem',
        '20rem': '20rem',
        '22rem': '22rem',
        '30rem': '30rem',
      },
    },
  },
};
