'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const equipmentData = [
  {
    id: '01',
    name: 'Sony A7R V',
    category: 'Camera Body',
    specs: ['61MP Full-Frame', '8K Video', 'AI Autofocus'],
  },
  {
    id: '02',
    name: 'Canon R5',
    category: 'Camera Body',
    specs: ['45MP CMOS', '8K Raw', 'IBIS'],
  },
  {
    id: '03',
    name: 'Profoto B10X',
    category: 'Lighting',
    specs: ['500Ws', 'TTL & HSS', 'Battery Powered'],
  },
  {
    id: '04',
    name: 'Aputure 600d',
    category: 'Continuous',
    specs: ['600W Daylight', 'Sidus Link', 'V-Mount'],
  },
  {
    id: '05',
    name: 'Ronin RS3 Pro',
    category: 'Stabilization',
    specs: ['4.5kg Payload', 'LiDAR Focus', 'OLED Screen'],
  },
  {
    id: '06',
    name: 'Sigma 24-70',
    category: 'Lens',
    specs: ['f/2.8 DG DN', 'Art Series', 'E-Mount'],
  },
  {
    id: '07',
    name: 'Sony 70-200',
    category: 'Lens',
    specs: ['f/2.8 GM II', 'Optical SteadyShot', 'Nano AR'],
  },
  {
    id: '08',
    name: 'MacBook Pro',
    category: 'Digital',
    specs: ['M3 Max Chip', '128GB RAM', 'Tethered Capture'],
  },
  {
    id: '09',
    name: 'Inovativ Cart',
    category: 'Grip',
    specs: ['Voyager 36', 'Workstation', 'Hydraulic Lift'],
  }
];

export default function EquipmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.tech-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.header-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    // Spotlight Effect Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      
      const cards = cardsRef.current.getElementsByClassName('tech-card');
      
      for (const card of cards as any) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-[#080808] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-block border border-bulltech-blue/30 bg-bulltech-blue/10 px-4 py-1 rounded-full mb-6 header-text">
            <span className="text-bulltech-blue font-mono text-xs uppercase tracking-widest">/// Standard Issue Kit</span>
          </div>
          <h1 className="header-text text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Studio<br/>
            <span className="text-white">Arsenal</span>
          </h1>
          <p className="header-text text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Every booking includes access to our comprehensive inventory of professional cameras, lighting, and grip. No rental fees. No compromises.
          </p>
        </div>

        {/* SPOTLIGHT GRID */}
        <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {equipmentData.map((item) => (
            <div 
              key={item.id}
              className="tech-card group relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500"
              style={{
                background: `
                  radial-gradient(
                    800px circle at var(--mouse-x) var(--mouse-y), 
                    rgba(255, 255, 255, 0.06),
                    transparent 40%
                  ),
                  #0F0F0F
                `
              } as any}
            >
                
              {/* Inner Content Padding */}
              <div className="p-8 h-full flex flex-col justify-between min-h-[300px]">
                
                {/* Header: ID + Category */}
                <div className="flex justify-between items-start mb-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-xs text-bulltech-blue">0{item.id}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded-md">{item.category}</span>
                </div>

                {/* Big ID - Replaces Image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span className="text-[12rem] font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 select-none translate-y-4">
                        {item.id}
                    </span>
                </div>

                {/* Footer: Name + Specs */}
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 group-hover:text-bulltech-blue transition-colors">
                        {item.name}
                    </h3>
                    
                    {/* Specs List */}
                    <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec, i) => (
                            <span 
                                key={i} 
                                className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-bulltech-blue"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-bulltech-blue"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-bulltech-blue"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-bulltech-blue"></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
