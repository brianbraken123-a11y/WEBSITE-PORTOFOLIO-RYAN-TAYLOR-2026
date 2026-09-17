import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KEY_STRENGTHS } from '../data/portfolioData';
import { ArrowUpRight, Check, Target, MessageSquare, Briefcase, Sparkles, ChevronDown } from 'lucide-react';

export const KeyStrengths: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const getStrengthIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Target className="w-5 h-5 text-slate-900 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      case '02':
        return <MessageSquare className="w-5 h-5 text-slate-900 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      case '03':
        return <Briefcase className="w-5 h-5 text-slate-900 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-900 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
    }
  };

  const supportingTags: Record<string, string[]> = {
    '01': ['Lead Generation', 'Store-to-Store Canvas', 'B2B Closing', 'Account Retention'],
    '02': ['Active Listening', 'Cross-Cultural Fluency', 'Conflict Resolution', 'Tailored Pitching'],
    '03': ['Cashflow Awareness', 'Stock Turnover', 'Supplier Negotiation', 'Self-Driven Execution'],
  };

  const toggleCard = (num: string) => {
    setExpandedCard(expandedCard === num ? null : num);
  };

  return (
    <section
      id="keunggulan"
      className="py-16 sm:py-24 bg-[#f8fafc] dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
            NILAI TAMBAH & KAPABILITAS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Strengths
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Tiga pilar keunggulan utama yang terbentuk dari pengalaman langsung di lapangan, interaksi pelanggan harian, dan operasional bisnis nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KEY_STRENGTHS.map((strength) => {
            const isExpanded = expandedCard === strength.number;
            return (
              <motion.div
                key={strength.number}
                id={`strength-card-${strength.number}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                onClick={() => toggleCard(strength.number)}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Top subtle highlight border effect */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-slate-900 dark:via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-slate-300 dark:text-slate-700 font-mono tracking-tighter group-hover:text-slate-900 dark:group-hover:text-amber-400 transition-colors">
                      {strength.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-2xs border border-slate-200/80 dark:border-slate-700">
                      {getStrengthIcon(strength.number)}
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 uppercase">
                    {strength.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {strength.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5 mb-4">
                    {strength.bulletPoints.map((bp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-slate-900 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Supporting Tags on Expand / Hover */}
                  <div className="pt-3 border-t border-dashed border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 mb-2">
                      Keahlian Terkait (Skills):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {supportingTags[strength.number]?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:bg-slate-200/80 dark:group-hover:bg-slate-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
