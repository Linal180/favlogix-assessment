/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'figma-bg': '#1e1e1e',
        'figma-dark': '#1e1e1e',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 4s linear infinite reverse',
      },
    },
  },
  plugins: [],
}

