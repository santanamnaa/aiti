import React from 'react';
import { Cpu, Database, ShieldCheck, LayoutDashboard, ExternalLink, User, Briefcase, GraduationCap, Award, Layers } from 'lucide-react';

const profile = {
  name: 'CHAERRY',
  title: 'Solution Architect | IT & Telecommunications Expert',
  location: 'Bandung, Indonesia',
  image: '/images/directur.png',
};

const summary = `Seorang Solution Architect berpengalaman dengan lebih dari 20 tahun kiprah di bidang teknologi informasi dan telekomunikasi. Memiliki spesialisasi dalam merancang dan mengimplementasikan solusi berskala enterprise, modernisasi sistem legacy, serta transformasi digital berbasis AI dan sistem terdistribusi. Menguasai berbagai bahasa pemrograman dan arsitektur sistem modern dengan fokus pada efisiensi, skalabilitas, dan keberlanjutan.`;

const skills = [
  'Arsitektur Solusi & Sistem (Telco & IT)',
  'RAG AI (Retrieval-Augmented Generation) & Sistem Pengetahuan',
  'Full-Stack Development: Java, Kotlin, Python, Go, Node.js',
  'Desain API: REST, gRPC, SOAP, GraphQL',
  'Database: Oracle, PostgreSQL, Neo4j (Cypher, PL/SQL, PgSQL)',
  'Cloud & Vector Database: Pinecone, Supabase, Neo4j Aura',
  'OSS/BSS Systems: Clarity OSS (Service Manager)',
  'Sistem Inventarisasi Jaringan & Auto-Discovery',
  'Administrasi Linux & Shell Scripting',
  'Metodologi Agile, DevOps, CI/CD Pipelines',
];

const experiences = [
  {
    years: '2018 – 2023',
    company: 'PT Exalogic Integrasi Communication',
    role: 'Solution Architect',
    location: 'Bandung, Indonesia',
    highlights: [
      'Merancang dan mengembangkan UIMAX-ISP & UIMAX-OSP, platform inventarisasi jaringan fiber untuk Telkom Indonesia, dengan migrasi data dari Oracle ke Neo4j Graph Database.',
      'Membangun sistem auto-discovery jaringan (OLT, Metro Ethernet, WiFi) untuk provisioning otomatis dan efisiensi layanan.',
      'Memimpin desain solusi pemetaan luar ruang (OSP) dan inventarisasi data real-time untuk skala nasional.',
    ],
  },
  {
    years: '2016 – 2018',
    company: 'PT Telkomsigma (Telkom Group)',
    role: 'Solution Architect',
    location: 'Indonesia',
    highlights: [
      'Menerapkan arsitektur sistem berbasis Oracle OSM/UIM/ASAP untuk layanan enterprise (Metro Ethernet, VPN IP, VSAT, Indihome).',
      'Integrasi antar layer OSS untuk meningkatkan SLA dan efisiensi provisioning.',
    ],
  },
  {
    years: '2012 – 2015',
    company: 'Clarity OSS / Synchronoss Technologies',
    role: 'Oracle & Java Developer / Business Analyst',
    location: 'Indonesia',
    highlights: [
      'Membangun modul OSS discovery untuk Telkomsel dan Telkom Indonesia, memperluas visibilitas jaringan dan pengelolaan layanan.',
      'Berkontribusi pada desain alur kerja layanan dengan Clarity OSS Service Manager.',
    ],
  },
  {
    years: '2009 – 2012',
    company: 'Sansaine Exindo',
    role: 'Java & OSS Developer',
    location: 'Indonesia',
    highlights: [
      'Mengembangkan komponen discovery otomatis untuk jaringan Metro Ethernet dan suara (NSN, ZTE, Huawei).',
      'Peningkatan konsistensi sistem OSS dalam manajemen fault dan inventaris.',
    ],
  },
  {
    years: '2005 – 2009',
    company: 'PT. Jasindo Abadi Utama',
    role: 'C# & GIS Developer',
    location: 'Indonesia',
    highlights: [
      'Merancang sistem GIS dan aplikasi pendaftaran bidang tanah untuk Badan Pertanahan Nasional (BPN), mendukung digitalisasi data pertanahan nasional.',
    ],
  },
];

const education = {
  year: '1995',
  institution: 'Institut Teknologi Nasional (Itenas) Bandung',
  degree: 'Sarjana Teknik Geodesi',
};

const certifications = [
  'Graph Database Modeling (Neo4j)',
  'DevOps Fundamental',
];

