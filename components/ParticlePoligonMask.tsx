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
    fullScreen: {
      enable: false, // ❗️Damit nicht der ganze Screen belegt wird
    },
    pauseOnBlur: false,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
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
        color: 'random',
        distance: 25,
        enable: true,
        opacity: 1,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        speed: 1,
      },
      number: {
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        value: { min: 0.3, max: 0.8 },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: '#fff',
          opacity: 0.2,
          width: 1,
        },
      },
      enable: true,
      move: {
        radius: 5,
      },
      position: {
        x: 22,
        y: 10,
      },
      inline: {
        arrangement: 'equidistant',
      },
      scale: 0.3,
      type: 'inline',
      url: 'Logo.svg',
    },
    background: {
      color: '#0f0f0f',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  return init ? (
    <div className="relative w-full max-w-[1064.5px] aspect-[1064/693] z-10">
      <Particles id="polygonParticles" options={options} />
    </div>
  ) : null;
}
