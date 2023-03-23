/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d" : {
      transformStyle:"preserve-3d",
    },
    ".perspective" : {
      perspective : "1000px",
    },
    ".backface-hidden" : {
      backfaceVisibility : "hidden",
    },
  });
});


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fullSpin:{
          '100%':{
            transform: 'rotate(-360deg)'
          }         
        }
      },
      animation:{
        fullSpin: 'fullSpin 3s linear infinite'
      },
    },
  },
  plugins: [Myclass],
}
