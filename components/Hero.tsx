'use client';

// import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import { Button } from '@/components/ui/button';
import ParticlesWrapper from './ParticlesWrapper';

export default function Hero() {
  return (
    <main>
      <section className="relative isolate overflow-hidden min-h-screen flex items-center">
        {/* Partikel-Hintergrund */}
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full -z-10">
          <ParticlesBackground />
        </div>
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />

        {/* Inhalt */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Logo / Illustration */}
            <div className="relative z-10 flex justify-start items-center min-h-[400px] min-w-[400px]">
              <ParticlesWrapper />
            </div>

            {/* Text & CTA */}
            <div className="text-black  text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Digitale Intelligenz aus Tirol.
              </h1>
              <p className="mt-6 text-lg leading-8 text-black/80  max-w-xl mx-auto md:mx-0">
                Wir entwickeln smarte Web- & KI-Lösungen für Unternehmen, die
                vorausdenken.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 sm:gap-x-6">
                <Button variant="cyan" asChild>
                  <a href="#contact">Jetzt beraten lassen</a>
                </Button>

                <Button variant="ghost" asChild>
                  <a href="#about">Mehr erfahren →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
