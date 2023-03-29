/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      lightPink: '#C5B7FE',
      lightPurple: '#6743FF',
      purple: '#312CE8',
    },
    fontWeight: {
      medium: 500,
      bold: 700,
      xBold: 800
    },
    gridTemplateColumns: {
      '2': 'repeat(2, minmax(100px, 375px))',
    }
  },
  plugins: [],
}
