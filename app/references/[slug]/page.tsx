'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ReferenceDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<{
    slug: string;
    title: string;
    summary: string;
    challenge: string;
    solution: string;
    result: string;
    technologies?: string[];
    link?: string;
  } | null>(null);
  const t = useTranslations('references');

  useEffect(() => {
    async function loadProject() {
      try {
        const locale = navigator.language.startsWith('de') ? 'de' : 'en';
        const projectsData = await import(`@/data/projects.${locale}.json`);
        const foundProject = projectsData.default.find(
          (p: { slug: string }) => p.slug === slug
        );
        setProject(foundProject || null);
      } catch (error) {
        console.error('Error loading project:', error);
        setProject(null);
      }
    }
    loadProject();
  }, [slug]);

  if (!project) {
    return <p>{t('not_found')}</p>;
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <p className="mb-4">{project.summary}</p>
      <p className="mb-4">{project.challenge}</p>
      <p className="mb-4">{project.solution}</p>
      <p className="mb-4">{project.result}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies:</h2>
      <ul className="list-disc list-inside mb-8">
        {project.technologies?.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          {t('visit_project')}
        </a>
      )}
    </main>
  );
}
