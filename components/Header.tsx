'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center pt-8 z-[10001] pointer-events-none">
      {/* 
        THE FLOATING CAPSULE 
        - High-tech, dark glass aesthetic
        - Centered and isolated
      */}
      <nav className="pointer-events-auto flex items-center gap-2 p-2.5 pl-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 transition-transform hover:scale-[1.01] duration-300">
        
        {/* Logo Orb */}
        <Link
          href="/"
          className="flex items-center justify-center w-20 h-20 rounded-full hover:scale-105 transition-transform group -ml-2"
        >
             <Image
              src="/AF_Bulltech_Miami_Stickers02.png"
              alt="Home"
              width={80}
              height={80}
              className="w-full h-full object-contain drop-shadow-lg"
            />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center px-2">
            {navItems.map((item) => (
                <Link 
                    key={item.label} 
                    href={item.href}
                    className="relative px-6 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors group"
                >
                    {item.label}
                    {/* Hover Dot */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-bulltech-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></span>
                </Link>
            ))}
        </div>

        {/* Separator (Mobile Hidden) */}
        <div className="hidden md:block w-[1px] h-8 bg-white/10 mx-2"></div>

        {/* Action Button */}
        <Link 
            href="/contact"
            className="flex items-center gap-2 px-8 py-3.5 bg-bulltech-blue hover:bg-bulltech-pink text-black text-[12px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,143,190,0.4)]"
        >
            <span>Contact Now</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
      </nav>
    </div>
  );
}
