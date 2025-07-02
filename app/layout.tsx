import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav'; // ✅ hier hinzufügen
import Footer from '@/components/Footer'; // ✅ hier hinzufügen
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from 'next-themes';
import { LocaleProvider } from './locale-context';
import IntlClientProvider from './intl-client-provider';

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
  title:
    'TirolAI – KI, Automatisierung & Digitalisierung für Tiroler Unternehmen',
  description:
    'Praxisnahe KI-Lösungen, AI-Prototyping, Prozessautomatisierung, Webentwicklung, IoT-Integration, AI-Schulungen und Förderberatung für KMU & Startups in Tirol.',
  keywords: [
    'KI Tirol',
    'AI Tirol',
    'Digitalisierung Tirol',
    'KMU Förderberatung',
    'AI-Prototyping',
    'Prozessautomatisierung',
    'Webentwicklung Tirol',
    'IoT Predictive Maintenance',
    'AI-Schulungen Tirol',
  ],
  authors: [{ name: 'TirolAI' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TirolAI – KI & Digitalisierung für Tiroler Unternehmen',
    description:
      'Praxisnahe KI-Lösungen, AI-Prototyping, Prozessautomatisierung, Webentwicklung, IoT-Lösungen und Förderberatung.',
    url: 'https://www.tirolai.at',
    siteName: 'TirolAI',
    images: [
      {
        url: 'https://www.tirolai.at/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TirolAI Logo',
      },
    ],
    type: 'website',
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LocaleProvider>
            <IntlClientProvider>
              <div className="min-h-screen antialiased font-sans bg-background text-foreground">
                <Nav />
                {children}
                {/* Vercel Analytics */}
                <Analytics />
                <Footer />
              </div>
            </IntlClientProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
