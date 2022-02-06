module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'me-shadow': '0 0 10px rgba(0, 0, 0, 0.25)',
      }
    },
    screens: {
      'tablet': '425px',

      'laptop': '1025px',

      'desktop': '1440px',
    },
  },
  plugins: [],
}
