// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav'; // ✅ hier hinzufügen
import Footer from '@/components/Footer'; // ✅ hier hinzufügen
import { Analytics } from '@vercel/analytics/next';

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
      <body
        suppressHydrationWarning
        className="bg-black text-white font-sans antialiased"
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        > */}
        <div className="min-h-screen antialiased font-sans bg-background text-foreground">
          <Nav />
          {children}
          <Analytics />
          <Footer />
        </div>
        {/* </ThemeProvider> */}
        {/* Vercel Analytics */}
      </body>
    </html>
  );
}
