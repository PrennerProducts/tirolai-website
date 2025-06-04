'use client';

import {
  BrainCircuit,
  Rocket,
  Workflow,
  Smartphone,
  GaugeCircle,
  GraduationCap,
  BadgeDollarSign,
  BotMessageSquare,
} from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 text-center px-6 overflow-hidden bg-background text-foreground w-auto"
    >
      <div className="max-w-6xl mx-auto relative z-10 bg-surface/80 backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-foreground mb-12 tracking-tight">
          Unsere Leistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8 z-10">
          <ServiceCard
            icon={<BrainCircuit className="w-8 h-8 text-cyan-500" />}
            title="KI-Potenzialanalyse"
            text="Wir analysieren Prozesse und identifizieren sinnvolle KI-Anwendungen."
            href="/services/ki-potenzialanalyse"
          />
          <ServiceCard
            icon={<Rocket className="w-8 h-8 text-cyan-500" />}
            title="AI-Prototyping"
            text="Schnelle KI-Prototypen für Chatbots, Forecasts, OCR & Co."
            href="/services/ai-prototyping"
          />
          <ServiceCard
            icon={<BotMessageSquare className="w-8 h-8 text-cyan-500" />}
            title="AI Agents & Co-Piloten"
            text="Entwicklung intelligenter Agents auf Basis von LLMs & RAG."
            href="/services/ai-agents"
          />
          <ServiceCard
            icon={<Workflow className="w-8 h-8 text-cyan-500" />}
            title="Prozessautomatisierung"
            text="Backoffice, Buchhaltung und HR automatisieren mit RPA & Workflows."
            href="/services/prozessautomatisierung"
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8 text-cyan-500" />}
            title="Web & App Entwicklung"
            text="Digitale Plattformen, Kundenportale & Apps mit KI-Integration."
            href="/services/web-app-entwicklung"
          />
          <ServiceCard
            icon={<GaugeCircle className="w-8 h-8 text-cyan-500" />}
            title="IoT & Predictive Solutions"
            text="Maschinendaten für Predictive Maintenance & Industrie 4.0 nutzen."
            href="/services/iot-predictive"
          />
          <ServiceCard
            icon={<GraduationCap className="w-8 h-8 text-cyan-500" />}
            title="AI-Schulungen"
            text="Mitarbeiter fit für KI & sichere AI-Nutzung machen."
            href="/services/ai-schulungen"
          />
          <ServiceCard
            icon={<BadgeDollarSign className="w-8 h-8 text-cyan-500" />}
            title="Förderberatung"
            text="Förderungen bei aws, FFG & Land Tirol optimal nutzen."
            href="/services/foerderberatung"
          />
        </div>
      </div>
    </section>
  );
}
