
import { LEDModule, PixelPitch, PortfolioItem, EventType } from './types';

export const MODULES: LEDModule[] = [
  {
    id: 'vn-250',
    name: 'Vanguard P2.5 Indoor',
    pitch: PixelPitch.P2_5,
    widthMm: 500,
    heightMm: 500,
    resolutionW: 200,
    resolutionH: 200,
    weightKg: 7.5,
    maxPowerWatts: 300,
    nits: 1200,
    ipRating: 'IP31',
    pricePerDay: 45,
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tt-480',
    name: 'Titan P4.8 Outdoor',
    pitch: PixelPitch.P4_8,
    widthMm: 500,
    heightMm: 500,
    resolutionW: 104,
    resolutionH: 104,
    weightKg: 8.2,
    maxPowerWatts: 450,
    nits: 5500,
    ipRating: 'IP65',
    pricePerDay: 55,
    imageUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ob-150',
    name: 'Obsidian P1.5 UHD',
    pitch: PixelPitch.P1_5,
    widthMm: 600,
    heightMm: 337.5,
    resolutionW: 400,
    resolutionH: 225,
    weightKg: 6.5,
    maxPowerWatts: 200,
    nits: 800,
    ipRating: 'IP30',
    pricePerDay: 85,
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Nexus Music Festival',
    category: EventType.FESTIVAL,
    description: 'A massive 32-meter wide main stage setup with 4 flanking banners for the main EDM stage.',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    configSummary: '144x P4.8 Modules, Custom Heavy Duty Truss'
  },
  {
    id: '2',
    title: 'Summit Tech Keynote',
    category: EventType.CORPORATE,
    description: 'Seamless P1.5 UHD curved wall for high-resolution presentation visibility from any angle.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200',
    configSummary: '80x P1.5 Modules, Low Profile Ground Stack'
  },
  {
    id: '3',
    title: 'Echo Arena Tour',
    category: EventType.CONCERT,
    description: 'Three-screen configuration with dynamic video mapping for a global touring rock band.',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200',
    configSummary: '210x P2.5 Modules, Triple-point Suspension Rigging'
  }
];

export const TRUSS_COST_PER_METER = 25;
export const RIGGING_FEE_BASE = 500;
