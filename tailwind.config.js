/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        'black': '#000000',
        'semi': '#0C1821',
        'blue':'#1B2A41',
        'blueLight':'#324A5F',
        'gray':'#CCC9DC'
      }
    },
    plugins: [],
  }