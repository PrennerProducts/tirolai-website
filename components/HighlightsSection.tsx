'use client';

import { Mountain, Brain, TrendingUp } from 'lucide-react';

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900">
          Was uns auszeichnet
        </h3>
        <p className="mt-4 text-zinc-600  text-lg max-w-2xl mx-auto">
          Technische Exzellenz trifft auf regionale Expertise – wir entwickeln
          skalierbare Systeme, die nicht nur funktionieren, sondern begeistern.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-10">
        <div className="grid sm:grid-cols-3 gap-8 text-left">
          <Highlight
            icon={<Mountain className="w-8 h-8 text-cyan-600" />}
            title="Regional verwurzelt"
            text="Zwischen Nord- und Südtirol verwurzelt – wir verbinden alpine Bodenständigkeit mit digitaler Innovationskraft. Regional denken, global skalieren."
          />
          <Highlight
            icon={<Brain className="w-8 h-8 text-cyan-600" />}
            title="Technologisch führend"
            text="Unser Schwerpunkt liegt auf künstlicher Intelligenz – fundiert, anwendungsnah und forschungsbasiert. Wir entwickeln moderne Lösungen mit Machine Learning, Computer Vision und generativer AI, die echten Mehrwert schaffen – skalierbar, robust und nahtlos integrierbar in Web-, Mobile- und IoT-Systeme."
          />
          <Highlight
            icon={<TrendingUp className="w-8 h-8 text-cyan-600" />}
            title="Skalierbar & nachhaltig"
            text="Ob Prototyp oder Großprojekt – wir bauen Systeme, die wachsen können. Unsere Lösungen sind flexibel, wartbar und zukunftssicher – technisch wie wirtschaftlich."
          />
        </div>
        <p className="text-center text-white mt-12">
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
    <div className="group flex flex-col items-start bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 transition hover:shadow-xl hover:bg-white/20 hover:-translate-y-1">
      <div className="mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-white/90 leading-relaxed">{text}</p>
    </div>
  );
}
