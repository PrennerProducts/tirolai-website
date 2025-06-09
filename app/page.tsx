'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import HighlightsSection from '@/components/HighlightsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { ProjectCarousel } from '@/components/ProjectCarusel';
import projects from '@/data/projects.json';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 3600); // ⏱ 3,5 Sekunden nach Page-Load

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* 🌌 Globaler Partikel-Hintergrund */}
      {showParticles && (
        <div className="absolute inset-0 -z-20">
          <ParticlesBackground />
        </div>
      )}

      {/* 🎨 Gradient-Hintergrund ab "Erfolgsgeschichten" */}
      <div className="absolute top-[calc(100vh+400px)] inset-x-0 bottom-0 -z-10 bg-gradient-to-br from-accent/10 via-surface/20 to-transparent dark:via-white/5 pointer-events-none" />

      <Hero />
      <ServicesSection />

      {/* 💼 Project-Slider */}
      <section className="relative py-24 bg-background text-foreground overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-accent text-center mb-12 tracking-tight">
            Erfolgsgeschichten
          </h2>

          <ProjectCarousel projects={projects} />

          <div className="text-center mt-10">
            <Link
              href="/references"
              className="text-accent font-medium hover:underline"
            >
              Alle Referenzen ansehen →
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <HighlightsSection />

      <div className="bg-surface">
        <ContactSection />
      </div>
    </main>
  );
}
