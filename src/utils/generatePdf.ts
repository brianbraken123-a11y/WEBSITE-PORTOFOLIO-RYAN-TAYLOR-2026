import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, WORK_EXPERIENCES, CORE_COMPETENCIES, EDUCATION } from '../data/portfolioData';

export function generateAndDownloadCV(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210
  const pageHeight = doc.internal.pageSize.getHeight(); // 297
  const leftMargin = 18;
  const rightMargin = 18;
  const contentWidth = pageWidth - leftMargin - rightMargin; // 174 mm

  // Helper for drawing clean section titles
  const drawSectionTitle = (title: string, y: number) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 24, 33);
    doc.text(title.toUpperCase(), leftMargin, y);
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(leftMargin, y + 2, pageWidth - rightMargin, y + 2);
    return y + 7;
  };

  // Helper to add bullet point
  const drawBullet = (text: string, y: number, indent = 4): number => {
    const bulletX = leftMargin + indent;
    const textX = bulletX + 3.5;
    const maxTextWidth = contentWidth - indent - 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85); // slate-700
    doc.text('•', bulletX, y);

    const lines = doc.splitTextToSize(text, maxTextWidth);
    doc.text(lines, textX, y);
    return y + lines.length * 4.1;
  };

  // ---------------- PAGE 1 ----------------
  // Header
  let y = 18;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(PERSONAL_INFO.name, pageWidth / 2, y, { align: 'center' });

  y += 5.5;
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text(PERSONAL_INFO.headline.toUpperCase(), pageWidth / 2, y, { align: 'center' });

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contactLine1 = `${PERSONAL_INFO.phone}   |   ${PERSONAL_INFO.email}   |   ${PERSONAL_INFO.location}`;
  doc.text(contactLine1, pageWidth / 2, y, { align: 'center' });

  y += 4.5;
  const contactLine2 = `${PERSONAL_INFO.linkedinDisplay}   |   Instagram: ${PERSONAL_INFO.instagram}`;
  doc.text(contactLine2, pageWidth / 2, y, { align: 'center' });

  y += 3;
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.6);
  doc.line(leftMargin, y, pageWidth - rightMargin, y);
  y += 7;

  // RINGKASAN PROFESIONAL
  y = drawSectionTitle('Ringkasan Profesional', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);

  const summaryP1 = doc.splitTextToSize(
    `${PROFESSIONAL_SUMMARY.paragraph1} ${PROFESSIONAL_SUMMARY.paragraph2}`,
    contentWidth
  );
  doc.text(summaryP1, leftMargin, y);
  y += summaryP1.length * 4.1 + 2;

  const summaryP2 = doc.splitTextToSize(
    `${PROFESSIONAL_SUMMARY.paragraph3} ${PROFESSIONAL_SUMMARY.paragraph4}`,
    contentWidth
  );
  doc.text(summaryP2, leftMargin, y);
  y += summaryP2.length * 4.1 + 4;

  // PENGALAMAN KERJA (PAGE 1 ITEMS)
  y = drawSectionTitle('Pengalaman Kerja', y);

  // 1. Operasional F&B / Café | Kamboja
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Operasional F&B / Café  |  Kamboja', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Februari 2024 – Sekarang', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Server • Captain • Admin • Bantuan Dapur', leftMargin, y);
  y += 4.5;

  const exp1Bullets = [
    'Melayani pelanggan dan menangani interaksi langsung dalam lingkungan F&B yang dinamis.',
    'Menjalankan tanggung jawab sebagai Captain ketika diperlukan, memastikan kelancaran alur pelayanan tamu.',
    'Menangani tugas administrasi di samping tanggung jawab operasional.',
    'Memberikan bantuan pada operasional dapur ketika dibutuhkan.',
    'Menyesuaikan gaya komunikasi dengan karakter, kebutuhan, dan situasi pelanggan.',
    'Bekerja dalam lingkungan multikultural dengan pelanggan dan rekan kerja dari berbagai latar belakang negara.',
    'Menjalankan berbagai fungsi operasional di luar satu posisi utama dalam lingkungan usaha kecil.',
  ];
  exp1Bullets.forEach((b) => {
    y = drawBullet(b, y);
  });
  y += 3.5;

  // 2. Reseller & Dropshipper
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Penjualan Mandiri / E-commerce  |  Independen', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2022 – 2023', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Reseller & Dropshipper', leftMargin, y);
  y += 4.5;

  const exp2Bullets = [
    'Menjalankan bisnis reseller dan dropship secara mandiri untuk mendistribusikan berbagai kategori produk konsumen.',
    'Menganalisis potensi permintaan produk dan memasarkannya secara langsung kepada calon pelanggan.',
    'Mengelola komunikasi pelanggan end-to-end, koordinasi pesanan, dan penyelesaian proses transaksi.',
    'Berkoordinasi dengan jaringan pemasok untuk memastikan akurasi dan ketepatan pemenuhan pesanan.',
  ];
  exp2Bullets.forEach((b) => {
    y = drawBullet(b, y);
  });
  y += 3.5;

  // 3. Konsultan Marketing F&B
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Konsultan Marketing F&B  |  Freelance', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2022 (2 Bulan)', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Marketing / Konsultan F&B', leftMargin, y);
  y += 4.5;

  const exp3Bullets = [
    'Memberikan rekomendasi praktis terkait produk F&B, preferensi pelanggan, dan pemasaran.',
    'Mengevaluasi peluang produk berdasarkan respons pelanggan dan kebutuhan bisnis café.',
    'Memberikan rekomendasi produk yang kemudian tetap digunakan dalam penawaran menu café.',
    'Berdiskusi langsung dengan pemilik usaha terkait keputusan produk dan pemasaran.',
  ];
  exp3Bullets.forEach((b) => {
    y = drawBullet(b, y);
  });

  // Footer Page 1
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Ryan Hidayat Taylor - Curriculum Vitae', leftMargin, pageHeight - 10);
  doc.text('Halaman 1 dari 2', pageWidth - rightMargin, pageHeight - 10, { align: 'right' });

  // ---------------- PAGE 2 ----------------
  doc.addPage();
  y = 18;

  // Header Page 2 mini
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('RYAN HIDAYAT TAYLOR', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Curriculum Vitae — Pengalaman Lanjutan & Kualifikasi', pageWidth - rightMargin, y, { align: 'right' });

  y += 2.5;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(leftMargin, y, pageWidth - rightMargin, y);
  y += 6;

  // 4. Sunmore Coffee & Co.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Sunmore Coffee & Co.  |  Indonesia', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2021', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Dishwasher → Waiter → Marketing & Komunikasi', leftMargin, y);
  y += 4.5;

  const sunmoreBullets = [
    'Memulai karir sebagai dishwasher dan bertanggung jawab atas kelancaran operasional back-of-house.',
    'Beralih menjadi waiter setelah kemampuan komunikasi dan interaksi pelayanan dinilai sangat baik oleh manajemen.',
    'Mendapat tanggung jawab di bidang marketing berdasarkan evaluasi kinerja dan kemampuan persuasi efektif.',
    'Berinteraksi langsung dengan pelanggan serta membantu meningkatkan kepuasan dan pengalaman pelanggan.',
  ];
  sunmoreBullets.forEach((b) => {
    y = drawBullet(b, y);
  });
  y += 3.5;

  // 5. Penjualan Produk Kebutuhan Sehari-hari (Featured)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Penjualan Produk Kebutuhan Sehari-hari  |  Jawa Barat (Featured)', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2018 – 2020', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Sales Freelance (B2B, Toko Kelontong, & Grosir)', leftMargin, y);
  y += 4.5;

  const fmcgBullets = [
    'Riset langsung toko kelontong bervolume tinggi untuk mengetahui produk yang memiliki permintaan pasar kuat.',
    'Memetakan toko-toko dan melakukan kanvas/penawaran produk langsung ke minimal 10 toko per hari secara rutin.',
    'Membangun jaringan kemitraan dengan pemilik toko, grosir, dan agen melalui kunjungan langsung dan referensi bisnis.',
    'Mengelola seluruh siklus penjualan mandiri: prospecting, sourcing produk, distribusi, dan manajemen relasi pembeli.',
    'Menyesuaikan gaya komunikasi berdasarkan karakter, usia, ukuran usaha, dan tingkat formalitas pelanggan.',
  ];
  fmcgBullets.forEach((b) => {
    y = drawBullet(b, y);
  });
  y += 3.5;

  // 6. Usaha F&B – Tangerang
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Usaha F&B  |  Pasar Kemis, Tangerang', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2017 – 2018', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Operator Penjualan / Mitra Bagi Hasil', leftMargin, y);
  y += 4.5;
  y = drawBullet('Menjalankan penjualan sate melalui kemitraan bagi hasil, bertanggung jawab penuh atas interaksi pelanggan dan penjualan harian.', y);
  y += 2.5;

  // 7. Penyewaan Peralatan Multimedia
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Penyewaan Peralatan Multimedia  |  B2B Event', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2016 – 2017', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Sales Representative', leftMargin, y);
  y += 4.5;
  y = drawBullet('Menjual jasa penyewaan perlengkapan acara kepada hotel dan venue melalui direct contact dan business mapping.', y);
  y += 2.5;

  // 8. Usaha F&B Mandiri Banjar & Pondok Ungu
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Usaha F&B Mandiri & Kemitraan  |  Banjar & Bekasi', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2014 – 2015', pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Pemilik & Operator (Banjar) • Mitra Bagi Hasil (Pondok Ungu)', leftMargin, y);
  y += 4.5;
  y = drawBullet('Membangun usaha jajanan/fried chicken modal mandiri di Banjar, serta mengoperasikan kemitraan bagi hasil di Pondok Ungu.', y);
  y += 5;

  // KOMPETENSI UTAMA
  y = drawSectionTitle('Kompetensi Utama (Core Competencies)', y);
  doc.setFontSize(8.5);

  CORE_COMPETENCIES.forEach((group) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`${group.category}:`, leftMargin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);

    const skillsText = group.skills.join(', ');
    const lines = doc.splitTextToSize(skillsText, contentWidth - 52);
    doc.text(lines, leftMargin + 52, y);
    y += Math.max(lines.length * 4.1, 4.5) + 1.5;
  });

  y += 3;

  // PENDIDIKAN
  y = drawSectionTitle('Pendidikan', y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(EDUCATION.school, leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Lulus ${EDUCATION.graduationYear}`, pageWidth - rightMargin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text(EDUCATION.major, leftMargin, y);

  // Footer Page 2
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Ryan Hidayat Taylor - Curriculum Vitae', leftMargin, pageHeight - 10);
  doc.text('Halaman 2 dari 2', pageWidth - rightMargin, pageHeight - 10, { align: 'right' });

  // Trigger download
  doc.save('Ryan_Hidayat_Taylor_CV.pdf');
}
