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
      animation: {
        'ai-glow': 'ai-glow 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        'ai-glow': {
          '0%, 100%': { textShadow: '0 0 10px #00f5d4, 0 0 20px #ec4899' },
          '50%': { textShadow: '0 0 15px #a78bfa, 0 0 25px #00f5d4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
