/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F7F4',
        warmGray: '#E9E7E3',
        charcoal: '#1A1A1A',
        red: '#D4AF37',
        darkRed: '#B8941F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
