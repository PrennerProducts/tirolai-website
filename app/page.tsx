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
import { useTheme } from 'next-themes';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
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
        <div className="absolute inset-0 -z-10">
          <ParticlesBackground isDark={isDark} />
        </div>
      )}
      <Hero />

      <ServicesSection />

      {/* 💼 Project-Slider */}
      <section className="relative py-24 bg-background text-foreground overflow-hidden">
        {/* 🟦 Hintergrund-Particles ganz hinten */}

        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full animate-slow-pan opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="project-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path d="M40 0 H0 V40" stroke="#0ea5e9" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#project-grid)" />
          </svg>
        </div>

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

      {/* 📩 Kontakt-Section */}
      <div className="bg-surface">
        <ContactSection />
      </div>
    </main>
  );
}
