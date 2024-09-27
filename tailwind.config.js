/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'custom-gradient':'linear-gradient(180deg, rgba(59,177,4,0.95)0%, rgba(54, 169, 0, 0.95) 100%)'
    },
  },
  plugins: [],
}

