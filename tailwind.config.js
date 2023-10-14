/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#260E3F",
        secondary1: "#BCFF5E",
        secondary2: "#FF8057",
        secondary3: "#5BB6D2"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [require("daisyui")],
}

