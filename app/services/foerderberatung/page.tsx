// 'use client';

// import { useTranslations } from 'next-intl';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'services.foerderberatung.title',
//   description: 'services.foerderberatung.text',
// };

// export default function FoerderberatungPage() {
//   const t = useTranslations('services.foerderberatung');

//   return (
//     <main className="max-w-4xl mx-auto py-25 px-6">
//       <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
//       <p className="mb-4">{t('paragraph1')}</p>
//       <p className="mb-4">{t('paragraph2')}</p>
//       <h2 className="text-2xl font-semibold mt-8 mb-4">{t('scope_title')}</h2>
//       <ul className="list-disc list-inside mb-8">
//         <li>{t('scope_item1')}</li>
//         <li>{t('scope_item2')}</li>
//         <li>{t('scope_item3')}</li>
//         <li>{t('scope_item4')}</li>
//         <li>{t('scope_item5')}</li>
//       </ul>
//     </main>
//   );
// }
// app/services/foerderberatung/page.tsx
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const title =
    messages['services.foerderberatung.title'] ?? 'Funding Consulting';
  const description =
    messages['services.foerderberatung.text'] ??
    'Optimize funding from aws, FFG & Land Tirol.';
  return {
    title,
    description,
  };
}

export default function FoerderberatungPage() {
  const t = useTranslations('services.foerderberatung');

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
