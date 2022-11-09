/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '390px',
        md: '900px',
        lg: '1080px',
        xl: '1336px',
      },
    },
  },
  plugins: [],
}
