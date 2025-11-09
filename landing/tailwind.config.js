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
        red: '#8B0000',
        darkRed: '#6B0000',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
