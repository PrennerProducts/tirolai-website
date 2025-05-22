export default function DatenschutzPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 mt-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TKG 2003).
        </p>

        <h2 className="text-xl font-semibold">Kontakt mit uns</h2>
        <p>
          Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns
          aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>

        <h2 className="text-xl font-semibold">Cookies</h2>
        <p>
          Unsere Website verwendet sogenannte Cookies. Dabei handelt es sich um
          kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
          abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies
          dazu, unser Angebot nutzerfreundlich zu gestalten.
        </p>
        <p>
          Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
          löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Wenn Sie dies nicht wünschen, können Sie Ihren
          Browser so einrichten, dass er Sie über das Setzen von Cookies
          informiert und Sie dies nur im Einzelfall erlauben.
        </p>

        <h2 className="text-xl font-semibold">Web-Analyse</h2>
        <p>
          Diese Website verwendet keine personenbezogene Web-Analyse. Sollten in
          Zukunft Tools wie z.&nbsp;B. Google Analytics verwendet werden, wird
          dies hier entsprechend angepasst und transparent dargestellt.
        </p>

        <h2 className="text-xl font-semibold">Ihre Rechte</h2>
        <p>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
          Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
          gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
          Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich
          bei der Aufsichtsbehörde beschweren. In Österreich ist dies die
          Datenschutzbehörde.
        </p>

        <p>
          Sie erreichen uns unter folgender Adresse:
          <br />
          <strong>Tirol AI</strong>
          <br />
          Inhaber: Lukas Johannes Prenner
          <br />
          Schießstand 356
          <br />
          6108 Scharnitz
          <br />
          E-Mail:{' '}
          <a
            href="mailto:info@tirolai.at"
            className="text-blue-600 hover:underline"
          >
            info@tirolai.at
          </a>
        </p>
      </div>
    </main>
  );
}
