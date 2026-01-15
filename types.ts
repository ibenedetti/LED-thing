
export enum PixelPitch {
  P1_5 = '1.5',
  P2_5 = '2.5',
  P3_9 = '3.9',
  P4_8 = '4.8',
  P10 = '10.0'
}

export interface LEDModule {
  id: string;
  name: string;
  pitch: PixelPitch;
  widthMm: number;
  heightMm: number;
  resolutionW: number;
  resolutionH: number;
  weightKg: number;
  maxPowerWatts: number;
  nits: number;
  ipRating: string;
  pricePerDay: number;
  imageUrl: string;
}

export enum LayoutType {
  SINGLE = 'SINGLE_SCREEN',
  SYMMETRIC_BANNERS = 'MAIN_PLUS_BANNERS',
  ULTRAWIDE = 'ULTRAWIDE'
}

export enum EventType {
  CONCERT = 'CONCERT',
  FESTIVAL = 'FESTIVAL',
  CORPORATE = 'CORPORATE',
  STADIUM = 'STADIUM'
}

export interface Configuration {
  module: LEDModule;
  layout: LayoutType;
  eventType: EventType;
  mainWidth: number; 
  mainHeight: number; 
  bannerWidth: number; 
  bannerHeight: number; 
  hasTruss: boolean;
  rotationY: number;
  perspective: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: EventType;
  description: string;
  imageUrl: string;
  configSummary: string;
}
