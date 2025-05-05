/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cat-primary': '#FF6B6B',
        'cat-secondary': '#4ECDC4',
        'cat-accent': '#FFE66D',
        'cat-background': '#F7F7F7',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
} 