/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#3F3481',
      },
      backgroundImage: {
        'custom-background': "url('./public/eu.jpeg')",
        'fundo-svg': "url('./public/Tela.svg')",
      },
    },
  },
  plugins: [],
}
