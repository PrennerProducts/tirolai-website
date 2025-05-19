import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectCarousel } from '@/components/ProjectCarusel';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamicParams = false;

interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  industry?: string;
}
type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  const file = await fs.readFile(
    path.join(process.cwd(), 'data/projects.json'),
    'utf-8'
  );
  const projects: Project[] = JSON.parse(file);

  const slug = decodeURIComponent(`${params?.slug ?? ''}`);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const otherProjects = shuffle(projects.filter((p) => p.slug !== slug));

  function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <Link
        href="/references"
        className="inline-block mb-6 text-sm text-primary hover:underline"
      >
        ← Alle Referenzprojekte ansehen
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground mb-8 italic">{project.industry}</p>

      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>Herausforderung</h2>
        <p>{project.challenge}</p>

        <h2>Unsere Lösung</h2>
        <p>{project.solution}</p>

        <h2>Ergebnis</h2>
        <p>{project.result}</p>

        <h2>Techstack</h2>
        <ul>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-4">Weitere Projekte</h2>
      <ProjectCarousel projects={otherProjects} />
    </main>
  );
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    path.join(process.cwd(), 'data/projects.json'),
    'utf-8'
  );
  const projects: { slug: string }[] = JSON.parse(file);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
