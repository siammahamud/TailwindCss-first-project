/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#F0F2F3',
        'btn-color':'#029FAE',
        'txt-light':'#636270'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },  
    
    },

    
  },

  plugins: []
}