import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Download, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

interface ContactSectionProps {
  onOpenCvPreview: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvPreview }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Quick inquiry draft
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inquiryRole, setInquiryRole] = useState('Sales / Business Development');
  const [customNote, setCustomNote] = useState('');

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateAndDownloadCV();
    } finally {
      setTimeout(() => setDownloading(false), 900);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const generateMailtoHref = () => {
    const subject = encodeURIComponent(`[Peluang Karir] ${inquiryRole} - ${companyName || 'Perusahaan'}`);
    const body = encodeURIComponent(
      `Halo Ryan,\n\nSaya ${recruiterName || '[Nama Anda]'} dari ${companyName || '[Nama Perusahaan]'}.\n\nKami tertarik dengan profil dan pengalaman lapangan Anda di bidang Sales & Business Development untuk posisi: ${inquiryRole}.\n\n${customNote ? `Catatan Tambahan: ${customNote}\n\n` : ''}Bisakah kita menjadwalkan diskusi lebih lanjut?\n\nTerima kasih.`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1">
            MULAI TERHUBUNG
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Saya & Download CV
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Terbuka untuk kesempatan kerja full-time, kemitraan bisnis, atau diskusi peluang Sales, Business Development, dan Customer Relations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Direct Contact Details & CV Download */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Informasi Kontak Langsung
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-amber-400 shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Salin Email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-amber-400 shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Telepon / WhatsApp</div>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Tersedia via WhatsApp & Panggilan</div>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Salin Nomor Telepon"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-amber-400 shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Domisili / Lokasi</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>Profil LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
                >
                  <Instagram className="w-4 h-4 text-[#e1306c]" />
                  <span>Instagram ({PERSONAL_INFO.instagram})</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </motion.a>
              </div>
            </div>

            {/* Direct CV Download Banner */}
            <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div>
                <h4 className="text-base font-bold">Unduh Curriculum Vitae (PDF)</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Format ATS-friendly 2 halaman siap cetak atau ditinjau oleh tim HRD.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  id="contact-preview-cv-btn"
                  onClick={onOpenCvPreview}
                  className="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer text-center"
                >
                  Preview
                </button>
                <button
                  id="contact-download-cv-btn"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-xs active:scale-98 cursor-pointer disabled:opacity-75"
                >
                  <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
                  <span>{downloading ? 'Mengunduh...' : 'Download PDF'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Recruiter Message Generator */}
          <div className="lg:col-span-6 bg-slate-50/80 dark:bg-slate-900/80 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-bold text-base">
                <MessageSquare className="w-4 h-4 text-slate-900 dark:text-amber-400" />
                <span>Kirim Pesan Cepat (Email Penawaran)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
                Bagi recruiter atau business partner: isi formulir ringkas ini untuk langsung membuka draf email dengan subjek & template otomatis.
              </p>

              <div className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Anda / HRD:
                  </label>
                  <input
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="Contoh: Sarah / Budi"
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-amber-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Perusahaan / Usaha:
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Contoh: PT Sumber Rezeki / F&B Group"
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-amber-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Posisi yang Ditawarkan:
                  </label>
                  <select
                    value={inquiryRole}
                    onChange={(e) => setInquiryRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-amber-400 text-xs"
                  >
                    <option value="Sales / Direct Sales">Sales / Direct Sales</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Customer Relations / Customer Success">Customer Relations / Customer Success</option>
                    <option value="Account Executive / Sales Executive">Account Executive / Sales Executive</option>
                    <option value="Retail / F&B Sales & Operations">Retail / F&B Sales & Operations</option>
                    <option value="Peluang Kemitraan Bisnis Lainnya">Peluang Kemitraan Bisnis Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Catatan / Pesan Singkat (Opsional):
                  </label>
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Tuliskan detail singkat terkait lokasi kerja, jadwal interview, atau kebutuhan tim..."
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-amber-400 text-xs resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={generateMailtoHref()}
                id="contact-send-email-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 text-white font-bold text-xs transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Buka Draf Email ke {PERSONAL_INFO.email}</span>
              </motion.a>
              <div className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2">
                Akan otomatis membuka aplikasi email Anda (Gmail / Outlook / Mail)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
