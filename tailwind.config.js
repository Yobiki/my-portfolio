echo /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  keyframes: {
    wave: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
  },
  animation: {
    wave: "wave 12s linear infinite",
  },
},
  
  plugins: [],
} > tailwind.config.js
