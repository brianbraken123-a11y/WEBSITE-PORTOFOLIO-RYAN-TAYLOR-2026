import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { RyanPhotoFrame } from './RyanPhotoFrame';

interface HeroEditorialVisualProps {
  onOpenCvPreview: () => void;
  onOpenLaunchModal: () => void;
}

export const HeroEditorialVisual: React.FC<HeroEditorialVisualProps> = ({
  onOpenCvPreview,
  onOpenLaunchModal,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      className="relative group w-full max-w-lg lg:max-w-none mx-auto cursor-pointer"
      onClick={onOpenLaunchModal}
    >
      {/* Ambient glow behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-amber-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 -z-10" />

      {/* Main Editorial Card Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-slate-300 dark:group-hover:border-slate-700">
        {/* Top Architectural Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/70 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              EDITORIAL PORTRAIT // 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden xs:inline text-[10px]">KLIK UNTUK POP-UP</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLaunchModal();
              }}
              className="hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800"
              title="Perbesar Tampilan Foto (Pop-up)"
            >
              <Maximize2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            </button>
          </div>
        </div>

        {/* Photo Container using RyanPhotoFrame */}
        <div className="relative">
          <RyanPhotoFrame
            size="card"
            showOverlayQuotes={true}
            onEnlarge={onOpenLaunchModal}
          />
        </div>

        {/* Bottom Interactive Strip */}
        <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-amber-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs">
              Built Different • Learn. Adapt. Build.
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenCvPreview();
            }}
            className="inline-flex items-center gap-1.5 font-bold text-slate-900 dark:text-amber-400 hover:underline cursor-pointer transition-colors text-xs"
          >
            <span>Format Dokumen CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Accent Badges around Hero Card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 text-white dark:bg-amber-400 dark:text-slate-950 text-xs font-bold shadow-lg border border-slate-800"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 dark:text-slate-950" />
        <span>BUILT DIFFERENT</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -bottom-3 -left-3 z-20 items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold shadow-md border border-slate-200 dark:border-slate-700"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Identity is Architecture</span>
      </motion.div>
    </motion.div>
  );
};
