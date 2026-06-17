/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Forest Green
        primary: {
          50:  '#eef7f2',
          100: '#d2edde',
          200: '#a4d9bd',
          300: '#6dc49b',
          400: '#40ab7a',
          500: '#258c5d',
          600: '#1a7049',
          700: '#145939',
          800: '#0f432b',
          900: '#092d1d',
          950: '#051912',
        },
        // Accent: Warm Gold
        accent: {
          300: '#fde08c',
          400: '#f5c535',
          500: '#d49d10',
          600: '#a97c0c',
          700: '#876109',
          800: '#6a4c07',
          900: '#4a3505',
        },
        // Warm cream backgrounds
        warm: {
          50:  '#f6f9f4',
          100: '#edf3e8',
          200: '#d8e9cb',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
