import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ArrowRight, Sparkles, CheckCircle2, MessageSquare, Layers, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';
import { RyanPhotoFrame } from './RyanPhotoFrame';

interface LaunchPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvPreview: () => void;
}

export const LaunchPhotoModal: React.FC<LaunchPhotoModalProps> = ({
  isOpen,
  onClose,
  onOpenCvPreview,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dontShowAgain]);

  const handleClose = () => {
    if (dontShowAgain) {
      try {
        localStorage.setItem('has_seen_launch_modal', 'true');
      } catch {
        // ignore
      }
    }
    onClose();
  };

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateAndDownloadCV();
    } finally {
      setTimeout(() => setDownloading(false), 900);
    }
  };

  const handleScrollToSection = (id: string) => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 my-auto flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button Top Right */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
              title="Tutup (ESC)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: The Big Editorial Portrait Photo */}
            <div className="md:w-1/2 p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/80 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
              <div className="w-full max-w-xs sm:max-w-sm">
                <RyanPhotoFrame
                  size="modal"
                  showOverlayQuotes={false}
                  className="shadow-xl ring-1 ring-slate-900/10 dark:ring-white/10"
                />
              </div>

              {/* Photo Caption / Gallery Motif */}
              <div className="mt-3 text-center">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  EXHIBITION PIECE // 2026
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                  &ldquo;BUILT DIFFERENT • IDENTITY IS ARCHITECTURE&rdquo;
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Mindset, and Launch Action */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-amber-400 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Welcome to Professional Portfolio</span>
                </div>

                {/* Name & Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mt-1 mb-4 flex flex-wrap items-center gap-1.5">
                  <span>Sales</span>
                  <span className="text-slate-400">•</span>
                  <span>Customer Relations</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-950 dark:text-amber-400">Business Development</span>
                </div>

                {/* Short Statement */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  Selamat datang di portofolio interaktif Ryan Hidayat Taylor. Menggabungkan ketahanan kerja lapangan, komunikasi adaptif lintas generasi, dan fokus nyata pada pertumbuhan bisnis.
                </p>

                {/* Dual Core Pillars */}
                <div className="space-y-2.5 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-amber-400 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        BUILT DIFFERENT
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Learn. Adapt. Build.</span> — Pengalaman nyata dari level dasar operasional hingga negosiasi B2B.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        IDENTITY IS ARCHITECTURE
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Understand People. Adapt Fast. Create Value.</span> — Pendekatan komunikasi yang peka situasi dan berorientasi hasil.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Session Control */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                  >
                    <span>Masuk ke Portofolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
                  >
                    <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
                    <span>Download CV</span>
                  </button>
                </div>

                {/* Don't show again toggle */}
                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-700 text-slate-900 dark:text-amber-400 focus:ring-slate-900"
                    />
                    <span>Jangan tampilkan otomatis lagi</span>
                  </label>

                  <button
                    onClick={() => handleScrollToSection('kontak')}
                    className="hover:text-slate-900 dark:hover:text-white font-medium hover:underline"
                  >
                    Hubungi Saya &rarr;
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
