/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  // small
      md: '768px',  // medium
      lg: '1024px', // large (desktop)
      xl: '1280px', // extra large
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
