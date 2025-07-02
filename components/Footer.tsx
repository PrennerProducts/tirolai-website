'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[rgba(30,41,59,0.47)] text-muted border-t border-muted/30 backdrop-blur-md p-6">
      {/* 🔹 Dekorative Linie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* 🧠 Brand */}
        <div>
          <h4 className="text-foreground text-lg font-semibold mb-3">
            {String(t('brand_title'))}
          </h4>
          <p className="text-muted/80 leading-relaxed whitespace-pre-line">
            {String(t('brand_description'))}
          </p>
        </div>

        {/* ⚙️ Leistungen */}
        <div>
          <h5 className="text-foreground font-medium mb-3">
            {t('services_title')}
          </h5>
          {(() => {
            const servicesList = t.raw('services_list') as string[];
            return (
              <ul className="space-y-2">
                {Array.isArray(servicesList) && servicesList.length > 0 ? (
                  servicesList.map((label: string, i: number) => (
                    <li key={i}>
                      <Link
                        href="#services"
                        className="hover:text-accent transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-muted">No services available</li>
                )}
              </ul>
            );
          })()}
        </div>

        {/* 🏢 Unternehmen */}
        <div>
          <h5 className="text-foreground font-medium mb-3">
            {t('company_title')}
          </h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
              >
                {t('company_about')}
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-accent transition-colors"
              >
                {t('company_contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* ⚖️ Rechtliches */}
        <div>
          <h5 className="text-foreground font-medium mb-3">
            {t('legal_title')}
          </h5>
          <ul className="space-y-2">
            <li>
              <Link
                href="/impressum"
                className="hover:text-accent transition-colors"
              >
                {t('legal_imprint')}
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-accent transition-colors"
              >
                {t('legal_privacy')}
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
          <div className="flex items-center space-x-2">
            <span>{t('language_switcher_label')}:</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
