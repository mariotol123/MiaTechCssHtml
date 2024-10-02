/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./es1/*.html", // Includi i file HTML
    "./es1/**/*.js", // Includi i file JS (se presenti)
  ],
  theme: {
    extend: {
      colors: {
        "nuovo-colore": "#ff5733", // Colore personalizzato
        "altro-colore": "#33c1ff",

        primary: {
          light: '#93C5FD', // Celeste chiaro
          DEFAULT: '#3B82F6', // Colore blu primario
          dark: '#1E40AF', // Blu scuro
        },
        secondary: {
          light: '#FDE68A', // Giallo chiaro
          DEFAULT: '#F59E0B', // Colore secondario giallo
          dark: '#B45309', // Giallo scuro
        },
        accent: {
          light: '#A7F3D0', // Verde chiaro
          DEFAULT: '#10B981', // Colore verde
          dark: '#047857', // Verde scuro
        },
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