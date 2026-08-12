import React, { useRef, useState, useEffect } from 'react';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (dataUrl: string) => void;
}

export const CameraModal: React.FC<CameraModalProps> = ({ isOpen, onClose, onCapture }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 640 } } })
        .then((s) => {
          setStream(s);
          if (videoRef.current) {
            videoRef.current.srcObject = s;
          }
        })
        .catch((err) => {
          console.error('Camera access error:', err);
          setError('Camera permission denied or camera unavailable.');
        });
    } else {
      stopStream();
    }

    return () => {
      stopStream();
    };
  }, [isOpen]);

  const stopStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const handleSnap = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const size = Math.min(video.videoWidth || 640, video.videoHeight || 640);
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      const startX = (video.videoWidth - size) / 2;
      const startY = (video.videoHeight - size) / 2;
      ctx.drawImage(video, startX, startY, size, size, 0, 0, size, size);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      onCapture(dataUrl);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#181c22] border border-[#00f5ff]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,245,255,0.2)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display font-bold text-lg text-[#00f5ff] flex items-center gap-2">
            <span className="material-symbols-outlined">photo_camera</span>
            Snap Hacker Avatar
          </h3>
          <button
            onClick={onClose}
            className="text-[#b9caca] hover:text-white p-1 rounded-lg"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {error ? (
          <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-center text-red-200 text-sm font-mono my-4">
            {error}
          </div>
        ) : (
          <div className="relative aspect-square w-full bg-black rounded-xl overflow-hidden border border-white/10 mb-6">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover transform -scale-x-100"
            />
            {/* Cyber Camera Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none border-2 border-[#00f5ff]/40 rounded-xl">
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00f5ff]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00f5ff]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00f5ff]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00f5ff]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-dashed border-[#00f5ff]/60" />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-xl border border-white/20 font-mono text-sm hover:bg-white/5"
          >
            Cancel
          </button>
          {!error && (
            <button
              onClick={handleSnap}
              className="flex-1 px-4 py-3 rounded-xl electric-ocean-btn font-mono text-sm font-bold text-white shadow-[0_0_15px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">camera</span>
              Capture
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
