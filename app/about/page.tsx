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
    <main ref={containerRef} className="bg-[#080808] min-h-screen text-white pt-24 pb-24 relative overflow-hidden">

      {/* Watermark Logo - Behind everything */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[85vw] md:w-[clamp(600px,90vw,1400px)] h-auto">
          <div className="relative w-full aspect-square">
            <Image
              src="/AF_Bulltech_Miami_Stickers01_BW.webp"
              alt=""
              width={800}
              height={800}
              className="w-full h-full opacity-0"
              priority
            />
            <div
              className="absolute inset-0 w-full h-full opacity-70"
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

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 pt-16">

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

          {/* Philosophy Section */}
          <div className="pt-12 space-y-8">
            <div className="flex items-center justify-center gap-4 opacity-90">
               <span className="h-[1px] w-8 bg-white"></span>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Our Philosophy</span>
               <span className="h-[1px] w-8 bg-white"></span>
            </div>
            
            <div className="space-y-6 text-white text-center">
              <p className="about-content text-lg md:text-xl font-medium leading-relaxed">
                At BullTech, we believe that great imagery is the product of both artistry and precision.
              </p>
              <p className="about-content text-base font-medium leading-relaxed">
                Our role is to build the most stable, efficient, and bulletproof workflow for your project, so
                that photographers and directors can focus entirely on the creative process.
              </p>
              <p className="about-content text-lg font-bold">
                We don’t just operate machines; we collaborate, anticipate, and elevate.
              </p>
            </div>
          </div>

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
              <div className="text-4xl md:text-5xl font-black text-bulltech-blue mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h2 className="about-content text-sm uppercase tracking-[0.3em] text-bulltech-blue text-center mb-8">Connect With Us</h2>
          <div className="flex justify-center gap-8">
            {[
              { 
                name: 'Instagram', 
                href: 'https://www.instagram.com/bulltechc1?igsh=d296d2ZkN240aTFw&utm_source=qr', 
                path: 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'
              },
              { 
                name: 'Facebook', 
                href: 'https://www.facebook.com/share/15WzkmvTrpf/?mibextid=wwXIfr', 
                path: 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'
              },
              { 
                name: 'LinkedIn', 
                href: 'https://www.linkedin.com/in/bulltech-miami-ba5a083a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
                path: 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
              },
              { 
                name: 'TikTok', 
                href: 'https://www.tiktok.com/@bulltech_miami?_r=1&_t=ZP-93NgxrJMTOx', 
                path: 'M16.6 5.82C15.63 5.82 14.71 5.36 14.1 4.61V14.79C14.1 17.67 11.76 20 8.88 20C6 20 3.66 17.67 3.66 14.79C3.66 11.91 6 9.58 8.88 9.58C9.36 9.58 9.83 9.65 10.28 9.79V12.7C10.03 12.63 9.77 12.58 9.5 12.58C7.92 12.58 6.64 13.86 6.64 15.44C6.64 17.02 7.92 18.3 9.5 18.3C11.08 18.3 12.36 17.02 12.36 15.44V2H15.14C15.14 3.93 16.71 5.5 18.64 5.5V8.28C17.9 8.28 17.21 8.12 16.6 7.82V5.82Z'
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-bulltech-blue hover:bg-bulltech-blue hover:text-black hover:border-bulltech-blue hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
