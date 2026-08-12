import React, { useRef, useEffect } from 'react';
import { HackerBadgeData } from '../types';
import { ASSETS } from '../data/presetData';

interface CanvasBadgeRendererProps {
  badge: HackerBadgeData;
  width?: number;
  height?: number;
  onCanvasReady?: (canvas: HTMLCanvasElement) => void;
  className?: string;
}

export const CanvasBadgeRenderer: React.FC<CanvasBadgeRendererProps> = ({
  badge,
  width,
  height,
  onCanvasReady,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isCancelled = false;

    const renderCanvas = async () => {
      const isFormatA = badge.format === 'A';
      const targetW = width || (isFormatA ? 800 : 800);
      const targetH = height || (isFormatA ? 800 : 1067);

      canvas.width = targetW;
      canvas.height = targetH;

      const mainColor = badge.themeColor || '#00f5ff';
      const secondaryColor = '#e10181';

      // --- LOAD RESPECTIVE BACKGROUND IMAGES ---
      const bgImg = new Image();
      bgImg.crossOrigin = 'anonymous';
      
      const bgImageSrc = isFormatA ? '/images/pfp.jpeg' : '/images/builderid.jpeg';

      await new Promise<void>((resolve) => {
        bgImg.onload = () => resolve();
        bgImg.onerror = () => resolve();
        bgImg.src = bgImageSrc;
      });

      if (isCancelled) return;

      // Load avatar image safely
      const avatarImg = new Image();
      avatarImg.crossOrigin = 'anonymous';

      await new Promise<void>((resolve) => {
        avatarImg.onload = () => resolve();
        avatarImg.onerror = () => resolve();
        avatarImg.src = badge.photoUrl || ASSETS.defaultAvatar;
      });

      if (isCancelled) return;

      if (isFormatA) {
        // --- FORMAT A: PFP FRAME ---
        if (bgImg.complete && bgImg.naturalWidth !== 0) {
          ctx.drawImage(bgImg, 0, 0, targetW, targetH);
          ctx.fillStyle = 'rgba(10, 14, 20, 0.55)';
          ctx.fillRect(0, 0, targetW, targetH);
        } else {
          ctx.fillStyle = '#0a0e14';
          ctx.fillRect(0, 0, targetW, targetH);
        }

        // Cyber grid pattern overlay
        ctx.strokeStyle = 'rgba(0, 245, 255, 0.04)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < targetW; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, targetH);
          ctx.stroke();
        }
        for (let y = 0; y < targetH; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(targetW, y);
          ctx.stroke();
        }

        ctx.shadowColor = mainColor;
        ctx.shadowBlur = 30;

        const centerX = targetW / 2;
        const centerY = targetH / 2 - 40;
        const radius = Math.min(targetW, targetH) * 0.32;

        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 10, 0, Math.PI * 2);
        ctx.clip();

        if (avatarImg.complete && avatarImg.naturalWidth !== 0) {
          ctx.drawImage(avatarImg, centerX - radius, centerY - radius, radius * 2, radius * 2);
        } else {
          ctx.fillStyle = '#1c2026';
          ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
          ctx.fillStyle = '#00f5ff';
          ctx.font = 'bold 32px Sora';
          ctx.textAlign = 'center';
          ctx.fillText(badge.name || 'HACKER', centerX, centerY);
        }
        ctx.restore();

        ctx.shadowColor = mainColor;
        ctx.shadowBlur = 25;
        ctx.strokeStyle = mainColor;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowColor = secondaryColor;
        ctx.shadowBlur = 20;
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 16, -Math.PI / 4, (Math.PI * 5) / 4);
        ctx.stroke();

        ctx.strokeStyle = mainColor;
        ctx.lineWidth = 3;
        const squareSize = radius * 1.35;
        ctx.strokeRect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize);

        const sqLeft = centerX - squareSize / 2;
        const sqRight = centerX + squareSize / 2;
        const sqTop = centerY - squareSize / 2;
        const sqBottom = centerY + squareSize / 2;

        ctx.fillStyle = secondaryColor;
        ctx.fillRect(sqLeft - 4, sqTop - 4, 8, 8);
        ctx.fillRect(sqRight - 4, sqTop - 4, 8, 8);
        ctx.fillRect(sqLeft - 4, sqBottom - 4, 8, 8);
        ctx.fillRect(sqRight - 4, sqBottom - 4, 8, 8);

        const pillWidth = 320;
        const pillHeight = 48;
        const pillX = centerX - pillWidth / 2;
        const pillY = centerY + radius + 25;

        ctx.shadowColor = mainColor;
        ctx.shadowBlur = 15;
        ctx.fillStyle = '#10141a';
        ctx.strokeStyle = mainColor;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 24);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge.handle || '@NEON_CYBER_DEV', centerX, pillY + pillHeight / 2);

        const userRole = (badge.role || '').toUpperCase();
        let currentTextY = pillY + pillHeight + 40; 

        if (userRole) {
          ctx.fillStyle = mainColor;
          ctx.font = 'bold 24px JetBrains Mono';
          ctx.textBaseline = 'alphabetic';
          ctx.fillText(userRole, centerX, currentTextY);
          currentTextY += 28;
        }

        ctx.fillStyle = '#b9caca';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('#FrameInGoa', centerX, currentTextY);
        // --- Small Team Credit ---
        ctx.fillStyle = '#b9caca';
        ctx.font = '12px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('team: Avirath, Hima', centerX, currentTextY + 25);

      } else {
        // --- FORMAT B: BUILDER ID CARD ---
        const cardMargin = 40;
        const cardW = targetW - cardMargin * 2;
        const cardH = targetH - cardMargin * 2;
        const cardX = cardMargin;
        const cardY = cardMargin;
        const cardRadius = 24;

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
        ctx.clip();

        if (bgImg.complete && bgImg.naturalWidth !== 0) {
          ctx.drawImage(bgImg, 0, 0, targetW, targetH);
          ctx.fillStyle = 'rgba(16, 20, 26, 0.75)';
          ctx.fillRect(cardX, cardY, cardW, cardH);
        } else {
          ctx.fillStyle = 'rgba(16, 20, 26, 0.95)';
          ctx.fillRect(cardX, cardY, cardW, cardH);
        }

        ctx.strokeStyle = 'rgba(0, 245, 255, 0.04)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < targetW; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, cardY);
          ctx.lineTo(x, cardY + cardH);
          ctx.stroke();
        }
        for (let y = 0; y < targetH; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(cardX, y);
          ctx.lineTo(cardX + cardW, y);
          ctx.stroke();
        }

        const lineGrad = ctx.createLinearGradient(cardX + 40, 0, cardX + cardW - 40, 0);
        lineGrad.addColorStop(0, 'transparent');
        lineGrad.addColorStop(0.5, secondaryColor);
        lineGrad.addColorStop(1, 'transparent');
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cardX + 40, cardY + 95);
        ctx.lineTo(cardX + cardW - 40, cardY + 95);
        ctx.stroke();

        const squareSize = 480; 
        const squareX = (targetW - squareSize) / 2;
        const squareY = cardY + 100;
        
        ctx.shadowColor = mainColor;
        ctx.shadowBlur = 25;
        ctx.strokeStyle = mainColor;
        ctx.lineWidth = 6;
        ctx.strokeRect(squareX, squareY, squareSize, squareSize);

        ctx.shadowBlur = 0;
        if (avatarImg.complete && avatarImg.naturalWidth !== 0) {
          ctx.drawImage(avatarImg, squareX, squareY, squareSize, squareSize);
        } else {
          ctx.fillStyle = '#1c2026';
          ctx.fillRect(squareX, squareY, squareSize, squareSize);
        }
        
        const textStartY = squareY + squareSize + 80;

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 42px Sora';
        ctx.textAlign = 'center';
        const nameText = (badge.name || 'ALEX CHEN').toUpperCase();
        ctx.fillText(nameText, targetW / 2, textStartY);

        ctx.fillStyle = mainColor;
        ctx.font = 'bold 22px JetBrains Mono';
        ctx.fillText((badge.role || 'FULLSTACK HACKER').toUpperCase(), targetW / 2, textStartY + 45);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cardX + 60, textStartY + 80);
        ctx.lineTo(cardX + cardW - 60, textStartY + 80);
        ctx.stroke();

        // Footer Metadata - Hashtag
        ctx.textAlign = 'left';
        ctx.fillStyle = '#00f5ff'; 
        ctx.font = 'bold 22px JetBrains Mono';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('#FramedInGoa', cardX + 50, cardY + cardH - 45);

        ctx.restore();

        ctx.shadowColor = secondaryColor;
        ctx.shadowBlur = 25;
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      if (onCanvasReady) {
        onCanvasReady(canvas);
      }
    };

    renderCanvas();

    return () => {
      isCancelled = true;
    };
  }, [badge, width, height, onCanvasReady]);

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-w-full rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10"
      />
    </div>
  );
};