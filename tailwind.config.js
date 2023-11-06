/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/Views/*.php',
    './app/Views/**/*.php',
    './app/Views/**/**/*.php',
    './app/Views/**/**/**/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        redHat: 'Red Hat Display',
      },
      backgroundColor: {
        heroJum: '#01937C',
        buttonLearnMore: '#FFC074',
      },
      textColor: {
        asci: '#FF5E15',
        basic: '#01937C',
      },
    },
  },
  plugins: [],
};
