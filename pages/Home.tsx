
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <section className="relative h-[95vh] min-h-[800px] w-full flex items-center overflow-hidden border-b-8 border-technical">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent z-10"></div>
          <img alt="Massive stage setup" className="w-full h-full object-cover grayscale-[60%] contrast-150 brightness-[0.7]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4q_MGfL3-vMMgK2vhTVyqNf5HWRwmzIQqPHEEj559zgg-u6kexzRRVdCEcTVj075vVVgX1HNuTL5EWEvO2-snVGam6MeeX09bDoIdxe725sjgR0PP4UbnlACPwGuoD3CixBQD3du6Soq_5rbdaqAYLlE5gtNxF7E27R4vGMvZGpwk7gy7zGSxjPpX728Rt8PSB1vP2KvL0czlNNd4uHiPY4IA-bFErwKP8DnD3cA7C6cnX5N2ene2jQjeX8nMhhxB7tZ_8H_KwEJ8"/>
        </div>
        
        {/* HUD Elements Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none border-[40px] border-white/[0.02]">
           <div className="absolute top-10 right-10 flex flex-col items-end gap-1">
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.5em]">Frame Rate: 120Hz</span>
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.5em]">Color: HDR10+</span>
           </div>
           <div className="absolute bottom-10 left-10 flex gap-10">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Hardware ID</span>
                <span className="text-white font-mono text-xs uppercase tracking-widest">LX-400-ALPHA</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Global Load</span>
                <span className="text-primary font-mono text-xs uppercase tracking-widest">94.2%</span>
              </div>
           </div>
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl border-l-[12px] border-primary pl-12 py-4">
            <p className="font-display text-primary text-2xl font-black tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
               <span className="w-8 h-1 bg-primary"></span>
               Lumina Pro Deployment
            </p>
            <h1 className="text-white text-8xl md:text-[11rem] font-800 font-display font-black leading-[0.8] tracking-[-0.03em] uppercase mb-8">
              ENGINEERED<br/><span className="text-primary italic">BEYOND</span><br/>VISIBLE
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-bold leading-tight mb-12 max-w-2xl uppercase tracking-tight opacity-80">
              The world's most robust LED hardware. Rapid deployment. Mission-critical stability. Tour-ready infrastructure.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/configurator" className="bg-primary text-black font-display font-black text-3xl px-16 py-6 uppercase tracking-[-0.03em] hover:bg-white transition-all transform hover:-translate-y-1 stencil-cut">
                Configure Array
              </Link>
              <Link to="/catalog" className="bg-white/5 border-2 border-white/20 text-white font-display font-black text-3xl px-16 py-6 uppercase tracking-[-0.03em] hover:bg-white hover:text-black transition-all stencil-cut">
                Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-technical p-12 border border-tech-border relative group hover:border-primary transition-all">
            <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity font-mono text-xs font-black">001</div>
            <span className="material-symbols-outlined text-primary text-6xl mb-8">precision_manufacturing</span>
            <h3 className="text-white font-display text-4xl font-black uppercase mb-6 tracking-tighter">Carbon Frame</h3>
            <p className="text-gray-500 uppercase font-bold text-xs tracking-widest leading-relaxed">
              Aerospace-grade carbon fiber chassis reduces weight by 40% while doubling structural rigidity for high-stack configurations.
            </p>
          </div>
          <div className="bg-technical p-12 border border-tech-border relative group hover:border-primary transition-all">
            <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity font-mono text-xs font-black">002</div>
            <span className="material-symbols-outlined text-primary text-6xl mb-8">thunderstorm</span>
            <h3 className="text-white font-display text-4xl font-black uppercase mb-6 tracking-tighter">IP67 Submersible</h3>
            <p className="text-gray-500 uppercase font-bold text-xs tracking-widest leading-relaxed">
              True all-weather performance. Tested in torrential environments. Sealed electronics with vacuum-molded GORE-TEX venting.
            </p>
          </div>
          <div className="bg-technical p-12 border border-tech-border relative group hover:border-primary transition-all">
            <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity font-mono text-xs font-black">003</div>
            <span className="material-symbols-outlined text-primary text-6xl mb-8">dns</span>
            <h3 className="text-white font-display text-4xl font-black uppercase mb-6 tracking-tighter">Neural Engine</h3>
            <p className="text-gray-500 uppercase font-bold text-xs tracking-widest leading-relaxed">
              On-board edge processing with AI-driven color calibration ensuring perfect uniformity across tens of thousands of panels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
