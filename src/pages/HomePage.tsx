import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    image: '/images/blog/dummy1.png',
    category: 'AI & Machine Learning',
    title: 'Mengenal Konsep Dasar Machine Learning',
    description: 'Pelajari bagaimana machine learning bekerja dan mengapa ia menjadi bagian penting dalam perkembangan teknologi modern.',
    // icons: ['/images/blog/python.png', '/images/blog/github.png', '/images/blog/tensorflow.png'],
    link: '/blog/mengenal-konsep-dasar-machine-learning',
  },
  {
    image: '/images/blog/dummy2.png',
    category: 'Web Development',
    title: 'Tren Terbaru dalam Pengembangan Web 2025',
    description: 'Sebuah tinjauan tentang teknologi dan pendekatan terkini dalam pengembangan aplikasi web yang responsif dan dinamis.',
    // icons: ['/images/blog/react.png', '/images/blog/nodejs.png', '/images/blog/mongo.png'],
    link: '/blog/tren-terbaru-dalam-pengembangan-web-2025',
  },
  {
    image: '/images/blog/dummy3.png',
    category: 'Cloud Computing',
    title: 'Mengapa Cloud Masih Jadi Pilihan Utama?',
    description: 'Ulasan lengkap tentang keuntungan penggunaan cloud infrastructure dan layanan cloud dalam skala bisnis.',
    // icons: ['/images/blog/aws.png', '/images/blog/docker.png', '/images/blog/github.png'],
    link: '/blog/mengapa-cloud-masih-jadi-pilihan-utama',
  },
];

