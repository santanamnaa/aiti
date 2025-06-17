import React, { useState } from 'react';


interface ExperienceItem {
  yearRange: string;
  title: string;
  company: string;
  location?: string;
  bullets: string[];
}

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
}

interface DireksiData {
  name: string;
  title: string;
  location: string;
  overview: string;
  summary: string;
  skills: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: string[];
  tools: { category: string; items: string[] }[];
}

interface PMExperience {
  year: string;
  title: string;
  company: string;
  roles: string;
}

interface PMData {
  name: string;
  title: string;
  location: string;
  skills: string[];
  experiences: PMExperience[];
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<'direksi' | 'pm'>('direksi');

  const direksi: DireksiData = {
    name: 'CHAERRY',
    title: 'Solution Architect | IT & Telecommunications Expert',
    location: 'Bandung, Indonesia',
    overview:
      'AITISERVE dibangun oleh para profesional berpengalaman dengan keahlian mendalam di bidang teknologi. Dengan pemahaman kuat terhadap kebutuhan industri, kami hadir sebagai mitra terpercaya dalam menyediakan solusi digital yang inovatif dan berdampak.',
    summary:
      'Seorang Solution Architect berpengalaman dengan lebih dari 20 tahun kiprah di bidang teknologi informasi dan telekomunikasi. Memiliki spesialisasi dalam merancang dan mengimplementasikan solusi berskala enterprise, modernisasi sistem legacy, serta transformasi digital berbasis AI dan sistem terdistribusi. Menguasai berbagai bahasa pemrograman dan arsitektur sistem modern dengan fokus pada efisiensi, skalabilitas, dan keberlanjutan.',
    skills: [
      'Arsitektur Solusi & Sistem (Telco & IT)',
      'RAG AI (Retrieval–Augmented Generation) & Sistem Pengetahuan',
      'Full-Stack Development: Java, Kotlin, Python, Go, Node.js',
      'Desain API: REST, gRPC, SOAP, GraphQL',
      'Database: Oracle, PostgreSQL, Neo4j (Cypher, PL/SQL, PgSQL)',
      'Cloud & Vector Database: Pinecone, Supabase, Neo4j Aura',
      'OSS/BSS Systems: Clarity OSS (Service Manager)',
      'Sistem Inventarisasi Jaringan & Auto-Discovery',
      'Administrasi Linux & Shell Scripting',
      'Metodologi Agile, DevOps, CI/CD Pipelines',
    ],
    experiences: [
      {
        yearRange: '2018 – 2023',
        title: 'PT Exalogic Integrasi Communication – Solution Architect',
        company: 'PT Exalogic Integrasi Communication',
        location: 'Bandung, Indonesia',
        bullets: [
          'Merancang dan mengembangkan UIMAX-ISP (OSS untuk ISP), platform inventarisasi jaringan dan layanan.',
          'Membangun sistem auto-discovery perangkat jaringan, integrasi OSS/BSS, serta dashboard monitoring.',
          'Memimpin desain solusi pemetaan jaringan geospasial dan sistem knowledge management berbasis graph database.'
        ],
      },
      {
        yearRange: '2016 – 2018',
        title: 'PT Telkomsigma (Telkom Group) – Solution Architect',
        company: 'PT Telkomsigma (Telkom Group)',
        location: 'Indonesia',
        bullets: [
          'Menerapkan arsitektur sistem OSS/BSS untuk operator telekomunikasi nasional.',
          'Integrasi antar layer OSS (Service, Network, Resource) dan pengembangan API management.'
        ],
      },
      {
        yearRange: '2012 – 2015',
        title: 'Clarity OSS / Synchronoss Technologies – Oracle & Java Developer / Business Analyst',
        company: 'Clarity OSS / Synchronoss Technologies',
        location: 'Indonesia',
        bullets: [
          'Membangun modul OSS discovery, workflow, dan integrasi dengan sistem eksternal.',
          'Berkoordinasi pada desain alur kerja service fulfillment dan assurance untuk operator besar.'
        ],
      },
      {
        yearRange: '2009 – 2012',
        title: 'Sansaine Exindo – Java & OSS Developer',
        company: 'Sansaine Exindo',
        location: 'Indonesia',
        bullets: [
          'Mengembangkan komponen discovery otomatis dan integrasi sistem OSS untuk ISP.',
          'Peningkatan konsistensi sistem OSS/BSS dan monitoring performa jaringan.'
        ],
      },
      {
        yearRange: '2005 – 2009',
        title: 'PT Jasindo Abadi Utama – C# & GIS Developer',
        company: 'PT Jasindo Abadi Utama',
        location: 'Indonesia',
        bullets: [
          'Merancang sistem GIS dan aplikasi pendaftaran bidang tanah berbasis web.',
          'Mendukung digitalisasi data pertanahan nasional.'
        ],
      },
    ],
    education: [
      {
        year: '1995',
        institution: 'Institut Teknologi Nasional (Itenas) Bandung',
        degree: 'Sarjana Teknik Geodesi'
      }
    ],
    certifications: [
      'Graph Database Modeling (Neo4j)',
      'DevOps Fundamental'
    ],
    tools: [
      { category: 'Bahasa Pemrograman', items: ['Java', 'Kotlin', 'Python', 'Go', 'Node.js', 'C#', 'JavaScript'] },
      { category: 'Framework & Tools', items: ['Express.js', 'Semantic UI', 'jQuery', 'Pug.js', 'Swagger'] },
      { category: 'Cloud & Container', items: ['Docker', 'MinIO', 'Supabase'] },
      { category: 'Platform', items: ['Linux', 'GitLab', 'Trello', 'Apache Kafka', 'NGINX'] },
      { category: 'Protokol & Keamanan', items: ['SSH', 'SFTP', 'SCP', 'SSL/TLS'] },
      { category: 'Design UI/UX', items: ['Figma'] },
      { category: 'Mobile', items: ['Flutter', 'React Native'] },
      { category: 'Sistem Geospasial', items: ['GeoServer', 'Neo4j Spatial'] },
    ],
  };

