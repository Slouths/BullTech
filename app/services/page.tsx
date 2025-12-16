'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '01',
    title: 'Editorial Photography',
    description: 'High-end fashion and lifestyle imagery tailored for magazines and digital campaigns.',
    tags: ['Fashion', 'Beauty', 'Lifestyle'],
  },
  {
    id: '02',
    title: 'Brand Identity',
    description: 'Visual storytelling that defines your brand’s voice in a crowded marketplace.',
    tags: ['Strategy', 'Art Direction', 'Content'],
  },
  {
    id: '03',
    title: 'Product Campaigns',
    description: 'Showcasing products with precision lighting and creative composition.',
    tags: ['E-commerce', 'Creative Still Life', 'Social'],
  },
  {
    id: '04',
    title: 'Event Coverage',
    description: 'Capturing the atmosphere and key moments of corporate and private events.',
    tags: ['Corporate', 'Social', 'Live'],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.service-header', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });

      // List Animation
      gsap.utils.toArray('.service-row').forEach((row: any, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#111214] min-h-screen text-white pt-32 px-6 md:px-12 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-32">
        <h1 className="service-header text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '2px #fff' }}>
          Our
        </h1>
        <h1 className="service-header text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-tighter text-bulltech-pink ml-[10vw]">
          Expertise
        </h1>
        <p className="service-header text-gray-400 max-w-xl mt-8 text-lg font-light ml-[10vw]">
          We combine technical precision with creative vision to deliver visual assets that elevate your brand.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-px bg-white/10 border-t border-b border-white/10">
        {services.map((service) => (
          <div key={service.id} className="service-row group relative bg-[#111214] hover:bg-white/5 transition-colors duration-500 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-baseline py-12 px-4 md:px-8 gap-6 md:gap-12 relative z-10">
              
              {/* ID */}
              <span className="text-bulltech-pink font-mono text-sm">/{service.id}</span>
              
              {/* Title */}
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight flex-1 group-hover:translate-x-4 transition-transform duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <div className="md:w-1/3">
                <p className="text-gray-400 mb-4 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] border border-white/20 px-2 py-1 rounded-full uppercase tracking-wider text-gray-500 group-hover:border-bulltech-pink/50 group-hover:text-bulltech-pink transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-4xl opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 text-bulltech-pink">
                →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process / CTA */}
      <div className="max-w-7xl mx-auto mt-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">Ready to start?</h2>
        <a href="mailto:hello@bulltech.miami" 
           className="inline-block px-12 py-4 border border-bulltech-pink text-bulltech-pink text-lg font-bold uppercase tracking-widest hover:bg-bulltech-pink hover:text-black transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </main>
  );
}

