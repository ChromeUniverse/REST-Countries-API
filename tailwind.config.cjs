/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Nunito Sans'
    },
    fontWeight: {
      light: 300,
      normal: 600,
      bold: 800
    },
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
        'very-dark-blue-text': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    }
  },
  plugins: [],
}
