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
  const logoBlackRef = useRef<HTMLDivElement>(null);
  const logoColorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number | null = null;

    const ctx = gsap.context(() => {
      // ScrollTrigger for the entire page
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: () => {
          // Cancel previous animation frame
          if (rafId) cancelAnimationFrame(rafId);

          // Use requestAnimationFrame for smoother performance
          rafId = requestAnimationFrame(() => {
          const section1 = document.getElementById('section1');
          const section2 = document.getElementById('section2');
          const section3 = document.getElementById('section3');

          if (!section1 || !section2 || !section3) return;
          if (!logoBaseRef.current || !logoBlackRef.current || !logoColorRef.current) return;

          // Get logo position from the base logo (always visible)
          const logoRect = logoBaseRef.current!.getBoundingClientRect();
          const logoTop = logoRect.top;
          const logoBottom = logoRect.bottom;
          const logoHeight = logoRect.height;

          // Get section boundary positions
          const boundary1 = section2.getBoundingClientRect().top; // Orange/White boundary
          const boundary2 = section3.getBoundingClientRect().top; // White/Black boundary

          // BLACK LOGO - Progressive reveal based on boundary1 position
          let blackClipTop = 100;
          let blackClipBottom = 100;

          // Determine the state based on boundary positions
          const isBoundary1BeforeLogo = boundary1 > logoBottom;
          const isBoundary1CrossingLogo = boundary1 <= logoBottom && boundary1 >= logoTop;
          const isBoundary1AfterLogo = boundary1 < logoTop;
          const isBoundary2BeforeLogo = boundary2 > logoBottom;
          const isBoundary2CrossingLogo = boundary2 <= logoBottom && boundary2 >= logoTop;

          if (isBoundary1BeforeLogo) {
            // Boundary 1 hasn't reached logo yet - hide all black
            blackClipTop = 100;
            blackClipBottom = 100;
          } else if (isBoundary1CrossingLogo) {
            // Boundary 1 is actively crossing through logo - progressive reveal
            const distanceIntoLogo = logoBottom - boundary1;
            const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
            blackClipTop = 100 - percentCrossed; // Reveal from bottom progressively
            blackClipBottom = 0;
          } else if (isBoundary1AfterLogo && isBoundary2BeforeLogo) {
            // Boundary 1 fully passed, boundary 2 hasn't reached - fully black
            blackClipTop = 0;
            blackClipBottom = 0;
          } else if (isBoundary2CrossingLogo) {
            // Boundary 2 is crossing - hide black progressively from bottom
            const distanceIntoLogo = logoBottom - boundary2;
            const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
            blackClipTop = 0;
            blackClipBottom = percentCrossed; // Hide from bottom progressively
          } else {
            // Boundary 2 has passed - hide all black
            blackClipTop = 100;
            blackClipBottom = 100;
          }

          logoBlackRef.current.style.clipPath = `inset(${blackClipTop}% 0 ${blackClipBottom}% 0)`;

          // COLOR LOGO - Progressive reveal based on boundary2 position
          let colorClipTop = 100;
          let colorClipBottom = 100;

          if (isBoundary2BeforeLogo) {
            // Boundary 2 hasn't reached logo yet - hide all color
            colorClipTop = 100;
            colorClipBottom = 100;
          } else if (isBoundary2CrossingLogo) {
            // Boundary 2 is crossing through logo - progressive reveal
            const distanceIntoLogo = logoBottom - boundary2;
            const percentCrossed = (distanceIntoLogo / logoHeight) * 100;
            colorClipTop = 100 - percentCrossed; // Reveal from bottom progressively
            colorClipBottom = 0;
          } else {
            // Boundary 2 has fully passed - fully colored
            colorClipTop = 0;
            colorClipBottom = 0;
          }

          logoColorRef.current.style.clipPath = `inset(${colorClipTop}% 0 ${colorClipBottom}% 0)`;
          });
        },
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-[9999] opacity-30">
      {/* Black Logo (visible on blue section) */}
      <div
        ref={logoBaseRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ willChange: 'clip-path', transform: 'translateZ(0)' }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.png"
          alt="BullTech Miami Logo"
          width={600}
          height={600}
          className="w-full h-auto"
          style={{ filter: 'brightness(0)' }}
          priority
        />
      </div>

      {/* Pink Logo Layer (revealed on white section) */}
      <div
        ref={logoBlackRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ clipPath: 'inset(100% 0 100% 0)', willChange: 'clip-path', transform: 'translateZ(0)' }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.png"
          alt="BullTech Miami Logo"
          width={600}
          height={600}
          className="w-full h-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(74%) sepia(54%) saturate(1247%) hue-rotate(297deg) brightness(104%) contrast(101%)' }}
        />
      </div>

      {/* White Logo Layer (revealed on dark section) */}
      <div
        ref={logoColorRef}
        className="absolute w-[clamp(500px,60vw,900px)] h-auto"
        style={{ clipPath: 'inset(100% 0 100% 0)', willChange: 'clip-path', transform: 'translateZ(0)' }}
      >
        <Image
          src="/AF_Bulltech_Miami_Stickers01_BW.png"
          alt="BullTech Miami Logo"
          width={600}
          height={600}
          className="w-full h-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </div>
  );
}
