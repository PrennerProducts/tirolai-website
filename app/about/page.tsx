// app/about/page.tsx
'use client';

// import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto mt-6 px-6 py-20 text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Über uns</h1>

      <p className="text-lg mb-6">
        Willkommen bei <strong>TirolAI</strong> – wo Ideen zu smarten,
        skalierbaren Lösungen werden. Unser Team verbindet Perspektiven aus
        Nord- und Südtirol und arbeitet grenzüberschreitend daran, die digitale
        Zukunft nachhaltig mitzugestalten – effizient, ethisch und innovativ.
      </p>

      <p className="text-lg mb-6">
        Unser Team verbindet Expertise aus Mechatronik, Künstlicher Intelligenz,
        Internet of Things und moderner Webentwicklung. Dabei denken wir
        Technologie nie isoliert – sondern immer im Dienst der Menschen, die sie
        nutzen.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Unsere Vision</h2>
      <p className="text-base text-muted-foreground mb-6">
        Wir glauben daran, dass intelligente Systeme echte Probleme lösen müssen
        – nicht Buzzword-getrieben, sondern nutzbringend, transparent und fair.
        TirolAI steht für verantwortungsvolle Innovation: verständlich,
        erweiterbar und mit klarer Wirkung. Unser Ziel ist es, AI und IoT nicht
        nur großen Konzernen, sondern auch Startups, mittelständischen
        Unternehmen und Organisationen in Tirol zugänglich zu machen.
      </p>

      <p className="text-base text-muted-foreground mb-6">
        Wir wollen nicht nur mitdenken, sondern vorausdenken. Gemeinsam mit
        unseren Kund:innen schaffen wir digitale Werkzeuge, die Prozesse
        vereinfachen, Entscheidungen unterstützen und nachhaltige Mehrwerte
        liefern.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Unser Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          {/* <Image
            src="/images/dev1.jpg"
            alt="Martin Seppi"
            width={96}
            height={96}
            className="rounded-full mb-4 object-cover"
          /> */}
          <h3 className="text-xl font-semibold mb-1">Martin Seppi</h3>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Machine Learning Engineer
          </p>
          <p className="text-sm text-muted-foreground">
            BSc in Software Engineering, derzeit im MSc-Studium Artificial
            Intelligence. Spezialisiert auf Machine Learning, Reinforcement
            Learning und datengetriebene Systeme – mit Fokus auf
            Modellentwicklung, Evaluation und Dateninfrastruktur.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          {/* <Image
            src="/images/lukas.png"
            alt="Lukas Prenner"
            width={200}
            height={200}
            className="rounded-full mb-4 object-cover"
          /> */}
          <h3 className="text-xl font-semibold mb-1">Lukas Prenner</h3>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            AI Engineer & UX Developer
          </p>
          <p className="text-sm text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              BSc in Software Engineering, derzeit MSc-Studium in Artificial
              Intelligence. Bringt Erfahrung in Webentwicklung (Frontend &
              Backend), UI/UX, DevOps sowie der Integration von KI-Systemen in
              skalierbare Webanwendungen mit.
            </p>
          </p>
        </div>
        {/* 
        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <Image
            src="/images/dev3.jpg"
            alt="Dr. Tech"
            width={96}
            height={96}
            className="rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-1">Sepp Hochstapler</h3>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            IoT Systems Architect
          </p>
          <p className="text-sm text-muted-foreground">
            Spezialist für LSTM, Supervised und Unsupervised Leraning.
          </p>
        </div> */}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Was uns auszeichnet</h2>
      <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
        <li>Hands-on Mentalität & Startup-Speed</li>
        <li>Verständnis für technische Tiefe UND Nutzerbedürfnisse</li>
        <li>Offene Kommunikation auf Augenhöhe</li>
        <li>Agile Entwicklung und modulare Systemarchitektur</li>
        <li>Leidenschaft für Qualität, Sicherheit & UX</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Unsere Mission</h2>
      <p className="text-base text-muted-foreground mb-6">
        Wir wollen Tirol – von Nord bis Süd – zu einem Ort machen, an dem
        moderne Technologie nicht hinterherhinkt, sondern vorausgeht. TirolAI
        ist die Schnittstelle zwischen kreativen Ideen und technologischer
        Umsetzung. Egal ob Pilotprojekt oder Fullstack-System: Wir begleiten
        euch vom ersten Konzept bis zur finalen Implementierung – praxisnah,
        grenzüberschreitend und zukunftssicher.
      </p>

      <div className="mt-10 text-center">
        <p className="text-base text-muted-foreground italic">
          Wir glauben an Technologie, die inspiriert – und an Zusammenarbeit,
          die begeistert.
        </p>
      </div>
    </main>
  );
}