const TechBlock = ({
  iconSrc,
  title,
  desc,
  reverse = false,
}: {
  iconSrc: string;
  title: string;
  desc: string;
  reverse?: boolean;
}) => (
  <div className={`flex flex-col md:flex-row${reverse ? '-reverse' : ''} items-center md:items-start gap-6`}>
    <motion.div
      className="flex-shrink-0 w-24 h-24 flex items-center justify-center mr-6 self-center"
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <img src={iconSrc} alt="icon" className="w-24 h-24" />
    </motion.div>
    <motion.div
      className="flex-1 mt-4 md:mt-0"
      initial={{ opacity: 0, x: reverse ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-base md:text-lg">{desc}</p>
    </motion.div>
  </div>
);

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'AITI - Innovative Technology Services';
  }, []);

  return (
    <div className="bg-[#18202B] min-h-screen w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center bg-[#18202B] overflow-hidden" style={{ backgroundImage: 'url(/images/BG_WEB.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Decorative background shapes */}

        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl relative z-10 pt-16 pb-8">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital Transformation Solutions
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mitra terpercaya Anda dalam solusi teknologi cerdas berbasis AI dan TI untuk masa depan yang berkelanjutan.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#services"
                className="bg-secondary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-full shadow transition"
              >
                Lihat Layanan
              </a>
              <a
                href="#contact"
                className="border border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Konsultasi Gratis
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER: About, Services, Portfolio/Team, Teknologi & Kompetensi Inti */}
      <div className="relative bg-white overflow-hidden">
        {/* Ornamen lingkaran besar gelap dan secondary kiri bawah */}
        {/* Ornamen lingkaran transparan dan foto kanan atas */}
        <img src="/images/Subtract.png" alt="decor" className="hidden md:block absolute top-0 right-0 w-[420px] h-auto z-0 pointer-events-none select-none" style={{ maxWidth: '50vw' }} aria-hidden="true" />
        {/* ABOUT */}
        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl relative z-10 flex flex-col items-start pt-16 pb-8">
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              SEKILAS TENTANG <span className="text-secondary">AITISERVE</span>
            </h2>
            <p className="text-base md:text-lg mb-2 font-bold text-secondary">PT AITISERVE DJAYA NARAYA</p>
            <p className="text-base md:text-lg text-gray-800 mb-6">
              adalah perusahaan teknologi yang berdiri pada tahun 2024, fokus menghadirkan solusi digital berbasis kecerdasan buatan (AI) dan teknologi informasi (TI). Kami hadir sebagai mitra transformasi digital untuk masa depan Indonesia yang lebih cerdas dan berkelanjutan.
            </p>
            <a
              href="/about"
              className="bg-secondary hover:bg-secondary text-white font-semibold px-8 py-2 rounded-lg shadow transition text-base w-fit block mb-8"
              style={{ boxShadow: '0 4px 16px 0 rgba(0, 204, 204, 0.15)' }}
            >
              Selengkapnya
            </a>
          </div>
          {/* Ilustrasi gedung dan ornamen bulat kecil */}
          <div className="relative w-full flex justify-center mt-4 mb-0">
            <div className="relative w-[260px] md:w-[300px] lg:w-[360px]">
              <img
                src="/images/cuate.png"
                alt="Gedung"
                className="w-full h-auto drop-shadow-xl relative z-10"
                draggable="false"
              />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary rounded-full opacity-60 z-0" />
              <div className="absolute -top-2 right-0 w-4 h-4 bg-secondary rounded-full opacity-40 z-0" />
              <div className="absolute -top-6 left-4 w-5 h-5 bg-secondary rounded-full opacity-40 z-0" />
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl relative z-10 pt-0 pb-8">
          <div className="relative flex flex-col items-center w-full mt-2 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2 text-center">
              RUANG LINGKUP <span className="text-secondary">LAYANAN</span>
            </h2>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center text-base md:text-lg">
              Sebagai perusahaan yang mengintegrasikan kecerdasan buatan dan teknologi informasi, AITISERVE menyediakan layanan lengkap yang dirancang untuk menjawab tantangan era digital. Ruang lingkup layanan kami meliputi:
            </p>
          </div>
          <div className="w-full flex justify-center px-2 md:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-8 lg:gap-x-20 w-full max-w-6xl items-stretch">
              <ServiceCard
                icon={<img src="/images/service1.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Konsultasi IT dan AI</span>} 
                description="Pendampingan strategis untuk transformasi digital Anda." 
                delay={0}
              />
              <ServiceCard
                icon={<img src="/images/service2.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Pengembangan Aplikasi Web</span>} 
                description="Aplikasi web modern dengan desain responsif dan performa optimal." 
                delay={1}
              />
              <ServiceCard
                icon={<img src="/images/service3.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Pengembangan Aplikasi Mobile</span>} 
                description="Aplikasi lintas platform berbasis AI untuk pengalaman unggul." 
                delay={2}
              />
              <ServiceCard
                icon={<img src="/images/service4.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Pengembangan Aplikasi Desktop</span>} 
                description="Solusi desktop tangguh dan terintegrasi." 
                delay={3}
              />
              <ServiceCard
                icon={<img src="/images/service5.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Pengembangan Sistem Informasi Geografis (GIS)</span>} 
                description="Analisis spasial dan visualisasi lokasi untuk pengambilan keputusan cerdas." 
                delay={4}
              />
              <ServiceCard
                icon={<img src="/images/service6.png" alt="icon" className="w-24 h-24" />} 
                title={<span className="font-bold text-secondary">Dukungan Teknis</span>} 
                description="Layanan bantuan 24/7 untuk sistem Anda." 
                delay={5}
              />
            </div>
          </div>
        </div>
        {/* PORTOFOLIO/TEAM SECTION */}
        <div className="relative bg-white overflow-hidden min-h-[600px] flex items-center py-20">
          {/* Ornamen kiri */}
          <img
            src="/images/SubtractPlain.png"
            alt="ornamen"
            className="absolute -left-0 top-0 w-[320px] z-0 pointer-events-none select-none"
            aria-hidden="true"
          />
          <img
            src="/images/Ellipse.png"
            alt="ornamen"
            className="absolute -left-24 bottom-0 w-[180px] z-0 pointer-events-none select-none opacity-50"
            aria-hidden="true"
          />

          {/* Konten utama rata tengah */}
          <div className="relative z-8 flex flex-1 justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full max-w-xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
                PORTOFOLIO <span className="text-secondary">TEAM</span>
              </h2>
              <p className="text-gray-800 mb-10 text-lg md:text-xl leading-relaxed">
                Kekuatan kami terletak pada pengalaman profesional pendiri dan tim utama yang telah teruji dalam berbagai proyek berskala besar, mulai dari otomasi jaringan, sistem informasi geografis, hingga integrasi sistem enterprise untuk industri telekomunikasi nasional. Fondasi teknis yang kokoh ini menjadikan AITISERVE siap bersaing di era transformasi digital.
              </p>
              <a
                href="/portfolio"
                className="bg-secondary hover:bg-secondary text-white font-semibold px-8 py-2 rounded-lg shadow transition text-base mb-8"
                style={{ boxShadow: '0 4px 16px 0 rgba(0, 204, 204, 0.15)' }}
              >
                Selengkapnya
              </a>
              <img
                src="/images/cuate2.png"
                alt="Team Illustration"
                className="w-[250px] md:w-[320px] h-auto drop-shadow-xl mx-auto"
                draggable="false"
              />
            </div>
          </div>
        </div>
        {/* TEKNOLOGI DAN KOMPETENSI INTI */}
        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl relative z-10 pt-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-center">
            TEKNOLOGI DAN <span className="text-secondary">KOMPETENSI INTI</span>
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center text-lg md:text-xl">
            AITISERVE mengandalkan beragam teknologi terdepan untuk menghadirkan solusi digital yang tangguh, efisien, dan adaptif terhadap kebutuhan industri. Dengan pendekatan berbasis AI dan IT modern, berikut adalah ekosistem teknologi yang mendukung layanan kami:
          </p>
          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            {/* Blok 1: Icon kiri, teks kanan */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <motion.div
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center mr-6 self-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src="/images/IconTech1.png" alt="icon" className="w-24 h-24" />
              </motion.div>
              <motion.div
                className="flex-1 mt-4 md:mt-0"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Arsitektur Sistem & Pengembangan Solusi</h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Termasuk rancangan sistem Telco & IT, OSS/BSS, serta penerapan AI berbasis Retrieval-Augmented Generation (RAG). Tim kami menguasai pengembangan full-stack menggunakan Java, Kotlin, Python, Go, Node.js, serta pengembangan antarmuka modern dengan React Native, Flutter, dan berbagai framework frontend.
                </p>
              </motion.div>
            </div>
            {/* Blok 2: Icon kanan, teks kiri */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
              <motion.div
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center ml-6 self-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src="/images/IconTech2.png" alt="icon" className="w-24 h-24" />
              </motion.div>
              <motion.div
                className="flex-1 mt-4 md:mt-0"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Basis Data & Infrastruktur</h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Mencakup pengelolaan database relasional dan graph (Oracle, PostgreSQL, Neo4j), pemanfaatan cloud dan vector database seperti Supabase dan Pinecone, serta dukungan server dan storage berbasis Linux, NGINX, dan MinIO. Untuk kebutuhan spasial, kami menggunakan GeoServer.
                </p>
              </motion.div>
            </div>
            {/* Blok 3: Icon kiri, teks kanan */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <motion.div
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center mr-6 self-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src="/images/IconTech3.png" alt="icon" className="w-24 h-24" />
              </motion.div>
              <motion.div
                className="flex-1 mt-4 md:mt-0"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">DevOps & Keamanan Sistem</h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Meliputi manajemen server Linux, scripting, penggunaan container (Docker), orkestrasi (Kafka), serta pipeline CI/CD dengan GitLab, Jenkins, dan metodologi Agile. Keamanan sistem dijaga melalui standar OWASP, enkripsi SSL/TLS, dan protokol aman seperti SSH dan SFTP.
                </p>
              </motion.div>
            </div>
            {/* Blok 4: Icon kanan, teks kiri */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
              <motion.div
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center ml-6 self-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src="/images/IconTech4.png" alt="icon" className="w-24 h-24" />
              </motion.div>
              <motion.div
                className="flex-1 mt-4 md:mt-0"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Desain & Antarmuka Pengguna</h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Difokuskan pada pengembangan UI/UX menggunakan Figma dan pengembangan aplikasi mobile lintas platform berbasis AI dengan Flutter dan React Native.
                </p>
              </motion.div>
            </div>
          </div>
          {/* Barisan ikon teknologi - berjalan horizontal */}
          <motion.div
            className="overflow-hidden w-full mt-20"
            style={{ whiteSpace: 'nowrap' }}
          >
            <motion.div
              style={{ display: 'inline-block' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: 'linear',
              }}
            >
              <img src="/images/techstack.svg" alt="Tech Stack" className="inline-block h-52 md:h-64 object-contain" />
              <img src="/images/techstack.svg" alt="Tech Stack" className="inline-block h-52 md:h-64 object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* OUR BLOG SECTION */}
      <div className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8 text-center">
            OUR <span className="text-secondary">BLOG</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-500 mb-2">{post.category}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 flex-1">{post.description}</p>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {post.icons.map((icon, i) => (
                      <img key={i} src={icon} alt={`icon_${i}`} className="w-6 h-6 object-contain" />
                    ))}
                  </div> */}
                  <a href={post.link} className="text-secondary font-semibold hover:underline mt-auto">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT & FOOTER */}
      <div className="relative bg-primary overflow-hidden py-16">
        <div className="container mx-auto px-4 lg:px-8 2xl:px-0 max-w-7xl 2xl:max-w-screen-2xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="mb-6 text-base md:text-lg">
            Untuk konsultasi lebih lanjut, hubungi kami melalui email atau kunjungi situs web kami.
          </p>
          <a
            href="/contact"
            className="inline-block border border-white text-white hover:bg-white hover:text-[#18202B] font-semibold px-6 py-2 rounded-full transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

// ServiceCard component for use in Services section
const ServiceCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: React.ReactNode; description: string; delay: number }) => {
  return (
    <a href="/services" className="block group">
      <motion.div
        className="flex flex-row items-center bg-white border border-gray-200 rounded-xl px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 min-w-0 w-full h-full shadow-[0_2px_12px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out cursor-pointer group-hover:shadow-2xl gap-3 sm:gap-6 md:gap-8 flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay * 0.1 }}
        tabIndex={0}
      >
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mr-4 sm:mr-6">
          {icon}
        </div>
        <div className="flex flex-col justify-center h-full flex-1">
          <div className="text-lg md:text-xl font-bold text-secondary mb-1 leading-tight">{title}</div>
          <div className="text-gray-900 text-base md:text-lg leading-snug">{description}</div>
        </div>
      </motion.div>
    </a>
  );
};

export default HomePage;