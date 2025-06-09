'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';
import useLowFPS from '@/hooks/useLowFPS';
import { useTheme } from 'next-themes';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const isMobile = useIsMobileOrTablet();
  const isLowFPS = useLowFPS(30);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: isMobile ? 60 : 120,
      interactivity: {
        events: {
          onClick: {
            enable: !isLowFPS,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: { quantity: isMobile ? 2 : 5 },
          repulse: { distance: 100, duration: 0.1 },
        },
      },
      particles: {
        color: { value: isDark ? '#ffffff' : '#000000' },
        links: {
          color: isDark ? '#ffffff' : '#000000',
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: isMobile ? 20 : 60,
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 2, max: 4 } },
      },
      detectRetina: true,
    }),
    [isMobile, isLowFPS, isDark]
  );

  if (!mounted || !init || !resolvedTheme) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles-background"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
