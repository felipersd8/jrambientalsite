/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#22c55e',
          'green-dark': '#16a34a',
          'green-light': '#4ade80',
        },
        accent: {
          blue: '#3b82f6',
          'blue-dark': '#2563eb',
          'blue-light': '#60a5fa',
        },
      },
      borderRadius: {
        'card': '16px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
