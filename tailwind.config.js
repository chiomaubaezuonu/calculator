/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'midnight': '#121063',
        'purple': '#cbcbd6',
        'red': 'rgb(172, 57, 57)',
        'dark-gray': '#4d4d4d',
        'dark-gray': 'rgb(172, 57,57)',
        'blue': 'rgb(0, 68, 102)',
        'light-gray': 'rgb(102, 102, 102)'
      }
    },
  },
  plugins: [],
}
