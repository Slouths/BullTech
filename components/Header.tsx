'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full flex justify-center pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4 z-[10001] pointer-events-none">
        {/* 
          THE FLOATING CAPSULE 
          - High-tech, dark glass aesthetic
          - Centered and isolated
        */}
        <nav className="pointer-events-auto flex items-center gap-3 sm:gap-3 md:gap-2 p-3 sm:p-3 md:p-2.5 md:pl-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 transition-transform hover:scale-[1.01] duration-300 max-w-[calc(100vw-1rem)]">
          
          {/* Logo Orb */}
          <Link
            href="/"
            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full hover:scale-105 transition-transform group -ml-1 sm:-ml-2 shrink-0"
          >
               <Image
                src="/AF_Bulltech_Miami_Sticker01.webp"
                alt="Home"
                width={96}
                height={96}
                className="w-full h-full object-contain drop-shadow-lg scale-125"
              />
          </Link>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:flex items-center px-2">
              {navItems.map((item) => (
                  <Link 
                      key={item.label} 
                      href={item.href}
                      className="relative px-6 py-2 text-[14px] font-black uppercase tracking-[0.15em] text-gray-400 hover:text-bulltech-pink transition-colors group"
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
              className="hidden md:flex items-center gap-2 px-8 py-3.5 bg-bulltech-blue hover:bg-bulltech-pink text-black text-[14px] font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,143,190,0.4)]"
          >
              <span>Contact Now</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M4 6H20M4 18H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[10000] transition-all duration-500 flex flex-col items-center overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 min-h-[min(100vh,600px)] pt-32 pb-8">
          {navItems.map((item, i) => (
            <Link 
              key={item.label} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white hover:text-bulltech-pink transition-colors p-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-white/20 my-4"></div>
          <Link 
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-bulltech-blue hover:text-white transition-colors p-2"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
