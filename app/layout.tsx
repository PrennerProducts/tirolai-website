// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav'; // ✅ hier hinzufügen
import Footer from '@/components/Footer'; // ✅ hier hinzufügen
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TirolAI – Digitale Intelligenz aus Tirol',
  description: 'Moderne Web- und KI-Lösungen für Unternehmen mit Weitblick.',
  keywords: [
    'TirolAI',
    'Webentwicklung',
    'KI',
    'Softwareentwicklung',
    'AI Tirol',
  ],
  authors: [{ name: 'TirolAI' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen antialiased font-sans bg-background text-foreground">
            <Nav />
            {children}
            {/* Vercel Analytics */}
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
