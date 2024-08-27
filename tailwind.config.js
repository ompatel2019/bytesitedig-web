/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      colors: {
        c1: '#2A2A2A',
        c2: '#3A3A3A',
        c3: '#E2E2E2',
        c4: '#FAFAFA',
        g1: 'radial-gradient(circle, #000000, #404040)', // Gradient
      },
      fontSize: {
        h1: '90px',
        h2: '68px',
        h3: '51px',
        h4: '38px',
        h5: '28px',
        h6: '21px',
        h7: '16px',
      },
    },
  },
  plugins: [],
}