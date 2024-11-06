/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'border-pulse': {
          '0%, 100%': {
            'border-color': 'rgba(139, 92, 246, 0.1)',
          },
          '50%': {
            'border-color': 'rgba(139, 92, 246, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
};