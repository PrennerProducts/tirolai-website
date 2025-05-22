import { useEffect, useState } from 'react';

export default function useLowFPS(
  threshold = 30,
  checkInterval = 3000
): boolean {
  const [isLowFPS, setIsLowFPS] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();
    let rafId: number;

    const measure = (now: number) => {
      frameCount++;
      if (now - startTime >= checkInterval) {
        const fps = (frameCount * 1000) / (now - startTime);
        if (fps < threshold) {
          setIsLowFPS(true);
        }
        frameCount = 0;
        startTime = now;
      }
      rafId = requestAnimationFrame(measure);
    };

    rafId = requestAnimationFrame(measure);

    return () => cancelAnimationFrame(rafId);
  }, [threshold, checkInterval]);

  return isLowFPS;
}
