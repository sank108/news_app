/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '425px',
        'lg': '768px',
        'xl': '1024px',
        '2xl' : '1440px'
      },
      alignSelf: {
        normal: 'normal',
      },
    },
  },
  plugins: [],
}