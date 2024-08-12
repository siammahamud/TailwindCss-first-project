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
      'glow':{
        '0%, 100%': {
          'box-shadow': '0 0 10px #029FAE',
        },
        '50%': {
            'box-shadow': '0 0 20px #029FAE',
          },

      },
      'floating':{
        '0%': { transform:'translateY(-100%)'},
        '25%':{ transform:'translateY(-75%)'},
        '50%':{ transform:'translateY(-50%)'},
        '75%':{ transform:'translateY(-25%)'},
        '100%':{transform:'translateY(0%)'},
      }

    },
    animation: {
      'glow': 'glow 2s infinite',
      'border-animate': 'border-animate 3s linear infinite',
      'floating':'floating 3s linear 1'
    },
  },

    
},

  plugins: []

}