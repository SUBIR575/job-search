/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blueColor":'#4834d4',
        "greyIsh":'#f1f4f8',
        "cardShadow":'#f7f8f9',
        "textColor":'#252b35'
      }
    },
  },
  plugins: [],
}

