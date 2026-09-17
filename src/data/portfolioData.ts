export interface WorkExperienceItem {
  id: string;
  role: string;
  companyOrCategory: string;
  location?: string;
  period: string;
  category: 'sales' | 'fnb' | 'business';
  featured?: boolean;
  responsibilities: string[];
  highlightNote?: string;
}

export interface StrengthsItem {
  number: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface CompetencyCategory {
  category: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "RYAN HIDAYAT TAYLOR",
  headline: "Sales | Customer Relations | Business Development",
  shortStatement: "Experienced in direct sales, customer relationships, prospecting, and hands-on business operations.",
  location: "Banjar, Jawa Barat, Indonesia",
  phone: "+855 886 772 979",
  phoneRaw: "+855886772979",
  whatsappUrl: "https://wa.me/855886772979",
  email: "brianbraken123@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryan-taylor-6805661b6/",
  linkedinDisplay: "linkedin.com/in/ryan-taylor-6805661b6",
  instagram: "@brainbreak19",
  instagramUrl: "https://www.instagram.com/brainbreak19",
};

export const PROFESSIONAL_SUMMARY = {
  paragraph1: "Profesional di bidang penjualan dan pelayanan pelanggan dengan pengalaman di berbagai bidang, termasuk F&B, distribusi produk kebutuhan sehari-hari, penyewaan peralatan multimedia, serta perdagangan mandiri.",
  paragraph2: "Memiliki pengalaman dalam penjualan langsung, mencari dan memetakan calon pelanggan (prospecting), mendapatkan pelanggan baru, membangun hubungan dengan pelanggan, mencari produk (product sourcing), serta memberikan pelayanan kepada pelanggan.",
  paragraph3: "Terbiasa menyesuaikan gaya komunikasi dengan karakter, usia, kebutuhan, ukuran bisnis, dan situasi pelanggan yang berbeda.",
  paragraph4: "Nyaman bekerja di lingkungan usaha kecil dan UMKM yang membutuhkan inisiatif, fleksibilitas, serta keterlibatan langsung dalam berbagai fungsi operasional di lapangan.",
};

export const KEY_STRENGTHS: StrengthsItem[] = [
  {
    number: "01",
    title: "DIRECT SALES",
    description: "Berpengalaman mencari calon pelanggan, melakukan pendekatan langsung, menawarkan produk/jasa, dan membangun hubungan bisnis.",
    bulletPoints: [
      "Prospecting dan mapping calon pelanggan lapangan",
      "Door-to-door & store-to-store sales engagement",
      "Membangun hubungan jangka panjang hingga level grosir/agen",
    ],
  },
  {
    number: "02",
    title: "ADAPTIVE COMMUNICATION",
    description: "Terbiasa berkomunikasi dengan berbagai tipe pelanggan dan menyesuaikan pendekatan berdasarkan karakter, usia, kebutuhan, serta situasi.",
    bulletPoints: [
      "Menyesuaikan gaya bicara formal vs informal",
      "Pendekatan empatik & berorientasi solusi",
      "Pengalaman komunikasi lintas budaya & tim multikultural",
    ],
  },
  {
    number: "03",
    title: "ENTREPRENEURIAL MINDSET",
    description: "Memiliki pengalaman menjalankan usaha sendiri, kerja sama bagi hasil, reseller, distribusi produk, dan berbagai bentuk penjualan mandiri.",
    bulletPoints: [
      "Peka terhadap peluang pasar & perputaran stok",
      "Pengelolaan arus kas harian & inventaris mandiri",
      "Inisiatif tinggi tanpa perlu supervisi konstan",
    ],
  },
];

export const CAREER_TIMELINE = [
  {
    year: "2014",
    title: "Entrepreneurship & Direct Sales",
    description: "Membangun usaha jajanan & fried chicken secara mandiri di Banjar, Jawa Barat, mencakup seluruh siklus operasional dan penjualan.",
    type: "business",
  },
  {
    year: "2016",
    title: "Multimedia Equipment Sales",
    description: "Penjualan jasa penyewaan peralatan multimedia B2B, memetakan venue dan hotel, direct outreach.",
    type: "sales",
  },
  {
    year: "2017–2018",
    title: "F&B Sales & Partnership",
    description: "Mitra penjualan bagi hasil untuk outlet sate di Tangerang dan fried chicken di Bekasi.",
    type: "fnb",
  },
  {
    year: "2018–2020",
    title: "Field Sales & Product Distribution",
    description: "Sales Freelance B2B kebutuhan sehari-hari: mapping toko kelontong, kanvas 10+ toko/hari, menjalin kemitraan grosir.",
    type: "sales",
    featured: true,
  },
  {
    year: "2021",
    title: "Dishwasher → Waiter → Marketing",
    description: "Sunmore Coffee & Co.: Promosi bertahap atas dasar kemampuan komunikasi dan interaksi pelanggan yang unggul.",
    type: "progression",
    highlight: true,
  },
  {
    year: "2022–2023",
    title: "F&B Consulting + Reseller/Dropship",
    description: "Konsultasi menu café dan menjalankan bisnis perdagangan e-commerce independen dari sourcing hingga fulfillment.",
    type: "business",
  },
  {
    year: "2024–Sekarang",
    title: "Server → Captain / Admin / Kitchen Support",
    description: "Operasional F&B di Kamboja dalam lingkungan multikultural yang bergerak cepat dengan multi-tanggung jawab operasional.",
    type: "fnb",
  },
];

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    id: "fnb-cambodia",
    role: "Server • Captain • Admin • Kitchen Support",
    companyOrCategory: "Operasional F&B / Café",
    location: "Kamboja (Cambodia)",
    period: "Februari 2024 – Sekarang",
    category: "fnb",
    responsibilities: [
      "Melayani pelanggan dan menangani interaksi langsung dengan pelanggan dalam lingkungan F&B yang dinamis.",
      "Menjalankan tanggung jawab sebagai captain ketika diperlukan, termasuk membantu memastikan kelancaran operasional pelayanan.",
      "Menangani tugas administrasi di samping tanggung jawab operasional.",
      "Membantu operasional dapur ketika dibutuhkan.",
      "Menyesuaikan gaya komunikasi dengan karakter, kebutuhan, dan situasi pelanggan.",
      "Bekerja dalam lingkungan multikultural dengan pelanggan dan rekan kerja dari berbagai latar belakang.",
      "Menjalankan berbagai fungsi operasional di luar satu posisi utama dalam lingkungan usaha kecil.",
    ],
  },
  {
    id: "reseller-dropshipper",
    role: "Penjualan Mandiri / E-commerce",
    companyOrCategory: "Reseller & Dropshipper",
    period: "2022 – 2023",
    category: "business",
    responsibilities: [
      "Menjalankan bisnis reseller dan dropship secara mandiri untuk berbagai kategori produk konsumen.",
      "Mengidentifikasi produk yang memiliki potensi permintaan dan memasarkannya secara langsung kepada calon pelanggan.",
      "Menangani komunikasi dengan pelanggan, koordinasi pesanan, dan proses transaksi.",
      "Berkoordinasi dengan pemasok dalam proses pemenuhan pesanan.",
      "Mengembangkan pengalaman dalam penjualan online, mendapatkan pelanggan, menentukan posisi produk, dan membangun hubungan dengan pelanggan.",
    ],
  },
  {
    id: "fnb-consultant",
    role: "Marketing / Konsultan F&B",
    companyOrCategory: "Konsultan Marketing F&B",
    period: "2022 | 2 bulan",
    category: "fnb",
    responsibilities: [
      "Memberikan rekomendasi praktis terkait produk F&B, preferensi pelanggan, dan pemasaran.",
      "Mengevaluasi peluang produk berdasarkan respons pelanggan dan kebutuhan bisnis.",
      "Memberikan rekomendasi produk yang kemudian tetap digunakan dalam menu/penawaran café.",
      "Berdiskusi langsung dengan pemilik usaha terkait keputusan produk dan pemasaran.",
    ],
  },
  {
    id: "sunmore-coffee",
    role: "Dishwasher → Waiter → Marketing & Komunikasi",
    companyOrCategory: "Sunmore Coffee & Co.",
    location: "Indonesia",
    period: "2021",
    category: "fnb",
    highlightNote: "Promosi karier bertahap dari operasional back-of-house hingga marketing atas dasar evaluasi kinerja dan kemampuan komunikasi manajemen.",
    responsibilities: [
      "Bergabung dengan perusahaan sebagai dishwasher dan membantu operasional bagian belakang.",
      "Beralih menjadi waiter setelah kemampuan komunikasi dan interaksi dengan pelanggan dinilai baik oleh manajemen.",
      "Mendapat tanggung jawab di bidang marketing berdasarkan kinerja dan kemampuan komunikasi.",
      "Berinteraksi langsung dengan pelanggan serta membantu meningkatkan hubungan dan pengalaman pelanggan.",
      "Membantu kegiatan pemasaran dan komunikasi bisnis.",
      "Mengambil tanggung jawab yang semakin luas dalam lingkungan usaha kecil.",
    ],
  },
  {
    id: "freelance-sales-fmcg",
    role: "Sales Freelance (B2B & Grosir)",
    companyOrCategory: "Penjualan Produk Kebutuhan Sehari-hari",
    location: "Jawa Barat",
    period: "2018 – 2020",
    category: "sales",
    featured: true,
    highlightNote: "Featured Experience: Pengalaman direct sales lapangan paling intensif yang mencakup riset permintaan, canvas store-to-store, sourcing, dan jaringan grosir.",
    responsibilities: [
      "Mengidentifikasi toko kelontong dengan volume penjualan tinggi untuk mengetahui produk yang memiliki permintaan baik.",
      "Menggunakan informasi dari toko-toko tersebut untuk mencari produk yang memiliki potensi penjualan.",
      "Memetakan toko-toko di area sekitar dan menawarkan produk yang sesuai dengan kebutuhan mereka.",
      "Melakukan penjualan langsung ke setidaknya 10 toko per hari dalam periode penjualan rutin.",
      "Membangun jaringan dengan pemilik dan pedagang toko melalui kunjungan langsung, kartu nama, referensi, dan hubungan bisnis.",
      "Mengembangkan penjualan dari toko-toko kecil hingga menjalin hubungan dengan grosir dan agen.",
      "Mengidentifikasi perbedaan permintaan produk antarwilayah dan mencari pasar yang memiliki kebutuhan lebih tinggi terhadap produk tertentu.",
      "Menangani proses pencarian calon pelanggan, pencarian produk, penjualan, distribusi, dan hubungan pelanggan secara mandiri.",
      "Menyesuaikan gaya komunikasi berdasarkan karakter, usia, ukuran bisnis, dan tingkat formalitas pelanggan.",
    ],
  },
  {
    id: "fnb-tangerang",
    role: "Operator Penjualan / Mitra Bagi Hasil",
    companyOrCategory: "Usaha F&B – Tangerang",
    location: "Pasar Kemis, Tangerang",
    period: "2017 – 2018",
    category: "business",
    highlightNote: "Kemitraan bagi hasil dengan fokus utama pada eksekusi penjualan langsung di gerai.",
    responsibilities: [
      "Menjalankan penjualan sate melalui kerja sama bagi hasil dengan pihak yang menyediakan produk.",
      "Bertanggung jawab atas aktivitas penjualan dan interaksi langsung dengan pelanggan.",
      "Mengelola aktivitas penjualan harian.",
      "Menyesuaikan pendekatan penjualan berdasarkan respons dan kebutuhan pelanggan.",
    ],
  },
  {
    id: "multimedia-sales",
    role: "Sales Representative",
    companyOrCategory: "Penyewaan Peralatan Multimedia",
    period: "2016 – 2017",
    category: "sales",
    responsibilities: [
      "Menjual jasa penyewaan peralatan multimedia untuk kebutuhan acara.",
      "Mengidentifikasi calon pelanggan dari hotel dan lokasi penyelenggaraan acara.",
      "Menghubungi calon pelanggan secara langsung untuk memperkenalkan jasa penyewaan dan menawarkan kerja sama.",
      "Memetakan lokasi dan bisnis yang memiliki potensi kebutuhan terhadap peralatan event.",
      "Menjaga komunikasi dan hubungan dengan calon pelanggan.",
      "Menyesuaikan pendekatan penjualan berdasarkan kebutuhan pelanggan dan situasi bisnis.",
    ],
  },
  {
    id: "fnb-pondok-ungu",
    role: "Mitra Penjualan / Bagi Hasil",
    companyOrCategory: "Usaha F&B – Pondok Ungu",
    location: "Pondok Ungu, Bekasi",
    period: "2014 – 2015",
    category: "business",
    highlightNote: "Kemitraan bagi hasil penjualan fried chicken dengan mitra penyedia produk.",
    responsibilities: [
      "Menjalankan penjualan fried chicken melalui sistem kerja sama bagi hasil dengan mitra penyedia produk.",
      "Bertanggung jawab atas aktivitas penjualan dan pelayanan kepada pelanggan.",
      "Mengelola aktivitas penjualan secara langsung.",
      "Membangun hubungan dengan pelanggan di area sekitar.",
    ],
  },
  {
    id: "fnb-banjar",
    role: "Pemilik / Operator",
    companyOrCategory: "Usaha F&B – Banjar",
    location: "Banjar, Jawa Barat",
    period: "2014 – 2015",
    category: "business",
    highlightNote: "Usaha mandiri dengan modal pribadi menangani seluruh siklus bisnis dari hulu ke hilir.",
    responsibilities: [
      "Membangun usaha jajanan dan fried chicken secara mandiri menggunakan modal pribadi.",
      "Mengelola pembelian bahan, stok, persiapan makanan, penjualan, dan arus kas harian.",
      "Menentukan strategi promosi untuk menarik pelanggan dari kalangan pelajar dan masyarakat sekitar.",
      "Menangani operasional usaha dan interaksi pelanggan secara langsung.",
    ],
  },
];

