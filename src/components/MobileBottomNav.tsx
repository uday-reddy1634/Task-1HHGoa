import React from 'react';

interface MobileBottomNavProps {
  currentTab: 'home' | 'create' | 'preview';
  setCurrentTab: (tab: 'home' | 'create' | 'preview') => void;
  onOpenShareModal?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  setCurrentTab,
  onOpenShareModal
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 rounded-t-xl bg-[#181c22]/90 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.6)] flex justify-around items-center h-20 px-2">
      <button
        onClick={() => setCurrentTab('home')}
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
          currentTab === 'home' ? 'text-[#00f5ff]' : 'text-[#b9caca] hover:text-white'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: currentTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="font-mono text-xs font-medium">Home</span>
      </button>

      <button
        onClick={() => setCurrentTab('create')}
        className={`flex flex-col items-center justify-center rounded-full px-4 py-2 transition-all active:scale-95 shadow-[0_0_15px_rgba(225,1,129,0.4)] ${
          currentTab === 'create'
            ? 'bg-[#e10181] text-white ring-2 ring-[#ffb0cb]'
            : 'bg-[#e10181] text-white opacity-90'
        }`}
      >
        <span className="material-symbols-outlined text-2xl mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
          add_a_photo
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-wider">Create</span>
      </button>

      <button
        onClick={() => setCurrentTab('preview')}
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
          currentTab === 'preview' ? 'text-[#00f5ff]' : 'text-[#b9caca] hover:text-white'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: currentTab === 'preview' ? "'FILL' 1" : "'FILL' 0" }}
        >
          visibility
        </span>
        <span className="font-mono text-xs font-medium">Preview</span>
      </button>
    </nav>
  );
};
