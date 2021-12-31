module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  rtl: true,
  theme: {
    extend: {
      minHeight: {
        '1/3': '33.33%',
        '2/3': '66.66%',
      },
      maxHeight: {
        '1/3': '33.33%',
        '2/3': '66.66%',
      },
      minWidth: {
        '1/3': '33.33%',
        '2/3': '66.66%',
      },
      maxWidth: {
        '1/3': '33.33%',
        '2/3': '66.66%',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
      },
    },
  },
  variants: {
    extend: {
      inset: ['hover']
    },
  },
  plugins: [],
}
