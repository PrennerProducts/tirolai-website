'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimateLogo';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  const [flash, setFlash] = useState(false);
  const [layoutReady, setLayoutReady] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setFlash(true), 2300),
      setTimeout(() => setLayoutReady(true), 2700),
      setTimeout(() => setShowText(true), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main>
      <motion.section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-background text-foreground">
        {/* 💥 Flash-Effekt */}
        {flash && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full bg-white z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}

        {/* ✨ Partikelhintergrund */}
        {layoutReady && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <ParticlesBackground isDark={isDark} />
            </div> */}
          </motion.div>
        )}

        {/* 🔥 Inhalt */}
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 py-20">
          <div
            className={`w-full flex items-center justify-center transition-all duration-700 gap-10 ${
              layoutReady ? 'flex-col md:flex-row' : 'flex-col'
            }`}
          >
            {/* ⚡ Animiertes Logo */}
            <motion.div
              initial={{ scale: 1.6, opacity: 1 }}
              animate={{
                scale: layoutReady ? 0.9 : 1.6,
                opacity: layoutReady ? 1 : 1,
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-[250px] sm:w-[320px] md:w-[400px] "
            >
              <AnimatedLogo />
            </motion.div>

            {/* 📄 Text + CTA */}
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-full md:w-[48%] bg-surface/80 backdrop-blur-md border border-muted p-10 rounded-3xl shadow-xl"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground whitespace-pre-line">
                  {t('digitale_intelligenz')}
                </h1>
                <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted max-w-xl">
                  {t('beschreibung')}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 sm:gap-x-6">
                  <Button variant="cyan" asChild>
                    <a href="#contact">Jetzt beraten lassen</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="#services">Mehr erfahren →</a>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedLogo from './AnimateLogo';
// import { Button } from '@/components/ui/button';
// import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';

// export default function Hero() {
//   const [startAnimation, setStartAnimation] = useState(false);
//   const [whiteBg, setWhiteBg] = useState(false);
//   const [layoutReady, setLayoutReady] = useState(false);
//   const [showText, setShowText] = useState(false); // 👈 finaler Trigger für Text
//   const isMobile = useIsMobileOrTablet();

//   // Animationsvarianten für Logo
//   const logoVariants = {
//     initial: { x: 0, y: 0, scale: 1.6 },
//     animateDesktop: { x: '-10vw', scale: 1 },
//     animateMobile: { y: '0vh', scale: 1 },
//   };

//   useEffect(() => {
//     const t1 = setTimeout(() => setStartAnimation(true), 1800); // optional Logo-Ping
//     const t2 = setTimeout(() => setWhiteBg(true), 2800); // Blitz + weiß
//     const t3 = setTimeout(() => setLayoutReady(true), 3100); // sofort auf neue Position
//     const t4 = setTimeout(() => setShowText(true), 3000); // Text langsam zeigen

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//       clearTimeout(t4);
//     };
//   }, []);

//   return (
//     <main>
//       <motion.section
//         className="relative isolate overflow-hidden min-h-screen flex items-center justify-center transition-colors duration-50"
//         animate={{ backgroundColor: whiteBg ? '#fff' : '#000' }}
//       >
//         {whiteBg && (
//           <motion.div
//             initial={{ scale: 0, opacity: 1 }}
//             animate={{ scale: 30, opacity: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full bg-white z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//           />
//         )}

//         <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 py-20">
//           <div
//             className={`relative w-full flex items-center justify-center ${
//               layoutReady ? 'flex-col md:flex-row' : 'flex-col'
//             }`}
//           >
//             {/* Logo */}
//             <div
//               className={`relative w-full flex items-center justify-center  scale-75 md:scale-60 ${
//                 layoutReady ? 'flex-col md:flex-row' : 'flex-col'
//               }`}
//             >
//               <AnimatedLogo />
//             </div>

//             {/* Text: Verzögert, ruhig */}
//             {showText && (
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.2, ease: 'easeOut' }}
//                 className="z-10 mt-12 md:mt-0 w-full md:w-[48%] backdrop-blur-md bg-white/90 border border-black/10 p-10 rounded-3xl shadow-xl text-black"
//               >
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
//                   Digitale Intelligenz
//                   <br className="hidden sm:block" /> aus Tirol.
//                 </h1>
//                 <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black/90 max-w-xl">
//                   Wir entwickeln smarte Web- & KI-Lösungen für Unternehmen, die
//                   vorausdenken.
//                 </p>
//                 <div className="mt-10 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 sm:gap-x-6">
//                   <Button variant="cyan" asChild>
//                     <a href="#contact">Jetzt beraten lassen</a>
//                   </Button>
//                   <Button variant="ghost" asChild>
//                     <a href="#services">Mehr erfahren →</a>
//                   </Button>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </motion.section>
//     </main>
//   );
// }

// 'use client';

// import ParticlesBackground from './ParticlesBackground';
// import { Button } from '@/components/ui/button';
// // import ParticlesWrapper from './ParticlesWrapper';
// import PolygonMaskParticles from './ParticlePoligonMask';
// import AnimatedLogo from './AnimateLogo';
// //import useIsMobileOrTablet from '@/hooks/useIsMobileOrTablet';

// export default function Hero() {
//   //const isMobileOrTablet = false; // useIsMobileOrTablet(); // max-width: 1024px

//   return (
//     <main>
//       <section className="relative isolate overflow-hidden min-h-screen flex items-center  bg-black">
//         <div className="absolute inset-0 z-10">
//           <ParticlesBackground />
//         </div>
//         {/* Partikel-Hintergrund */}

//         {/* <div
//           className="
//   absolute
//   top-10 left-0
//   sm:top-0 sm:left-[-50px]
//   w-full h-full z-[-10]
//   flex justify-center
// "
//         >
//           <PolygonMaskParticles />
//         </div> */}

//         {/* Inhalt */}
//         <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20 w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
//             {/* Linke Hälfte: Logo */}
//             <div className="flex justify-center items-center min-h-[400px]">
//               <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
//                 <AnimatedLogo />
//               </div>
//             </div>

//             {/* Rechte Hälfte: Text */}
//             <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl text-white">
//               <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
//                 Digitale Intelligenz
//                 <br className="hidden sm:block" /> aus Tirol.
//               </h1>
//               <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/90 max-w-xl">
//                 Wir entwickeln smarte Web- & KI-Lösungen für Unternehmen, die
//                 vorausdenken.
//               </p>
//               <div className="mt-10 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 sm:gap-x-6">
//                 <Button variant="cyan" asChild>
//                   <a href="#contact">Jetzt beraten lassen</a>
//                 </Button>
//                 <Button variant="ghost" asChild>
//                   <a href="#services">Mehr erfahren →</a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
