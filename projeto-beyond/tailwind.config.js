/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img-plano":"url('/src/assets/wallpaper-espaco.jpg')",
      }
     },
  },
  plugins: [],
}
