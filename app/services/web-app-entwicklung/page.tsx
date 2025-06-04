import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web & App Entwicklung | TirolAI',
  description:
    'Individuelle Webplattformen und Apps – mit KI-Integration und moderner Cloud-Infrastruktur.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">Web- & App-Entwicklung</h1>
      <p className="mb-4">
        Standardsoftware passt nicht immer. Wir entwickeln individuelle
        Webplattformen, Kundenportale und Mobile Apps, exakt auf Ihre
        Anforderungen zugeschnitten — auf Wunsch direkt mit KI-Integration.
      </p>
      <p className="mb-4">
        Modernste Technologien und sichere Cloud-Infrastruktur sorgen für
        zukunftssichere Lösungen.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Typische Projekte:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Kundenportale & Buchungssysteme</li>
        <li>Mitarbeiter-Dashboards & Reportingplattformen</li>
        <li>Produktions- & Qualitätsmanagement-Systeme</li>
        <li>Mobile Apps für Mitarbeiter & Kunden</li>
        <li>Web-Applikationen mit integrierten KI-Funktionen</li>
      </ul>
    </main>
  );
}
