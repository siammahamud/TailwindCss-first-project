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
      keyframes: {
        underlineIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        underlineOut: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        underlineIn: 'underlineIn 0.3s ease-out',
        underlineOut: 'underlineOut 0.3s ease-in',
      }
    
    },

    
  },

  plugins: []
}