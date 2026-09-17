import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="pendidikan"
      className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
            LATAR BELAKANG FORMAL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-w-2xl shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-amber-400 border border-slate-200 dark:border-slate-700 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {EDUCATION.school}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md self-start sm:self-auto border border-slate-200/60 dark:border-slate-700">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>Lulus {EDUCATION.graduationYear}</span>
                </span>
              </div>

              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Jurusan: <span className="text-slate-900 dark:text-amber-400 font-bold">{EDUCATION.major}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {EDUCATION.notes}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
