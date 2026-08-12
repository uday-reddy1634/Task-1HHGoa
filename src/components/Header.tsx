import React from 'react';
import { ASSETS } from '../data/presetData';

interface HeaderProps {
  currentTab: 'home' | 'create' | 'preview';
  setCurrentTab: (tab: 'home' | 'create' | 'preview') => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, onOpenMenu }) => {
  return (
    <header className="fixed top-0 w-full z-40 bg-[#10141a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,220,229,0.1)]">
      <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="text-[#00dce5] hover:text-[#63f7ff] transition-colors p-2 -ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00f5ff]"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          
          <button 
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <span className="material-symbols-outlined text-[#00f5ff] text-2xl md:text-3xl animate-pulse">
              terminal
            </span>
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-tighter text-[#00f5ff] group-hover:text-[#63f7ff] transition-colors">
              HH GOA 2026
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 font-mono text-sm">
          <button
            onClick={() => setCurrentTab('home')}
            className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
              currentTab === 'home'
                ? 'bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]'
                : 'text-[#b9caca] hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Home
          </button>

          <button
            onClick={() => setCurrentTab('create')}
            className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
              currentTab === 'create'
                ? 'bg-[#e10181] text-white border border-[#e10181]/40 shadow-[0_0_15px_rgba(225,1,129,0.4)] font-bold'
                : 'bg-[#e10181]/20 text-[#ffb0cb] hover:bg-[#e10181]/30 border border-[#e10181]/30'
            }`}
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              add_a_photo
            </span>
            Create ID
          </button>

          <button
            onClick={() => setCurrentTab('preview')}
            className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
              currentTab === 'preview'
                ? 'bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]'
                : 'text-[#b9caca] hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-lg">visibility</span>
            Preview
          </button>
        </nav>
      </div>
    </header>
  );
};
