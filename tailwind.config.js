/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0b0b0d',
          900: '#101013',
          850: '#16161a',
          800: '#1d1d22',
          700: '#2a2a31',
          600: '#3a3a44',
          500: '#55555f',
          400: '#8b8b95',
          300: '#b5b5bd',
          200: '#d9d9de',
          100: '#f0f0f2',
          50: '#f8f8f9',
        },
        gold: {
          300: '#e8cf8f',
          400: '#d9b96a',
          500: '#c9a24a',
          600: '#a9822f',
          700: '#866423',
        },
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
};
