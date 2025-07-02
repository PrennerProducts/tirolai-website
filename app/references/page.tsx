'use client';

import { useLocaleContext } from '@/app/locale-context';
import { useEffect, useState } from 'react';
import { ReferenceCard } from '@/components/ReferenceCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ReferencesPage() {
  const { locale } = useLocaleContext();
  const [projects, setProjects] = useState<
    Array<{
      slug: string;
      title: string;
      summary: string;
      image: string;
    }>
  >([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const projectsData = await import(`@/data/projects.${locale}.json`);
        setProjects(projectsData.default);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      }
    }
    loadProjects();
  }, [locale]);

  return (
    <main className="py-20 px-6">
      {/* Überschrift & Einleitung */}
      <h1 className="text-4xl font-bold text-center m-4">
        {locale === 'de' ? 'Unsere Referenzprojekte' : 'Our Reference Projects'}
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        {locale === 'de'
          ? 'Von intelligenten Web-Anwendungen bis hin zu spezialisierten KI-Lösungen – wir realisieren digitale Projekte mit Wirkung.'
          : 'From intelligent web applications to specialized AI solutions – we realize digital projects with impact.'}
      </p>

      {/* Projekte-Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ReferenceCard
            key={p.slug}
            title={p.title}
            summary={p.summary}
            image={p.image}
            href={`/references/${p.slug}`}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Link href="/contact">
          <Button size="lg">
            {locale === 'de' ? 'Projekt anfragen →' : 'Request Project →'}
          </Button>
        </Link>
      </div>
    </main>
  );
}
