import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Potenzialanalyse | TirolAI',
  description:
    'Wir identifizieren KI-Potenziale in Ihrem Unternehmen – inkl. Datenprüfung, Use-Case-Analyse und Fördercheck.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">KI-Potenzialanalyse</h1>
      <p className="mb-4">
        Viele Unternehmen wissen, dass Künstliche Intelligenz enormes Potenzial
        bietet — aber wo konkret ansetzen? In unserem KI-Potenzialworkshop
        analysieren wir gemeinsam Ihre Prozesse, Daten und Ziele.
      </p>
      <p className="mb-4">
        Wir identifizieren realistische Einsatzmöglichkeiten, berechnen Aufwand
        und Nutzen und legen gemeinsam die optimale Digitalisierungsstrategie
        fest. Unsere Beratung berücksichtigt auch mögliche Förderprogramme (aws,
        FFG, Land Tirol).
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Leistungsumfang:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Prozessanalyse & Use Case Mapping</li>
        <li>Datenverfügbarkeit und -qualität prüfen</li>
        <li>Wirtschaftlichkeitsbetrachtung</li>
        <li>Fördercheck & Förderberatung</li>
        <li>Roadmap für nächste Schritte</li>
      </ul>
    </main>
  );
}
