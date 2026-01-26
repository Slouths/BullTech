'use client';

import Link from 'next/link';

export default function ContentSections() {
  return (
    <>
      {/* SECTION 1: INTRO (Dark) - High Contrast for Logo */}
      <section
        id="section1"
        className="relative min-h-screen w-full flex flex-col items-center justify-start p-6 pt-32 overflow-hidden"
        style={{ backgroundColor: '#080808' }}
      >
        {/* Centered Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#F0F0F0]">
              Miami Based<br/>
              Digital Operators
            </h1>
            <p className="text-lg md:text-2xl font-bold tracking-tight text-[#F0F0F0]">
              & Digital Kit Package rentals.
            </p>
          </div>

          {/* Philosophy - Centered Block */}
          <div className="max-w-xl space-y-8 pt-4">
            <div className="flex items-center justify-center gap-4 opacity-60">
               <span className="h-[1px] w-8 bg-white"></span>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Our Philosophy</span>
               <span className="h-[1px] w-8 bg-white"></span>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                At BullTech, we believe that great imagery is the product of both artistry and precision.
              </p>
              <p className="text-base font-medium leading-relaxed">
                Our role is to build the most stable, efficient, and bulletproof workflow for your project, so
                that photographers and directors can focus entirely on the creative process.
              </p>
              <p className="text-lg font-bold">
                We don’t just operate machines; we collaborate, anticipate, and elevate.
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce text-white/50 text-sm font-bold uppercase tracking-[0.3em] pt-12 pointer-events-none text-center">
              Scroll to Explore
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (Pink) */}
      <section
        id="section2"
        className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#E987B4' }}
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

        {/* Right-Aligned Content */}
        <div className="w-full md:w-[45%] z-10 flex flex-col gap-12 text-center md:text-right items-center md:items-end mt-20 md:mt-0 md:ml-auto md:mr-12">

          <div className="space-y-6">
             <div className="flex items-center gap-4 justify-center md:justify-end">
                <span className="h-[1px] w-12 bg-black/30"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">What We Do</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-black">
               Digital Tech &<br/>Capture Services
             </h2>
          </div>

          <p className="text-black text-lg leading-relaxed max-w-xl">
            From color-managed tethered capture to live grading, wireless monitoring, and multi-station workflows for large-scale productions, we provide end-to-end technical support designed specifically for the high pace of today's visual industry.
          </p>

          <div className="w-full max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-6">Our systems are field-tested across:</p>
            <ul className="space-y-4">
              {[
                'One day location or studio shoots',
                'High-volume advertising sets',
                'Multi-week international productions',
                'Underwater and marine shoots',
                'South FL, FLORIDA KEYS, CARIBBEAN and remote locations',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-black justify-center md:justify-end">
                  <span className="text-base">{item}</span>
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-black text-lg leading-relaxed max-w-xl mt-4">
            Whether the production calls for a Single DT, DIT or a full technical team, we tailor the workflow to the scale and needs of your project.
          </p>

        </div>
      </section>

      {/* SECTION 3: BOOKING (Dark) - Cyber / Technical Interface */}
      <section
        id="section3"
        className="relative min-h-screen w-full flex items-center px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#111214' }}
      >
        {/* Background - Gradient Mesh */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bulltech-pink/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bulltech-blue/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Content Container - "HUD" Style Layout */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-full py-32">
          
          {/* Left Panel: Project Specs */}
          <div className="w-full md:w-1/3 z-10 text-left space-y-12">
            <div className="border-l-2 border-bulltech-pink pl-6">
              <h2 className="text-white text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter mb-2">
                Start<br/>Project
              </h2>
              <p className="text-bulltech-pink font-mono text-sm tracking-widest">
                /// READY FOR TAKEOFF
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-white/90 font-mono text-sm">
              <div>
                <h4 className="text-white mb-2 border-b border-white/10 pb-2">LOCATION</h4>
                <p>Calle 8, Miami</p>
                <p>FL 33131</p>
              </div>
              <div>
                <h4 className="text-white mb-2 border-b border-white/10 pb-2">CONTACT</h4>
                <p>hello@bulldigital.tech</p>
                <p className="whitespace-nowrap">+1 (305) 522-7386</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Call to Action */}
          <div className="w-full md:w-1/3 z-10 flex flex-col items-center md:items-end gap-8 mt-12 md:mt-0">
             <Link href="/contact" className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-bulltech-pink blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-12 text-center transition-transform duration-300 group-hover:-translate-y-2">
                   <h3 className="text-white text-2xl font-bold uppercase mb-2">Book Session</h3>
                   <p className="text-gray-400 text-sm mb-6">2026 season</p>
                   <span className="inline-block px-6 py-2 bg-bulltech-pink text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                     Schedule Now
                   </span>
                </div>
                
                {/* Decorative Corner Brackets */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-white/50"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-white/50"></div>
             </Link>
          </div>

        </div>
      </section>
    </>
  );
}
