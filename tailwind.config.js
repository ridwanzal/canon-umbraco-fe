// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '769px',   // replaces Tailwind sm (mobile → tablet)
      md: '992px',   // replaces Tailwind md (tablet → desktop)
      lg: '1200px',  // replaces Tailwind lg (large desktop)
      xl: '1400px',  // optional, you can keep or remove
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
