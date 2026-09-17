/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        copper: {
          light: '#F2A97E',
          DEFAULT: '#E29578',
          dark: '#C87A5B',
          rust: '#B55D3D',
        },
        bronze: {
          amber: '#E09F67',
          patina: '#9E6B88',
          mauve: '#8A5A75',
          deep: '#4A2840',
        },
        obsidian: {
          DEFAULT: '#0B0609',
          surface: '#140B10',
          card: '#1A0E15',
          elevated: '#24141E',
        },
        'deep-dark': '#24141E',
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #E29578 0%, #C87A5B 45%, #9E6B88 100%)',
        'copper-glow': 'radial-gradient(circle, rgba(226, 149, 120, 0.25) 0%, rgba(158, 107, 136, 0.08) 50%, transparent 70%)',
      },
      animation: {
        'train-bob': 'train-bob 3s ease-in-out infinite',
      },
      keyframes: {
        'train-bob': {
          '0%, 100%': { transform: 'translateY(0px) scale(1.03)' },
          '50%': { transform: 'translateY(-6px) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
