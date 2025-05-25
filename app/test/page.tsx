// Datei: app/test/page.tsx
'use client';

import AnimatedLogo from '@/components/AnimateLogo';
import FractalTree from '@/components/FractalTree';
// import PolygonMaskParticles from '@/components/ParticlePoligonMask';
import ParticlesAwesome from '@/components/ParticlesAwesome';
// import ParticlesWrapper from '../../components/ParticlesWrapper';

export default function TestPage() {
  return (
    <div className="w-full h-screen bg-white">
      {/* <ParticlesAwesome /> */}
      {/* <FractalTree /> */}
      <AnimatedLogo />
    </div>
  );
}
