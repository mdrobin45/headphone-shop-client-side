module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      colors: {
        orange:'#FF8A00'
      },
      fontFamily: {
        primary:"'Barlow', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
