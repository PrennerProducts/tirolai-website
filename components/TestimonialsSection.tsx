'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Anna M., PhysioVital Innsbruck',
    quote:
      'Dank TirolAI konnten wir unsere Terminkoordination komplett automatisieren. Unsere Patient:innen lieben die neue Lösung!',
    role: 'Praxisleitung',
  },
  {
    name: 'Markus L., Fechtverband Österreich',
    quote:
      'Die Analyseplattform von TirolAI liefert uns Auswertungen, die wir vorher nur mit Excel mühsam hinbekommen haben.',
    role: 'Sportdaten-Analyst',
  },
  {
    name: 'Laura K., Salon Kitzstyle',
    quote:
      'Unser WhatsApp-Terminbot ist der Wahnsinn! Endlich keine Anrufe mehr während dem Färben – 100% Empfehlung!',
    role: 'Inhaberin',
  },
];

const customerLogos = [
  { src: '/images/customerlogos/ergophysion.svg', width: 120, height: 60 },
  { src: '/images/customerlogos/mci.png', width: 100, height: 50 },
  { src: '/images/customerlogos/jku.svg', width: 80, height: 60 },
  { src: '/images/customerlogos/lukas.png', width: 50, height: 35 },
];

export default function TestimonialsSection() {
  // const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-zinc-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Was unsere Kunden sagen
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-white border border-border shadow-md">
            <CardContent className="p-6 flex flex-col gap-4">
              <p className="text-muted-foreground italic text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-sm font-semibold text-black">
                {t.name}
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Kunden-Logos */}
      <div className="mt-20 bg-white p-4">
        <h3 className="text-xl font-semibold text-center mb-6 text-black">
          Vertrauensvolle Partnerschaften
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {customerLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
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
    </section>
  );
}