  const pm: PMData = {
    name: 'ACHMAD FAIZAL',
    title: 'Project Manager',
    location: 'Bandung, Indonesia',
    skills: [
      'IT Support / Helpdesk',
      'Database (Neo4j, MySQL, Oracle)',
      'Strong communications skills',
      'RESTful API (NodeJS, PHP, Java)',
      'Microsoft Office & BPMN',
      'Adobe Photoshop, XD, Premiere',
      'GeoServer & PostGIS',
      'Frameworks (CodeIgniter, Laravel)',
      'JavaScript, CSS (Bootstrap 3&4, SASS)',
      'QGIS, Kibana, Swagger',
    ],
    experiences: [
      {
        year: '2025',
        title: 'Pengadaan Jasa Enhancement Product Catalog Tahun 2025',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Digital Connectivity Service (DCS)',
        roles: 'Project Manager',
      },
      {
        year: '2024',
        title: 'Pengadaan Jasa Managed Development CX Agent Portal Tahun 2024',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Digital Connectivity Service (DCS)',
        roles: 'Project Manager',
      },
      {
        year: '2023',
        title: 'Pengadaan Portal Aplikasi DCEC 2023',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Digital Connectivity Service (DCS)',
        roles: 'Project Manager',
      },
      {
        year: '2022',
        title: 'Pengadaan Perpanjangan Managed Service Pengembangan Dan Pemeliharaan Network & Inventory Operation Management System (NOMS) 2022',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Digital Connectivity Service (DCS)',
        roles: 'Project Manager',
      },
      {
        year: '2020–2021',
        title: 'Unified Inventory Management to Accelerate Digital Business – Inside Plant (UIMAX ISP)',
        company: 'PT. Gunung Amal Solution International, Join With PT Exalogic (Developer and Support)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2019',
        title: 'Unified Inventory Management to Accelerate Digital Business – Outside Plant (UIMAX OSP)',
        company: 'PT. Gunung Amal Solution International, Join With PT Exalogic (Developer and Support)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2018',
        title: 'Network & Inventory Operation Management System (NOMS) WiFi Tahap I (Modul Network Operation Management System)',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Service Solution (DSS)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2018',
        title: 'Network & Inventory Operation Management System (NOMS) WiFi Tahap II (Modul Security & User Access Management)',
        company: 'PT. Gunung Amal Solution International to PT Telkom Indonesia Divisi Service Solution (DSS)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2018',
        title: 'Open Work Order Management System (OpenWOMS)',
        company: 'PT. Gunung Amal Solution International to PT Telkom – Divisi Service Solution (DSS)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2018',
        title: 'Global Delivery System collaboration with PT. Telkom, TelkomTelstra, Telin, AT&T Worldwide',
        company: 'PT. Gunung Amal Solution International to PT Telkom – Divisi Service Solution (DSS)',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2018',
        title: 'TimeSheet (Presensi Karyawan)',
        company: 'PT. Gunung Amal Solution International',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2017',
        title: 'Aplikasi Desa (Cicaheum)',
        company: 'PT. Gunung Amal Solution International',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2017',
        title: 'Engineering Management System (EMAS)',
        company: 'PT. Gunung Amal Solution International, Join with PT. Exalogic Integrasi Communication',
        roles: 'Operation & IT Support, Documentation',
      },
      {
        year: '2016',
        title: 'VIP courier',
        company: 'J&T Express (Admin)',
        roles: 'Data Entry',
      },
      {
        year: '2015',
        title: 'PT Telkom Indonesia',
        company: 'PT Telkom Indonesia',
        roles: 'Field practice MDF (Main Distribution Frame)',
      },
    ],
  };

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
              {activeTab === 'direksi' ? (
                <>
                  <span className="text-secondary">DIREKSI</span>
                </>
              ) : (
                <>
                  <span className="text-secondary">PROJECT MANAGER</span>
                </>
              )}
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
            AITISERVE dibangun oleh para profesional berpengalaman dengan keahlian mendalam di bidang teknologi. Dengan pemahaman kuat terhadap kebutuhan industri, kami hadir sebagai mitra terpercaya dalam menyediakan solusi digital yang inovatif dan berdampak.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-0">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-10">
        <button
          className={`px-6 py-0 rounded-t-lg border-b-2 ${
            activeTab === 'direksi'
              ? 'border-secondary text-secondary font-semibold'
              : 'border-transparent text-gray-600'
          }`}
          onClick={() => setActiveTab('direksi')}
        >
          Direksi
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg border-b-2 ${
            activeTab === 'pm'
              ? 'border-secondary text-secondary font-semibold'
              : 'border-transparent text-gray-600'
          }`}
          onClick={() => setActiveTab('pm')}
        >
          Project Manager
        </button>
      </div>

      {/* Content */}
      {activeTab === 'direksi' ? (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
          {/* Header Card */}
          <div className="rounded-3xl px-6 py-12 shadow-lg max-w-3xl mx-auto w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-1">{direksi.name}</h2>
            <p className="text-secondary text-lg md:text-xl mb-1">{direksi.title}</p>
            <p className="text-gray-500 text-base md:text-lg">{direksi.location}</p>
          </div>
          {/* Overview */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Portofolio Direksi</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">{direksi.overview}</p>
          </div>
          {/* Ringkasan Profesional */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Ringkasan Profesional</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">{direksi.summary}</p>
          </div>
          {/* Keahlian Utama */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Keahlian Utama</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700 text-base sm:text-lg">
              {direksi.skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          {/* Pengalaman Profesional */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Pengalaman Profesional</h3>
            <div className="space-y-6 mt-4">
              {direksi.experiences.map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <div className="min-w-max text-secondary font-semibold text-sm sm:text-base md:text-lg md:pt-1">{exp.yearRange}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{exp.company}{exp.location && ` — ${exp.location}`}</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 text-sm sm:text-base">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pendidikan */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Pendidikan</h3>
            <ul className="space-y-4 mt-2">
              {direksi.education.map((e, i) => (
                <li key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="min-w-max font-semibold text-secondary text-sm sm:text-base md:text-lg">{e.year}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">{e.institution}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{e.degree}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Sertifikasi */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Sertifikasi</h3>
            <ul className="mt-2 space-y-1 text-secondary text-base sm:text-lg">
              {direksi.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
          {/* Header Card Project Manager */}
          <div className="rounded-3xl px-6 py-12 shadow-lg max-w-3xl mx-auto w-full text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">{pm.name}</h2>
            <p className="text-secondary text-base sm:text-lg mb-1">{pm.title}</p>
            <p className="text-gray-500 text-sm sm:text-base">{pm.location}</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Keahlian Utama</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-base sm:text-lg">
            {pm.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Pengalaman Profesional</h3>
          <div className="space-y-6">
            {pm.experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                <div className="min-w-max text-secondary font-semibold text-sm sm:text-base md:text-lg md:pt-1">{exp.year}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-600 text-sm sm:text-base"><span className="font-semibold">Roles:</span> {exp.roles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}