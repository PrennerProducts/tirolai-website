'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('services');

  return (
    <section
      id="services"
      className="relative z-10 py-24 text-center px-6 overflow-hidden bg-background text-foreground w-auto"
    >
      <div className="max-w-6xl mx-auto relative z-10 bg-surface/80 backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-foreground mb-12 tracking-tight">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 z-10">
          <ServiceCard
            icon={<BrainCircuit className="w-8 h-8 text-cyan-500" />}
            title={t('ki_potenzialanalyse.title')}
            text={t('ki_potenzialanalyse.text')}
            href="/services/ki-potenzialanalyse"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<Rocket className="w-8 h-8 text-cyan-500" />}
            title={t('ai_prototyping.title')}
            text={t('ai_prototyping.text')}
            href="/services/ai-prototyping"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<BotMessageSquare className="w-8 h-8 text-cyan-500" />}
            title={t('ai_agents.title')}
            text={t('ai_agents.text')}
            href="/services/ai-agents"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<Workflow className="w-8 h-8 text-cyan-500" />}
            title={t('prozessautomatisierung.title')}
            text={t('prozessautomatisierung.text')}
            href="/services/prozessautomatisierung"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8 text-cyan-500" />}
            title={t('web_app_entwicklung.title')}
            text={t('web_app_entwicklung.text')}
            href="/services/web-app-entwicklung"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<GaugeCircle className="w-8 h-8 text-cyan-500" />}
            title={t('iot_predictive.title')}
            text={t('iot_predictive.text')}
            href="/services/iot-predictive"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<GraduationCap className="w-8 h-8 text-cyan-500" />}
            title={t('ai_schulungen.title')}
            text={t('ai_schulungen.text')}
            href="/services/ai-schulungen"
            learnMoreText={t('learn_more')}
          />
          <ServiceCard
            icon={<BadgeDollarSign className="w-8 h-8 text-cyan-500" />}
            title={t('foerderberatung.title')}
            text={t('foerderberatung.text')}
            href="/services/foerderberatung"
            learnMoreText={t('learn_more')}
          />
        </div>
      </div>
    </section>
  );
}
