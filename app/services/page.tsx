'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Package Image Component for handling scaling and slideshows
function PackageImage({ name, defaultImage }: { name: string; defaultImage: string }) {
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (name === 'MEAN MACHINE') {
      const images = ['/MEAN MACHINE1.png', '/MEAN MACHINE2.png', '/MEAN MACHINE 3.png'];
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % images.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [name]);

  useEffect(() => {
    if (name === 'MEAN MACHINE') {
      const images = ['/MEAN MACHINE1.png', '/MEAN MACHINE2.png', '/MEAN MACHINE 3.png'];
      setCurrentImage(images[imageIndex]);
    }
  }, [imageIndex, name]);

  const getScaleClass = () => {
    if (name === 'FAST & FURIOUS') {
      return 'scale-[1.6]'; // Increased scale for Fast & Furious
    }
    if (name === 'MEAN MACHINE') {
      return 'scale-125';
    }
    if (['CALLE 8', 'CRUISELINER', 'Hi-ROLLER'].includes(name)) {
      return 'scale-[1.4]';
    }
    return '';
  };

  return (
    <Image
      src={currentImage}
      alt={name}
      fill
      className={`object-contain ${getScaleClass()} transition-transform duration-300`}
    />
  );
}

export default function ServicesPage() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'studio' | 'locations' | 'additional'>('locations');
  const [activePhotoTab, setActivePhotoTab] = useState<'camera' | 'underwater'>('camera');

  const togglePackage = (name: string) => {
    setExpandedPackage(expandedPackage === name ? null : name);
  };

  const studioPackages = [
    {
      name: 'CALLE 8',
      image: '/CALLE 8.png',
      includes: [
        'APPLE 16.2" MBP M2/M3',
        'APPLE iPad Air/Directors Cage',
        'HOLLYLAND MARS TX & RX 4K KIT',
        'INOVATIV DIGI-PLATE or SEAPORT LAPTOP KIT',
        'HYPER JUICE BATTERY or ANKER',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '27" EIZO monitor w/Hood',
        'ECOFLOW River Pro Battery',
        'KUPO roller',
      ],
    },
    {
      name: 'CRUISELINER',
      image: '/CRUISELINER.png',
      includes: [
        'APPLE 16.2" MBP M2/M3 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'Hi-ROLLER',
      image: '/HIROLLER1.png',
      includes: [
        'MAC STUDIO PRO ULTRA M1 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '16" + tools monitors',
        'HOLLYLAND M1 TX/RX & 4K Mars RX or Pyro TX/RX',
        '27" EIZO monitor w/Hood',
        'ECOFLOW River Pro Battery',
        'KUPO roller w/MULE ECOFLOW Tray',
      ],
    },
  ];

  const locationPackages = [
    {
      name: 'Flamingo',
      image: '/FLAMINGO.png',
      includes: [
        'APPLE 16.2" MBP M2/M3',
        'APPLE iPad Air/Directors Cage',
        'HOLLYLAND MARS TX 4K KIT',
        'INOVATIV DIGI-PLATE or SEAPORT LAPTOP KIT',
        'HYPER JUICE BATTERY or ANKER',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'FAST & FURIOUS',
      image: '/FAST FURIOUS1.png',
      includes: [
        'APPLE 16.2" MBP M2/M3 or MAC MINI M4 MAX-OUT',
        '1x EIZO 27" (version A) 2x EIZO 27\' (version B)',
        'TRP Tent or MULE tent',
        'INOVATIV Axis Setup w/ single or double monitor brace',
        'ECOFLOW Delta 2 or River Pro BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'MEAN MACHINE',
      image: '/MEAN MACHINE1.png',
      includes: [
        'MAC STUDIO PRO ULTRA M1 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'MULE tent',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '16" + tools monitors',
      ],
    },
  ];

  const customSourcingNote = (
    <div className="mt-12 pt-8 border-t border-white/10">
      <p className="text-lg font-medium mb-4">Looking for a piece of equipment we don't show online?</p>
      <p className="text-white/80 mb-4">We're here to help.</p>
      <p className="text-white/80 mb-6">We offer custom equipment sourcing for any production need.</p>
      <p className="text-white/80 mb-2">Contact us for availability and options:</p>
      <div className="space-y-2">
        <a href="tel:+13055227386" className="block text-bulltech-pink hover:underline font-medium">
          +1 (305) 522-7386
        </a>
        <a href="mailto:hello@bulldigital.tech" className="block text-bulltech-pink hover:underline font-medium">
          hello@bulldigital.tech
        </a>
      </div>
      <p className="text-white/60 mt-6 italic">Thank you.</p>
    </div>
  );

  return (
    <main className="bg-[#080808] min-h-screen text-white pt-32 md:pt-40 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            Equipment &<br/>Workflow<br/>Engineering
          </h1>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              BullTech maintains a curated inventory of high-end digital equipment, including capture workstations, carts, monitors,
              lighting accessories, underwater systems, and backup architectures.
            </p>
            <p>
              Every item is maintained, tested, and configured in-house to meet professional standards—ensuring reliability on
              demanding sets where downtime is not an option.
            </p>
            <p className="font-medium text-white">
              Because we oversee both the operation and the gear, our clients benefit from:
            </p>

            <ul className="space-y-3 ml-6 list-disc">
              <li>Seamless integration</li>
              <li>Faster setups</li>
              <li>Fewer technical complications</li>
              <li>Consistent color and file integrity</li>
            </ul>
          </div>
        </div>

        {/* Section 1: Digital Capture Packages */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital Capture<br/>Packages
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { key: 'locations', label: 'LOCATIONS' },
              { key: 'studio', label: 'STUDIO' },
              { key: 'additional', label: 'Additional Services' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key as typeof activeTab); setExpandedPackage(null); }}
                className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-bulltech-pink text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* STUDIO Tab Content */}
          {activeTab === 'studio' && (
            <div className="space-y-4">
              {studioPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => togglePackage(pkg.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <PackageImage name={pkg.name} defaultImage={pkg.image} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-2xl md:text-3xl font-black italic text-bulltech-pink tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-sm text-white/50">DIGITAL TECHNICIAN - 10 HOURS</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedPackage === pkg.name ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedPackage === pkg.name && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative w-[250px] h-[250px]">
                            <PackageImage name={pkg.name} defaultImage={pkg.image} />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Includes:</p>
                          <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex gap-3 text-white/80">
                                <span className="text-bulltech-pink font-mono text-sm">{i + 1}</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LOCATIONS Tab Content */}
          {activeTab === 'locations' && (
            <div className="space-y-4">
              {locationPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => togglePackage(pkg.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <PackageImage name={pkg.name} defaultImage={pkg.image} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-2xl md:text-3xl font-black italic text-bulltech-pink tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-sm text-white/50">DIGITAL TECHNICIAN - 10 HOURS</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedPackage === pkg.name ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedPackage === pkg.name && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative w-[250px] h-[250px]">
                            <PackageImage name={pkg.name} defaultImage={pkg.image} />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Includes:</p>
                          <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex gap-3 text-white/80">
                                <span className="text-bulltech-pink font-mono text-sm">{i + 1}</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ADDITIONAL SERVICES Tab Content */}
          {activeTab === 'additional' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-8">
                {[
                  'File retention',
                  'Post processing',
                  'Color treatment',
                  'Photo retouching',
                  'BTS',
                  'CAMERA B',
                  'OTS',
                  'REMOTE SHOOTING',
                  'Multiple TECH TEAMS Coordination',
                  'Custom WORKFLOWS FOR: Agencies & Production Co.',
                  'CAMERA READY PRE-PRO',
                  'Asset MANAGEMENT & Line of custody',
                  'WORKFLOWS CONSULTATION',
                  'Under Water Productions',
                ].map((service, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-bulltech-pink mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/60 italic border-t border-white/10 pt-6">
                Please ask us about our additional services, we are here to make your production a success.
              </p>
            </div>
          )}

          {/* Custom Sourcing Note */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            {customSourcingNote}
          </div>
        </section>

        {/* Section 2: Digital Equipment List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital<br/>Equipment List
            </h2>
          </div>

          <p className="text-white/80 mb-12 leading-relaxed max-w-3xl">
            Our comprehensive inventory of digital equipment for on-set and post-production workflows.
          </p>

          {/* Equipment Categories List */}
          <ul className="space-y-6 mb-12">
            {[
              'WORKSTATIONS',
              'MONITORS',
              'WIRELESS',
              'BATTERIES'
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-bulltech-pink"></span>
                <span className="text-2xl md:text-4xl font-black uppercase tracking-wider text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* PDF Link */}
          <div className="mt-8">
            <a
              href="https://www.dropbox.com/scl/fo/kgfvfv69h3c6b1fhdfv1a/AGlhHFEnpx3q-tLEsop4LLs?rlkey=ck30f6sz9yug5n3v3stv77dso&st=htx4ahab&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bulltech-pink hover:underline font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Full Digital Equipment List
            </a>
          </div>
        </section>

        {/* Section 3: Photo Equipment List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Photo<br/>Equipment List
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-white/80 mb-8 leading-relaxed">
              Professional photography equipment including cameras and underwater systems.
            </p>

            {/* Photo Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { key: 'camera', label: 'CAMERA SYSTEMS' },
                { key: 'underwater', label: 'UNDERWATER HOUSING' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActivePhotoTab(tab.key as typeof activePhotoTab)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    activePhotoTab === tab.key
                      ? 'bg-bulltech-pink text-black'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              {activePhotoTab === 'camera' && (
                <div>
                  <h3 className="text-xl font-bold uppercase mb-4 text-bulltech-pink">Camera Systems</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    High-end digital camera systems for professional photography and video production.
                  </p>
                  <a
                    href="https://www.dropbox.com/scl/fo/fohpuzpzes1l6wikb0fa5/APwO6xGezp2zRr_pmWgf_gc?rlkey=3751afuqkwg0ru1miq44sum3s&st=xcyflsph&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-bulltech-pink hover:underline font-medium"
                  >
                    View Camera Equipment List →
                  </a>
                </div>
              )}

              {activePhotoTab === 'underwater' && (
                <div>
                  <h3 className="text-xl font-bold uppercase mb-4 text-bulltech-pink">Underwater Housing</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Specialized underwater photography and video equipment for marine and aquatic productions.
                  </p>
                  <a
                    href="https://www.dropbox.com/scl/fo/zg1lahvmg3ofufjb/ALKLSSAGTK2JpkJnl7b1tjc?rlkey=ctqtg13j2r9vp9&st=64gps7q5&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-bulltech-pink hover:underline font-medium"
                  >
                    View Underwater Systems List →
                  </a>
                </div>
              )}
            </div>

            <p className="text-white/60 italic mt-6 text-sm">
              Detailed camera and underwater system specifications available upon request.
            </p>
          </div>
        </section>

        {/* Section 4: Essentials List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Essentials<br/>List
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-white/80 mb-8 leading-relaxed">
              Essential accessories and support equipment for every production.
            </p>

            <a
              href="https://www.dropbox.com/scl/fo/wi1fav3i81lker7mv80j1/AHWGl8mSDKhHC3GCKk0jFeo?rlkey=559vx2a5kxhcik7pyoy1xbij9&st=08fp0kh8&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bulltech-pink hover:underline font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Essentials List
            </a>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-8">
              <p className="text-white/60 italic">
                Complete essentials list and availability can be customized based on your production requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">Ready to Start?</h2>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-bulltech-pink text-bulltech-pink text-lg font-bold uppercase tracking-widest hover:bg-bulltech-pink hover:text-black transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </main>
  );
}
