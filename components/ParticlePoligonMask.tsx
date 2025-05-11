'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';

export default function ParticlePolygonMask() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: {
        color: { value: '#000000' },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          resize: {
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
        color: { value: '#ffffff' },
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
            color: { value: '#fff' },
            width: 1,
            opacity: 0.2,
          },
        },
        scale: 0.5,
        url: '/TirolAiLogo.svg',
        position: {
          x: 50,
          y: 50,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
