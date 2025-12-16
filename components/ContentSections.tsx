'use client';

export default function ContentSections() {
  return (
    <>
      {/* SECTION 1: INTRO (Blue) - Pure Visual */}
      <section
        id="section1"
        className="relative min-h-screen w-full flex items-end justify-center pb-12 overflow-hidden"
        style={{ backgroundColor: '#4EC7E8' }}
      >
        <div className="animate-bounce text-white/50 text-sm font-bold uppercase tracking-[0.3em] z-10">
          Scroll to Explore
        </div>
      </section>

      {/* SECTION 2: THE STUDIO (White) - Editorial / Magazine Style */}
      <section
        id="section2"
        className="relative min-h-screen w-full flex items-center justify-between px-4 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Background Pattern - Subtle Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        />

        {/* Left Column: Huge Vertical Type */}
        <div className="hidden md:flex flex-col justify-center h-full z-10 w-1/4">
          <h2 className="text-[12rem] leading-none font-bold text-transparent opacity-10 rotate-180"
              style={{ WebkitTextStroke: '2px black', writingMode: 'vertical-rl' }}>
            STUDIO
          </h2>
        </div>

        {/* Right Column: Detailed Content "Manifesto" */}
        <div className="w-full md:w-[35%] z-10 flex flex-col gap-10 md:text-right text-center items-center md:items-end mt-20 md:mt-0">
          
          <div className="space-y-4">
             <div className="flex items-center gap-4 justify-center md:justify-end">
                <span className="h-[1px] w-12 bg-black/30"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-bulltech-pink">The Craft</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
               Visual<br/>Architecture
             </h2>
          </div>

          <p className="text-gray-600 text-lg font-serif italic leading-relaxed max-w-md">
            "We construct images that don't just exist—they perform. Bridging the raw energy of Miami with high-end editorial precision."
          </p>

          <ul className="space-y-6 w-full max-w-sm">
            {[
              { num: '01', title: 'Editorial & Fashion', desc: 'Campaigns that define trends.' },
              { num: '02', title: 'Digital Assets', desc: 'Content built for the feed.' },
              { num: '03', title: 'Art Direction', desc: 'Concept to final execution.' },
            ].map((item) => (
              <li key={item.num} className="group border-b border-black/10 pb-4 hover:border-black transition-colors cursor-pointer">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs font-bold text-bulltech-pink">{item.num}</span>
                  <span className="text-xl font-bold uppercase group-hover:translate-x-[-10px] transition-transform">{item.title}</span>
                </div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.desc}</p>
              </li>
            ))}
          </ul>

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
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-full py-20">
          
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

            <div className="grid grid-cols-2 gap-8 text-white/50 font-mono text-xs">
              <div>
                <h4 className="text-white mb-2 border-b border-white/10 pb-2">LOCATION</h4>
                <p>Wynwood, Miami</p>
                <p>FL 33127, USA</p>
              </div>
              <div>
                <h4 className="text-white mb-2 border-b border-white/10 pb-2">CONTACT</h4>
                <p>hello@bulltech.miami</p>
                <p>+1 (305) 555-0199</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Call to Action */}
          <div className="w-full md:w-1/3 z-10 flex flex-col items-center md:items-end gap-8 mt-12 md:mt-0">
             <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-bulltech-pink blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-12 text-center transition-transform duration-300 group-hover:-translate-y-2">
                   <h3 className="text-white text-2xl font-bold uppercase mb-2">Book Session</h3>
                   <p className="text-gray-400 text-sm mb-6">Available for Q1 2025</p>
                   <span className="inline-block px-6 py-2 bg-bulltech-pink text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                     Schedule Now
                   </span>
                </div>
                
                {/* Decorative Corner Brackets */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-white/50"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-white/50"></div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
