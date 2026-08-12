import React, { useState } from 'react';
import { HackerBadgeData } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  badge: HackerBadgeData;
  onDownloadPNG?: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  badge,
  onDownloadPNG
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const tweetText = `Just generated my official @HHGoa2026 Hacker Identity! 🌴⚡️\n\nName: ${
    badge.name || 'Hacker'
  }\nRole: ${badge.role}\nAccess Level: ${
    badge.accessLevel
  }\n\nJoin the collective and create your badge for Goa 2026! #HHGoa2026 #BuilderInGoa #FrameInGoa`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(tweetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#181c22] border border-[#e10181]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(225,1,129,0.3)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e10181]">share</span>
            Flex Your Hacker Identity
          </h3>
          <button
            onClick={onClose}
            className="text-[#b9caca] hover:text-white p-1 rounded-lg"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm font-body text-[#b9caca] mb-4">
          Share your HH Goa 2026 badge on X (Twitter) or save the HD PNG to post across social media.
        </p>

        {/* Tweet Draft Box */}
        <div className="p-4 rounded-xl bg-[#10141a] border border-white/10 font-mono text-xs text-[#dfe2eb] mb-6 relative group">
          <pre className="whitespace-pre-wrap font-mono leading-relaxed">{tweetText}</pre>
          <button
            onClick={handleCopyText}
            className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs flex items-center gap-1 text-[#00f5ff] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {copied ? 'check' : 'content_copy'}
            </span>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-3">
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full electric-pink-btn text-white font-mono text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,1,129,0.4)] hover:scale-[1.02] transition-transform"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Post to X (#BuilderInGoa)
          </a>

          {onDownloadPNG && (
            <button
              onClick={() => {
                onDownloadPNG();
                onClose();
              }}
              className="w-full bg-[#262a31] border border-[#00f5ff]/40 text-[#00f5ff] hover:bg-[#00f5ff]/10 font-mono text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined">download</span>
              Download HD PNG Badge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
