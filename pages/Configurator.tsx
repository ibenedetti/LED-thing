
import React, { useState, useMemo } from 'react';
import { MODULES, TRUSS_COST_PER_METER, RIGGING_FEE_BASE } from '../constants';
import { Configuration, LayoutType, EventType } from '../types';

const Configurator: React.FC = () => {
  const [config, setConfig] = useState<Configuration>({
    module: MODULES[0],
    layout: LayoutType.SINGLE,
    eventType: EventType.CONCERT,
    mainWidth: 12,
    mainHeight: 7,
    bannerWidth: 4,
    bannerHeight: 8,
    hasTruss: true,
    rotationY: -15,
    perspective: 1000,
  });

  const stats = useMemo(() => {
    const { module, layout, mainWidth, mainHeight, bannerWidth, bannerHeight } = config;
    
    let totalModules = mainWidth * mainHeight;
    if (layout === LayoutType.SYMMETRIC_BANNERS) {
      totalModules += (bannerWidth * bannerHeight) * 2;
    } else if (layout === LayoutType.ULTRAWIDE) {
      totalModules = (mainWidth * 2) * mainHeight;
    }

    const totalWeight = totalModules * module.weightKg;
    const totalPower = totalModules * module.maxPowerWatts;
    const widthM = (mainWidth * module.widthMm) / 1000;
    const heightM = (mainHeight * module.heightMm) / 1000;
    
    const bannerWidthM = (bannerWidth * module.widthMm) / 1000;
    const bannerHeightM = (bannerHeight * module.heightMm) / 1000;

    const totalTrussM = layout === LayoutType.SYMMETRIC_BANNERS 
      ? widthM + (bannerWidthM * 2) + 2 
      : widthM;

    // Rental Multipliers based on EventType
    const eventMultipliers: Record<EventType, number> = {
      [EventType.CONCERT]: 1.2, // Rigging intensive
      [EventType.FESTIVAL]: 1.5, // Harsh environment
      [EventType.CORPORATE]: 1.0, // Standard
      [EventType.STADIUM]: 1.8, // Massive scale overhead
    };

    const baseDaily = (totalModules * module.pricePerDay) + (config.hasTruss ? totalTrussM * TRUSS_COST_PER_METER : 0) + RIGGING_FEE_BASE;
    const dailyRental = baseDaily * eventMultipliers[config.eventType];

    return {
      totalModules,
      totalWeight,
      totalPower,
      widthM,
      heightM,
      bannerWidthM,
      bannerHeightM,
      totalTrussM,
      dailyRental
    };
  }, [config]);

  const updateConfig = (key: keyof Configuration, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-[calc(100vh-100px)]">
      {/* Settings Column */}
      <div className="lg:col-span-3 space-y-6 bg-technical p-6 border border-tech-border overflow-y-auto max-h-[85vh] custom-scrollbar">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <h2 className="text-primary font-display font-black text-xl uppercase tracking-widest">
            Control Node
          </h2>
          <span className="material-symbols-outlined text-primary">settings_input_component</span>
        </div>

        {/* Hardware Selection */}
        <div className="space-y-3">
          <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Module DNA</label>
          <div className="flex flex-col gap-2">
            {MODULES.map(m => (
              <button
                key={m.id}
                onClick={() => updateConfig('module', m)}
                className={`group p-3 text-left border transition-all ${config.module.id === m.id ? 'border-primary bg-primary/10' : 'border-tech-border hover:border-primary/40'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-display font-black uppercase text-sm ${config.module.id === m.id ? 'text-primary' : 'text-white'}`}>{m.name}</span>
                  <span className="text-[10px] font-mono text-gray-500">P{m.pitch}</span>
                </div>
                <div className="flex gap-4 text-[9px] text-gray-500 uppercase font-mono">
                  <span>{m.widthMm}x{m.heightMm}MM</span>
                  <span>{m.nits} NIT</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Event Type & Layout */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-3">
            <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Environment</label>
            <select 
              value={config.eventType}
              onChange={(e) => updateConfig('eventType', e.target.value)}
              className="w-full bg-obsidian border-tech-border text-white text-xs p-3 font-mono focus:border-primary focus:ring-0 uppercase"
            >
              {Object.values(EventType).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Screen Topology</label>
            <div className="grid grid-cols-1 gap-1">
              {[
                { id: LayoutType.SINGLE, label: 'Single Screen' },
                { id: LayoutType.SYMMETRIC_BANNERS, label: 'Main + Side Banners' },
                { id: LayoutType.ULTRAWIDE, label: 'Ultrawide' },
              ].map(l => (
                <button
                  key={l.id}
                  onClick={() => updateConfig('layout', l.id)}
                  className={`p-2 text-[10px] text-left font-black uppercase tracking-widest border transition-all ${config.layout === l.id ? 'bg-primary text-black border-primary' : 'bg-transparent text-gray-500 border-tech-border hover:border-white/20'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dimensions Matrix */}
        <div className="space-y-4 pt-4 border-t border-tech-border">
           <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Scale Adjustment</label>
           <div className="grid grid-cols-2 gap-3">
             <div className="bg-obsidian p-2 border border-tech-border">
               <p className="text-[9px] text-white/40 uppercase mb-2">Main Width</p>
               <input type="number" min="1" value={config.mainWidth} onChange={(e) => updateConfig('mainWidth', Math.max(1, parseInt(e.target.value) || 1))} className="w-full bg-transparent text-white font-mono text-sm border-none p-0 focus:ring-0" />
             </div>
             <div className="bg-obsidian p-2 border border-tech-border">
               <p className="text-[9px] text-white/40 uppercase mb-2">Main Height</p>
               <input type="number" min="1" value={config.mainHeight} onChange={(e) => updateConfig('mainHeight', Math.max(1, parseInt(e.target.value) || 1))} className="w-full bg-transparent text-white font-mono text-sm border-none p-0 focus:ring-0" />
             </div>
           </div>
           
           {config.layout === LayoutType.SYMMETRIC_BANNERS && (
             <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-500">
               <div className="bg-obsidian p-2 border border-tech-border">
                 <p className="text-[9px] text-white/40 uppercase mb-2">Banner Width</p>
                 <input type="number" min="1" value={config.bannerWidth} onChange={(e) => updateConfig('bannerWidth', Math.max(1, parseInt(e.target.value) || 1))} className="w-full bg-transparent text-white font-mono text-sm border-none p-0 focus:ring-0" />
               </div>
               <div className="bg-obsidian p-2 border border-tech-border">
                 <p className="text-[9px] text-white/40 uppercase mb-2">Banner Height</p>
                 <input type="number" min="1" value={config.bannerHeight} onChange={(e) => updateConfig('bannerHeight', Math.max(1, parseInt(e.target.value) || 1))} className="w-full bg-transparent text-white font-mono text-sm border-none p-0 focus:ring-0" />
               </div>
             </div>
           )}
        </div>

        {/* View Controls */}
        <div className="pt-4 border-t border-tech-border space-y-4">
           <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">3D Viewer Rotation</label>
           <input 
              type="range" 
              min="-60" 
              max="60" 
              value={config.rotationY} 
              onChange={(e) => updateConfig('rotationY', parseInt(e.target.value))}
              className="w-full h-1 bg-tech-border rounded-lg appearance-none cursor-pointer accent-primary"
           />
        </div>
      </div>

      {/* 3D Visualizer Column */}
      <div className="lg:col-span-9 flex flex-col gap-6">
        <div className="bg-obsidian border border-tech-border h-[600px] relative flex items-center justify-center p-12 overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          
          {/* Legend */}
          <div className="absolute top-8 left-8 flex flex-col gap-4 z-10">
             <div className="flex items-center gap-3">
               <div className="size-3 bg-primary animate-pulse"></div>
               <span className="text-[10px] font-mono uppercase text-white/50 tracking-widest">Active LED Surface</span>
             </div>
             {config.hasTruss && (
               <div className="flex items-center gap-3">
                 <div className="size-3 border border-zinc-600"></div>
                 <span className="text-[10px] font-mono uppercase text-white/50 tracking-widest">Structural Truss</span>
               </div>
             )}
          </div>

          <div className="absolute top-8 right-8 text-right z-10">
            <p className="text-[10px] font-mono text-primary uppercase animate-pulse tracking-[0.3em]">Live Feed / Rendering</p>
            <p className="text-white font-display font-bold text-lg uppercase">{stats.widthM.toFixed(1)}M x {stats.heightM.toFixed(1)}M VIEWPORT</p>
          </div>

          {/* Interactive Stage */}
          <div 
            className="relative transition-transform duration-500 ease-out preserve-3d"
            style={{ 
              perspective: `${config.perspective}px`,
              transform: `rotateX(5deg) rotateY(${config.rotationY}deg)` 
            }}
          >
            {/* Modular Build */}
            <div className="flex flex-col items-center">
              {/* Truss Visualization */}
              {config.hasTruss && (
                <div className="relative mb-2">
                   {/* Main Truss Beam */}
                   <div 
                     className="bg-zinc-800 border border-zinc-700 h-6 relative shadow-xl"
                     style={{ width: `${(config.mainWidth * 15) + (config.layout === LayoutType.SYMMETRIC_BANNERS ? (config.bannerWidth * 30) + 40 : 0)}px` }}
                   >
                     <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 5px, transparent 5px, transparent 10px)' }}></div>
                   </div>
                   {/* Rigging cables */}
                   <div className="absolute -top-40 left-10 w-px h-40 bg-white/20"></div>
                   <div className="absolute -top-40 right-10 w-px h-40 bg-white/20"></div>
                </div>
              )}

              {/* LED Wall Topology */}
              <div className="flex items-start gap-6">
                {/* Left Side Banner */}
                {config.layout === LayoutType.SYMMETRIC_BANNERS && (
                  <div 
                    className="bg-primary/30 border border-primary/50 relative shadow-[0_0_30px_rgba(204,255,0,0.05)]"
                    style={{ width: `${config.bannerWidth * 12}px`, height: `${config.bannerHeight * 12}px` }}
                  >
                    <div className="absolute inset-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                  </div>
                )}

                {/* Main Central Screen */}
                <div 
                  className="bg-primary border border-white/40 relative shadow-[0_0_80px_rgba(204,255,0,0.15)] group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ width: `${config.mainWidth * 12}px`, height: `${config.mainHeight * 12}px` }}
                >
                  <div className="absolute inset-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <span className="text-black font-display font-black text-xs uppercase text-center leading-none">
                       Primary<br/>Array
                    </span>
                  </div>
                </div>

                {/* Right Side Banner */}
                {config.layout === LayoutType.SYMMETRIC_BANNERS && (
                  <div 
                    className="bg-primary/30 border border-primary/50 relative shadow-[0_0_30px_rgba(204,255,0,0.05)]"
                    style={{ width: `${config.bannerWidth * 12}px`, height: `${config.bannerHeight * 12}px` }}
                  >
                    <div className="absolute inset-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Data Output */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-technical p-5 border-t-2 border-primary">
            <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Pixel Intensity</p>
            <h5 className="text-white font-mono text-xl">{(config.mainWidth * config.module.resolutionW).toLocaleString()}px</h5>
            <p className="text-[9px] text-gray-600 uppercase mt-1">Horizontal Res.</p>
          </div>
          <div className="bg-technical p-5 border-t-2 border-primary">
            <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Payload Weight</p>
            <h5 className="text-white font-mono text-xl">{stats.totalWeight.toFixed(0)} KG</h5>
            <p className="text-[9px] text-gray-600 uppercase mt-1">Rigging Requirement</p>
          </div>
          <div className="bg-technical p-5 border-t-2 border-primary">
            <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Energy Load</p>
            <h5 className="text-white font-mono text-xl">{(stats.totalPower / 1000).toFixed(1)} KW</h5>
            <p className="text-[9px] text-gray-600 uppercase mt-1">Single Phase Equivalent</p>
          </div>
          <div className="bg-primary p-5 flex flex-col justify-center">
            <p className="text-[9px] text-black font-black uppercase mb-1">Est. Daily Rate</p>
            <h5 className="text-black font-display font-black text-3xl leading-none">${stats.dailyRental.toLocaleString()}</h5>
          </div>
        </div>

        <button className="w-full bg-white text-black font-display font-black text-2xl py-5 uppercase tracking-tighter hover:bg-primary transition-all active:scale-[0.98] stencil-cut flex items-center justify-center gap-4">
          <span className="material-symbols-outlined font-black">file_download</span>
          Generate Technical Rider (PDF)
        </button>
      </div>
      
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #050505; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ccff0033; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ccff00; }
      `}</style>
    </div>
  );
};

export default Configurator;
