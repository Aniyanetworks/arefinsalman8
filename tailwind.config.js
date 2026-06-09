/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EEF5F9',
          100: '#D4E8F1',
          200: '#A6CFE3',
          300: '#6EB3D3',
          400: '#3591BE',
          500: '#1D72A0',
          600: '#165880',
          700: '#114465',
          800: '#0D3050',
          900: '#081D34',
          950: '#040F1C',
        },
        accent: {
          300: '#F5C96A',
          400: '#EFB13A',
          500: '#E89520',
          600: '#C87716',
          700: '#A55D12',
          800: '#844914',
          900: '#6B3C14',
        },
        warm: {
          50:  '#FAF8F3',
          100: '#F4F0E5',
          200: '#E8DFD0',
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
