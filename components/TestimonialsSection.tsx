'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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
  '/images/customerlogos/ergophysion.svg',
  '/images/customerlogos/mci.png',
  '/images/customerlogos/jku.svg',
  '/images/customerlogos/trento.jpg',
  '/images/customerlogos/lukas.png',
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll Effekt
  useEffect(() => {
    let animationFrame: number;
    let lastTimestamp = 0;

    const scrollSpeed = 0.5;

    const animate = (timestamp: number) => {
      if (trackRef.current) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp;
          trackRef.current.scrollLeft += scrollSpeed * delta;
          // Loop-Ende zurücksetzen
          if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
            trackRef.current.scrollLeft = 0;
          }
        }
        lastTimestamp = timestamp;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

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

        <div className="relative overflow-hidden w-full">
          <div className="flex w-[200%] animate-marquee">
            {/* Doppelte Logos für Endlosschleife */}
            {[...customerLogos, ...customerLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Kundenlogo ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
