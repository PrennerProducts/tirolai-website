/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // required for next-themes
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', // z. B. bg-background
        foreground: 'var(--foreground)', // z. B. text-foreground
        surface: 'var(--surface)', // z. B. bg-surface (Karten, Dialoge)
        muted: 'var(--muted)', // z. B. text-muted
        accent: 'var(--accent)', // z. B. text-accent, ring-accent
        highlight: 'var(--highlight)', // z. B. text-highlight
        tirolai: 'var(--tirolai)', // Branding color
      },
      backgroundColor: {
        surface: 'var(--surface)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderColor: {
        muted: 'var(--muted)', // z. B. border-muted
        foreground: 'var(--foreground)', // z. B. border-foreground
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      animation: {
        'ai-glow': 'ai-glow 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'slow-pan': 'slowPan 100s linear infinite',
        glow: 'glow 4s ease-in-out infinite',
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
        slowPan: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-100px, -100px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #ec4899, 0 0 20px #0ea5e9' },
          '50%': { boxShadow: '0 0 15px #0ea5e9, 0 0 30px #ec4899' },
        },
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
