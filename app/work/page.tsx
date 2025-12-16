'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const categories = ['All', 'Fashion', 'Product', 'Events'];

const projects = [
  { id: 1, title: 'Neon Nights', category: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', color: '#FF8FBE' },
  { id: 2, title: 'Urban Flow', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', color: '#4EC7E8' },
  { id: 3, title: 'Tech Minimal', category: 'Product', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', color: '#ffffff' },
  { id: 4, title: 'Gala 2024', category: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', color: '#FF8FBE' },
  { id: 5, title: 'Summer Campaign', category: 'Fashion', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80', color: '#4EC7E8' },
  { id: 6, title: 'Studio Sessions', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', color: '#ffffff' },
];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'Fashion' && p.category === 'Lifestyle')); // Simple mapping for demo

  useEffect(() => {
    // Animate items when filter changes
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <main className="bg-white min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-black pb-8">
          <div>
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-none tracking-tighter">
              Selected<br/>Work
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border border-black text-sm font-bold uppercase tracking-widest transition-all duration-300
                  ${filter === cat ? 'bg-black text-white' : 'bg-transparent hover:bg-black/5'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-10 group-hover:opacity-20 transition-opacity">
                    {/* Placeholder content since we don't have real photos yet */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="opacity-20 group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                    <p className="font-marker text-2xl mb-2">View Case Study</p>
                    <span className="text-xs font-bold uppercase tracking-widest border px-4 py-1">Explore</span>
                </div>
              </div>

              {/* Title Block */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-bulltech-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-400">2024</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

