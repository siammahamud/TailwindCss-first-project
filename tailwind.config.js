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
    

    keyframes: {
      'border-animate': {
        '0%': { borderTopColor: 'cyan', borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'transparent' },
        '25%': { borderTopColor: 'cyan', borderRightColor: 'cyan', borderBottomColor: 'transparent', borderLeftColor: 'transparent' },
        '50%': { borderTopColor: 'cyan', borderRightColor: 'cyan', borderBottomColor: 'cyan', borderLeftColor: 'transparent' },
        '75%': { borderTopColor: 'cyan', borderRightColor: 'cyan', borderBottomColor: 'cyan', borderLeftColor: 'cyan' },
        '100%': { borderTopColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'cyan' },
      },
    },
    animation: {
      'border-animate': 'border-animate 2s linear infinite',
    },
  },

    
},

  plugins: []

}