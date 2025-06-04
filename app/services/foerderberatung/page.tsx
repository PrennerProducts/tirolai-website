import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderberatung | TirolAI',
  description:
    'Fördergelder für Ihre Digitalisierungs- & KI-Projekte sichern – aws, FFG, Land Tirol.',
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold mb-8">Förderberatung</h1>
      <p className="mb-4">
        Digitalisierungs- und KI-Projekte werden in Österreich und Tirol
        umfangreich gefördert.
      </p>
      <p className="mb-4">
        Wir beraten Sie, welche Förderprogramme passen, unterstützen bei der
        Antragstellung und begleiten Ihr Projekt von Anfang an.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Förderprogramme:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>aws KMU.Digital</li>
        <li>FFG Innovationsscheck</li>
        <li>FFG Basisprogramm</li>
        <li>Land Tirol Digitalisierungsförderung</li>
        <li>EU-Kofinanzierungen</li>
      </ul>
    </main>
  );
}
