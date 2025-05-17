import { ReferenceCard } from '@/components/ReferenceCard';
import projects from '@/data/projects.json';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ReferencesPage() {
  return (
    <main className="py-20 px-6">
      {/* Überschrift & Einleitung */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Unsere Referenzprojekte
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Von intelligenten Web-Anwendungen bis hin zu spezialisierten KI-Lösungen
        – wir realisieren digitale Projekte mit Wirkung.
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
        <Link href="/kontakt">
          <Button size="lg">Projekt anfragen →</Button>
        </Link>
      </div>
    </main>
  );
}
