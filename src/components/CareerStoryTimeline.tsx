import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAREER_TIMELINE } from '../data/portfolioData';
import { Star, Sparkles, ChevronRight, ChevronLeft, ArrowDown, MapPin, CheckCircle2 } from 'lucide-react';

export const CareerStoryTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Default to Field Sales & Distribution (featured)

  const activeItem = CAREER_TIMELINE[activeIndex];

  // Story narrative takeaways for each step
  const storyNarratives: Record<string, { impact: string; takeaway: string; tag: string }> = {
    "2014": {
      impact: "Membangun usaha mandiri dari modal pribadi di usia 18 tahun.",
      takeaway: "Fondasi keberanian eksekusi, pemahaman perputaran modal, dan komunikasi langsung dengan pelanggan lokal.",
      tag: "Kewirausahaan Mandiri",
    },
    "2016": {
      impact: "Penetrasi pasar B2B penyewaan peralatan multimedia.",
      takeaway: "Melatih keterampilan cold outreach, memetakan venue dan hotel, serta presentasi penawaran formal.",
      tag: "B2B Outreach & Prospecting",
    },
    "2017–2018": {
      impact: "Kemitraan bagi hasil gerai kuliner di Tangerang dan Bekasi.",
      takeaway: "Mempertajam kemampuan melayani konsumen secara cepat dalam lingkungan ritel pasar yang padat pembeli.",
      tag: "Kemitraan Bagi Hasil",
    },
    "2018–2020": {
      impact: "Canvas rutin 10+ toko kelontong/hari dan ekspansi ke level grosir/agen.",
      takeaway: "Fondasi terkuat dalam direct sales: mapping area, riset kebutuhan barang laris, negosiasi harga, dan retensi pelanggan.",
      tag: "Direct Sales & FMCG Distribution",
    },
    "2021": {
      impact: "Promosi berjenjang di Sunmore Coffee & Co. dari Dishwasher hingga Marketing.",
      takeaway: "Bukti pengakuan langsung dari manajemen atas kemampuan komunikasi, keramahan melayani, dan inisiatif promosi.",
      tag: "Organik Internal Promotion",
    },
    "2022–2023": {
      impact: "Konsultasi produk menu café dan bisnis e-commerce reseller mandiri.",
      takeaway: "Kemampuan sourcing produk, evaluasi margin, komunikasi kepuasan pelanggan, dan pemenuhan pesanan mandiri.",
      tag: "Consulting & E-commerce",
    },
    "2024–Sekarang": {
      impact: "Operasional restoran di Kamboja dalam lingkungan kerja internasional.",
      takeaway: "Kemampuan komunikasi multikultural, fleksibilitas lintas fungsi (front & back of house), dan ketahanan operasional cepat.",
      tag: "Multicultural F&B Operations",
    },
  };

  return (
    <section
      id="timeline"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
            KRONOLOGI & STORYLINE KARIR
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Perjalanan Karir Interaktif (Career Story)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Klik atau arahkan kursor pada setiap titik perjalanan karir untuk membaca narasi perkembangan tanggung jawab dan keahlian yang terasah.
          </p>
        </div>

        {/* Interactive Story Timeline Stepper (Horizontal bar on md+, scrollable on mobile) */}
        <div className="mb-8 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <div className="flex items-center min-w-[620px] justify-between relative px-4 py-2">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

            {CAREER_TIMELINE.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(idx)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-slate-950 text-white dark:bg-amber-400 dark:text-slate-950 ring-4 ring-slate-200 dark:ring-amber-400/20 scale-110 shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`mt-2 text-[11px] font-mono font-semibold transition-colors ${
                      isActive
                        ? 'text-slate-950 dark:text-white font-bold'
                        : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800'
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Highlight Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.year}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-8 rounded-2xl border mb-10 transition-all ${
              activeItem.featured
                ? 'bg-slate-50 dark:bg-slate-900/90 border-slate-300 dark:border-slate-700 shadow-md ring-1 ring-slate-300 dark:ring-slate-700'
                : activeItem.highlight
                ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 shadow-md'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950">
                  {activeItem.year}
                </span>

                {activeItem.featured && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-700">
                    <Star className="w-3 h-3 text-amber-600 fill-amber-600" />
                    <span>Pilar Utama: Direct Sales & B2B Distribution</span>
                  </span>
                )}

                {activeItem.highlight && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-700">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Progression Highlight: Kenaikan Tanggung Jawab</span>
                  </span>
                )}
              </div>

              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Langkah {activeIndex + 1} dari {CAREER_TIMELINE.length}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-2">
              {activeItem.title}
            </h3>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-6">
              {activeItem.description}
            </p>

            {/* Structured Story Takeaway */}
            {storyNarratives[activeItem.year] && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[10px] uppercase font-bold mb-1">
                    EKSEKUSI & PERAN
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">
                    {storyNarratives[activeItem.year].impact}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[10px] uppercase font-bold mb-1">
                    PEMBELAJARAN LAPANGAN
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-slate-200">
                    {storyNarratives[activeItem.year].takeaway}
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <button
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Tahap Sebelumnya</span>
              </button>

              <button
                disabled={activeIndex === CAREER_TIMELINE.length - 1}
                onClick={() => setActiveIndex((prev) => Math.min(CAREER_TIMELINE.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-amber-400 hover:bg-slate-800 dark:hover:bg-amber-300 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <span>Tahap Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Full Vertical Timeline Overview for complete scanning */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-6 pb-2">
          {CAREER_TIMELINE.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <div
                key={item.year}
                onClick={() => setActiveIndex(index)}
                className="relative pl-6 sm:pl-8 group cursor-pointer"
              >
                {/* Year tag positioned on the left on sm+ screens */}
                <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right mb-1 sm:mb-0">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Node Bullet */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-amber-400 border-slate-900 dark:border-amber-400 ring-4 ring-slate-200 dark:ring-amber-400/20'
                      : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-slate-900 dark:group-hover:border-white'
                  }`}
                />

                {/* Content mini-card */}
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 shadow-xs'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      {isSelected ? 'Sedang Ditampilkan' : 'Klik untuk Detail'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
