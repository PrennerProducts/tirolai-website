// app/about/page.tsx
'use client';

// import Image from 'next/image';
import { Brain, Code, DatabaseZap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto mt-6 px-6 py-20 text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Über uns</h1>

      <p className="text-lg mb-6">
        Willkommen bei <strong>TirolAI</strong> – wo aus Ideen skalierbare,
        intelligente Softwarelösungen entstehen. Unser Team bringt Perspektiven
        aus Nord- und Südtirol zusammen und arbeitet grenzüberschreitend daran,
        digitale Innovation praxisnah und verantwortungsvoll voranzutreiben.
      </p>

      <p className="text-lg mb-6">
        Unsere Kompetenzen vereinen Künstliche Intelligenz, Internet of Things
        und moderne Webentwicklung. Wir entwickeln Technologien mit echtem
        Mehrwert – integriert, anwenderorientiert und zukunftsfähig.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Unsere Vision</h2>
      <p className="text-base text-muted-foreground mb-6">
        Wir sind überzeugt: Intelligente Systeme sollten konkrete Probleme lösen
        – nicht Trends hinterherlaufen. TirolAI steht für verständliche,
        modulare und transparente Technologie. Unser Ziel ist es, AI und IoT
        nicht nur großen Unternehmen, sondern auch Startups, KMU und
        Organisationen in Tirol zugänglich zu machen.
      </p>

      <p className="text-base text-muted-foreground mb-6">
        Wir denken nicht nur mit – wir denken voraus. Gemeinsam mit unseren
        Kund:innen gestalten wir digitale Werkzeuge, die Prozesse vereinfachen,
        Entscheidungen unterstützen und nachhaltige Mehrwerte schaffen.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Unser Team</h2>
      <div className="grid md:grid-cols-3 gap-6 bg-white/5 rounded-2xl">
        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          {/* <Image
            src="/images/dev1.jpg"
            alt="Martin Seppi"
            width={96}
            height={96}
            className="rounded-full mb-4 object-cover"
          /> */}
          <Brain className="w-20 h-20 text-cyan-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-1">Martin Seppi</h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            Machine Learning Engineer
          </div>
          <p className="text-sm text-muted-foreground">
            BSc in Software Engineering, aktuell MSc Artificial Intelligence.
            Martin ist unser Machine-Learning-Spezialist mit Fokus auf
            Reinforcement Learning, modellbasierte KI und datengetriebene
            Systeme. Er bringt tiefes Verständnis für Backend-Entwicklung,
            API-Design, Datenbanken und skalierbare Systemarchitekturen mit –
            und sorgt dafür, dass auch komplexe KI-Systeme performant und robust
            in produktiven Anwendungen laufen.
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
          <Code className="w-20 h-20 text-pink-500 mb-4" />

          <h3 className="text-2xl font-semibold mb-1">Lukas Prenner</h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            Fullstack AI & IoT Developer
          </div>
          <p className="text-sm text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              BSc in Software Engineering, derzeit MSc-Studium in Artificial
              Intelligence. Bringt fundierte Erfahrung in moderner
              Webentwicklung (Frontend & Backend), UI/UX-Design, DevOps und der
              Integration von KI-Systemen in skalierbare Webplattformen mit.
              Darüber hinaus war er aktiv an Forschungsprojekten im Bereich
              IoT-Security beteiligt und verfügt über tiefgehendes Wissen in
              IT-Sicherheit und Embedded-Systemen.
            </p>
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <DatabaseZap className="w-20 h-20  text-cyan-500  mb-4" />

          <h3 className="text-2xl font-semibold mb-1">Robert Gollner</h3>
          <div className="text-sm sm:text-base font-semibold text-accent mb-3 tracking-wide text-gray-600">
            SAP & AI Engineer
          </div>
          <p className="text-sm text-muted-foreground">
            BSc in Software Engineering, aktuell MSc-Studium in Artificial
            Intelligence. Robert bringt fundierte Erfahrung aus internationalen
            Unternehmen mit, in denen er an der Entwicklung und Optimierung von
            ERP-Systemen gearbeitet hat – insbesondere im SAP-Umfeld. Sein
            Schwerpunkt liegt auf der Integration von SAP mit modernen
            Webtechnologien und KI, um Geschäftsprozesse intelligent zu
            automatisieren. Spezialisiert auf smarte Schnittstellen, skalierbare
            Architekturen und effiziente, zukunftsorientierte Systemlösungen.
          </p>
        </div>
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
