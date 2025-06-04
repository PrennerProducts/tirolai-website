import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IoT & Predictive Solutions | TirolAI',
  description:
    'Maschinendaten intelligent nutzen – Predictive Maintenance & Industrie 4.0',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">IoT & Predictive Solutions</h1>
      <p className="mb-4">
        Viele Industriebetriebe sammeln heute bereits Maschinendaten — doch nur
        wenige nutzen diese auch intelligent.
      </p>
      <p className="mb-4">
        Wir helfen, IoT-Daten mit KI-Methoden zu analysieren, Ausfälle
        frühzeitig zu erkennen und Produktionsprozesse zu optimieren. Predictive
        Maintenance spart Kosten, reduziert Stillstände und erhöht die
        Effizienz.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Unsere Leistungen:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Sensoranbindung & Datenintegration</li>
        <li>Anomalieerkennung & Predictive Maintenance Modelle</li>
        <li>Datenplattformen & Dashboards</li>
        <li>Integration in bestehende ERP/MES-Systeme</li>
        <li>IoT-Security Audits</li>
      </ul>
    </main>
  );
}
