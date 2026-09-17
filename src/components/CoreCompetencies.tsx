import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_COMPETENCIES } from '../data/portfolioData';
import { Target, Users, Wrench, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const CoreCompetencies: React.FC = () => {
  // Allow all categories to be expanded or individually collapsed
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "Sales & Business Development": true,
    "Communication & Customer Service": true,
    "Operations": true,
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Sales')) return <Target className="w-5 h-5 text-slate-900 dark:text-amber-400" />;
    if (category.includes('Communication')) return <Users className="w-5 h-5 text-slate-900 dark:text-amber-400" />;
    return <Wrench className="w-5 h-5 text-slate-900 dark:text-amber-400" />;
  };

  return (
    <section
      id="kompetensi"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
              KETERAMPILAN TERUJI
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Core Competencies (Interaktif)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Tiga kelompok kompetensi utama yang siap diterapkan langsung untuk target peran Sales, Business Development, dan Customer Relations.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg self-start sm:self-auto border border-slate-200 dark:border-slate-800">
            Dikelompokkan berdasarkan fungsi kerja nyata
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {CORE_COMPETENCIES.map((group, idx) => {
            const isOpen = openCategories[group.category] ?? true;
            return (
              <div
                key={group.category}
                id={`competency-group-${idx}`}
                className="bg-[#f8fafc] dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs"
              >
                <div>
                  {/* Category Header with Toggle */}
                  <button
                    onClick={() => toggleCategory(group.category)}
                    className="w-full flex items-center justify-between text-left group mb-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform">
                        {getCategoryIcon(group.category)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-amber-400 transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          {group.skills.length} Keterampilan Kunci
                        </span>
                      </div>
                    </div>

                    <div className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Expandable Skills Tags with Staggered Motion */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 pt-2">
                          {group.skills.map((skill, sIdx) => (
                            <motion.span
                              key={sIdx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: sIdx * 0.03 }}
                              whileHover={{ scale: 1.04 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xs transition-all cursor-default"
                            >
                              <Check className="w-3 h-3 text-slate-900 dark:text-amber-400" />
                              <span>{skill}</span>
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {!isOpen && (
                  <button
                    onClick={() => toggleCategory(group.category)}
                    className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-center py-1 cursor-pointer transition-colors"
                  >
                    Buka untuk melihat {group.skills.length} keahlian
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
