'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Logo() {
  const logoBlueRef = useRef<HTMLDivElement>(null);
  // const logoPink2Ref = useRef<HTMLDivElement>(null);

  // Use useLayoutEffect to ensure DOM is fully calculated before setting up ScrollTrigger
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (!section2 || !logoBlueRef.current) return;

    const ctx = gsap.context(() => {
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
            invalidateOnRefresh: true,
          },
        }
      );

      // 3. Hide Blue Logo (Section 3 enters) - only if section3 exists
      if (section3) {
        gsap.to(
          logoBlueRef.current,
          {
            clipPath: 'inset(0% 0 100% 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: section3,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });

    // Force a refresh to ensure all positions are correct
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] opacity-80">
        
        {/* 1. Base Layer: Pink Logo (Visible on Section 1) - HIDDEN for Hero Section */}
        {/* Full screen wrapper centering the logo */}
        <div className="absolute inset-0 flex items-center justify-center hidden">
            <div className="w-[110vw] md:w-[clamp(800px,120vw,2000px)] h-auto gpu-layer">
                <div className="relative w-full h-auto aspect-square">
                    <Image
                        src="/AF_Bulltech_Miami_Stickers02_BW.webp"
                        alt="BullTech Miami Logo"
                        width={800}
                        height={800}
                        className="w-full h-auto opacity-0" 
                        priority
                    />
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundColor: '#E987B4', // Miami Pink on Section 1
                            maskImage: 'url("/AF_Bulltech_Miami_Stickers02_BW.webp")',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/AF_Bulltech_Miami_Stickers02_BW.webp")',
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
          className="absolute inset-0 flex items-center justify-center gpu-layer"
          style={{ clipPath: 'inset(100% 0 0% 0)' }}
        >
           <div className="w-[90vw] sm:w-[95vw] md:w-[min(120vw,2000px)] h-auto max-w-full min-w-0">
                <div className="relative w-full h-auto aspect-square">
                    <Image
                        src="/AF_Bulltech_Miami_Stickers02_BW.webp"
                        alt="BullTech Miami Logo"
                        width={800}
                        height={800}
                        className="w-full h-auto opacity-0" 
                        priority
                    />
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundColor: '#F0F0F0', // Off-white on Pink Section (Section 2)
                            maskImage: 'url("/AF_Bulltech_Miami_Stickers02_BW.webp")',
                            maskSize: '100% 100%',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/AF_Bulltech_Miami_Stickers02_BW.webp")',
                            WebkitMaskSize: '100% 100%',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                </div>
           </div>
        </div>

        {/* 3. Second Pink Layer (Revealed on Section 3) - REMOVED */}


    </div>
  );
}
