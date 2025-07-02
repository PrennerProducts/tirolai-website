'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Detect browser language on mount or load from localStorage
    const storedLocale =
      typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    if (storedLocale === 'de' || storedLocale === 'en') {
      setLocale(storedLocale);
    } else {
      const browserLocale = navigator.language.split('-')[0];
      if (browserLocale === 'de' || browserLocale === 'en') {
        setLocale(browserLocale);
      }
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }
  return context;
}
