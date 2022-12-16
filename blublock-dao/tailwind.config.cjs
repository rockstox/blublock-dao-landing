/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F4EFE5",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        fadeInSlide: {
          '0%': {transform: 'translateY(-50px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        }
      },
      animation: {
        fadeInFirst: 'fadeInSlide 1.5s 1',
        fadeInSecond: 'fadeInSlide 2s 1',
        fadeInThird: 'fadeInSlide 2.5s 1'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};