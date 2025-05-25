'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Martin Feuerstein, Ergophysion',
    quote:
      'Mit TirolAI konnten wir unsere Vision einer KI-gestützten Bewegungsanalyse erstmals realisieren. Die Zusammenarbeit war hochprofessionell, lösungsorientiert – und das Ergebnis begeistert sowohl unser Team als auch unsere Patient:innen.',
    role: 'Gründer & Geschäftsführer',
  },
  {
    name: 'Sarah Müller, MedTech Vision',
    quote:
      'Die Expertise von TirolAI im Bereich Edge AI war entscheidend für die Entwicklung unseres innovativen Diagnosetools. Absolut empfehlenswert.',
    role: 'Leiterin Produktentwicklung',
  },
  {
    name: 'Dr. Jonas Becker, FutureData GmbH',
    quote:
      'Durch TirolAIs maßgeschneiderte ML-Modelle konnten wir unsere Vorhersagegenauigkeit deutlich steigern – und das bei geringerer Latenz.',
    role: 'Head of AI',
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
    <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
      {/* 🧠 Dezent animierter Hintergrund-Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full animate-slow-pan opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="testimonial-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0 H0 V40" stroke="#0ea5e9" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      {/* 💬 Kundenstimmen */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Was unsere Kunden sagen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-zinc-800/90 border border-white/10 rounded-xl shadow-md transition hover:ring-2 hover:ring-cyan-400/30 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <p className="italic text-zinc-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-semibold text-white mt-4">
                  {t.name}
                  <div className="text-xs text-zinc-400 font-normal">
                    {t.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🤝 Kundenlogos */}
        <div className="mt-20 bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl w-fit mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6 text-cyan-200">
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
