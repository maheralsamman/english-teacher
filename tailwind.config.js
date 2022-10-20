/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '5xl': '0 4px 3px rgb(0 0 0 / 0.5)',
        '4xl': [
            "0 4px 3px rgb(0 0 0 / 0.5)",
            '0 10px 8px rgba(0 0 0 0.5)',
        ]
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
