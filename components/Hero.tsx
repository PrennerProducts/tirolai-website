'use client';

import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
// import BrainGraphic from '@/components/BrainGraphic'; // Optional

export default function Hero() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate overflow-hidden h-[calc(100vh-64px)] flex items-center">
        {/* Partikel (nicht fullscreen) */}
        <div className="absolute inset-0 -z-10">
          <ParticlesBackground />
        </div>
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />

        {/* Content Grid */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Linker Bereich: Bild */}
            <div className="flex justify-center">
              <Image
                src="/brain.svg" // oder deine SVG-Komponente
                alt="Gehirn"
                width={400}
                height={400}
                className="max-w-full h-auto"
                priority
              />
            </div>

            {/* Rechter Bereich: Text */}
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Digitale Intelligenz aus Tirol.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
                Wir entwickeln smarte Web- & KI-Lösungen für Unternehmen, die
                vorausdenken.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 sm:gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:bg-white/90 transition"
                >
                  Jetzt beraten lassen
                </a>
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-white hover:underline"
                >
                  Mehr erfahren →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
