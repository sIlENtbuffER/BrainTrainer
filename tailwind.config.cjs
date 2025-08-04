/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "regal-black": "#181818",
          "light-black": "#1F1F1F",
        },
      },
    },
    plugins: [],
  }  