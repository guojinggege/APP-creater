/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#b0b0b0',
        // Premium colors
        'primary': '#ff006e',
        'primary-dark': '#d60058',
        'accent': '#00d4ff',
        'gold': '#ffd700',
        'gold-dark': '#daa520',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 0, 110, 0.3)',
        'glow-accent': '0 0 20px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
