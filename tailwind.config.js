/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins-bold': ['poppins-bold'],
        'poppins-medium': ['poppins-medium'],
        'poppins-regular': ['poppins-regular'],
        'poppins-light': ['poppins-light']
       
      },
      // colors:{
      //   "primary-green": '#1CBD67',
      //   "dark-grey":'#1E1E1E',
      //   "error-red":"#E61E00"
      // }
    },
  },
  plugins: [],
}