
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Configurator from './pages/Configurator';
import Catalog from './pages/Catalog';
import Portfolio from './pages/Portfolio';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-obsidian/95 backdrop-blur-md px-6 lg:px-12 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-primary p-1.5 transform group-hover:rotate-90 transition-transform duration-500">
              <span className="material-symbols-outlined text-black text-3xl font-black">grid_view</span>
            </div>
            <div>
              <h1 className="font-display text-2xl font-black tracking-tighter uppercase text-white leading-none">
                Lumina<span className="text-primary italic">LED</span> <span className="text-[10px] bg-primary text-black px-1.5 py-0.5 ml-1 align-top font-black">PRO</span>
              </h1>
              <p className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.4em] leading-none mt-1">Industrial Infrastructure</p>
            </div>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { path: '/catalog', label: 'Hardware' },
            { path: '/configurator', label: 'Configurator' },
            { path: '/portfolio', label: 'Field Ops' }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`font-display text-lg font-black tracking-[0.2em] uppercase transition-all relative py-2 ${location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary/70'}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-pulse"></span>
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex flex-col items-end">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-primary animate-ping rounded-full"></div>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">System Online</p>
            </div>
            <p className="text-[9px] font-mono text-gray-500 uppercase">LAT: 50.1109 / LON: 8.6821</p>
          </div>
          <Link to="/configurator" className="bg-primary hover:bg-white text-black font-display font-black uppercase tracking-[-0.03em] px-10 py-2.5 transition-all transform active:scale-95 stencil-cut text-sm">
            Launch Config
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-technical border-t-8 border-primary pt-24 pb-12 mt-20 relative overflow-hidden">
      <div className="scanline"></div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-20">
        <div className="col-span-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary p-1">
              <span className="material-symbols-outlined text-black text-2xl font-black">grid_view</span>
            </div>
            <h2 className="font-display text-2xl font-black tracking-tighter uppercase text-white leading-none">
              Lumina<span className="text-primary italic">LED</span>
            </h2>
          </div>
          <p className="text-gray-500 font-bold text-xs leading-relaxed uppercase tracking-widest max-w-[200px]">
            Global manufacturing & rental partner for mission critical visual infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-display font-black uppercase text-xl mb-8 tracking-[0.2em] border-b border-primary/20 pb-2 flex justify-between">
            Inventory <span>01</span>
          </h4>
          <ul className="space-y-4 font-mono font-bold text-gray-500 uppercase tracking-widest text-[10px]">
            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/catalog"><span className="text-primary text-[8px]"></span> Indoor Panels</Link></li>
            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/catalog"><span className="text-primary text-[8px]"></span> Outdoor Panels</Link></li>
            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/catalog"><span className="text-primary text-[8px]"></span> Processing Rack</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display font-black uppercase text-xl mb-8 tracking-[0.2em] border-b border-primary/20 pb-2 flex justify-between">
            Ops Hub <span>02</span>
          </h4>
          <div className="bg-obsidian p-5 border border-white/5 relative">
             <div className="hud-corner top-0 left-0 border-r-0 border-b-0"></div>
             <div className="hud-corner bottom-0 right-0 border-l-0 border-t-0"></div>
            <p className="text-[10px] font-black text-gray-500 uppercase mb-3 tracking-widest">EMEA Logistics Center</p>
            <p className="text-white font-display font-bold uppercase tracking-tight text-lg">Unit A7, Cargo City<br/>Frankfurt Main, DE</p>
          </div>
        </div>
        <div>
           <h4 className="text-white font-display font-black uppercase text-xl mb-8 tracking-[0.2em] border-b border-primary/20 pb-2 flex justify-between">
            Support <span>03</span>
          </h4>
          <button className="w-full bg-white/5 border border-white/10 text-primary font-mono text-[10px] p-4 uppercase tracking-[0.3em] hover:bg-primary hover:text-black transition-all font-black">
            Establish Secure Uplink
          </button>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
        <p className="text-gray-600 font-mono font-bold text-[10px] uppercase tracking-[0.4em]">SPEC-ID: LUM-2024-X4 // GLOBAL DIST.</p>
        <p className="text-gray-600 font-display font-bold text-xs uppercase tracking-[0.2em]">© 2024 LUMINALED PRO GLOBAL.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col grid-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
