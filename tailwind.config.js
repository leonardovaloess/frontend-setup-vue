/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Inclua arquivos do Vue.js
    "node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}", // Estilos PrimeVue
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
