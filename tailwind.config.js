/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includi tutte le sottocartelle sotto /src
    "./components/**/*.{html,js,jsx}", // Includi tutte le sottocartelle sotto /components
    "./pages/**/*.{html,js}",          // Includi tutte le sottocartelle sotto /pages
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
         "nuovo-colore" : "#ff5733",
         "altro-colore" : "#33c1ff",
      },
      padding: {
        '5/6': '83.3333%',  
        '18': '4.5rem',     
      },
      margin: {
        '13': '3.25rem',    
        '72': '18rem',     
      },
    },
  },
  plugins: [],
}

