// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import HighlightsSection from '@/components/HighlightsSection';
import projects from '@/data/projects.json';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ProjectCarousel } from '@/components/ProjectCarusel';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-50 text-foreground">
      <Hero />
      <ServicesSection />
      {/* Slider statt Grid */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        {/* Grid-Hintergrund */}
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
          <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-12 tracking-tight">
            Erfolgsgeschichten
          </h2>
          <ProjectCarousel projects={projects} />
          <div className="text-center mt-10">
            <Link
              href="/references"
              className="text-cyan-300 font-medium hover:underline"
            >
              Alle Referenzen ansehen →
            </Link>
          </div>
        </div>
      </section>
      <TestimonialsSection /> {/* 👈 Hier einfügen */}
      <HighlightsSection />
      <div className="bg-zinc-800">
        <ContactSection />
      </div>
    </main>
  );
}
