/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          primary: '#0077b6',
          secondary: '#00b4d8',
          accent: '#caf0f8',
          dark: '#03045e',
        }
      }
    },
  },
  plugins: [],
}
