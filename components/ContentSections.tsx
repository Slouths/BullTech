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
        className="relative min-h-[80vh] w-full flex flex-col items-center justify-end p-6 pb-32 md:pb-16 overflow-hidden"
        style={{ backgroundColor: '#080808' }}
      >
        {/* Centered Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-6 animate-float">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#F0F0F0]">
              Miami Based<br/>
              Digital Operators
            </h1>
            <p className="text-base md:text-2xl font-bold tracking-tight text-[#F0F0F0]">
              & Digital Kit Package rentals.
            </p>
          </div>

          {/* Scroll Indicator - Removed */}
          <div className="max-w-xl space-y-8 pt-4 hidden">
          </div>

        </div>

        {/* Hero Video */}
        <div ref={videoRef} className="absolute inset-0 flex items-center justify-center z-[6] pointer-events-none -translate-y-[5vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[220vw] md:w-[90vw] h-auto object-contain"
          >
            <source src="/logo_3.webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (Pink) */}
      <section
        id="section2"
        ref={section2Ref}
        className="relative min-h-[80vh] w-full flex items-center justify-center px-4 md:px-12 overflow-hidden bg-bulltech-pink"
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
        <div className="hidden md:flex flex-col justify-center h-full z-10 absolute left-12">
          <h2 className="text-[12rem] leading-none font-bold text-transparent opacity-10 rotate-180"
              style={{ WebkitTextStroke: '2px white', writingMode: 'vertical-rl' }}>
            SERVICES
          </h2>
        </div>

        {/* Centered Content */}
        <div ref={section2ContentRef} className="w-full max-w-4xl z-10 flex flex-col gap-12 text-center items-center mt-20 md:mt-0 mx-auto px-6">

          <div className="space-y-6">
             <div className="flex items-center gap-4 justify-center">
                <span className="h-[1px] w-12 bg-black/30"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-black">What We Do</span>
                <span className="h-[1px] w-12 bg-black/30"></span>
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-black drop-shadow-md" style={{ textShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,1)' }}>
               Digital Tech &<br/>Capture Services
             </h2>
          </div>

          <p className="text-black text-xl md:text-2xl leading-relaxed max-w-2xl font-bold" style={{ textShadow: '0 1px 4px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.8)' }}>
            From color-managed tethered capture to live grading, wireless monitoring, and multi-station workflows for large-scale productions, we provide end-to-end technical support designed specifically for the high pace of today's visual industry.
          </p>

          <div className="w-full max-w-3xl">
            <p className="text-lg md:text-xl font-black uppercase tracking-[0.2em] text-black mb-8 drop-shadow-md" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8)' }}>Our systems are field-tested across:</p>
            <ul className="space-y-4">
              {[
                'One day location or studio shoots',
                'High-volume advertising sets',
                'Multi-week international productions',
                'Underwater and marine shoots',
                'South FL, FLORIDA KEYS, CARIBBEAN and remote locations',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-black justify-center font-black" style={{ textShadow: '0 1px 4px rgba(255,255,255,1), 0 0 15px rgba(255,255,255,0.8)' }}>
                  <span className="w-3 h-3 bg-bulltech-blue rounded-full flex-shrink-0 shadow-sm ring-2 ring-white/80"></span>
                  <span className="text-xl md:text-2xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-black text-xl md:text-2xl leading-relaxed max-w-2xl font-bold mt-4" style={{ textShadow: '0 1px 4px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.8)' }}>
            Whether the production calls for a Single DT, DIT or a full technical team, we tailor the workflow to the scale and needs of your project.
          </p>

        </div>
      </section>

      {/* SECTION 3: BOOKING (Dark) - Cyber / Technical Interface */}
      <section
        id="section3"
        className="relative min-h-[80vh] w-full flex items-center px-6 md:px-12 overflow-hidden bg-bulltech-dark"
      >
        {/* Background - Gradient Mesh */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bulltech-pink/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bulltech-blue/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Content Container - "HUD" Style Layout */}
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center h-full py-32 text-center">
          
          {/* Centered Project Specs */}
          <div className="w-full max-w-4xl z-10 flex flex-col items-center space-y-16 mt-20">
            <div className="flex flex-col items-center">
              <h2 className="text-white text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-4 drop-shadow-2xl" style={{ textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,1)' }}>
                Start<br/>Project
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-16 text-white font-mono justify-center w-full">
              <div className="text-center flex-1">
                <h4 className="text-white mb-6 border-b-4 border-bulltech-pink pb-3 inline-block px-6 text-2xl md:text-3xl font-black tracking-widest" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>LOCATION</h4>
                <div className="space-y-2">
                  <p className="text-2xl md:text-4xl font-black" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>Calle 8, Miami</p>
                  <p className="text-2xl md:text-4xl font-black" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>FL 33131</p>
                </div>
              </div>
              <div className="text-center flex-1">
                <h4 className="text-white mb-6 border-b-4 border-bulltech-pink pb-3 inline-block px-6 text-2xl md:text-3xl font-black tracking-widest" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>CONTACT</h4>
                <div className="space-y-2">
                  <p className="text-2xl md:text-4xl font-black" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>hello@bulldigital.tech</p>
                  <p className="text-2xl md:text-4xl font-black whitespace-nowrap" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>+1 (305) 522-7386</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
