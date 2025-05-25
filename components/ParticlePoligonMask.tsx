// Datei: components/PolygonMaskParticles.tsx
'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
import type { ISourceOptions } from '@tsparticles/engine';
import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';
import useLowFPS from '@/hooks/useLowFPS';

export default function PolygonMaskParticles() {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobileOrTablet(); // max-width: 1024px
  const isLowFPS = useLowFPS(30); // Schwelle 30 FPS

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: isMobile ? 30 : 60,
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
        distance: isMobile ? 20 : 30,
        enable: !isLowFPS,
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
        value: isMobile ? 130 : 400,
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
        enable: !isLowFPS,
        stroke: {
          color: '#fff',
          opacity: 0.5,
          width: 1,
        },
      },
      enable: true,
      move: {
        radius: 5,
      },
      position: {
        x: isMobile ? 50 : 32,
        y: isMobile ? 60 : 50,
      },
      inline: {
        arrangement: 'equidistant',
      },
      scale: isMobile ? 0.5 : 1.2,
      type: 'inline',
      url: 'Mountain.svg',
    },
    background: {
      color: '#27272a',
      //color: '#fff',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  };

  return init ? (
    <div className="relative w-full max-w aspect-1064/693 z-10">
      <Particles id="polygonParticles" options={options} />
    </div>
  ) : null;
}
