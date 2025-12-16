'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Logo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blackLogoRef = useRef<HTMLDivElement>(null);
  const pinkLogoRef = useRef<HTMLDivElement>(null);
  const whiteLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (!section2 || !section3) return;

    const ctx = gsap.context(() => {
      // Timeline 1: Black → Pink (when scrolling into section 2)
      gsap.timeline({
        scrollTrigger: {
          trigger: section2,
          start: 'top 60%',
          end: 'top 40%',
          scrub: 0.5,
        },
      })
        .to(blackLogoRef.current, { opacity: 0, duration: 1 }, 0)
        .to(pinkLogoRef.current, { opacity: 1, duration: 1 }, 0);

      // Timeline 2: Pink → White (when scrolling into section 3)
      gsap.timeline({
        scrollTrigger: {
          trigger: section3,
          start: 'top 60%',
          end: 'top 40%',
          scrub: 0.5,
        },
      })
        .to(pinkLogoRef.current, { opacity: 0, duration: 1 }, 0)
        .to(whiteLogoRef.current, { opacity: 1, duration: 1 }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex justify-center items-center pointer-events-none z-[9999]"
    >
      {/* Black Logo (visible on blue section 1) */}
      <div
        ref={blackLogoRef}
        className="absolute w-[clamp(400px,50vw,700px)]"
        style={{ opacity: 1 }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto opacity-30"
          style={{ filter: 'brightness(0)' }}
          priority
          sizes="(max-width: 768px) 400px, 50vw"
        />
      </div>

      {/* Pink Logo (visible on white section 2) */}
      <div
        ref={pinkLogoRef}
        className="absolute w-[clamp(400px,50vw,700px)]"
        style={{ opacity: 0 }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto opacity-30"
          style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(54%) saturate(1247%) hue-rotate(297deg) brightness(104%) contrast(101%)' }}
          sizes="(max-width: 768px) 400px, 50vw"
        />
      </div>

      {/* White Logo (visible on dark section 3) */}
      <div
        ref={whiteLogoRef}
        className="absolute w-[clamp(400px,50vw,700px)]"
        style={{ opacity: 0 }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto opacity-30"
          style={{ filter: 'brightness(0) invert(1)' }}
          sizes="(max-width: 768px) 400px, 50vw"
        />
      </div>
    </div>
  );
}
