/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ed',
          100: '#faf0cc',
          200: '#f4df99',
          300: '#ecc84e',
          400: '#e8b72a',
          500: '#d4a017',
          600: '#b97f0f',
          700: '#8f5d10',
          800: '#764a12',
          900: '#643e13',
        },
        salon: {
          950: '#100d0a',
          900: '#1a1512',
          800: '#241e1a',
          700: '#2e2722',
          600: '#3d342d',
          500: '#4d4238',
        },
        rose: {
          400: '#f87171',
          500: '#e06b6b',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f4df99 50%, #d4a017 100%)',
        'dark-gradient': 'linear-gradient(135deg, #100d0a 0%, #241e1a 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 160, 23, 0.3)',
        'gold-lg': '0 0 40px rgba(212, 160, 23, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