export const ENTREPRENEURSHIP_EXPERIENCES = [
  {
    title: "Usaha F&B Mandiri (Jajanan & Fried Chicken)",
    role: "Pemilik / Operator",
    location: "Banjar, Jawa Barat",
    period: "2014 – 2015",
    description: "Merintis usaha kuliner mandiri dengan modal sendiri, mengelola inventaris bahan baku, penetapan harga, promosi lokal ke pelajar/warga, dan arus kas harian.",
    takeaway: "Fondasi kemandirian operasional dan pemahaman margin bisnis dari nol.",
  },
  {
    title: "Kemitraan F&B Fried Chicken (Bagi Hasil)",
    role: "Mitra Penjualan / Bagi Hasil",
    location: "Pondok Ungu, Bekasi",
    period: "2014 – 2015",
    description: "Mengoperasikan gerai fried chicken melalui sistem kemitraan bagi hasil, fokus pada pelayanan prima di counter, retensi pembeli, dan kecepatan penyajian.",
    takeaway: "Eksekusi standar layanan pada model bisnis kemitraan produk.",
  },
  {
    title: "Kemitraan F&B Sate (Bagi Hasil)",
    role: "Operator Penjualan / Mitra Bagi Hasil",
    location: "Pasar Kemis, Tangerang",
    period: "2017 – 2018",
    description: "Menjalankan penjualan sate dengan skema bagi hasil, menangani interaksi langsung pembeli pasar, dan menyesuaikan strategi pendekatan harian.",
    takeaway: "Kemampuan adaptasi komunikasi dengan karakter pelanggan pasar yang dinamis.",
  },
  {
    title: "Bisnis Reseller & Dropshipper",
    role: "Penjualan Mandiri / E-commerce",
    location: "Daring / Multi-channel",
    period: "2022 – 2023",
    description: "Menjalankan perputaran produk konsumen mandiri, mencari supplier terpercaya, mengelola pesanan, menangani komplain, dan membangun kepercayaan pembeli secara online.",
    takeaway: "Keahlian riset produk demand-driven dan end-to-end customer handling.",
  },
];

