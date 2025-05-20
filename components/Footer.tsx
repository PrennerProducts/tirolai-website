'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-50 bg-zinc-900 text-zinc-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">TirolAI</h4>
          <p className="text-zinc-400">
            Digitale Intelligenz aus Tirol – Ki, Mobile & Web-Lösungen mit
            Substanz.
          </p>
        </div>

        <div>
          <h5 className="text-white font-medium mb-2">Leistungen</h5>
          <ul className="space-y-1">
            <li>
              <Link href="#services" className="hover:underline">
                Webentwicklung
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                Künstliche Intelligenz
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                IoT & Embedded
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                Mobile Apps
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium mb-2">Unternehmen</h5>
          <ul className="space-y-1">
            <li>
              <Link href="#about" className="hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium mb-2">Rechtliches</h5>
          <ul className="space-y-1">
            <li>
              <Link href="/impressum" className="hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} TirolAI. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
