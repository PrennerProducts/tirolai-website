import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents & Co-Piloten | TirolAI',
  description:
    'Intelligente AI Agents, die eigenständig Informationen verarbeiten, Prozesse steuern und mit Nutzern interagieren.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">AI Agents & Co-Piloten</h1>
      <p className="mb-4">
        Mit intelligenten AI Agents erweitern wir Ihre Geschäftsprozesse um
        leistungsfähige, selbstlernende Systeme. Auf Basis modernster
        Sprachmodelle (LLMs), Retrieval-Augmented Generation (RAG) und
        individueller Unternehmensdaten entstehen digitale Assistenten, die
        Aufgaben übernehmen, Entscheidungen vorbereiten und mit Ihren
        Mitarbeitern interagieren.
      </p>
      <p className="mb-4">
        Die Agents lassen sich nahtlos in bestehende Systeme, Plattformen und
        Workflows integrieren und bieten echten Mehrwert für interne Abläufe und
        Kundenservices.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Typische Einsatzbereiche:
      </h2>
      <ul className="list-disc list-inside mb-8">
        <li>Conversational Agents & Chatbots (z. B. für Kundensupport & HR)</li>
        <li>Interne Wissensdatenbanken mit natürlicher Sprache durchsuchen</li>
        <li>Dokumenten-Analyse & automatisierte Zusammenfassungen</li>
        <li>
          AI Co-Piloten für Fachabteilungen (z. B. Recht, Medizin, Technik)
        </li>
        <li>LLM-gestützte API-Integration für komplexe Automatisierungen</li>
      </ul>
    </main>
  );
}
