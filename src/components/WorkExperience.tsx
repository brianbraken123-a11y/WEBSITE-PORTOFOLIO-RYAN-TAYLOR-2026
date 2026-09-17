import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_EXPERIENCES, WorkExperienceItem } from '../data/portfolioData';
import { Calendar, MapPin, Star, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

export const WorkExperience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sales' | 'fnb' | 'business'>('all');
  // Keep max 2 cards expanded at a time to prevent visual clutter
  const [expandedIds, setExpandedIds] = useState<string[]>(['freelance-sales-fmcg']);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        // Keep max 2
        return [...prev.slice(-1), id];
      }
    });
  };

  const filteredExperiences = WORK_EXPERIENCES.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section
      id="pengalaman"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
              REKAM JEJAK PROFESIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pengalaman Kerja (Work Experience)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Seluruh pengalaman lapangan nyata dalam penjualan langsung, pencarian prospek, pelayanan pelanggan, dan operasional bisnis. Klik kartu untuk membuka detail tanggung jawab.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Semua ({WORK_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('sales')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'sales'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sales & B2B
            </button>
            <button
              onClick={() => setFilter('fnb')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'fnb'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Operasional F&B
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === 'business'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Usaha & Kemitraan
            </button>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);
            return (
              <article
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  exp.featured
                    ? 'bg-slate-50/90 dark:bg-slate-900/90 border-slate-300 dark:border-slate-700 shadow-md ring-1 ring-slate-300 dark:ring-slate-700'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                }`}
              >
                {/* Clickable Header Strip */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-7 cursor-pointer select-none group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-slate-800 dark:group-hover:text-amber-400 transition-colors">
                          {exp.companyOrCategory}
                        </h3>

                        {exp.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-950 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/50 px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-700">
                            <Star className="w-3 h-3 text-amber-600 fill-amber-600" />
                            <span>Featured Experience (Direct Sales & BD)</span>
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-x-2">
                        <span>{exp.role}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-300 dark:text-slate-600">•</span>
                            <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal text-xs">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Context Note if available */}
                  {exp.highlightNote && (
                    <div className="mb-3 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">Konteks Peran:</strong> {exp.highlightNote}
                    </div>
                  )}

                  {/* Brief Preview when collapsed */}
                  {!isExpanded && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {exp.responsibilities[0]}
                    </div>
                  )}

                  {/* Expansion indicator button */}
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-amber-400">
                      {isExpanded ? 'Tutup Rincian' : `Buka ${exp.responsibilities.length} Tanggung Jawab & Eksekusi`}
                    </span>
                    <div className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Responsibilities via smooth animation */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200/80 dark:border-slate-800 px-6 sm:px-7 py-5 bg-slate-50/50 dark:bg-slate-950/40"
                    >
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-bold">
                        RINCIAN TANGGUNG JAWAB & TINDAKAN LAPANGAN:
                      </div>
                      <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-amber-400 shrink-0 mt-2" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
