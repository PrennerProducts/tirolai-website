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
      className="relative z-10 py-24 text-center px-6 overflow-hidden bg-background text-foreground w-auto"
    >
      {/* 🔳 Subtiler SVG-Grid-Hintergrund */}

      <div className="max-w-6xl mx-auto relative z-10 bg-surface/80 backdrop-blur-md ">
        <h2 className="text-4xl font-extrabold text-foreground mb-12 tracking-tight">
          Unsere Leistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8 z-10">
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
          className="group relative overflow-hidden p-6 bg-surface border border-muted rounded-xl 
  shadow-sm hover:shadow-md hover:ring-2 hover:ring-accent/40 transition-all cursor-pointer text-left"
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition">
            {title}
          </h3>
          <p className="text-muted">{text}</p>
          <div className="mt-4 text-sm text-accent font-thin tracking-wide transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100">
            Mehr erfahren →
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white dark:bg-[#1f2937] text-black dark:text-white border border-muted rounded-xl shadow-xl p-8">
        <DialogHeader className="text-center">
          <div className="mb-2">{icon}</div>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="pt-4 text-base leading-relaxed text-muted">
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
