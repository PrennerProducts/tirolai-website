'use client';

import { Mountain, Brain, TrendingUp } from 'lucide-react';

export default function HighlightsSection() {
  return (
    <section className="relative py-24  text-foreground overflow-hidden">
      {/* Hintergrund-Grid */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-accent tracking-tight">
            Was uns auszeichnet
          </h3>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Technische Exzellenz trifft auf regionale Expertise – wir entwickeln
            skalierbare Systeme, die nicht nur funktionieren, sondern
            begeistern.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-left">
          <Highlight
            icon={<Mountain className="w-8 h-8" />}
            title="Regional verwurzelt"
            text="Zwischen Nord- und Südtirol verwurzelt – wir verbinden alpine Bodenständigkeit mit digitaler Innovationskraft. Regional denken, global skalieren."
          />
          <Highlight
            icon={<Brain className="w-8 h-8" />}
            title="Technologisch führend"
            text="Unser Schwerpunkt liegt auf künstlicher Intelligenz – fundiert, anwendungsnah und forschungsbasiert. Wir entwickeln moderne Lösungen mit Machine Learning, Computer Vision und generativer AI, die echten Mehrwert schaffen."
          />
          <Highlight
            icon={<TrendingUp className="w-8 h-8" />}
            title="Skalierbar & nachhaltig"
            text="Ob Prototyp oder Großprojekt – wir bauen Systeme, die wachsen können. Unsere Lösungen sind flexibel, wartbar und zukunftssicher – technisch wie wirtschaftlich."
          />
        </div>

        <p className="text-center text-muted/80 mt-16 italic">
          Wir denken nicht nur digital – wir denken voraus.
        </p>
      </div>
    </section>
  );
}

function Highlight({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex flex-col items-start bg-surface/50 backdrop-blur-lg rounded-xl border border-muted/20 p-6 transition hover:shadow-lg hover:border-accent/40">
      <div className="mb-4 text-accent group-hover:text-accent/80 transition-colors duration-300">
        {icon}
      </div>

      <h4 className="text-xl font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-muted leading-relaxed">{text}</p>
    </div>
  );
}
