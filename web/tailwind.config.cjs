/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        bgButton: '#4411EB',
        menuBorder: '#262626'
      },
      height:{
        'postH': '40rem'
      }
      
    },
  },
  plugins: [],
}
