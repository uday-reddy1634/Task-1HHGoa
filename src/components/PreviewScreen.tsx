import React, { useState } from 'react';
import { HackerBadgeData, HackerBadgeFormat } from '../types';
import { CanvasBadgeRenderer } from './CanvasBadgeRenderer';

interface PreviewScreenProps {
  badge: HackerBadgeData;
  onChangeFormat: (format: HackerBadgeFormat) => void;
  onEdit: () => void;
  onOpenShareModal: () => void; // Kept so App.tsx doesn't break, but we won't use it for the button anymore!
}

export const PreviewScreen: React.FC<PreviewScreenProps> = ({
  badge,
  onChangeFormat,
  onEdit,
  onOpenShareModal 
}) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null);

  // Download functionality
  const handleDownload = () => {
    if (!canvasElement) return;
    const url = canvasElement.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `HHGoa2026_${badge.handle || 'HackerIdentity'}.png`;
    link.href = url;
    link.click();
  };

  // Direct Share to X (Twitter) bypasses the modal
  const handleDirectShareToX = () => {
    const tweetText = `Just generated my official @HHGoa2026 Hacker Identity! 🌴⚡️\n\nName: ${
      badge.name || 'Hacker'
    }\nRole: ${badge.role || 'BUILDER'}\nAccess Level: ${
      badge.accessLevel || 'OMEGA'
    }\n\nJoin the collective and create your badge for Goa 2026! #HHGoa2026 #BuilderInGoa #FramedInGoa`;
    
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    
    // Opens directly in a new tab
    window.open(twitterShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grow flex flex-col pt-16 md:pt-20 pb-24 md:pb-12 px-4 items-center justify-start min-h-screen">
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Identity <span className="text-[#00f5ff]">Generated</span>
          </h2>
          <p className="text-[#b9caca] font-body text-sm md:text-base">
            Your credentials are ready. Download or share directly to X.
          </p>
        </div>

        {/* Format Toggles */}
        <div className="flex bg-[#10141a] p-1.5 rounded-full border border-white/10 w-full max-w-sm mx-auto shadow-lg">
          <button
            onClick={() => onChangeFormat('A')}
            className={`flex-1 py-2.5 rounded-full text-sm font-mono font-bold transition-all ${
              badge.format === 'A'
                ? 'bg-[#00f5ff] text-[#0a0e14] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                : 'text-[#b9caca] hover:text-white'
            }`}
          >
            PFP Frame
          </button>
          <button
            onClick={() => onChangeFormat('B')}
            className={`flex-1 py-2.5 rounded-full text-sm font-mono font-bold transition-all ${
              badge.format === 'B'
                ? 'bg-[#e10181] text-white shadow-[0_0_15px_rgba(225,1,129,0.4)]'
                : 'text-[#b9caca] hover:text-white'
            }`}
          >
            Builder ID
          </button>
        </div>

        {/* Canvas Badge Preview */}
        <div className="w-full max-w-md mx-auto">
          <CanvasBadgeRenderer
            badge={badge}
            onCanvasReady={setCanvasElement}
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto mt-2">
          
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-[#10141a] border border-[#00f5ff]/40 text-[#00f5ff] hover:bg-[#00f5ff]/10 font-mono text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            Download HD PNG
          </button>
          
          {/* Direct Share Button */}
          <button
            onClick={handleDirectShareToX}
            className="w-full electric-pink-btn text-white font-mono text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,1,129,0.4)] hover:scale-[1.02] transition-transform"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Post to X
          </button>

        </div>
        
        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="mt-2 text-[#b9caca] hover:text-white font-mono text-sm flex items-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">edit</span>
          Edit Details
        </button>

      </div>
    </div>
  );
};