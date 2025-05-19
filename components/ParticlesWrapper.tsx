// Datei: components/ParticlesWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
import type { ISourceOptions } from '@tsparticles/engine';

export default function ParticlesWrapper() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    autoPlay: true,
    fullScreen: {
      enable: false, // wichtig: nicht fullscreen!
    },
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
          opacity: 0.8,
          size: 6,
        },
        grab: {
          distance: 400,
          links: { opacity: 1 },
        },
      },
    },
    particles: {
      color: {
        value: [
          '#00FFFF',
          '#00F5A0',
          '#FF00FF',
          '#FF4DFF',
          '#8A2BE2',
          '#00BFFF',
          '#39FF14',
          '#FF6EC7',
        ],
      },
      links: {
        enable: true,
        color: { value: 'random' },
        distance: 30,
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: {
          default: 'bounce',
        },
      },
      number: {
        value: 200,
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 3,
      },
    },
    polygon: {
      enable: true,
      type: 'inline',
      move: {
        radius: 8,
        type: 'path',
      },

      url: '/Logo.svg',
      scale: 0.4,
      position: {
        x: 0,
        y: -25,
      },
      inline: {
        arrangement: 'equidistant',
      },
      draw: {
        enable: true,
        stroke: {
          color: { value: '#000000' },
          width: 4,
          opacity: 1,
        },
      },
    },
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles-logo" // NEUE ID!
          options={options}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent', // Canvas selbst durchsichtig
            pointerEvents: 'none', // Kein Hover-Blocking auf dem Logo
          }}
        />
      )}
    </>
  );
}
