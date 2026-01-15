
import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { EventType } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<EventType | 'ALL'>('ALL');

  const filteredItems = filter === 'ALL' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 min-h-screen">
      <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b-2 border-primary/20 pb-12">
        <div className="max-w-2xl">
          <h2 className="text-primary font-display font-black uppercase tracking-[0.5em] mb-4 text-xl">// FIELD OPS : ARCHIVE</h2>
          <h1 className="text-white text-7xl font-display font-black uppercase tracking-tighter mb-6 leading-none">Global Case Studies</h1>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] leading-relaxed">
            Historical deployment records spanning stadium tours, international festivals, and mission-critical corporate infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['ALL', ...Object.values(EventType)].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 font-display font-black uppercase tracking-[0.2em] text-[10px] transition-all border stencil-cut ${filter === cat ? 'bg-primary text-black border-primary' : 'bg-white/5 text-gray-500 border-white/10 hover:border-primary/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-32">
        {filteredItems.map((item, index) => (
          <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center group`}>
            <div className="lg:w-3/5 relative bg-technical p-4 border border-tech-border transform transition-all group-hover:rotate-1">
              <div className="hud-corner top-0 left-0 border-r-0 border-b-0"></div>
              <div className="hud-corner bottom-0 right-0 border-l-0 border-t-0"></div>
              <div className="relative aspect-[16/9] overflow-hidden border border-white/5">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary text-black font-mono text-[9px] font-black px-2 py-1 uppercase tracking-widest">
                  CASE-ID: {item.id}00X
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-0.5 bg-primary"></span>
                <span className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em]">{item.category}</span>
              </div>
              <h3 className="text-white font-display text-5xl font-black uppercase mb-8 leading-none tracking-tighter group-hover:translate-x-2 transition-transform">{item.title}</h3>
              <p className="text-gray-400 font-bold text-lg leading-relaxed mb-10 border-l-4 border-primary/20 pl-8 uppercase tracking-tight italic opacity-80">
                "{item.description}"
              </p>
              
              <div className="bg-obsidian p-8 border border-tech-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">analytics</span>
                  Configuration Analysis
                </p>
                <p className="text-white font-display font-bold uppercase text-2xl tracking-tight leading-tight mb-2">
                  {item.configSummary}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 flex gap-10">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-gray-600 uppercase">Outcome</span>
                      <span className="text-primary font-mono text-[10px] font-black uppercase">Successful Deployment</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-gray-600 uppercase">Personnel</span>
                      <span className="text-white font-mono text-[10px] uppercase">Tier 1 Engineers</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
