/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // required for next-themes
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        tirolai: 'var(--tirolai)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
