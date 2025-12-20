'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Equipment Brand Accordion Component
function EquipmentBrand({
  name,
  logo,
  expanded,
  onToggle,
  children,
}: {
  name: string;
  logo: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4 text-white/80">
          {logo}
          {name && <span className="text-xl font-bold uppercase tracking-wider">{name}</span>}
        </div>
        <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="px-6 pb-6 border-t border-white/10">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'studio' | 'locations' | 'additional'>('studio');

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
            <span className="text-bulltech-pink font-mono text-2xl font-bold">01</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital Capture<br/>Packages
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { key: 'studio', label: '~ STUDIO ~', tag: '1a' },
              { key: 'locations', label: '~ LOCATIONS ~', tag: '1b' },
              { key: 'additional', label: 'Additional Services', tag: '1c' },
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
                <span className="font-mono text-xs opacity-60">{tab.tag}</span>
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
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-contain"
                        />
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
                            <Image
                              src={pkg.image}
                              alt={pkg.name}
                              fill
                              className="object-contain"
                            />
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => togglePackage(pkg.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-contain"
                        />
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
                            <Image
                              src={pkg.image}
                              alt={pkg.name}
                              fill
                              className="object-contain"
                            />
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
            <span className="text-bulltech-pink font-mono text-2xl font-bold">02</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital<br/>Equipment List
            </h2>
          </div>

          <p className="text-white/80 mb-8 leading-relaxed max-w-3xl">
            Our comprehensive inventory of digital equipment for on-set and post-production workflows.
          </p>

          {/* Equipment Brands Accordion */}
          <div className="space-y-4">

            {/* HOLLYLAND */}
            <EquipmentBrand
              name="HOLLYLAND"
              logo={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              }
              expanded={expandedBrand === 'hollyland'}
              onToggle={() => setExpandedBrand(expandedBrand === 'hollyland' ? null : 'hollyland')}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Res.</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">MARS 400S</td><td className="py-3 px-4">1080P60</td><td className="py-3 px-4">HDMI/SDI 400FT RANGE</td></tr>
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">MARS 4K</td><td className="py-3 px-4">UP TO 4K</td><td className="py-3 px-4">4K UHD / HDMI-SDI 400FT RANGE</td></tr>
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">PYRO S</td><td className="py-3 px-4">UP TO 4K</td><td className="py-3 px-4">4K30 UHD / HDMI-SDI 1300FT RANGE</td></tr>
                  <tr><td className="py-3 px-4 text-bulltech-pink font-medium">PYRO H</td><td className="py-3 px-4">UP TO 4K</td><td className="py-3 px-4">4K30 UHD / HDMI-SDI 1300FT RANGE</td></tr>
                </tbody>
              </table>
            </EquipmentBrand>

            {/* APPLE */}
            <EquipmentBrand
              name="APPLE"
              logo={
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              }
              expanded={expandedBrand === 'apple'}
              onToggle={() => setExpandedBrand(expandedBrand === 'apple' ? null : 'apple')}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Size</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">STUDIO DISPLAY</td><td className="py-3 px-4">27"</td><td className="py-3 px-4">27" RETINA DISPLAY 5120X2880 5K NR, VESA</td></tr>
                  <tr><td className="py-3 px-4 text-bulltech-pink font-medium">IPAD PRO</td><td className="py-3 px-4">12.9"</td><td className="py-3 px-4">12.9" LIQUID RETINA 2732X2048NR 264 PPI M2 1TB</td></tr>
                </tbody>
              </table>
            </EquipmentBrand>

            {/* FUJIFILM */}
            <EquipmentBrand
              name=""
              logo={
                <span className="text-2xl font-black tracking-tight text-white">FUJI<span className="text-[#86BC25]">FILM</span></span>
              }
              expanded={expandedBrand === 'fujifilm'}
              onToggle={() => setExpandedBrand(expandedBrand === 'fujifilm' ? null : 'fujifilm')}
            >
              <div className="space-y-8">
                {/* Camera Systems */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Camera Systems</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Mount</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100S</td><td className="py-3 px-4">GF</td><td className="py-3 px-4">MEDIUM FORMAT 102 MP CMOS BSI</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100S II</td><td className="py-3 px-4">GF</td><td className="py-3 px-4">MEDIUM FORMAT 102 MP CMOS BSI</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100 II</td><td className="py-3 px-4">GF</td><td className="py-3 px-4">MEDIUM FORMAT 102 MP CMOS</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">X100VI</td><td className="py-3 px-4">FIXED</td><td className="py-3 px-4">23MM f/2 Lens w/ 40.2 MP CMOS</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Lenses */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Lenses</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Primes */}
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-3">Primes</p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Mount</th>
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Lens</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/80 text-xs">
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">23MM f/4 R LM WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">30MM f/3.5 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">30MM f/5.6 T/S</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">45MM f/2.8 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">50MM f/3.5 R LM WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">55MM f/1.7 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">63MM f/2/8 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">80MM f/1.7 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">110MM f/2 R LM WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">110MM f/5.6 T/S MACRO</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">120MM f/4 LM OIS WR MACRO</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">250MM f/4 R LM OIS</td></tr>
                          <tr><td className="py-2 px-3">GF</td><td className="py-2 px-3">500MM f/5.6 R LM OIS WR</td></tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Zooms */}
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-3">Zooms</p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Mount</th>
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Lens</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/80 text-xs">
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">20-35MM f/4 R WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">32-64MM f/4 R LM WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">35-70MM f/4.5-5.6 WR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">GF</td><td className="py-2 px-3">45-100MM f/4 R LM OIS WR</td></tr>
                          <tr><td className="py-2 px-3">GF</td><td className="py-2 px-3">100-200MM f/5.6 R LM OIS WR</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Accessories</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">System</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Accessory</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100/100SII</td><td className="py-3 px-4">SMALLRIG 3232 A17 L-BRACKET</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100 II</td><td className="py-3 px-4">SMALLRIG APL2349 L-BRACKET</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">GFX 100 II</td><td className="py-3 px-4">REALLY RIGHT STUFF APL2349 L-BRACKET</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </EquipmentBrand>

            {/* NIKON */}
            <EquipmentBrand
              name=""
              logo={
                <span className="text-2xl font-black italic text-[#FFE100]">Nikon</span>
              }
              expanded={expandedBrand === 'nikon'}
              onToggle={() => setExpandedBrand(expandedBrand === 'nikon' ? null : 'nikon')}
            >
              <div className="space-y-8">
                {/* Camera Systems */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Camera Systems</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Mount</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">D850</td><td className="py-3 px-4">F/AF-S</td><td className="py-3 px-4">FULL FRAME 45 MP CMOS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">Z8</td><td className="py-3 px-4">Z</td><td className="py-3 px-4">FULL FRAME 45.7 MP CMOS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">Z9</td><td className="py-3 px-4">Z</td><td className="py-3 px-4">FULL FRAME 45.7 MP CMOS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">F5</td><td className="py-3 px-4">F</td><td className="py-3 px-4">AF 35MM FILM CAMERA</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">F6</td><td className="py-3 px-4">F/AF-S</td><td className="py-3 px-4">AF 35MM FILM CAMERA</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Lenses */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Lenses</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* F/AF-S Mount */}
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-3">F/AF-S Mount</p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Type</th>
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Lens</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/80 text-xs">
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">28MM f/1.4 AF NIKKOR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">35MM f/1.8G</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">50MM f/1.8G N</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Macro</td><td className="py-2 px-3">60MM f/2.8G MICRO</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">85MM f/1.8G</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Macro</td><td className="py-2 px-3">105MM f/2.8G MICRO VR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">135MM f/2 AF DC-NIKKOR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">14-24MM f/2.8G ED N</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">24-70MM f/2.8E ED N VR</td></tr>
                          <tr><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">70-200MM f/2.8FL ED VR</td></tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Z Mount */}
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-3">Z Mount</p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Type</th>
                            <th className="text-left py-2 px-3 text-white/50 font-medium uppercase tracking-wider text-xs">Lens</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/80 text-xs">
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">50MM f/1.2S</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">85MM f/1.8S</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Macro</td><td className="py-2 px-3">105MM f/2.8S VR</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Prime</td><td className="py-2 px-3">135MM f/1.8S PLENA</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">14-24MM f/2.8S</td></tr>
                          <tr className="border-b border-white/5"><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">24-70MM f/2.8S</td></tr>
                          <tr><td className="py-2 px-3">Zoom</td><td className="py-2 px-3">70-200MM f/2.8S VR</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Accessories</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">System</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Accessory</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">D850</td><td className="py-3 px-4">MB-D18 MULTI-POWER BATTERY GRIP</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">Z8</td><td className="py-3 px-4">MB-N12 BATTERY GRIP</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">Z8/Z9</td><td className="py-3 px-4">FTZ II ADAPTER</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </EquipmentBrand>

            {/* PHASE ONE */}
            <EquipmentBrand
              name=""
              logo={
                <span className="text-2xl font-light tracking-widest text-white">PHASE<span className="text-[#00B4D8]">ONE</span></span>
              }
              expanded={expandedBrand === 'phaseone'}
              onToggle={() => setExpandedBrand(expandedBrand === 'phaseone' ? null : 'phaseone')}
            >
              <div className="space-y-8">
                {/* Digital Backs */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Digital Backs</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Mount</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">IQ1 50MP</td><td className="py-3 px-4">CONTAX</td><td className="py-3 px-4">50 MP CMOS 1.3 CROP FACTOR</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">IQ2 80MP</td><td className="py-3 px-4">CONTAX</td><td className="py-3 px-4">80 MP CMOS 1:1 CROP FACTOR</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">IQ1 50MP</td><td className="py-3 px-4">HASSELBLAD</td><td className="py-3 px-4">50 MP CMOS 1.3 CROP FACTOR</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">IQ2 50MP</td><td className="py-3 px-4">HASSELBLAD</td><td className="py-3 px-4">50 MP CMOS 1.3 CROP FACTOR</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">IQ1 100MP</td><td className="py-3 px-4">HASSELBLAD</td><td className="py-3 px-4">100 MP CMOS 1:1 CROP FACTOR</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">IQ1 50MP</td><td className="py-3 px-4">MAMIYA</td><td className="py-3 px-4">50 MP CMOS 1.3 CROP FACTOR</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Accessories */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Accessories</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">System</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Accessory</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">IQ / RZ67</td><td className="py-3 px-4">HX701 DIGITAL BACK ADAPTER PLATE</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </EquipmentBrand>

            {/* INOVATIV */}
            <EquipmentBrand
              name=""
              logo={
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4L12 12M12 12L20 4M12 12L4 20M12 12L20 20" stroke="#E97A2B" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xl font-bold tracking-wider text-white">INOVATIV</span>
                </div>
              }
              expanded={expandedBrand === 'inovativ'}
              onToggle={() => setExpandedBrand(expandedBrand === 'inovativ' ? null : 'inovativ')}
            >
              <div className="space-y-8">
                {/* Workstations */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Workstations</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Size</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">ECHO 36</td><td className="py-3 px-4">36"</td><td className="py-3 px-4">CART W/ MIDDLE SHELF, TOP AND BOTTOM DRAWERS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">VOYAGER 36</td><td className="py-3 px-4">36"</td><td className="py-3 px-4">CART W/ MIDDLE SHELF, ACCESSORY HOOKS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">VOYAGER 36 EVO</td><td className="py-3 px-4">36"</td><td className="py-3 px-4">EVO NXT CART W/ MIDDLE SHELF, ACCESSORY HOOKS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">VOYAGER 42</td><td className="py-3 px-4">42"</td><td className="py-3 px-4">CART W/ MIDDLE SHELF, ACCESSORY HOOKS</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">AXIS</td><td className="py-3 px-4">N/A</td><td className="py-3 px-4">AXIS BASE STATION W/ WORKSURFACE PRO</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Workstations */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Mobile Workstations</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Make</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">DIGI PLATE W/ LEGS, CLAMPS, ACCESSORIES</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">CALIPSO</td><td className="py-3 px-4">METHOD PLATE W/ LEGS, CLAMPS AND ACCESSORIES</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">SWIFT BKLYN</td><td className="py-3 px-4">LAPTOP PLATE W/ LEGS, CLAMPS AND ACCESSORIES</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">SEAPORT DIGITAL</td><td className="py-3 px-4">I-VISOR LS PRO MAG LAPTOP CASE W/ MOUNT AND SUN HOOD</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Workstation Accessories */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Workstation Accessories</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Make</th>
                        <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">BOA ARM SYSTEMS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">5/8 BABY PIN ARM SYSTEMS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">5/8 PRO MONITOR MOUNTS W/ QR SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">QUICK RELEASE MONITOR SYSTEMS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">INSIGHT 36 MONITOR SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">INSIGHT 42 MONITOR SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">MAST RISER SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">ACCESSORY HOOKS - MEDIUM / LARGE</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">AXIS CASE PLATFORM W/ V-DROP SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">INOVATIV</td><td className="py-3 px-4">AXIS WORK SURFACE PRO W/ V-DROP SYSTEM</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">FAINI MADE</td><td className="py-3 px-4">CABLE HOOKS</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">FAINI MADE</td><td className="py-3 px-4">CAMERA HOLSTER RINGS</td></tr>
                      <tr><td className="py-3 px-4 text-bulltech-pink font-medium">MULE</td><td className="py-3 px-4">UTILITY TRAYS - MEDIUM / LARGE</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </EquipmentBrand>

            {/* WIFI */}
            <EquipmentBrand
              name="WIFI"
              logo={
                <svg className="w-8 h-8 text-[#00B4D8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
              }
              expanded={expandedBrand === 'wifi'}
              onToggle={() => setExpandedBrand(expandedBrand === 'wifi' ? null : 'wifi')}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Make</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Model</th>
                    <th className="text-left py-3 px-4 text-white/50 font-medium uppercase tracking-wider text-xs">Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">NETGEAR</td><td className="py-3 px-4">NIGHTHAWK 5G</td><td className="py-3 px-4">WIFI 6 MOBILE ROUTER / HOTSPOT</td></tr>
                  <tr className="border-b border-white/5"><td className="py-3 px-4 text-bulltech-pink font-medium">GL-INET</td><td className="py-3 px-4">GL-MT3000</td><td className="py-3 px-4">AX3000 WIFI 6 ROUTER</td></tr>
                  <tr><td className="py-3 px-4 text-bulltech-pink font-medium">GL-INET</td><td className="py-3 px-4">GL-AXT1800</td><td className="py-3 px-4">AXT1800 WIFI 6 GIGABIT WIRELESS ROUTER</td></tr>
                </tbody>
              </table>
            </EquipmentBrand>

          </div>

          {/* PDF Link */}
          <div className="mt-8">
            <a
              href="https://static1.squarespace.com/static/60ef36ab3558632fc29f47b9/t/67523447c6d7132db9e3f8ae/1733440585735/2025+LVNA+DIGITAL+EQUIPMENT+LIST-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bulltech-pink hover:underline font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Full 2025 Digital Equipment List PDF →
            </a>
          </div>
        </section>

        {/* Section 3: Photo Equipment List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-bulltech-pink font-mono text-2xl font-bold">03</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Photo<br/>Equipment List
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-white/80 mb-8 leading-relaxed">
              Professional photography equipment including cameras and underwater systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold uppercase mb-4 text-bulltech-pink">Cameras</h3>
                <p className="text-white/60 leading-relaxed">
                  High-end digital camera systems for professional photography and video production.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase mb-4 text-bulltech-pink">Underwater Systems</h3>
                <p className="text-white/60 leading-relaxed">
                  Specialized underwater photography and video equipment for marine and aquatic productions.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="text-white/60 italic">
                Detailed camera and underwater system specifications available upon request.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Essentials */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-bulltech-pink font-mono text-2xl font-bold">04</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Essentials
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-white/80 mb-8 leading-relaxed">
              Essential accessories and support equipment for every production.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase text-bulltech-pink">Studio & On-Set</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Capture workstations</li>
                  <li>• Carts & stands</li>
                  <li>• Monitor accessories</li>
                  <li>• Cable management</li>
                  <li>• Power solutions</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase text-bulltech-pink">Backup & Storage</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Backup architectures</li>
                  <li>• Storage solutions</li>
                  <li>• Data transfer systems</li>
                  <li>• File integrity tools</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
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
