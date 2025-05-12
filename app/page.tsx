'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import HighlightsSection from '@/components/HighlightsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // verhindert Hydration-Mismatch

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ServicesSection />
      <HighlightsSection />
      <Footer />
    </main>
  );
}
