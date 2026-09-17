import React from 'react';
import { motion } from 'motion/react';
import { Target, Handshake, Store, ShieldCheck } from 'lucide-react';
import { PROFESSIONAL_SUMMARY } from '../data/portfolioData';

export const AboutSummary: React.FC = () => {
  return (
    <section
      id="ringkasan"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
              TENTANG SAYA
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Ringkasan Profesional
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            Fokus Lapangan • Komunikasi Adaptif • Fleksibilitas Operasional
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Summary Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            <p className="font-normal text-slate-900 dark:text-slate-100">
              {PROFESSIONAL_SUMMARY.paragraph1}
            </p>
            <p>
              {PROFESSIONAL_SUMMARY.paragraph2}
            </p>
            <p>
              {PROFESSIONAL_SUMMARY.paragraph3}
            </p>
            <p className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-l-4 border-slate-900 dark:border-amber-400 text-slate-900 dark:text-slate-200 text-base font-medium">
              {PROFESSIONAL_SUMMARY.paragraph4}
            </p>
          </motion.div>

          {/* Quick Context Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4 bg-slate-50/80 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-2">
              Prinsip Kerja Lapangan
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 text-slate-900 dark:text-amber-400">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Prospecting Nyata</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Pemetaan calon pelanggan secara terstruktur lewat kanvas langsung dan riset kebutuhan pasar lokal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 text-slate-900 dark:text-amber-400">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Relasi Berkelanjutan</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Membangun kepercayaan dengan pedagang, pemilik toko kelontong, agen, grosir, hingga pelanggan ritel harian.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 text-slate-900 dark:text-amber-400">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Hands-on UMKM & Multi-Role</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Terbiasa multi-fungsi: dari melayani tamu, kasir, logistik bahan, hingga strategi penawaran produk.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic">
              &ldquo;Mengutamakan etika kerja, empati dalam mendengar kebutuhan pelanggan, dan eksekusi konsisten.&rdquo;
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
