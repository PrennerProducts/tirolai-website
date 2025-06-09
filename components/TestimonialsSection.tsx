'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Martin Feuerstein, Ergophysion',
    quote:
      'Mit TirolAI konnten wir ein vollständig digitales Gesundheitsevent-Management realisieren – inklusive Teilnehmerverwaltung, QR-Code-System, medizinischem Fragebogen und automatisierter Auswertung. Besonders beeindruckt hat uns die KI-gestützte Beweglichkeitsanalyse per Gesichtserkennung und ROM-Winkelberechnung. Die Zusammenarbeit war nicht nur hochprofessionell, sondern auch extrem effizient – das Ergebnis begeistert sowohl unser Team als auch unsere Patient:innen.',
    role: 'Gründer & Geschäftsführer',
  },
  {
    name: 'Dr. Simon Tim, Universität Trento',
    quote:
      'TirolAI hat für unser Forschungsprojekt eine einzigartige Datenbasis geschaffen: Über 400.000 internationale Fechtmatches wurden strukturiert gescraped, normalisiert und ausgewertet – mit Fokus auf Händigkeit und Matchverläufe. Dank dieser Daten konnten wir erstmals großflächig analysieren, ob Linkshänder beim Fechten einen systematischen Vorteil haben. Die Zusammenarbeit war wissenschaftlich fundiert, technisch exzellent und jederzeit lösungsorientiert.',
    role: 'Neurowissenschaftler, Universität Trento',
  },
];

const customerLogos = [
  { src: '/images/customerlogos/ergophysion.svg', width: 120, height: 60 },
  { src: '/images/customerlogos/mci.png', width: 100, height: 50 },
  { src: '/images/customerlogos/jku.svg', width: 80, height: 60 },
  { src: '/images/customerlogos/lukas.png', width: 70, height: 35 },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-24 
 text-foreground overflow-hidden"
    >
      {/* 🧠 Dezent animierter Hintergrund-Grid */}

      {/* 💬 Kundenstimmen */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent">
          Was unsere Kunden sagen
        </h2>

        <div className="grid md:grid-cols-3 gap-8 bg-surface/80 backdrop-blur-md ">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-surface/90 border border-muted/20 rounded-xl shadow-md transition hover:ring-2 hover:ring-accent/40 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <p className="italic text-muted leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-semibold text-foreground mt-4">
                  {t.name}
                  <div className="text-xs text-muted font-normal">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🤝 Kundenlogos */}
        <div className="mt-20 bg-surface/50 backdrop-blur border border-muted/20 p-6 rounded-2xl w-fit mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6 text-accent/80">
            Vertrauensvolle Partnerschaften
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {customerLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={`Kundenlogo ${i}`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