export const CORE_COMPETENCIES: CompetencyCategory[] = [
  {
    category: "Sales & Business Development",
    description: "Keahlian dalam penetrasi pasar, pencarian prospek lapangan, ekspansi relasi, dan penutupan transaksi.",
    skills: [
      "Penjualan Langsung",
      "Penjualan B2B",
      "Prospecting",
      "Lead Generation",
      "Akuisisi Pelanggan",
      "Pemetaan Target Pasar",
      "Pencarian Produk",
      "Distribusi",
      "Negosiasi",
      "Pengelolaan Hubungan Pelanggan",
    ],
  },
  {
    category: "Communication & Customer Service",
    description: "Keahlian interpersonal yang adaptif, menjalin empati, dan menjaga kepuasan pelanggan dari berbagai latar belakang.",
    skills: [
      "Pelayanan Pelanggan",
      "Hubungan Pelanggan",
      "Komunikasi Adaptif",
      "Komunikasi Bisnis",
      "Persuasi",
      "Komunikasi Lintas Budaya",
    ],
  },
  {
    category: "Operations",
    description: "Pengalaman praktis dalam menangani denyut harian usaha kecil, ketelitian stok, dan pemecahan masalah di lokasi.",
    skills: [
      "Pengelolaan Stok",
      "Pengelolaan Arus Kas",
      "Operasional F&B",
      "Operasional Retail",
      "Administrasi",
      "Pemecahan Masalah",
    ],
  },
];

export const EDUCATION = {
  school: "SMA Plus Darussalam",
  major: "Ilmu Pengetahuan Sosial (IPS)",
  graduationYear: "2014",
  notes: "Pendidikan menengah atas dengan fokus ilmu sosial yang menjadi dasar pemahaman dinamika manusia, interaksi sosial, dan prinsip dasar ekonomi.",
};
