/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgCream: '#0B001A', // Dark purple background
        borderBlack: '#A855F7', // Vibrant purple borders
        accentYellow: '#9333EA', // Vibrant purple accent
        accentOrange: '#7E22CE', // Purple deep accent
        navCream: '#14002B', // Slightly lighter dark purple for nav
        accentNeon: '#FF2A93', // Pink for glow
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'], // Added a cooler display font
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'glow': '0 0 20px 2px rgba(192, 132, 252, 0.8)', // Purple glow
        'glow-orange': '0 0 20px 2px rgba(139, 92, 246, 0.8)', // Deep purple glow
      }
    },
  },
  plugins: [],
}
