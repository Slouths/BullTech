'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Logo() {
  const logoBaseRef = useRef<HTMLDivElement>(null);
  const logoPinkRef = useRef<HTMLDivElement>(null);
  const logoWhiteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (!section2 || !section3 || !logoPinkRef.current || !logoWhiteRef.current) return;

    const ctx = gsap.context(() => {
      // Pink logo wipe: reveals from bottom as section2 enters viewport
      gsap.fromTo(
        logoPinkRef.current,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: section2,
            start: 'top bottom',
            end: 'top center',
            scrub: 0.3,
          },
        }
      );

      // Pink logo wipe out: hides from bottom as section3 enters
      gsap.fromTo(
        logoPinkRef.current,
        { clipPath: 'inset(0% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 100% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: section3,
            start: 'top bottom',
            end: 'top center',
            scrub: 0.3,
          },
        }
      );

      // White logo wipe: reveals from bottom as section3 enters
      gsap.fromTo(
        logoWhiteRef.current,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: section3,
            start: 'top bottom',
            end: 'top center',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-[9999] opacity-30">
      {/* Base Black Logo (visible on blue section 1) */}
      <div
        ref={logoBaseRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto gpu-layer"
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto"
          style={{ filter: 'brightness(0)' }}
          priority
          sizes="(max-width: 768px) 500px, 60vw"
        />
      </div>

      {/* Pink Logo Layer (revealed on white section 2) */}
      <div
        ref={logoPinkRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto gpu-layer"
        style={{ clipPath: 'inset(100% 0 0% 0)' }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(54%) saturate(1247%) hue-rotate(297deg) brightness(104%) contrast(101%)' }}
          sizes="(max-width: 768px) 500px, 60vw"
        />
      </div>

      {/* White Logo Layer (revealed on dark section 3) */}
      <div
        ref={logoWhiteRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto gpu-layer"
        style={{ clipPath: 'inset(100% 0 0% 0)' }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.webp"
          alt="BullTech Miami Logo"
          width={800}
          height={800}
          className="w-full h-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
          sizes="(max-width: 768px) 500px, 60vw"
        />
      </div>
    </div>
  );
}
