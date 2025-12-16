'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Logo() {
  const logoBaseRef = useRef<HTMLDivElement>(null);
  const logoBlackRef = useRef<HTMLDivElement>(null);
  const logoColorRef = useRef<HTMLDivElement>(null);

  // Cache section references to avoid repeated DOM queries
  const sectionsRef = useRef<{
    section1: HTMLElement | null;
    section2: HTMLElement | null;
    section3: HTMLElement | null;
  }>({ section1: null, section2: null, section3: null });

  // Memoized update function
  const updateLogoClipPaths = useCallback(() => {
    const { section1, section2, section3 } = sectionsRef.current;
    if (!section1 || !section2 || !section3) return;
    if (!logoBaseRef.current || !logoBlackRef.current || !logoColorRef.current) return;

    const logoRect = logoBaseRef.current.getBoundingClientRect();
    const logoTop = logoRect.top;
    const logoBottom = logoRect.bottom;
    const logoHeight = logoRect.height;

    const boundary1 = section2.getBoundingClientRect().top;
    const boundary2 = section3.getBoundingClientRect().top;

    let blackClipTop = 100;
    let blackClipBottom = 100;

    const isBoundary1BeforeLogo = boundary1 > logoBottom;
    const isBoundary1CrossingLogo = boundary1 <= logoBottom && boundary1 >= logoTop;
    const isBoundary1AfterLogo = boundary1 < logoTop;
    const isBoundary2BeforeLogo = boundary2 > logoBottom;
    const isBoundary2CrossingLogo = boundary2 <= logoBottom && boundary2 >= logoTop;

    if (isBoundary1BeforeLogo) {
      blackClipTop = 100;
      blackClipBottom = 100;
    } else if (isBoundary1CrossingLogo) {
      const distanceIntoLogo = logoBottom - boundary1;
      const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
      blackClipTop = 100 - percentCrossed;
      blackClipBottom = 0;
    } else if (isBoundary1AfterLogo && isBoundary2BeforeLogo) {
      blackClipTop = 0;
      blackClipBottom = 0;
    } else if (isBoundary2CrossingLogo) {
      const distanceIntoLogo = logoBottom - boundary2;
      const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
      blackClipTop = 0;
      blackClipBottom = percentCrossed;
    } else {
      blackClipTop = 100;
      blackClipBottom = 100;
    }

    logoBlackRef.current.style.clipPath = `inset(${blackClipTop}% 0 ${blackClipBottom}% 0)`;

    let colorClipTop = 100;
    let colorClipBottom = 100;

    if (isBoundary2BeforeLogo) {
      colorClipTop = 100;
      colorClipBottom = 100;
    } else if (isBoundary2CrossingLogo) {
      const distanceIntoLogo = logoBottom - boundary2;
      const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
      colorClipTop = 100 - percentCrossed;
      colorClipBottom = 0;
    } else {
      colorClipTop = 0;
      colorClipBottom = 0;
    }

    logoColorRef.current.style.clipPath = `inset(${colorClipTop}% 0 ${colorClipBottom}% 0)`;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cache section elements once on mount
    sectionsRef.current = {
      section1: document.getElementById('section1'),
      section2: document.getElementById('section2'),
      section3: document.getElementById('section3'),
    };

    let rafId: number | null = null;
    let ticking = false;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: () => {
          if (!ticking) {
            rafId = requestAnimationFrame(() => {
              updateLogoClipPaths();
              ticking = false;
            });
            ticking = true;
          }
        },
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, [updateLogoClipPaths]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-[9999] opacity-30">
      {/* Base Logo (visible on blue section) - Single image, CSS filters for color variants */}
      <div
        ref={logoBaseRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ willChange: 'clip-path', transform: 'translateZ(0)' }}
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

      {/* Pink Logo Layer (revealed on white section) */}
      <div
        ref={logoBlackRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ clipPath: 'inset(100% 0 100% 0)', willChange: 'clip-path', transform: 'translateZ(0)' }}
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

      {/* White Logo Layer (revealed on dark section) */}
      <div
        ref={logoColorRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ clipPath: 'inset(100% 0 100% 0)', willChange: 'clip-path', transform: 'translateZ(0)' }}
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
