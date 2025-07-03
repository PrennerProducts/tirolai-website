'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function ProzessautomatisierungPage() {
  const t = useTranslations('services.prozessautomatisierung');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('text')} />
      </Head>
      <main className="max-w-4xl mx-auto py-25 px-6">
        <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
        <p className="mb-4">{t('paragraph1')}</p>
        <p className="mb-4">{t('paragraph2')}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('scope_title')}</h2>
        <ul className="list-disc list-inside mb-8">
          <li>{t('scope_item1')}</li>
          <li>{t('scope_item2')}</li>
          <li>{t('scope_item3')}</li>
          <li>{t('scope_item4')}</li>
          <li>{t('scope_item5')}</li>
        </ul>
      </main>
    </>
  );
}
