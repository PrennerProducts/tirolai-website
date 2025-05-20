import { useEffect, useState } from 'react';

export default function useIsMobileOrTablet(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();

    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
