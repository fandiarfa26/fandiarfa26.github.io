module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}