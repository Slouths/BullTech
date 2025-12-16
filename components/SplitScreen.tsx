'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SplitScreen() {
  const fixedScreenRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const scrollTriggerAreaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Main split animation timeline
      const splitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerAreaRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: fixedScreenRef.current,
          anticipatePin: 1,
        },
      });

      // Top half moves up
      splitTimeline.to(topHalfRef.current, {
        y: '-50vh',
        ease: 'power2.inOut',
      }, 0);

      // Bottom half moves down
      splitTimeline.to(bottomHalfRef.current, {
        y: '50vh',
        ease: 'power2.inOut',
      }, 0);
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fixed Screen - Pinned Animation Area */}
      <div
        ref={fixedScreenRef}
        className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[50]"
      >
        {/* Top Half */}
        <div
          ref={topHalfRef}
          className="absolute top-0 left-0 w-full h-1/2 bg-jaffa-red gpu-accelerated"
        />

        {/* Bottom Half */}
        <div
          ref={bottomHalfRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-jaffa-red gpu-accelerated"
        />
      </div>

      {/* Scroll Trigger Area */}
      <section
        ref={scrollTriggerAreaRef}
        className="h-[200vh] pointer-events-none"
      />
    </>
  );
}
