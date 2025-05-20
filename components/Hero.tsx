'use client';

import ParticlesBackground from './ParticlesBackground';
import { Button } from '@/components/ui/button';
// import ParticlesWrapper from './ParticlesWrapper';
import PolygonMaskParticles from './ParticlePoligonMask';
import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';

export default function Hero() {
  const isMobileOrTablet = useIsMobileOrTablet(); // max-width: 1024px

  return (
    <main>
      <section className="relative isolate overflow-hidden min-h-screen flex items-center  bg-zinc-800">
        <div className="absolute inset-0 z-[50]">
          <ParticlesBackground />
        </div>
        {/* Partikel-Hintergrund */}
        {!isMobileOrTablet && (
          <div className="absolute inset-0 z-[-10]">
            <PolygonMaskParticles />
          </div>
        )}

        {/* Inhalt */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
            {/* Linke Hälfte: Logo */}
            <div className="flex justify-center items-center min-h-[400px]">
              {/* <ParticlesWrapper /> */}
              {/* <PolygonMaskParticles /> */}
            </div>

            {/* Rechte Hälfte: Text */}
            <div className="text-white text-center md:text-left flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Digitale Intelligenz
                <br className="hidden sm:block" /> aus Tirol.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white max-w-xl">
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
