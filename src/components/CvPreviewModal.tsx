import React, { useState } from 'react';
import { X, Download, Printer, ExternalLink, Check } from 'lucide-react';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, WORK_EXPERIENCES, CORE_COMPETENCIES, EDUCATION } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateAndDownloadCV();
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              (Format Resmi Ryan Hidayat Taylor)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Cetak via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cetak</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
            >
              <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Mengunduh...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200 transition-colors ml-2 cursor-pointer"
              aria-label="Tutup Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Document View */}
        <div className="overflow-y-auto p-4 sm:p-10 bg-slate-100 font-sans">
          <div className="bg-white max-w-2xl mx-auto shadow-sm border border-slate-200 p-8 sm:p-12 text-slate-900">
            {/* CV Header */}
            <div className="text-center pb-6 mb-6 border-b-2 border-slate-800">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-700 uppercase mb-3">
                {PERSONAL_INFO.headline}
              </div>
              <div className="text-xs text-slate-600 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>📱 {PERSONAL_INFO.phone}</span>
                <span>•</span>
                <span>📧 {PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>📍 {PERSONAL_INFO.location}</span>
              </div>
              <div className="text-xs text-slate-600 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1">
                <span>🔗 {PERSONAL_INFO.linkedinDisplay}</span>
                <span>•</span>
                <span>📱 Instagram: {PERSONAL_INFO.instagram}</span>
              </div>
            </div>

            {/* RINGKASAN PROFESIONAL */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
                Ringkasan Profesional
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed text-justify">
                <p>{PROFESSIONAL_SUMMARY.paragraph1}</p>
                <p>{PROFESSIONAL_SUMMARY.paragraph2}</p>
                <p>{PROFESSIONAL_SUMMARY.paragraph3}</p>
                <p>{PROFESSIONAL_SUMMARY.paragraph4}</p>
              </div>
            </div>

            {/* PENGALAMAN KERJA */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-4">
                Pengalaman Kerja
              </h2>

              <div className="space-y-6 text-xs sm:text-sm">
                {WORK_EXPERIENCES.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                      <span className="font-bold text-slate-950">
                        {exp.companyOrCategory} {exp.location ? `| ${exp.location}` : ''}
                      </span>
                      <span className="text-slate-500 font-mono text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-700 italic text-xs mb-2">
                      {exp.role}
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 text-xs leading-relaxed">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* KOMPETENSI UTAMA */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
                Kompetensi Utama (Core Competencies)
              </h2>
              <div className="space-y-3 text-xs">
                {CORE_COMPETENCIES.map((group) => (
                  <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <span className="font-bold text-slate-950 sm:w-48 shrink-0">
                      {group.category}:
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      {group.skills.join(' • ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PENDIDIKAN */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
                Pendidikan
              </h2>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-950">{EDUCATION.school}</div>
                  <div className="text-slate-600 text-xs">{EDUCATION.major}</div>
                </div>
                <div className="text-slate-500 font-mono text-xs">
                  Lulus {EDUCATION.graduationYear}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 shrink-0">
          <span>Format: 2 Halaman ATS-Friendly</span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-950 underline"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
};
