'use client';

import { useTranslations } from 'next-intl';

export default function AiPrototypingPage() {
  const t = useTranslations('services.ai_prototyping');

  return (
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
  );
}
