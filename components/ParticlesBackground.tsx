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

type ParticlesBackgroundProps = {
  isDark: boolean;
};

export default function ParticlesBackground({
  isDark,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobileOrTablet();
  const isLowFPS = useLowFPS(30);

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
      fullScreen: {
        enable: false,
      },
      // background: {
      //   // color: '#18ffff', // optional
      // },

      fpsLimit: isMobile ? 60 : 120,
      interactivity: {
        events: {
          onClick: {
            enable: !isLowFPS,
            //enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: isMobile ? 2 : 5,
          },
          repulse: {
            distance: 100,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: isDark ? '#fff' : '#000',
        },
        links: {
          color: isDark ? '#fff' : '#000',
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 20 : 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [isMobile, isLowFPS, isDark]
  );

  if (init) {
    return (
      <div className="absolute inset-0 -z-10 pointer-events-none ">
        <Particles
          id="tsparticles-background"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
}
