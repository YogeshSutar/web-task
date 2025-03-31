/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      corePlugins: {
        textJustify: true,
      },
    },
  },
  plugins: [],
}

