'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import {
  Globe,
  Brain,
  SatelliteDish,
  Smartphone,
  Bot,
  UserCog,
} from 'lucide-react';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 bg-zinc-900 text-white text-center px-6 overflow-hidden"
    >
      {/* 🔳 Subtiler SVG-Grid-Hintergrund */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0 H0 V40" stroke="#0ea5e9" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 tracking-tight">
          Unsere Leistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Globe className="w-8 h-8 text-cyan-500" />}
            title="Webentwicklung"
            text="Moderne Weblösungen für Ihr Unternehmen."
            detailedText="Wir entwickeln skalierbare, responsive und performante Webanwendungen mit Next.js, Tailwind, TypeScript und API-Integration. Unser Fokus liegt auf Usability, Wartbarkeit und visueller Klarheit – individuell abgestimmt auf Ihre Prozesse und Kunden."
          />
          <ServiceCard
            icon={<Brain className="w-8 h-8 text-cyan-500" />}
            title="Künstliche Intelligenz"
            text="Maßgeschneiderte AI-Lösungen mit Praxisbezug."
            detailedText="Unser Team vereint tiefgehende Expertise aus dem Bereich Artificial Intelligence mit praktischer Forschungserfahrung. Wir entwickeln maßgeschneiderte Machine-Learning-Lösungen – von Vorhersagemodellen über Computer Vision bis hin zu Reinforcement Learning – inklusive Deployment und Monitoring."
          />
          <ServiceCard
            icon={<SatelliteDish className="w-8 h-8 text-cyan-500" />}
            title="IoT & Embedded"
            text="Intelligente Systeme mit Sensorik & Edge AI."
            detailedText="Mit direkter Forschungserfahrung in IoT-Security und Embedded AI entwickeln wir robuste Systeme mit Sensoranbindung, Datenvorverarbeitung und Edge-Auswertung. Ideal für Industrie, Smart Building, Medizintechnik oder Individualhardware mit Sicherheitsanspruch."
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8 text-cyan-500" />}
            title="Mobile Apps"
            text="Benutzerfreundliche Apps für alle Plattformen."
            detailedText="Wir realisieren Cross-Plattform-Apps mit React Native oder Flutter – performant, UX-optimiert und vollständig integriert in Ihre Backend-Infrastruktur. Ob interne Tools, Kunden-Apps oder MVPs – wir liefern passgenaue Lösungen mit Fokus auf Skalierbarkeit."
          />
          <ServiceCard
            icon={<Bot className="w-8 h-8 text-cyan-500" />}
            title="Automatisierung"
            text="Effizientere Prozesse durch smarte Systeme."
            detailedText="Wir analysieren Ihre Abläufe und identifizieren Potenziale zur digitalen Optimierung. Ob Prozessautomatisierung, API-Verknüpfung, AI-gesteuerte Entscheidungsprozesse oder smarte Workflows – wir entwickeln maßgeschneiderte Tools zur Effizienzsteigerung."
          />
          <ServiceCard
            icon={<UserCog className="w-8 h-8 text-cyan-500" />}
            title="Beratung & Freelance"
            text="Fachliche Verstärkung für Ihr Team."
            detailedText="Sie brauchen kurzfristige Projektunterstützung oder externe AI-Kompetenz? Wir arbeiten remote oder vor Ort, projektweise oder agil mit Ihrem Team – hands-on, technisch versiert und zuverlässig."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  text,
  detailedText,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  detailedText: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="group relative overflow-hidden p-6 bg-zinc-800 border border-white/10 rounded-xl 
          shadow-sm hover:shadow-md hover:ring-2 hover:ring-cyan-500/40 transition-all cursor-pointer text-left"
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition">
            {title}
          </h3>
          <p className="text-zinc-300">{text}</p>
          <div className="mt-4 text-sm text-cyan-400 font-thin tracking-wide transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100">
            Mehr erfahren →
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-zinc-900 text-white rounded-xl shadow-xl px-6 sm:px-8 max-w-xl border border-white/10">
        <DialogHeader className="text-center">
          <div className="mb-2">{icon}</div>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="pt-4 text-base leading-relaxed text-zinc-300">
            {detailedText}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4 text-right">
          <Button variant="cyan" asChild>
            <a href="#contact">Jetzt Beratung anfragen</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
