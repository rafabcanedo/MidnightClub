/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
        pop: 'var(--font-poppins)',
      },
      colors: {
        background: '#2a2438',
        white: '#FFFFFF',
        black: '#000000',
        primary: '#F07B50',
        hoverprimary: '#ff7e67',
        form: '#352f44',
      },
    },
  },
  plugins: [],
}
