// Datei: components/PolygonMaskParticles.tsx
'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
import type { ISourceOptions } from '@tsparticles/engine';

export default function PolygonMaskParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    autoPlay: true,
    fullScreen: { enable: false, zIndex: -10 },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
        },
      },
    },
    particles: {
      color: { value: '#000000' },
      links: {
        enable: true,
        color: '#000000',
        distance: 1,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: 'bounce' },
      },
      number: { value: 500 },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      shape: { type: 'circle' },
      size: { value: 1 },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: { value: '#000000' },
          width: 1,
          opacity: 0.9,
        },
      },
      enable: true,
      inline: { arrangement: 'equidistant' },
      move: {
        radius: 10,
        type: 'path',
      },
      scale: 0.5,
      type: 'inline',
      url: '/Logo.svg',
      position: {
        x: 50,
        y: 50,
      },
    },
  };

  return init ? <Particles id="polygonParticles" options={options} /> : null;
}
