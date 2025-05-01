// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary': '#4CAF50',
//         'secondary': '#FF5722',
//         'tertiary': '#607D8B',
//         'accent': '#9C27B0',
//       },
//       fontFamily: {
//         sans: ['Helvetica', 'Arial', 'sans-serif'],
//         serif: ['Georgia', 'serif'],
//       },
//       boxShadow: {
//         'lg': '0px 4px 6px rgba(0, 0, 0, 0.1)',
//       },
//     },
//   },
//   plugins: [],
// }
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});



