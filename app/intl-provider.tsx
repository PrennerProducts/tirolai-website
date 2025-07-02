'use client';

import { ReactNode } from 'react';
import { IntlProvider as NextIntlProvider } from 'next-intl';

interface IntlProviderProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, string | string[]>;
}

export default function IntlProvider({
  children,
  locale,
  messages,
}: IntlProviderProps) {
  return (
    <NextIntlProvider
      locale={locale}
      messages={messages}
      timeZone="Europe/Berlin"
    >
      {children}
    </NextIntlProvider>
  );
}
