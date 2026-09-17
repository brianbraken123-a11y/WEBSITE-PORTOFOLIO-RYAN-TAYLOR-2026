import React from 'react';
import { motion } from 'motion/react';
import { ENTREPRENEURSHIP_EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const EntrepreneurshipSection: React.FC = () => {
  return (
    <section
      id="kewirausahaan"
      className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
            PENGALAMAN LAPANGAN & BISNIS MANDIRI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business & Entrepreneurship Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Pengalaman nyata dalam mendirikan usaha mandiri modal sendiri, kemitraan bagi hasil, dan perdagangan online. Membentuk pemahaman kuat tentang arus kas, efisiensi bahan, dan orientasi profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENTREPRENEURSHIP_EXPERIENCES.map((item, idx) => (
            <motion.div
              key={idx}
              id={`entrepreneurship-card-${idx}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <div className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Peran: <span className="text-slate-900 dark:text-amber-400 font-bold">{item.role}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Nilai Lapangan:</strong> {item.takeaway}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
