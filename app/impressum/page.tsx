export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 mt-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          <strong>Tirol AI</strong>
          <br />
          Inhaber: Lukas Johannes Prenner
          <br />
          Schießstand 356
          <br />
          6108 Scharnitz
          <br />
          Österreich
        </p>

        <p>
          E-Mail:{' '}
          <a
            href="mailto:info@tirolai.at"
            className="text-blue-600 hover:underline"
          >
            info@tirolai.at
          </a>
        </p>

        <p>
          Unternehmensform: Einzelunternehmen
          <br />
          UID-Nummer: ATU73692408
          <br />
          Mitglied der Wirtschaftskammer Österreich (WKO)
          <br />
          Fachgruppe: Information und Consulting
          <br />
          Gewerbeberechtigung: Dienstleistungen in der automatischen
          Datenverarbeitung und Informationstechnik
        </p>

        <p>
          Zuständige Aufsichtsbehörde:
          <br />
          Bezirkshauptmannschaft Innsbruck-Land
        </p>

        <p>
          Dieses Impressum gilt auch für folgende Onlinepräsenzen:
          <br />
          <a
            href="https://www.tirolai.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.tirolai.at
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8">Online-Streitbeilegung</h2>
        <p>
          Verbraucher haben die Möglichkeit, Beschwerden an die
          Online-Streitbeilegungsplattform der EU zu richten:
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          <br />
          Sie können allfällige Beschwerden auch an die oben genannte
          E-Mail-Adresse richten.
        </p>
      </div>
    </main>
  );
}
