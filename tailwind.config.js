/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ── Design tokens ──────────────────────────────────────────────────────
      // All hex values live here and in the :root CSS variables in index.css.
      // Components MUST use these utility classes — never hardcode hex values.
      colors: {
        // Navy blue family (~60 % of UI)
        primary: {
          DEFAULT: '#1E3A8A', // main brand blue — primary section backgrounds
          dark:    '#0A1F5C', // deepest navy — footers, depth layers
          light:   '#2B4FC0', // lighter blue — hover states, glows
        },

        // Accent teal (~15 % — banners, highlights, secondary buttons, icon accents)
        teal: '#3BC4C4',

        // Accent purple (~15 % — ribbons, section dividers, layering)
        purple: {
          DEFAULT: '#6B2FA0',
          dark:    '#4A1E7A',
        },

        // CTA green (~10 % — PRIMARY CALL-TO-ACTION BUTTONS ONLY, never decorative)
        cta: '#7AC943',

        // Text helpers
        muted: '#CBD5E1', // body text on dark backgrounds

        // Light section background (very subtle blue-white tint)
        surface: '#F0F5FF',
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
