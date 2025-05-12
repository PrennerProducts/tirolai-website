'use client';

import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { tsParticles } from '@tsparticles/engine';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
import type { ISourceOptions } from '@tsparticles/engine';

export default function ParticlePolygonMask() {
  const [options, setOptions] = useState<ISourceOptions>();

  useEffect(() => {
    (async () => {
      await loadPolygonMaskPlugin(tsParticles);
      const particlesLoaded = async (container?: Container) => {
        console.log('Particles loaded:', container);
        console.log('Loaded shape:', container?.polygon?.raw?.path);
      };
      setOptions({
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: '#111111' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3,
            },
          },
        },
        particles: {
          number: { value: 200 },
          color: { value: '#ff00ff' },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.05, max: 0.23 },
            animation: {
              enable: true,
              speed: 2,
            },
          },
          size: { value: 1 },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: 'bounce' },
          },
          links: {
            enable: true,
            distance: 30,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
        },
        polygon: {
          enable: true,
          type: 'inline',
          move: {
            type: 'path',
            radius: 1,
          },
          inline: {
            arrangement: 'equidistant',
          },
          draw: {
            enable: true,
            stroke: {
              color: { value: '#000' },
              width: 1,
              opacity: 0.2,
            },
          },
          scale: 1.5,
          url: '/TirolAiLogo.svg', // Stelle sicher, dass der Pfad stimmt
          position: {
            x: 50,
            y: 50,
          },
        },
        detectRetina: true,
      });
    })();
  }, []);

  if (!options) return null;

  return <Particles id="tsparticles" options={options} />;
}
