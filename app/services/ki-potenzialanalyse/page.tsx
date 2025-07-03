// 'use client';

// import { useTranslations } from 'next-intl';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'services.ki_potenzialanalyse.title',
//   description: 'services.ki_potenzialanalyse.text',
// };

// export default function KiPotenzialanalysePage() {
//   const t = useTranslations('services.ki_potenzialanalyse');

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
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  return {
    title:
      messages['services.ki_potenzialanalyse.title'] ?? 'AI Potential Analysis',
    description:
      messages['services.ki_potenzialanalyse.text'] ??
      'We analyze processes and identify meaningful AI applications.',
  };
}

export default function KiPotenzialanalysePage() {
  const t = useTranslations('services.ki_potenzialanalyse');

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
