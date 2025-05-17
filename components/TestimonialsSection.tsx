'use client';

import { Card, CardContent } from '@/components/ui/card';

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

export default function TestimonialsSection() {
  return (
    //   <section id="services" className="py-16 bg-zinc-800 text-center px-6">

    <section className="py-24 bg-zinc-800 text-foreground">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Was unsere Kunden sagen
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-card border border-border shadow-md bg-white"
          >
            <CardContent className="p-6 flex flex-col gap-4 ">
              <p className="text-muted-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-sm font-semibold">
                {t.name}
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
