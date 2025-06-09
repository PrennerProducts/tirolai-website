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
  link?: string;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const file = await fs.readFile(
    path.join(process.cwd(), 'data/projects.json'),
    'utf-8'
  );
  const projects: Project[] = JSON.parse(file);

  const decodedSlug = decodeURIComponent(slug);
  const project = projects.find((p) => p.slug === decodedSlug);
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
        ← Zurück zu allen Referenzen
      </Link>

      <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
        {project.title}
      </h1>
      {project.industry && (
        <p className="text-sm text-muted-foreground mb-6">{project.industry}</p>
      )}

      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md mb-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      {project.slug === 'optical-flow-tracking' && (
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-semibold text-accent">Beispielvideos</h2>

          <div className="rounded-xl overflow-hidden shadow-md">
            <p className="text-sm text-muted-foreground mb-2">
              Sparse Optical Flow
            </p>
            <video
              controls
              className="w-full h-auto rounded-xl"
              // poster="/images/opticalFlow.png"
            >
              <source src="/videos/output_sparse_flow.mp4" type="video/mp4" />
              Dein Browser unterstützt keine Videoanzeige.
            </video>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <p className="text-sm text-muted-foreground mb-2">
              Dense Optical Flow
            </p>
            <video
              controls
              className="w-full h-auto rounded-xl"
              // poster="/images/opticalFlow.png"
            >
              <source src="/videos/output_dense_flow.mp4" type="video/mp4" />
              Dein Browser unterstützt keine Videoanzeige.
            </video>
          </div>
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-accent mt-10 mb-2">
          Herausforderung
        </h2>
        <p>{project.challenge}</p>

        <h2 className="text-2xl font-semibold text-accent mt-10 mb-2">
          Unsere Lösung
        </h2>
        <p>{project.solution}</p>

        <h2 className="text-2xl font-semibold text-accent mt-10 mb-2">
          Ergebnis
        </h2>
        <p>{project.result}</p>

        {project.link && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-accent mt-10 mb-2">
              Projektlink
            </h2>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black dark:text-white hover:bg-primary/90 transition shadow-md"
            >
              Projekt ansehen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7m0 0v7m0-7L10 14"
                />
              </svg>
            </Link>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-accent mt-10 mb-2">
          Techstack
        </h2>
        <ul>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-20 mb-4">Weitere Projekte</h2>
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
