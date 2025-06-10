import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 scrollbar-none relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-center relative">
          {/* Blurred Gradient Background - larger and more offset */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
            <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
          </div>
          <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
            <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
              Tentang <span className="text-secondary">AITISERVE</span>
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-6xl mx-auto font-light">
              <span className="text-secondary font-semibold">AITISERVE DJAYA NARAYA</span> adalah perusahaan teknologi yang lahir dari semangat inovasi dan komitmen untuk membentuk masa depan digital yang lebih cerdas dan berkelanjutan. Didirikan pada <span className="text-secondary font-semibold">27 Agustus 2024</span> di Kota <span className="text-secondary font-semibold">Bandung</span>, AITISERVE hadir sebagai startup visioner yang menggabungkan kecanggihan <span className="text-secondary font-semibold">Kecerdasan Buatan (AI)</span> dan <span className="text-secondary font-semibold">Teknologi Informasi (TI)</span> untuk menghadirkan solusi yang adaptif, efisien, dan berdampak langsung bagi dunia usaha dan masyarakat luas.
            </p>
          </div>
        </div>
        {/* Main Content */}
        <div className="max-w-4xl text-justify  mx-auto">
          <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
            <span className="text-secondary font-bold uppercase">PT. AITISERVE DJAYA NARAYA</span>, dikenal secara luas dengan nama <span className="text-secondary font-bold">AITISERVE</span>, adalah perusahaan teknologi yang lahir dari semangat inovasi dan komitmen untuk membentuk masa depan digital yang lebih cerdas dan berkelanjutan. Didirikan pada tanggal <span className="text-secondary font-bold">27 Agustus 2024</span> di Kota Bandung, <span className="text-secondary font-bold">AITISERVE</span> hadir sebagai startup visioner yang menggabungkan kecanggihan Kecerdasan Buatan (AI) dan Teknologi Informasi (TI) untuk menghadirkan solusi yang adaptif, efisien, dan berdampak langsung bagi dunia usaha dan masyarakat luas. Berbadan hukum Perseroan Terbatas berdasarkan Akta Pendirian dan telah disahkan melalui Surat Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor AHU-0065986.AH.01.01.TAHUN 2024, <span className="text-secondary font-bold">AITISERVE</span> menempatkan inovasi dan layanan sebagai inti dari setiap langkahnya.
          </p>
          <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
            <span className="text-secondary font-bold">AITISERVE</span> bergerak di bidang pengembangan perangkat lunak dan platform digital komersial, mencakup aktivitas pemrograman komputer, pengelolaan portal web, serta penyediaan layanan teknologi informasi dan jasa komputer lainnya. Dengan keahlian dalam pengembangan aplikasi web dan mobile berbasis AI, sistem informasi geografis (GIS), aplikasi desktop, layanan konsultasi IT & AI, serta dukungan teknis, <span className="text-secondary font-bold">AITISERVE</span> berkomitmen menjadi mitra transformasi digital terpercaya bagi pelaku bisnis, institusi, dan organisasi di berbagai sektor.
          </p>
        </div>
        

        {/* Sejarah & Visi Misi */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Sejarah Singkat</h2>
            <p className="text-neutral-700 text-base mb-2">
              Didirikan oleh para profesional berpengalaman, AITISERVE berawal dari kebutuhan akan solusi digital yang <span className="text-secondary font-semibold">inovatif</span> dan <span className="text-secondary font-semibold">berkelanjutan</span> di era transformasi digital. Sejak awal, kami berkomitmen untuk menjadi mitra strategis bagi pelaku bisnis, institusi, dan organisasi di berbagai sektor.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Visi</h2>
            <p className="text-neutral-700 text-base mb-2">
              Menjadi mitra terpercaya dalam transformasi digital yang unggul dan inovatif, serta perusahaan teknologi terdepan yang menghadirkan solusi berbasis kecerdasan buatan dan teknologi informasi untuk masa depan yang berkelanjutan dan berdampak nyata.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Misi</h2>
            <ul className="list-disc pl-6 text-neutral-700 text-base space-y-2">
              <li>Menghadirkan solusi AI dan TI yang efisien, bernilai tambah, dan berorientasi pada masa depan.</li>
              <li>Mendukung transformasi digital melalui layanan konsultasi, implementasi teknologi, dan kemitraan strategis.</li>
              <li>Meningkatkan kualitas sumber daya manusia dengan menanamkan budaya inovatif dan pengembangan kompetensi berkelanjutan.</li>
            </ul>
          </div>
          {/* Nilai-nilai Perusahaan */}
          <div className="bg-gradient-to-br from-secondary/10 via-white to-primary/10 rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Nilai-nilai Perusahaan</h2>
            <ul className="list-disc pl-6 text-neutral-700 text-base space-y-2">
              <li><span className="text-secondary font-semibold">TRANSFORMASI</span>: Berkomitmen pada perubahan positif dan berkelanjutan dalam menghadapi tantangan.</li>
              <li><span className="text-secondary font-semibold">AMANAH</span>: Menjunjung tinggi integritas, tanggung jawab, dan kepercayaan.</li>
              <li><span className="text-secondary font-semibold">NYATA</span>: Fokus pada hasil yang konkret, terukur, dan memberikan dampak nyata.</li>
              <li><span className="text-secondary font-semibold">GIGIH</span>: Konsisten dan tangguh dalam menghadapi tantangan dan mencapai target.</li>
              <li><span className="text-secondary font-semibold">GESIT</span>: Adaptif terhadap perubahan, cepat tanggap dalam mengambil keputusan.</li>
              <li><span className="text-secondary font-semibold">UNGGUL</span>: Berorientasi hasil dengan standar kualitas tinggi.</li>
              <li><span className="text-secondary font-semibold">HARMONIS</span>: Menjalin hubungan baik antar tim, mitra, dan seluruh pemangku kepentingan.</li>
            </ul>
          </div>
        </div>

        {/* Keunggulan & Layanan Utama */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Keunggulan & Layanan Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Konsultasi IT & AI</h3>
              <p className="text-neutral-700 text-base">Pendampingan strategis dalam transformasi digital, pemetaan kebutuhan teknologi, dan pengembangan roadmap berbasis AI.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Pengembangan Aplikasi Web & Mobile</h3>
              <p className="text-neutral-700 text-base">Membangun aplikasi modern, responsif, dan scalable untuk berbagai kebutuhan bisnis dan institusi.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Sistem Informasi Geografis (GIS)</h3>
              <p className="text-neutral-700 text-base">Solusi GIS untuk visualisasi lokasi, analisis spasial, dan pengambilan keputusan berbasis data geospasial.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Aplikasi Desktop & Integrasi Sistem</h3>
              <p className="text-neutral-700 text-base">Pengembangan perangkat lunak desktop yang terintegrasi dan aman sesuai kebutuhan spesifik organisasi.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Dukungan Teknis 24/7</h3>
              <p className="text-neutral-700 text-base">Layanan bantuan teknis profesional untuk memastikan operasional sistem berjalan lancar.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">Konsultasi & Implementasi Cloud</h3>
              <p className="text-neutral-700 text-base">Pendampingan migrasi, integrasi, dan optimalisasi layanan cloud untuk efisiensi bisnis.</p>
            </div>
          </div>
        </div>

        {/* Filosofi Nama */}
        <div className="mb-10 bg-gradient-to-br from-secondary/10 via-white to-primary/10 rounded-2xl shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Filosofi Nama</h2>
          <p className="text-neutral-700 text-base text-center">
            <span className="text-secondary font-semibold">"AITISERVE DJAYA NARAYA"</span> mencerminkan sinergi antara <span className="text-secondary font-semibold">kecerdasan buatan</span>, <span className="text-secondary font-semibold">teknologi informasi</span>, dan <span className="text-secondary font-semibold">layanan unggulan</span>. "DJAYA NARAYA" menggambarkan <span className="text-secondary font-semibold">kejayaan</span>, <span className="text-secondary font-semibold">harapan</span>, dan <span className="text-secondary font-semibold">kemakmuran</span> sebagai identitas dan cita-cita perusahaan dalam membentuk masa depan digital yang lebih cerdas, berkelanjutan, dan berdampak nyata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
