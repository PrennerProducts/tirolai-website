'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[rgba(30,41,59,0.47)] text-muted border-t border-muted/30 backdrop-blur-md p-6">
      {/* 🔹 Dekorative Linie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* 🧠 Brand */}
        <div>
          <h4 className="text-foreground text-lg font-semibold mb-3">
            Tirol<span className="text-accent">AI</span>
          </h4>
          <p className="text-muted/80 leading-relaxed">
            Digitale Intelligenz aus Tirol – <br />
            KI, Mobile & Web-Lösungen mit Substanz.
          </p>
        </div>

        {/* ⚙️ Leistungen */}
        <div>
          <h5 className="text-foreground font-medium mb-3">Leistungen</h5>
          <ul className="space-y-2">
            {[
              'Webentwicklung',
              'Künstliche Intelligenz',
              'IoT & Embedded',
              'Mobile Apps',
            ].map((label, i) => (
              <li key={i}>
                <Link
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🏢 Unternehmen */}
        <div>
          <h5 className="text-foreground font-medium mb-3">Unternehmen</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-accent transition-colors"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* ⚖️ Rechtliches */}
        <div>
          <h5 className="text-foreground font-medium mb-3">Rechtliches</h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="/impressum"
                className="hover:text-accent transition-colors"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-accent transition-colors"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔻 Divider */}
      <div className="my-10 border-t border-muted/30" />

      {/* 📫 Bottom Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>
          &copy; {new Date().getFullYear()} TirolAI. Alle Rechte vorbehalten.
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:info@tirolai.at"
            className="hover:text-accent transition-colors"
          >
            <Mail size={16} />
          </Link>
          <Link
            href="https://linkedin.com/company/tirolai"
            className="hover:text-accent transition-colors"
            target="_blank"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="https://github.com/tirolai"
            className="hover:text-accent transition-colors"
            target="_blank"
          >
            <Github size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
