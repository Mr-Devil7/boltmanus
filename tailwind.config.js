/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F', // Forest Green
        secondary: '#936639', // Soil Brown
        accent: '#A7C957', // Leafy Light Green
        background: '#FAF9F6', // Off-White
        text: '#2C2C2C', // Charcoal
      },
    },
  },
  plugins: [],
}
