/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      colors: {
        'bg-light': '#ffffff',
        'text-light': '#000000',
        'bg-dark': '#0F0F0F',
        'text-dark': '#ffffff',
        'sidebar-dark': '#212121',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
