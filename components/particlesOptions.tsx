import type { ISourceOptions } from '@tsparticles/engine';

export const particlesOptions: ISourceOptions = {
  autoPlay: true,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 60,
  background: {
    color: '#000',
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'trail',
      },
      resize: {
        enable: true,
        delay: 0.5,
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 1,
        pauseOnStop: true,
      },
    },
  },
  particles: {
    number: {
      value: 0, // wichtig bei polygon inline particles
    },
    color: {
      value: ['#4285f4', '#34A853', '#FBBC05', '#EA4335'],
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
    },
    size: {
      value: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      outModes: {
        default: 'destroy',
      },
      trail: {
        enable: false,
      },
    },
  },
  polygon: {
    enable: true,
    type: 'inline',
    move: {
      type: 'path',
      radius: 10,
    },
    inline: {
      arrangement: 'equidistant',
    },
    draw: {
      enable: true,
      stroke: {
        color: {
          value: '#ffffff',
        },
        width: 0.5,
        opacity: 0.2,
      },
    },
    scale: 1,
    url: 'https://particles.js.org/images/google.svg',
  },
};
