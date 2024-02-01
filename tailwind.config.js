/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    daisyui,
  ],
  theme: {
    extend: {},
  },
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
}

