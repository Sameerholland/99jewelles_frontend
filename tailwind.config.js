/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-green":"#3B606A",
        "gray-green-500":"#91A8A7",
        "light-orange":'#FFB06A',
        "dark-orange":"#D99355",
        "light-orange-100":"#FFFBF6",
        "light-orange-500":"#F5E0C5",
        "dark-orange-1000":"#FF7800",
        "dark-red":"#8F4300",
        "sletiy":"#E8E8E8",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

