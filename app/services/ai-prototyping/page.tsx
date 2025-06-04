import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Prototyping | TirolAI',
  description:
    'Schnelle KI-Prototypen für Ihr Unternehmen – fix kalkuliert, praxisnah und förderfähig.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">AI-Prototyping</h1>
      <p className="mb-4">
        Sie möchten KI im Unternehmen einsetzen, aber nicht blind investieren?
        Mit unserem AI-Prototyping-Package entwickeln wir innerhalb weniger
        Wochen einen ersten funktionsfähigen Prototyp.
      </p>
      <p className="mb-4">
        So können Sie reale Ergebnisse testen und fundiert über weitere
        Investitionen entscheiden. Das Prototyping eignet sich auch hervorragend
        für Förderprojekte.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Typische Prototypen:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Chatbots & virtuelle Assistenten</li>
        <li>OCR & Dokumentenverarbeitung</li>
        <li>Forecasting & Absatzprognosen</li>
        <li>Anomalieerkennung in Produktion & Logistik</li>
        <li>Qualitätskontrolle per Bilderkennung</li>
      </ul>
    </main>
  );
}
