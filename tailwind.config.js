/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container:{
      center: true
    },
    spacing: {
      '25': '6.25rem', 
    },
    colors: {
      primary: {
        DEFAULT: 'rgb(70, 163, 88)',
      },
      secondary: {
        DEFAULT: 'hsl(132, 40%, 56%)'
      }, 
      background: {
        DEFAULT: 'hsla(0, 0%, 0%, 0.5)'
      },
      white: {
        DEFAULT: 'white'
      },
      usha: {
        DEFAULT: ' rgb(251, 251, 251)'
      },
      grey: {
        DEFAULT: 'rgb(114, 114, 114)'
      },
      grey2: {
        DEFAULT: 'rgba(70, 163, 88, 0.2)'
      },
      final: {
        DEFAULT: 'rgb(61, 61, 61)'
      }
    },
    fontSize: {
      heading: '16px',
      big: '70px'
    },
    borderRadius: {
      DEFAULT: '6px', 
      small: '4px'
    },
    borderColor: {
      grey: 'rgba(70, 163, 88, 0.5)',
      primary: 'rgb(70, 163, 88)',
      gray: 'rgb(234, 234, 234)',
      white: 'rgb(255, 255, 255)'
    },
    textColor: {
      white: 'white',
      primary: 'rgb(70, 163, 88)',
      secondary: 'rgb(70, 163, 80)',
      background: ' hsla(0, 0%, 0%, 0.5)',
      grey: 'rgb(114, 114, 114)',
      final: 'rgb(61, 61, 61)'
    }
  },
  plugins: [],
}

