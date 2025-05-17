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
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ServicesSection />
      {/* Slider statt Grid */}
      <h1 className="text-3xl font-bold text-center mb-10 mt-6">
        Erfolgsgeschichten
      </h1>
      <ProjectCarousel projects={projects} />
      <div className="text-center mt-8  mb-6">
        <Link
          href="/references"
          className="text-primary font-semibold underline"
        >
          Alle Referenzen ansehen →
        </Link>
      </div>
      <TestimonialsSection /> {/* 👈 Hier einfügen */}
      <HighlightsSection />
      <div className="bg-zinc-800">
        <ContactSection />
      </div>
    </main>
  );
}
