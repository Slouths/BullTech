'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Company data - logos with valid files marked, others show text
// Order matches the provided image
const companies = [
  { id: 'aarp', name: 'AARP', logo: null, images: [] },
  { id: 'adidas', name: 'Adidas', logo: '/logos/adidas.png', images: [] },
  { id: 'bacardi', name: 'BACARDÍ', logo: null, images: [] },
  { id: 'banamex', name: 'Banamex', logo: null, images: [] },
  { id: 'banco-de-chile', name: 'Banco de Chile', logo: null, images: [] },
  
  { id: 'black-decker', name: 'BLACK+DECKER', logo: null, images: [] },
  { id: 'bodyhealth', name: 'BodyHealth', logo: null, images: [] },
  { id: 'coca-cola', name: 'Coca-Cola', logo: '/logos/coca-cola.png', images: [] },
  { id: 'cosmopolitan', name: 'Cosmopolitan', logo: null, images: [] },
  { id: 'disney', name: 'Disney+', logo: '/logos/disney.png', images: [] }, // Image shows Disney+

  { id: 'dxl', name: 'DXL BIG + TALL', logo: null, images: [] },
  { id: 'unknown-oval', name: '', logo: null, images: [] }, // The white oval in the image - placeholder or specific brand? assuming placeholder/unknown for now or maybe it's a specific logo I don't have.
  { id: 'gap', name: 'GAP', logo: null, images: [] },
  { id: 'guess', name: 'GUESS', logo: null, images: [] },
  { id: 'hca', name: 'HCA HEALTHCARE', logo: null, images: [] },

  { id: 'humana', name: 'HUMANA', logo: null, images: [] },
  { id: 'justice', name: 'JUSTICE', logo: null, images: [] },
  { id: 'lofficiel', name: "L'OFFICIEL", logo: null, images: [] },
  { id: 'loreal', name: "L'ORÉAL", logo: '/logos/loreal.png', images: [] },
  { id: 'macys', name: "MACY'S", logo: null, images: [] },

  { id: 'mastercard', name: 'Mastercard', logo: '/logos/mastercard.png', images: [] },
  { id: 'neiman-marcus', name: 'NEIMAN MARCUS', logo: null, images: [] },
  { id: 'nickelodeon', name: 'NICKELODEON', logo: null, images: [] },
  { id: 'novo', name: 'NOVO', logo: null, images: [] },
  { id: 'parade', name: 'PARADE', logo: null, images: [] },

  { id: 'pga-tour', name: 'PGA TOUR', logo: null, images: [] },
  { id: 'puma', name: 'PUMA', logo: null, images: [] },
  { id: 'ralph-lauren', name: 'RALPH LAUREN', logo: null, images: [] },
  { id: 'reebok', name: 'Reebok', logo: '/logos/reebok.png', images: [] },
  { id: 'rolling-stone', name: 'ROLLING STONE', logo: null, images: [] },

  { id: 'sony', name: 'SONY', logo: '/logos/sony.png', images: [] },
  { id: 'sony-music', name: 'SONY MUSIC', logo: null, images: [] },
  { id: 'telemundo', name: 'TELEMUNDO', logo: null, images: [] },
  { id: 't-mobile', name: 'T-MOBILE', logo: null, images: [] },
  { id: 'toyota', name: 'Toyota', logo: '/logos/toyota.png', images: [] },

  { id: 'us-polo', name: 'US POLO ASSN', logo: null, images: [] },
  { id: 'vanity-fair', name: 'VANITY FAIR', logo: null, images: [] },
  { id: 'virgin-atlantic', name: 'VIRGIN ATLANTIC', logo: null, images: [] },
  { id: 'visa', name: 'VISA', logo: '/logos/visa.png', images: [] },
  { id: 'warner-bros', name: 'WB', logo: '/logos/warner-bros.png', images: [] },

  { id: 'zara', name: 'ZARA', logo: '/logos/zara.png', images: [] },
  { id: 'american-tourister', name: 'AMERICAN TOURISTER', logo: null, images: [] },
  { id: 'audi', name: 'Audi', logo: '/logos/audi.png', images: [] },
  { id: 'chevrolet', name: 'CHEVROLET', logo: null, images: [] },
  { id: 'chicos', name: "CHICO'S", logo: null, images: [] },

  { id: 'nike', name: 'Nike', logo: '/logos/nike.png', images: [] },
];

type Company = {
  id: string;
  name: string;
  logo: string | null;
  images: string[];
};

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );

      gsap.fromTo('.company-logo',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.1, stagger: 0.01, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCompany(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const openGallery = (company: Company) => {
    if (company.images.length > 0) {
      setSelectedCompany(company);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedCompany) {
      setCurrentImageIndex((prev) =>
        prev === selectedCompany.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCompany) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedCompany.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main ref={containerRef} className="bg-[#080808] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">

      {/* Background Blur Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bulltech-pink/5 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bulltech-blue/5 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-20 md:mb-24">
          <h1 className="work-title text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            OUR<br/>CLIENTS
          </h1>
          <p className="work-title text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            We&apos;ve had the privilege of working with amazing brands and production teams.
            Click on a logo to view our collaborative work.
          </p>
        </div>

        {/* Companies Grid - Logo Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => openGallery(company)}
              disabled={company.images.length === 0}
              className="company-logo group relative aspect-[2/1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-bulltech-pink/30 hover:from-white/[0.12] hover:to-white/[0.04] disabled:cursor-default"
            >
              {/* Logo Image or Text Fallback */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
                  />
                ) : (
                  <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight group-hover:text-white transition-colors">
                    {company.name}
                  </span>
                )}
              </div>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-bulltech-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Hover Overlay - only if has images */}
              {company.images.length > 0 && (
                <div className="absolute inset-0 bg-bulltech-pink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    View →
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Note about logos */}
        <p className="text-center text-white/30 text-xs mt-8 uppercase tracking-widest">
          {companies.length} Brands & Counting
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
            { value: '10+', label: 'Years Combined Experience' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-bulltech-pink mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50 leading-relaxed max-w-[150px] mx-auto">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Modal */}
      {selectedCompany && selectedCompany.images.length > 0 && (
        <div
          className="fixed inset-0 z-[10002] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setSelectedCompany(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedCompany(null)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Company Name */}
          <div className="absolute top-6 left-6 text-white">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-1">Portfolio</p>
            <h2 className="text-2xl font-bold">{selectedCompany.name}</h2>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
            {currentImageIndex + 1} / {selectedCompany.images.length}
          </div>

          {/* Main Image */}
          <div
            className="relative w-full max-w-5xl mx-6 aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCompany.images[currentImageIndex]}
              alt={`${selectedCompany.name} work ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Arrows */}
          {selectedCompany.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Thumbnail Strip */}
          {selectedCompany.images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-6 py-2">
              {selectedCompany.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`relative w-16 h-12 rounded overflow-hidden flex-shrink-0 transition-all ${
                    idx === currentImageIndex
                      ? 'ring-2 ring-bulltech-pink opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
