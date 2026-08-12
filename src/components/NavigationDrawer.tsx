import React from 'react';
import { ASSETS } from '../data/presetData';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: 'home' | 'create' | 'preview';
  setCurrentTab: (tab: 'home' | 'create' | 'preview') => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentTab,
  setCurrentTab
}) => {
  if (!isOpen) return null;

  const navigate = (tab: 'home' | 'create' | 'preview') => {
    setCurrentTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-xs md:max-w-sm bg-[#10141a] border-r border-[#00f5ff]/20 h-full shadow-[0_0_50px_rgba(0,245,255,0.2)] p-6 flex flex-col justify-between overflow-y-auto z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center border border-[#00f5ff]/30">
                <img src={ASSETS.logo} alt="HH Goa Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#00f5ff] tracking-tight">HH GOA 2026</h3>
                <p className="font-mono text-xs text-[#b9caca]">Hacker House Badge Engine</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#b9caca] hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2">
            <button
              onClick={() => navigate('home')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all text-left ${
                currentTab === 'home'
                  ? 'bg-[#00f5ff]/15 text-[#00f5ff] border border-[#00f5ff]/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                  : 'text-[#dfe2eb] hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xl">home</span>
              Home Overview
            </button>

            <button
              onClick={() => navigate('create')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all text-left ${
                currentTab === 'create'
                  ? 'bg-[#e10181]/20 text-[#ffb0cb] border border-[#e10181]/40 shadow-[0_0_15px_rgba(225,1,129,0.3)]'
                  : 'text-[#dfe2eb] hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                badge
              </span>
              Create Hacker ID
            </button>

            <button
              onClick={() => navigate('preview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all text-left ${
                currentTab === 'preview'
                  ? 'bg-[#00f5ff]/15 text-[#00f5ff] border border-[#00f5ff]/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                  : 'text-[#dfe2eb] hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xl">visibility</span>
              Preview & Assets
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 text-center font-mono text-xs text-[#849495]">
          <p>© 2026 HH Goa Collective</p>
          <p className="text-[10px] text-[#00f5ff]/70 mt-1">Hacker House Identity Engine v2.0</p>
        </div>
      </div>
    </div>
  );
};
