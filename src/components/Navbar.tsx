import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, Menu, X, FileText, Sun, Moon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';
import { useTheme } from '../context/ThemeContext';
import { RyanPhotoFrame } from './RyanPhotoFrame';

interface NavbarProps {
  onOpenCvPreview: () => void;
  onOpenLaunchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvPreview, onOpenLaunchModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = [
      'hero',
      'ringkasan',
      'keunggulan',
      'timeline',
      'progression',
      'pengalaman',
      'kewirausahaan',
      'kompetensi',
      'pendidikan',
      'kontak',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      generateAndDownloadCV();
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 800);
    }
  };

  const navLinks = [
    { label: 'Ringkasan', href: '#ringkasan', id: 'ringkasan' },
    { label: 'Keunggulan', href: '#keunggulan', id: 'keunggulan' },
    { label: 'Karir', href: '#timeline', id: 'timeline' },
    { label: 'Pengalaman', href: '#pengalaman', id: 'pengalaman' },
    { label: 'Usaha & Mitra', href: '#kewirausahaan', id: 'kewirausahaan' },
    { label: 'Kompetensi', href: '#kompetensi', id: 'kompetensi' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm py-2'
          : 'bg-transparent border-b border-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo & Photo Avatar */}
          <div className="flex items-center gap-2.5">
            <RyanPhotoFrame
              size="avatar"
              onEnlarge={onOpenLaunchModal}
              className="hover:scale-105 transition-transform"
            />
            <a
              href="#hero"
              id="brand-logo-link"
              className="flex flex-col group transition-opacity hover:opacity-90"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base group-hover:text-slate-700 dark:group-hover:text-amber-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-600 dark:text-amber-400 font-bold border border-amber-400/30">
                  PROVEN
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-normal hidden xs:inline">
                Sales • Customer Relations • BD
              </span>
            </a>
          </div>

          {/* Desktop Nav Items with Active State Pill */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-slate-950 dark:text-amber-400 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-slate-950 dark:bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Dark Mode + CV Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Showcase Photo Modal Trigger */}
            <button
              id="nav-showcase-photo-btn"
              onClick={onOpenLaunchModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800/60 rounded-lg transition-colors cursor-pointer"
              title="Lihat Showcase Foto & Konsep"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Showcase Foto</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Preview CV Modal Trigger */}
            <button
              id="nav-preview-cv-btn"
              onClick={onOpenCvPreview}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Lihat Format CV Lengkap"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Preview</span>
            </button>

            {/* Direct PDF Download */}
            <button
              id="nav-download-cv-btn"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-amber-400 hover:bg-slate-800 dark:hover:bg-amber-300 rounded-lg transition-all shadow-xs active:scale-98 cursor-pointer disabled:opacity-75"
            >
              <Download className={`w-3.5 h-3.5 ${isGeneratingPdf ? 'animate-bounce' : ''}`} />
              <span>{isGeneratingPdf ? 'Mengunduh...' : 'Download CV'}</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-download-icon-btn"
              onClick={handleDownloadPdf}
              aria-label="Download CV"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-950 dark:text-amber-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLaunchModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 rounded-xl"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Showcase Foto & Konsep Pop-up</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvPreview();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Format CV</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadPdf();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-amber-400 rounded-xl shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </button>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Profil LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
