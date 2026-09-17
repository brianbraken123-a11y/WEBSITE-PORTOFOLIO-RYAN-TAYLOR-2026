import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Award, UserCheck, ShieldCheck } from 'lucide-react';

export const CareerProgressionHighlight: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to stage 3 (Marketing)

  const steps = [
    {
      step: "01",
      role: "Dishwasher",
      stage: "Back-of-House Foundation",
      focus: "Operasional & Kebersihan",
      desc: "Bergabung dengan perusahaan sebagai dishwasher, memastikan kelancaran operasional area belakang, menjaga higienitas, dan membiasakan diri dengan ritme kerja F&B yang cepat.",
      trigger: "Fondasi kedisiplinan, ketahanan kerja, dan perhatian terhadap detail higienitas.",
      metric: "Disiplin Standar Operasional",
    },
    {
      step: "02",
      role: "Waiter",
      stage: "Direct Guest Interaction",
      focus: "Pelayanan & Komunikasi",
      desc: "Beralih menjadi waiter setelah pihak manajemen mengevaluasi kemampuan komunikasi, keramahan, dan ketelitian interaksi pelanggan dinilai sangat baik.",
      trigger: "Manajemen mengamati interaksi positif dan keramahan alami Ryan terhadap pengunjung.",
      metric: "Kepuasan Pelanggan & Keramahan",
    },
    {
      step: "03",
      role: "Marketing & Komunikasi",
      stage: "Business & Growth Driver",
      focus: "Pemasaran & Hubungan Pelanggan",
      desc: "Dipercaya memegang peran pemasaran bisnis, interaksi promosi langsung dengan pelanggan, serta menjaga kepuasan pengunjung atas dasar kinerja konsisten.",
      trigger: "Diakui kemampuannya dalam merepresentasikan citra café dan mendorong penjualan berulang.",
      metric: "Kepercayaan Manajemen Penuh",
    },
  ];

  return (
    <section
      id="progression"
      className="py-16 sm:py-24 bg-slate-900 dark:bg-slate-950 text-white border-b border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-amber-400 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Career Progression Highlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Sunmore Coffee & Co. (2021)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              &ldquo;Growing responsibility through performance and communication.&rdquo;
            </p>
          </div>

          {/* Sequential Animated Step Indicator Bar */}
          <div className="inline-flex items-center gap-2 bg-slate-800/80 p-2 rounded-xl border border-slate-700 text-xs sm:text-sm font-bold tracking-tight">
            <button
              onClick={() => setActiveStep(0)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeStep === 0 ? 'bg-white text-slate-950 font-extrabold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Dishwasher
            </button>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <button
              onClick={() => setActiveStep(1)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeStep === 1 ? 'bg-white text-slate-950 font-extrabold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Waiter
            </button>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <button
              onClick={() => setActiveStep(2)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeStep === 2 ? 'bg-amber-400 text-slate-950 font-extrabold shadow' : 'text-amber-400/80 hover:text-amber-300'
              }`}
            >
              Marketing & Komunikasi
            </button>
          </div>
        </div>

        {/* 3 Step Cards with Staggered Entrance Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
          {steps.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-800/95 border-amber-400/80 shadow-xl ring-2 ring-amber-400/30 -translate-y-1'
                    : 'bg-slate-800/40 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                        isCurrent ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      TAHAP {item.step}
                    </span>
                    {idx === 2 && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Puncak Tanggung Jawab
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {item.stage} • <span className="text-slate-300">{item.focus}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 space-y-2">
                  <div className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-200">Evaluasi:</strong> {item.trigger}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{item.metric}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Credibility Key Takeaway Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5 sm:p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-3.5"
        >
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-semibold block mb-1">
              Catatan Kredibilitas Profesional:
            </strong>
            Kenaikan tanggung jawab ini terjadi secara organik di dalam lingkungan kerja yang sama. Ini membuktikan bahwa kemampuan komunikasi, inisiatif, dan orientasi pelanggan Ryan dinilai langsung dan diakui oleh pihak manajemen untuk memegang tanggung jawab yang berdampak pada kepuasan pelanggan dan pertumbuhan bisnis café.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
