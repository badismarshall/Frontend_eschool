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
  },
  plugins: [],
}

