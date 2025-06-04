import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prozessautomatisierung | TirolAI',
  description:
    'Automatisieren Sie Backoffice, Buchhaltung und HR – mit RPA, Workflows und API-Schnittstellen.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">Prozessautomatisierung</h1>
      <p className="mb-4">
        Die größten Effizienzpotenziale liegen oft in internen Abläufen:
        Buchhaltung, HR, Verwaltung, Administration, Reporting.
      </p>
      <p className="mb-4">
        Wir automatisieren manuelle Prozesse, reduzieren Fehler und entlasten
        Ihre Mitarbeiter. Ob mit RPA, Schnittstellen oder Low-Code-Automation –
        wir liefern praxisnahe Automatisierung für Ihren Alltag.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Typische Anwendungsfälle:
      </h2>
      <ul className="list-disc list-inside mb-8">
        <li>Automatisierte Rechnungsverarbeitung</li>
        <li>Personalverwaltung & Bewerbungsprozesse</li>
        <li>E-Mail- & Formular-Workflows</li>
        <li>CRM- und ERP-Schnittstellen</li>
        <li>Digitale Buchhaltung & Belegmanagement</li>
      </ul>
    </main>
  );
}
