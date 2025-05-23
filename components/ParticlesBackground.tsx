'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import useLowFPS from '@/hooks/useLowFPS';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobileOrTablet(); // max-width: 1024px
  const isLowFPS = useLowFPS(30); // Schwelle 30 FPS

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
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
        enable: true,
      },
      // background: {
      //   // color: '#18ffff', // optional
      // },

      fpsLimit: isMobile ? 30 : 60,
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
          value: '#fff',
        },
        links: {
          color: '#fff',
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
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 10 : 60,
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
    [isMobile, isLowFPS]
  );

  if (init) {
    return (
      <div className="absolute inset-0 z-[10] pointer-events-none">
        <Particles
          id="tsparticles-background" // NEUE ID!
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
}
