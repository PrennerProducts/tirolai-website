'use client';

import React, { useEffect, useState } from 'react';
import IntlProvider from './intl-provider';
import { useLocaleContext } from './locale-context';

export default function IntlClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLocaleContext();
  const [messages, setMessages] = useState<Record<string, string | string[]>>(
    {}
  );

  useEffect(() => {
    async function loadMessages() {
      try {
        const msgs = await import(`../messages/${locale}.json`);
        setMessages(msgs.default);
      } catch (error) {
        console.error('Error loading messages:', error);
        setMessages({});
      }
    }
    loadMessages();
  }, [locale]);

  if (!messages || Object.keys(messages).length === 0) {
    return null; // or a loading indicator
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