const techSkills = [
  {
    category: 'Bahasa Pemrograman',
    items: ['Java, Kotlin, Python, Go, Node.js, C#, JavaScript'],
  },
  {
    category: 'Framework & Tools',
    items: ['Express.js, Semantic UI, JQuery, Pug.js, Swagger'],
  },
  {
    category: 'Cloud & Container',
    items: ['Docker, MinIO, Supabase'],
  },
  {
    category: 'Platform',
    items: ['Linux, GitLab, Trello, Apache Kafka, NGINX'],
  },
  {
    category: 'Protokol & Keamanan',
    items: ['SSH, SFTP, SCP, SSL/TLS'],
  },
  {
    category: 'Design UI/UX',
    items: ['Figma'],
  },
  {
    category: 'Mobile',
    items: ['Flutter, React Native'],
  },
  {
    category: 'Sistem Geospasial',
    items: ['GeoServer, Neo4j Spatial'],
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 min-h-screen relative overflow-hidden">
      {/* Decorative Gradient Header */}
      <div className="container mx-auto px-6 scrollbar-none relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-center relative">
          {/* Blurred Gradient Background - larger and more offset */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
            <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
          </div>
          <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
            <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
              Portofolio <span className="text-secondary">DIREKSI</span>
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
              <span className="text-secondary font-semibold">AITISERVE</span> dibangun oleh para profesional berpengalaman dengan keahlian mendalam di bidang <span className="text-secondary font-semibold">teknologi</span>. Dengan pemahaman kuat terhadap kebutuhan <span className="text-secondary font-semibold">industri</span>, kami hadir sebagai mitra terpercaya dalam menyediakan <span className="text-secondary font-semibold">solusi digital</span> yang inovatif dan berdampak.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          {/* Profil */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl flex flex-col items-center w-full max-w-xs mx-auto hover:shadow-2xl transition-all duration-300">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-secondary mb-6 shadow-md"
            />
            <div className="text-2xl font-bold text-neutral-900 mb-1 flex items-center gap-2"><User className="w-6 h-6 text-secondary" />{profile.name}</div>
            <div className="text-neutral-600 text-lg mb-2 text-center">{profile.title}</div>
            <div className="text-secondary font-medium text-sm flex items-center gap-1"><ExternalLink className="w-4 h-4" />{profile.location}</div>
          </div>
          {/* Summary & Skills */}
          <div className="flex flex-col space-y-8 w-full">
            {/* Ringkasan Profesional */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
              <div className="text-lg font-semibold text-neutral-800 mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5 text-secondary" />Ringkasan Profesional</div>
              <p className="text-neutral-700 text-base font-light">{summary}</p>
            </div>
            {/* Keahlian */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
              <div className="text-lg font-semibold text-neutral-800 mb-2 flex items-center gap-2"><Layers className="w-5 h-5 text-secondary" />Keahlian Utama</div>
              <ul className="list-disc pl-6 text-neutral-700">
                {skills.map((item, idx) => (
                  <li key={idx} className="mb-2 font-light">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pengalaman Profesional */}
        <div className="mb-20">
          <div className="text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6 text-secondary" />Pengalaman Profesional</div>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="text-secondary text-lg font-semibold w-32 min-w-max flex items-center">{exp.years}</div>
                <div className="flex-1">
                  <div className="font-semibold text-neutral-900 mb-1">
                    <span className="text-secondary">{exp.company}</span> - <span className="italic text-neutral-700">{exp.role}</span>
                  </div>
                  <div className="text-neutral-600 mb-2">{exp.location}</div>
                  <ul className="list-disc pl-6 text-neutral-700">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="mb-2 font-light">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan */}
        <div className="mb-14">
          <div className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-secondary" />Pendidikan</div>
          <div className="flex items-center gap-6 mb-2">
            <div className="bg-gray-100 rounded px-4 py-2 font-semibold text-neutral-700">{education.year}</div>
            <div className="text-secondary font-semibold">{education.institution}</div>
          </div>
          <div className="text-neutral-700 text-base font-light">{education.degree}</div>
        </div>

        {/* Sertifikasi */}
        <div className="mb-14">
          <div className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-secondary" />Sertifikasi</div>
          <ul className="list-disc pl-6 text-neutral-700">
            {certifications.map((cert, idx) => (
              <li key={idx} className="text-secondary font-semibold mb-2">{cert}</li>
            ))}
          </ul>
        </div>

        {/* Teknologi dan Tools yang Dikuasai */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-2"><Cpu className="w-6 h-6 text-secondary" />Teknologi dan Tools yang Dikuasai</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techSkills.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
                <div className="text-secondary font-semibold mb-2">{cat.category}</div>
                <ul className="list-disc pl-6 text-neutral-700">
                  {cat.items.map((item, i) => (
                    <li key={i} className="mb-2 font-light">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;