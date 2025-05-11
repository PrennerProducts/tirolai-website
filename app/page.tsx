// app/page.tsx
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // verhindert Hydration-Mismatch

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
      <Nav />

      <Hero />

      <section
        id="services"
        className="py-16 bg-gray-50 dark:bg-zinc-800 text-center px-6"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Webentwicklung</h3>
            <p>Maßgeschneiderte Anwendungen mit modernen Technologien.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
            <p>Individuelle Apps für iOS und Android.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">
              Künstliche Intelligenz
            </h3>
            <p>KI-Lösungen für Automatisierung und Innovation.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center px-6">
        <h3 className="text-2xl font-bold mb-6">Was uns auszeichnet</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="text-3xl mb-2">📍</div>
            <h4 className="font-semibold">Regional</h4>
            <p>Verankert in Tirol – wir sprechen Ihre Sprache.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">⚙️</div>
            <h4 className="font-semibold">Modern</h4>
            <p>Aktuelle Technologien, saubere Umsetzung.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📈</div>
            <h4 className="font-semibold">Skalierbar</h4>
            <p>Lösungen, die mit Ihrem Unternehmen mitwachsen.</p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-zinc-700 text-center">
        <p>
          &copy; {new Date().getFullYear()} TirolAI. Alle Rechte vorbehalten.
        </p>
      </footer>
    </main>
  );
}
