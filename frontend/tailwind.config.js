/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-hover': '#ccd8ff',
        'body-color':'#f9f9f9',
        'blue':'#003DFF'
      },
    },
  },
  plugins: [],
}

