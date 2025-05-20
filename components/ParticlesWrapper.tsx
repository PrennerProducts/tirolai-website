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

  // responsive scaling:
  const [scale, setScale] = useState(0.4);
  const [particlesCount, setParticlesCount] = useState(400);
  const [strokeWidth, setStrokeWidth] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScale(0.31); // Smartphone
        setParticlesCount(200);
        setStrokeWidth(6);
      } else if (width < 1024) {
        setScale(0.25); // Tablet
        setParticlesCount(200);
        setStrokeWidth(0.4);
      } else {
        setScale(0.39); // Desktop
        setParticlesCount(200);
        setStrokeWidth(8);
      }
    };

    handleResize(); // initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options: ISourceOptions = {
    autoPlay: true,
    pauseOnBlur: false,

    fullScreen: {
      enable: false, // wichtig: nicht fullscreen!
    },
    // background: {
    //   color: '#000000',
    //   image: '',
    //   position: '50% 50%',
    //   repeat: 'no-repeat',
    //   size: 'cover',
    // },

    detectRetina: true,
    fpsLimit: 10,
    interactivity: {
      // detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        resize: { enable: true },
      },
      modes: {
        bubble: {
          distance: 2,
          duration: 2,
          opacity: 1,
          size: 7,
          speed: 3,
        },
        // grab: {
        //   distance: 400,
        //   links: { opacity: 1 },
        // },
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
        color: 'random',
        distance: 10,
        opacity: 0.7,
        width: 10,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: 'bounce',
      },
      number: {
        value: particlesCount,
      },
      opacity: {
        value: { min: 0.4, max: 1 },
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
        value: 2,
      },
    },
    polygon: {
      enable: true,
      type: 'inline',
      move: {
        radius: 5,
        type: 'path',
      },

      url: '/thinmountain.svg',
      scale: scale,
      position: {
        x: 0,
        y: -5,
      },
      inline: {
        arrangement: 'equidistant',
      },
      draw: {
        enable: true,
        stroke: {
          color: '#000',
          width: strokeWidth,
          opacity: 1,
        },
      },
    },
  };
  return init ? (
    <div className="relative w-full max-w-[1064.5px] aspect-[1064/693] z-10">
      <Particles id="logo-particles" options={options} />
    </div>
  ) : null;
}
