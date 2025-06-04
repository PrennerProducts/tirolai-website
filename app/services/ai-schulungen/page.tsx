import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Schulungen | TirolAI',
  description:
    'Mitarbeiter fit für KI machen – Prompt Engineering, Ethik, Datenschutz & sichere AI-Nutzung.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">AI-Schulungen</h1>
      <p className="mb-4">
        Technologie allein reicht nicht – entscheidend sind die Menschen, die
        sie anwenden.
      </p>
      <p className="mb-4">
        Wir schulen Ihre Teams, KI sicher, effizient und ethisch korrekt
        einzusetzen. Mit Fokus auf praktische Anwendbarkeit für den
        Berufsalltag.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Schulungsthemen:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Prompt Engineering & effektive GPT-Nutzung</li>
        <li>AI-Tools im Tagesgeschäft</li>
        <li>Ethik & Compliance beim KI-Einsatz</li>
        <li>Datenschutz beim Arbeiten mit AI</li>
      </ul>
    </main>
  );
}
