/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B61FF",
        secondary: "#A5B4FC",
        light: "#F5F5F5",
      }
    },
  },
  plugins: [],
}
