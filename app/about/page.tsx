'use client';

import { useTranslations } from 'next-intl';
import { Brain, Code, DatabaseZap } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="max-w-4xl mx-auto mt-6 px-6 py-20 text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {t('about_title')}
      </h1>

      <p className="text-lg mb-6">{t('about_welcome')}</p>

      <p className="text-lg mb-6">{t('about_competencies')}</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {t('about_vision_title')}
      </h2>
      <p className="text-base text-muted-foreground mb-6">
        {t('about_vision_text')}
      </p>

      <p className="text-base text-muted-foreground mb-6">
        {t('about_think_ahead')}
      </p>

      <h2 className="text-2xl font-semibold mb-4">{t('about_team_title')}</h2>
      <div className="grid md:grid-cols-3 gap-6 bg-white/5 rounded-2xl">
        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <Brain className="w-20 h-20 text-cyan-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-1">
            {t('about_martin_name')}
          </h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            {t('about_martin_role')}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('about_martin_desc')}
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <Code className="w-20 h-20 text-pink-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-1">
            {t('about_lukas_name')}
          </h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            {t('about_lukas_role')}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('about_lukas_desc')}
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <DatabaseZap className="w-20 h-20 text-cyan-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-1">
            {t('about_robert_name')}
          </h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            {t('about_robert_role')}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('about_robert_desc')}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {t('about_qualities_title')}
      </h2>

      {(() => {
        const qualities = t.raw('about_qualities_list') as string[];
        return (
          <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
            {qualities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      })()}

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {t('about_mission_title')}
      </h2>
      <p className="text-base text-muted-foreground mb-6">
        {t('about_mission_text')}
      </p>

      <div className="mt-10 text-center">
        <p className="text-base text-muted-foreground italic">
          {t('about_belief')}
        </p>
      </div>
    </main>
  );
}
