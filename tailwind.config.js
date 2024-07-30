/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '3': '3px',
      '6': '6px'
    },
    extend: {},
  },
  plugins: [],
}

