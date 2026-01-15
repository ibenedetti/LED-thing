
import React from 'react';
import { MODULES } from '../constants';
import { Link } from 'react-router-dom';

const Catalog: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 min-h-screen">
      <div className="mb-20 flex justify-between items-end border-b-2 border-primary/20 pb-10">
        <div>
          <h2 className="text-primary font-display font-black uppercase tracking-[0.5em] mb-4 text-xl">// LOGISTICS : INVENTORY</h2>
          <h1 className="text-white text-7xl font-display font-black uppercase tracking-tighter">Hardware Vault</h1>
        </div>
        <div className="text-right">
           <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Stock Count</p>
           <p className="text-white font-display font-black text-4xl uppercase">{MODULES.length} SERIES</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MODULES.map((module) => (
          <div key={module.id} className="bg-technical border border-tech-border p-3 group relative">
            <div className="hud-corner top-0 left-0 border-r-0 border-b-0 opacity-40"></div>
            <div className="hud-corner bottom-0 right-0 border-l-0 border-t-0 opacity-40"></div>
            
            <div className="relative aspect-[4/3] overflow-hidden bg-obsidian border border-white/5 mb-6">
              <div className="absolute top-2 left-2 z-20 bg-black/80 text-primary font-mono text-[9px] px-2 py-1 uppercase tracking-widest border border-primary/20">
                REF: {module.id.toUpperCase()}
              </div>
              <img src={module.imageUrl} alt={module.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 z-20">
                 <div className="flex gap-2">
                    <span className="bg-primary text-black font-display font-black text-[10px] px-2 py-0.5 uppercase tracking-tighter">IP: {module.ipRating}</span>
                    <span className="bg-white/10 text-white font-display font-black text-[10px] px-2 py-0.5 uppercase tracking-tighter">{module.pitch}MM PITCH</span>
                 </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <h3 className="text-white font-display text-3xl font-black uppercase mb-6 leading-none tracking-tighter group-hover:text-primary transition-colors">{module.name}</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest">Panel Dim.</span>
                  <span className="text-white font-mono text-xs font-bold uppercase">{module.widthMm}x{module.heightMm}MM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest">Max Power</span>
                  <span className="text-white font-mono text-xs font-bold uppercase">{module.maxPowerWatts}W</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest">Luminance</span>
                  <span className="text-white font-mono text-xs font-bold uppercase">{module.nits} NIT</span>
                </div>
              </div>
              
              <Link to="/configurator" className="block w-full text-center bg-white/5 border border-white/10 text-white font-display font-black uppercase py-4 hover:bg-primary hover:text-black transition-all transform group-hover:-translate-y-1 stencil-cut">
                Initiate Setup
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
