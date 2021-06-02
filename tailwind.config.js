module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter']
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus']
    },
  },
  plugins: [],
}