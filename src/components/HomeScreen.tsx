import React from 'react';
import { ASSETS } from '../data/presetData';
import { HackerBadgeFormat } from '../types';

interface HomeScreenProps {
  onStartCreate: (format: HackerBadgeFormat) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartCreate }) => {
  return (
    <div className="grow flex flex-col pt-16 md:pt-20 pb-24 md:pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[82vh] flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          {/* Neon Logo Box */}
          <div className="w-44 h-44 md:w-60 md:h-60 rounded-2xl glass-panel neon-glow flex items-center justify-center p-4 mb-2 animate-pulse duration-3000 border border-[#00f5ff]/40">
            <img
              src={ASSETS.logo}
              alt="HH Goa 2026 Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,220,229,0.9)]"
            />
          </div>

          <div className="space-y-3 max-w-2xl">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e9feff] tracking-tight leading-tight">
              Generate Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f5ff] via-[#63f7ff] to-[#e10181]">
                Hacker Identity
              </span>
            </h1>
            <p className="font-body text-base md:text-lg text-[#b9caca] max-w-xl mx-auto leading-relaxed">
              Create your official HH Goa 2026 social media identity. Choose your format, rep your stack, and prep for paradise.
            </p>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-4 max-w-sm mx-auto sm:max-w-none">
            <button
              onClick={() => onStartCreate('A')}
              className="electric-ocean-btn text-[#002021] font-mono text-sm md:text-base font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2.5 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_box
              </span>
              PFP Frame
            </button>

            <button
              onClick={() => onStartCreate('B')}
              className="bg-[#e10181] text-white font-mono text-sm md:text-base font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2.5 hover:shadow-[0_0_30px_rgba(225,1,129,0.5)] transition-all duration-300 active:scale-95 border border-[#ffb0cb]/30"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                badge
              </span>
              Builder ID Card
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};