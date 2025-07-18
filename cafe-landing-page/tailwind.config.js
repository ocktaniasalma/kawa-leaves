module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: '#3f3f3f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};