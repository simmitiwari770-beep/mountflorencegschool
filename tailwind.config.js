/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          400: '#6B7C93',
          500: '#4A5F7F',
          600: '#3A4F6B',
          700: '#2A3F57',
          800: '#1F4E79',
          900: '#1A3D5C',
          950: '#0E2A47',
        },
        gold: {
          50: '#FEF9E7',
          500: '#D4AF37',
          600: '#C9A024',
          700: '#B8941F',
        },
        charcoal: {
          DEFAULT: '#36454F',
        },
      },
    },
  },
  plugins: [],
}
