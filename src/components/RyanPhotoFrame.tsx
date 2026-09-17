import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Upload, Sparkles, CheckCircle2, Layers } from 'lucide-react';

interface RyanPhotoFrameProps {
  className?: string;
  onEnlarge?: () => void;
  showOverlayQuotes?: boolean;
  priority?: boolean;
  size?: 'avatar' | 'card' | 'modal';
}

export const RyanPhotoFrame: React.FC<RyanPhotoFrameProps> = ({
  className = '',
  onEnlarge,
  showOverlayQuotes = true,
  size = 'card',
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>('/Gemini_Generated_Image_yq7x2uyq7x2uyq7x.jpg');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for any custom uploaded photo
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ryan_custom_photo_url');
      if (saved) {
        setPhotoUrl(saved);
      }
    } catch {
      // ignore storage error
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        setImageError(false);
        setImageLoaded(true);
        try {
          localStorage.setItem('ryan_custom_photo_url', result);
        } catch {
          // ignore storage error
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        setImageError(false);
        setImageLoaded(true);
        try {
          localStorage.setItem('ryan_custom_photo_url', result);
        } catch {
          // ignore storage error
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Avatar variant for Navbar
  if (size === 'avatar') {
    return (
      <div
        className={`relative rounded-full p-0.5 bg-gradient-to-tr from-slate-900 via-slate-700 to-amber-400 dark:from-amber-400 dark:to-slate-600 shadow-xs cursor-pointer group ${className}`}
        onClick={onEnlarge}
        title="Buka Showcase Foto & Filosofi Ryan"
      >
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-900">
          {!imageError ? (
            <img
              src={photoUrl}
              alt="Ryan Hidayat Taylor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-950 text-amber-400 font-bold text-xs">
              RT
            </div>
          )}
        </div>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse" />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden select-none group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden file input for updating image */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Main Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center">
        {/* Background Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Real Image Tag */}
        {!imageError && (
          <img
            src={photoUrl}
            alt="Ryan Hidayat Taylor - Identity is Architecture & Built Different"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        )}

        {/* High-Fidelity Vector Architectural Graphic (renders if image error or as artistic layer) */}
        {imageError && (
          <div className="absolute inset-0 w-full h-full p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-[#fafafa] dark:bg-[#070b14]">
            {/* Gallery Hallway Perspective Guidelines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30 stroke-slate-400 dark:stroke-slate-600"
              viewBox="0 0 400 533"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Vanishing Point perspective corridors */}
              <line x1="0" y1="0" x2="165" y2="220" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="400" y1="0" x2="235" y2="220" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="0" y1="533" x2="155" y2="360" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="400" y1="533" x2="245" y2="360" strokeWidth="1.2" strokeDasharray="4 4" />
              <rect x="155" y="220" width="90" height="140" strokeWidth="1" />
              {/* Overhead gallery panels */}
              <rect x="80" y="20" width="240" height="35" rx="4" strokeWidth="1" strokeDasharray="2 2" />
            </svg>

            {/* Left Glass Panel in Scene */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10 self-start max-w-[190px] sm:max-w-[210px] p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-300/80 dark:border-slate-700 shadow-md transform -rotate-1"
            >
              <div className="text-[9px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
                EXHIBITION ARCHITECTURE
              </div>
              <div className="text-sm sm:text-base font-black tracking-tight text-slate-950 dark:text-white uppercase leading-tight mt-0.5">
                BUILT DIFFERENT
              </div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-amber-400 mt-0.5">
                Learn. Adapt. Build.
              </div>
            </motion.div>

            {/* Center: Voxel Head Sculpture & Walking Figure Art */}
            <div className="relative my-auto flex flex-col items-center justify-center z-10">
              {/* Architectural Voxel Head Silhouette Background */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 border-2 border-slate-700 shadow-2xl flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                {/* Miniature architectural cubes texture */}
                <div className="grid grid-cols-4 gap-1 opacity-40 mb-2">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-xs bg-slate-400 dark:bg-slate-600"
                    />
                  ))}
                </div>
                <div className="text-xs font-mono font-bold tracking-tight text-white uppercase text-center">
                  ARCHITECTURAL IDENTITY
                </div>
                <div className="text-[10px] text-amber-400 mt-1 font-semibold">
                  RYAN HIDAYAT TAYLOR
                </div>
              </div>

              {/* Walking Subject in Black Jacket & White Shoes */}
              <div className="mt-2 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 dark:bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Field-Tested & Resilient</span>
                </span>
              </div>
            </div>

            {/* Right Glass Panel in Scene */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10 self-end max-w-[190px] sm:max-w-[210px] p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-300/80 dark:border-slate-700 shadow-md transform rotate-1 text-right"
            >
              <div className="text-[9px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
                HUMAN RELATIONSHIP
              </div>
              <div className="text-sm sm:text-base font-black tracking-tight text-slate-950 dark:text-white uppercase leading-tight mt-0.5">
                IDENTITY IS ARCHITECTURE
              </div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-amber-400 mt-0.5">
                Understand People. Adapt Fast. Create Value.
              </div>
            </motion.div>
          </div>
        )}

        {/* Floating Controls Overlay (Visible on Hover or Mobile) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          {onEnlarge && (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={(e) => {
                e.stopPropagation();
                onEnlarge();
              }}
              className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-colors shadow-md cursor-pointer"
              title="Perbesar Tampilan Foto (Pop-up)"
            >
              <Maximize2 className="w-4 h-4" />
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-colors shadow-md cursor-pointer opacity-75 hover:opacity-100"
            title="Perbarui / Unggah Foto Alternatif"
          >
            <Upload className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Editorial Badge Overlay */}
        {showOverlayQuotes && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white z-10">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-[10px] font-mono tracking-wider text-amber-400 font-bold uppercase">
                  EDITORIAL PORTRAIT
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                  BUILT DIFFERENT • IDENTITY IS ARCHITECTURE
                </div>
              </div>
              <span className="text-[11px] font-mono bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-slate-200">
                2026
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
