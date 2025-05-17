'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ReferenceCard } from '@/components/ReferenceCard';
import { useEffect, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  industry?: string;
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // alle 5 Sekunden automatisch weiter

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      className="w-full max-w-6xl mx-auto"
      opts={{ loop: true }}
      setApi={setApi}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.slug}
            className="basis-full md:basis-1/2 lg:basis-1/3 h-full"
          >
            <div className="h-full flex">
              <ReferenceCard
                title={project.title}
                summary={project.summary}
                image={project.image}
                href={`/references/${project.slug}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
