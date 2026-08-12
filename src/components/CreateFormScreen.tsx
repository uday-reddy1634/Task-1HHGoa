import React, { useState } from 'react';
import { HackerBadgeData, HackerBadgeFormat, AccessLevel } from '../types';
import { BUILDER_TITLES } from '../data/presetData';

interface CreateFormScreenProps {
  initialBadge: HackerBadgeData;
  onGenerate: (updatedBadge: HackerBadgeData) => void;
}

export const CreateFormScreen: React.FC<CreateFormScreenProps> = ({
  initialBadge,
  onGenerate,
}) => {
  const [badge, setBadge] = useState<HackerBadgeData>(initialBadge);
  const [dragOver, setDragOver] = useState(false);

  const handleFormatChange = (fmt: HackerBadgeFormat) => {
    setBadge((prev) => ({ ...prev, format: fmt }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBadge((prev) => ({ ...prev, photoUrl: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBadge((prev) => ({ ...prev, photoUrl: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(badge);
  };

  return (
      <main className="grow flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-3xl mx-auto pt-20 pb-28 md:pb-16">      <div className="w-full glass-panel rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 my-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-[#e9feff] mb-2 tracking-tight">
            Create Your {badge.format === 'A' ? 'PFP Frame' : 'Builder ID'}
          </h2>
          <p className="font-body text-sm md:text-base text-[#b9caca] max-w-lg mx-auto">
            Upload your photo and details to generate your official HH Goa 2026 hacker house badge.
          </p>
        </div>

        {/* Format Selector Pills */}
        <div className="mb-8 p-1.5 rounded-xl bg-[#10141a] border border-white/10 flex gap-2">
          <button
            type="button"
            onClick={() => handleFormatChange('A')}
            className={`flex-1 py-3 px-4 rounded-lg font-mono text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              badge.format === 'A'
                ? 'bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/50 shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'text-[#b9caca] hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_box
            </span>
            PFP Frame
          </button>

          <button
            type="button"
            onClick={() => handleFormatChange('B')}
            className={`flex-1 py-3 px-4 rounded-lg font-mono text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              badge.format === 'B'
                ? 'bg-[#e10181]/20 text-[#ffb0cb] border border-[#e10181]/50 shadow-[0_0_15px_rgba(225,1,129,0.3)]'
                : 'text-[#b9caca] hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              badge
            </span>
            Builder ID Card
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo Upload Box */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-semibold">
                PROFILE PHOTO
              </label>
            </div>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl transition-all cursor-pointer ${
                dragOver
                  ? 'border-[#00f5ff] bg-[#00f5ff]/10'
                  : 'border-[#3a494a] bg-[#1c2026]/50 hover:bg-[#262a31]/50'
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
              />

              {badge.photoUrl ? (
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full border-2 border-[#00f5ff] overflow-hidden p-0.5 shadow-[0_0_15px_rgba(0,245,255,0.4)] relative">
                    <img
                      src={badge.photoUrl}
                      alt="Avatar preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#00f5ff] font-bold">Photo Loaded!</p>
                    <p className="font-mono text-xs text-[#b9caca]">Click or drag to change image</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-center pointer-events-none">
                  <span className="material-symbols-outlined text-4xl text-[#849495]">
                    cloud_upload
                  </span>
                  <div className="text-sm font-mono text-[#b9caca]">
                    <span className="text-[#00dce5] font-semibold">Upload a file</span> or drag and drop
                  </div>
                  <p className="text-xs font-mono text-[#849495]">JPG, PNG, HEIC up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-semibold mb-2">
              FULL NAME
            </label>
            <input
              type="text"
              required
              value={badge.name}
              onChange={(e) => {
                const nameVal = e.target.value;
                const autoHandle = `@${nameVal.trim().replace(/\s+/g, '_').toUpperCase() || 'HACKER'}`;
                setBadge((prev) => ({ ...prev, name: nameVal, handle: autoHandle }));
              }}
              placeholder="e.g. Alex Chen"
              className="glass-input w-full rounded-xl px-4 py-3.5 text-white font-body placeholder-[#b9caca]/40"
            />
          </div>

          {/* Role / Tech Stack */}
          <div>
            <label className="block font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-semibold mb-2">
              STACK / ROLE
            </label>
            <input
              type="text"
              required
              value={badge.role}
              onChange={(e) => setBadge((prev) => ({ ...prev, role: e.target.value }))}
              placeholder="e.g. Rust Dev, Web3 Hacker"
              className="glass-input w-full rounded-xl px-4 py-3.5 text-white font-body placeholder-[#b9caca]/40"
            />
          </div>
          {/* Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="electric-ocean-btn w-full py-4 px-6 rounded-xl font-mono text-sm md:text-base font-bold text-[#002021] uppercase tracking-widest shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              Generate Builder ID
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
