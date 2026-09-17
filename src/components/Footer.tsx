import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Instagram, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-14 pb-12 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="font-extrabold text-lg tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {PERSONAL_INFO.headline}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
            <a href="#hero" className="hover:text-white transition-colors">Hero</a>
            <a href="#ringkasan" className="hover:text-white transition-colors">Ringkasan</a>
            <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a>
            <a href="#timeline" className="hover:text-white transition-colors">Karir</a>
            <a href="#pengalaman" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#kompetensi" className="hover:text-white transition-colors">Kompetensi</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Ke Atas</span>
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Ryan Hidayat Taylor. Seluruh informasi disajikan sesuai pengalaman nyata dan dapat dipertanggungjawabkan.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
