'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-content', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.about-stat', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#080808] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">

      {/* Watermark Logo - Behind everything */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[clamp(400px,50vw,700px)] h-auto">
          <div className="relative w-full aspect-square">
            <Image
              src="/AF_Bulltech_Miami_Stickers01_BW.webp"
              alt=""
              width={700}
              height={700}
              className="w-full h-full opacity-0"
              priority
            />
            <div
              className="absolute inset-0 w-full h-full opacity-10"
              style={{
                backgroundColor: '#E987B4',
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

      {/* Background Blur Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bulltech-pink/5 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bulltech-blue/5 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* Logo Mark */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 relative">
            <Image
              src="/AF_Bulltech_Miami_Logo_BW.webp"
              alt="BullTech"
              width={64}
              height={64}
              className="w-full h-full object-contain opacity-60"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-bulltech-pink" />
          </div>
        </div>

        {/* Title */}
        <h1 className="about-title text-6xl md:text-8xl font-black uppercase tracking-tighter text-center mb-16 text-white">
          About
        </h1>

        {/* Main Content */}
        <div className="space-y-8 max-w-3xl mx-auto">

          {/* Paragraph 1 */}
          <p className="about-content text-lg md:text-xl leading-relaxed text-white font-medium">
            Founded in 2022, BullTech Miami was created with a single purpose: to deliver world-class digital capture, color-managed workflows, on-set support, and high-end equipment rentals to production teams, photographers, agencies, and brands who demand reliability, speed, and excellence.
          </p>

          {/* Paragraph 2 */}
          <p className="about-content text-lg md:text-xl leading-relaxed text-white font-medium">
            With more than 30 years of professional experience in commercial and editorial photography, and a decade specializing in digital tech workflows, BullTech brings a rare combination of technical mastery, creative sensitivity, and rock-solid problem solving to every set—whether in the studio, on location, or underwater.
          </p>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10">
          {[
            { value: '100%', label: 'Reliability' },
            { value: '30+', label: 'Years Experience' },
            { value: '16+', label: 'Years Digital Tech' },
            { value: '2022', label: 'Founded' },
          ].map((stat, index) => (
            <div key={index} className="about-stat text-center">
              <div className="text-4xl md:text-5xl font-black text-bulltech-pink mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h2 className="about-content text-sm uppercase tracking-[0.3em] text-bulltech-blue text-center mb-8">Where We Excel</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Studio Productions',
              'On Location',
              'Underwater',
              'Commercial',
              'Editorial',
              'Fashion',
              'Advertising',
              'Remote Locations',
            ].map((tag, index) => (
              <span
                key={index}
                className="about-stat px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
