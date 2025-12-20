'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Logo() {
  const logoBlueRef = useRef<HTMLDivElement>(null);
  const logoPink2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (!section2 || !section3 || !logoBlueRef.current || !logoPink2Ref.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial State: Pink Logo is fully visible on Section 1 (Base Layer)

      // 2. Transition to Blue (Section 2 enters)
      gsap.fromTo(
        logoBlueRef.current,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: section2,
            start: 'top bottom', 
            end: 'top top',
            scrub: true,
          },
        }
      );

      // 3. Transition back to Pink (Section 3 enters)
      gsap.fromTo(
        logoPink2Ref.current,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: section3,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] opacity-45">
        
        {/* 1. Base Layer: Pink Logo (Visible on Section 1) */}
        {/* Full screen wrapper centering the logo */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[clamp(500px,60vw,900px)] h-auto gpu-layer">
                <div className="relative w-full h-auto aspect-square">
                    <Image
                        src="/AF_Bulltech_Miami_Stickers01_BW.webp"
                        alt="BullTech Miami Logo"
                        width={800}
                        height={800}
                        className="w-full h-auto opacity-0" 
                        priority
                    />
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundColor: '#E987B4', // Miami Pink
                            maskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            WebkitMaskSize: '100% 100%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                </div>
            </div>
        </div>
        
        {/* 2. Blue Layer (Revealed on Section 2) */}
        {/* Wrapper is full screen so clipPath 'inset(100%)' aligns with bottom of viewport */}
        <div
          ref={logoBlueRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: 'inset(100% 0 0% 0)' }}
        >
           <div className="w-[clamp(500px,60vw,900px)] h-auto gpu-layer">
                <div className="relative w-full h-auto aspect-square">
                    <Image
                        src="/AF_Bulltech_Miami_Stickers01_BW.webp"
                        alt="BullTech Miami Logo"
                        width={800}
                        height={800}
                        className="w-full h-auto opacity-0" 
                        priority
                    />
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundColor: '#6AC3DD', // Miami Cyan
                            maskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            WebkitMaskSize: '100% 100%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                </div>
           </div>
        </div>

        {/* 3. Second Pink Layer (Revealed on Section 3) */}
        <div
          ref={logoPink2Ref}
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: 'inset(100% 0 0% 0)' }}
        >
           <div className="w-[clamp(500px,60vw,900px)] h-auto gpu-layer">
                <div className="relative w-full h-auto aspect-square">
                    <Image
                        src="/AF_Bulltech_Miami_Stickers01_BW.webp"
                        alt="BullTech Miami Logo"
                        width={800}
                        height={800}
                        className="w-full h-auto opacity-0" 
                        priority
                    />
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundColor: '#E987B4', // Miami Pink
                            maskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/AF_Bulltech_Miami_Stickers01_BW.webp")',
                            WebkitMaskSize: '100% 100%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                </div>
           </div>
        </div>

    </div>
  );
}
