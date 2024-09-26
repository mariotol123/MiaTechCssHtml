/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./es1/*.html", // Includi i file HTML
    "./es1/**/*.js", // Includi i file JS (se presenti)
  ],
  theme: {
    extend: {
      colors: {
        "nuovo-colore": "#ff5733", // Colore personalizzato
        "altro-colore": "#33c1ff",
      },
      padding: {
        '5/6': '83.3333%', // Nuova dimensione di padding
        '18': '4.5rem',
      },
      margin: {
        '13': '3.25rem', // Nuova dimensione di margin
        '72': '18rem',
      },
    },
  },
  plugins: [],
}