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
        'cat-background': '#1a1a1a',
        'cat-surface': '#2d2d2d',
        'cat-text': '#ffffff',
        'cat-text-secondary': '#a0a0a0',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 