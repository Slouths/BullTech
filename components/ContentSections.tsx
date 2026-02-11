'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContentSections() {
  const section1Ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section2ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Effect for Hero Section
    if (section1Ref.current && videoRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Video moves slower than scroll (parallax) and fades out
      tl.to(videoRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: 'none',
      }, 0);

      // Text moves faster than scroll and fades out
      tl.to(textRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: 'none',
      }, 0);
    }

    // Reveal Animation for Section 2 Content
    if (section2Ref.current && section2ContentRef.current) {
      gsap.fromTo(
        section2ContentRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 60%', // Start animation when top of section hits 60% of viewport
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* SECTION 1: INTRO (Dark) - High Contrast for Logo */}
      <section
        id="section1"
        ref={section1Ref}
        className="relative min-h-screen w-full min-w-0 flex flex-col items-center justify-end p-4 sm:p-6 pb-24 sm:pb-32 md:pb-16 overflow-hidden"
        style={{ backgroundColor: 'black' }}
      >
        {/* Centered Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full min-w-0 mx-auto px-2 sm:px-4 space-y-6 sm:space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6 animate-float w-full min-w-0 overflow-hidden">
            <h1 className="text-fluid-hero font-black uppercase tracking-tighter leading-[0.85] text-[#F0F0F0] break-words">
              Miami Based<br/>
              Digital Operators
            </h1>
            <p className="text-fluid-hero-sm font-bold tracking-tight text-[#F0F0F0]">
              & Digital Kit Package rentals.
            </p>
          </div>

          {/* Scroll Indicator - Removed */}
          <div className="max-w-xl space-y-8 pt-4 hidden">
          </div>

        </div>

        {/* Hero Video - anchored to top, directly under menu bar */}
        <div ref={videoRef} className="absolute top-0 left-0 right-0 bottom-0 flex justify-center z-[6] pointer-events-none pt-[3.75rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/AF_Bulltech_Miami_Sticker01.webp"
            className="video-fluid-hero object-contain object-top"
          >
            <source src="/logobig.webm" type="video/webm" />
            <source src="/logobig.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (Pink) */}
      <section
        id="section2"
        ref={section2Ref}
        className="relative min-h-screen w-full min-w-0 flex items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden bg-bulltech-pink"
      >
        {/* Background Pattern - Subtle Dot Grid (White) */}
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Left Column: Huge Vertical Type */}
        <div className="hidden md:flex flex-col justify-center h-full z-10 absolute left-6 lg:left-12">
          <h2 className="text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none font-bold text-transparent opacity-10 rotate-180"
              style={{ WebkitTextStroke: '2px white', writingMode: 'vertical-rl' }}>
            SERVICES
          </h2>
        </div>

        {/* Centered Content */}
        <div ref={section2ContentRef} className="w-full max-w-4xl min-w-0 z-10 flex flex-col gap-8 sm:gap-12 text-center items-center mt-16 sm:mt-20 md:mt-0 mx-auto px-4 sm:px-6">

          <div className="space-y-6">
             <div className="flex items-center gap-4 justify-center">
                <span className="h-[1px] w-12 bg-black/30"></span>
                <span className="text-fluid-label font-bold uppercase tracking-[0.3em] text-black">What We Do</span>
                <span className="h-[1px] w-12 bg-black/30"></span>
             </div>
             <h2 className="text-fluid-h2 font-black uppercase tracking-tighter leading-[0.9] text-black">
               Digital Tech &<br/>Capture Services
             </h2>
          </div>

          <p className="text-black text-fluid-body leading-relaxed max-w-2xl font-bold text-center mx-auto">
            From color-managed tethered capture to live grading, wireless monitoring, and multi-station workflows for large-scale productions, we provide end-to-end technical support designed specifically for the high pace of today's visual industry.
          </p>

          <div className="w-full max-w-3xl mx-auto">
            <p className="text-fluid-body font-black uppercase tracking-[0.2em] text-black mb-6 sm:mb-8 text-center">Our systems are field-tested across:</p>
            <ul className="space-y-4">
              {[
                'One day location or studio shoots',
                'High-volume advertising sets',
                'Multi-week international productions',
                'Underwater and marine shoots',
                'South FL, FLORIDA KEYS, CARIBBEAN and remote locations',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-black justify-center font-black text-center">
                  <span className="w-3 h-3 bg-bulltech-blue rounded-full flex-shrink-0 shadow-sm ring-2 ring-white/80 shrink-0"></span>
                  <span className="text-fluid-body-lg text-center">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-black text-fluid-body-lg leading-relaxed max-w-2xl font-bold mt-4 text-center mx-auto">
            Whether the production calls for a Single DT, DIT or a full technical team, we tailor the workflow to the scale and needs of your project.
          </p>

        </div>
      </section>

    </>
  );
}
