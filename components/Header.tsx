'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { label: 'The Studio', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Gear', href: '/equipment' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center pt-8 z-[10001] pointer-events-none">
      {/* 
        THE FLOATING CAPSULE 
        - High-tech, dark glass aesthetic
        - Centered and isolated
      */}
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 pl-2 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 transition-transform hover:scale-[1.01] duration-300">
        
        {/* Logo Orb */}
        <Link 
          href="#section1" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/5 group"
        >
             <Image
              src="/AF_Bulltech_Miami_Logo_BW.webp"
              alt="Home"
              width={24}
              height={24}
              className="w-5 h-5 object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center px-2">
            {navItems.map((item) => (
                <Link 
                    key={item.label} 
                    href={item.href}
                    className="relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors group"
                >
                    {item.label}
                    {/* Hover Dot */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-bulltech-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></span>
                </Link>
            ))}
        </div>

        {/* Separator (Mobile Hidden) */}
        <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-1"></div>

        {/* Action Button */}
        <Link 
            href="#section3"
            className="flex items-center gap-2 px-6 py-2.5 bg-bulltech-blue hover:bg-bulltech-pink text-black text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,143,190,0.4)]"
        >
            <span>Book Now</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
      </nav>
    </div>
  );
}
