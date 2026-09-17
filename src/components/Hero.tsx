import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, MapPin, Phone, Mail, Linkedin, Instagram, CheckCircle2, FileText, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';
import { HeroEditorialVisual } from './HeroEditorialVisual';

interface HeroProps {
  onOpenCvPreview: () => void;
  onOpenLaunchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvPreview, onOpenLaunchModal }) => {
  const [downloading, setDownloading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateAndDownloadCV();
    } finally {
      setTimeout(() => setDownloading(false), 900);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Branding motif nodes
  const brandingMotifs = [
    { label: 'Komunikasi', sub: 'Adaptive Style' },
    { label: 'Orang & Relasi', sub: 'Trust & Empathy' },
    { label: 'Bisnis & Penjualan', sub: 'Value Creation' },
    { label: 'Adaptabilitas', sub: 'Field-Tested' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white via-[#f8fafc] to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Orb */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-slate-200/40 dark:bg-amber-500/5 blur-3xl pointer-events-none animate-ambient-orb" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-slate-300/30 dark:bg-slate-800/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split Grid: Text/Actions on left, Editorial Visual on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 mb-6 self-start shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Siap Bekerja & Berkontribusi Lapangan (Open to Opportunities)</span>
            </motion.div>

            {/* Candidate Name */}
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-[1.08] mb-3"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Headline */}
            <motion.p
              id="hero-headline"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 tracking-tight mb-4 flex flex-wrap items-center gap-x-2"
            >
              <span>Sales</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span>Customer Relations</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-slate-900 dark:text-amber-400">Business Development</span>
            </motion.p>

            {/* Short Statement */}
            <motion.p
              id="hero-statement"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal mb-8"
            >
              &ldquo;{PERSONAL_INFO.shortStatement}&rdquo;
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.button
                id="hero-download-cv-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 text-white font-bold text-sm transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer disabled:opacity-70"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? 'Sedang Mengunduh...' : 'Download CV'}</span>
              </motion.button>

              <motion.a
                id="hero-linkedin-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all shadow-2xs hover:border-slate-400 active:scale-98"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.button
                id="hero-preview-cv-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCvPreview}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium text-sm transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Lihat Format CV</span>
              </motion.button>
            </motion.div>

            {/* Quick Contact Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white font-medium underline-offset-4 hover:underline"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-slate-950 dark:hover:text-white font-medium underline-offset-4 hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors ml-1"
                  title="Salin email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span className="text-[10px]">{copiedEmail ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white font-medium underline-offset-4 hover:underline"
                >
                  {PERSONAL_INFO.instagram}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Editorial Hero Visual */}
          <div className="lg:col-span-5">
            <HeroEditorialVisual
              onOpenCvPreview={onOpenCvPreview}
              onOpenLaunchModal={onOpenLaunchModal}
            />
          </div>
        </div>

        {/* Personal Branding Motif: Communication → People → Business → Adaptability */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                CORE PHILOSOPHY & FRAMEWORK
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Siklus Nilai Kerja: Komunikasi → Hubungan Manusia → Hasil Bisnis
              </div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Prinsip teruji dari pengalaman lapangan nyata
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brandingMotifs.map((motif, index) => (
              <div
                key={motif.label}
                className="relative p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-amber-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {motif.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {motif.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
