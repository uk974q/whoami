/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        typewriter: "slide 3s steps(12) 1s forwards, blink 750ms steps(12) infinite",
        fades: "slide 3s 3s ease forwards"
      },
      keyframes:{
        slide: {
          to : {left: "100%"}
        },
        blink: {
          to : {"border-left": "none"}
        },
      }
    },
  },
  plugins: [],
}

