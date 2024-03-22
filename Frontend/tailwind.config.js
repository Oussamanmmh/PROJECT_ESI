/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF3FF',
        buttonDark: '#190482',
        buttonLight: '#4733E4',
        textDark: '#020B1F',
        textLight: '#EFF3FF',
      },
      fontFamily: {
        title: ['inter', 'sans-serif'],
        text: ['open-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
