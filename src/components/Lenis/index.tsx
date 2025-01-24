import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const LenisComponent = () => {
  const lenis = useRef<Lenis | null>(null);
  
  // Initialize Lenis
  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
    });

    const animate = (time: number) => {
      lenis?.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current?.destroy();
    };
  }, []);


  return null;
}
