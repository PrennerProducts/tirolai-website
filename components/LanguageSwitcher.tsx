'use client';

import React from 'react';
import { useLocaleContext } from '@/app/locale-context';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleContext();

  const handleChangeLocale = (newLocale: string) => {
    setLocale(newLocale);
    // Persist locale in localStorage or cookie for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
    // Removed page reload to allow reactive locale update
    // window.location.reload();
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleChangeLocale('de')}
        className={`px-3 py-1 rounded ${
          locale === 'de' ? 'bg-accent text-white' : 'bg-muted text-foreground'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => handleChangeLocale('en')}
        className={`px-3 py-1 rounded ${
          locale === 'en' ? 'bg-accent text-white' : 'bg-muted text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
}
