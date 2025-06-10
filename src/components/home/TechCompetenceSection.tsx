import React from 'react';
import { Cpu, Database, ShieldCheck, LayoutDashboard } from 'lucide-react';

const competencies = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Arsitektur Sistem & Pengembangan Solusi',
    description:
      <>Termasuk rancangan sistem <span className="text-secondary font-semibold">Telco & IT</span>, OSS/BSS, serta penerapan <span className="text-secondary font-semibold">AI</span> berbasis Retrieval-Augmented Generation (RAG). Tim kami menguasai pengembangan <span className="text-secondary font-semibold">full-stack</span> menggunakan <span className="text-secondary font-semibold">Java</span>, <span className="text-secondary font-semibold">Kotlin</span>, <span className="text-secondary font-semibold">Python</span>, <span className="text-secondary font-semibold">Go</span>, <span className="text-secondary font-semibold">Node.js</span>, serta pengembangan antarmuka modern dengan <span className="text-secondary font-semibold">React Native</span>, <span className="text-secondary font-semibold">Flutter</span>, dan berbagai framework frontend.</>,
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Basis Data & Infrastruktur',
    description:
      <>Mencakup pengelolaan <span className="text-secondary font-semibold">database relasional</span> dan <span className="text-secondary font-semibold">graph</span> (Oracle, PostgreSQL, Neo4j), pemanfaatan <span className="text-secondary font-semibold">cloud</span> dan <span className="text-secondary font-semibold">vector database</span> seperti <span className="text-secondary font-semibold">Supabase</span> dan <span className="text-secondary font-semibold">Pinecone</span>, serta dukungan server dan storage berbasis <span className="text-secondary font-semibold">Linux</span>, <span className="text-secondary font-semibold">NGINX</span>, dan <span className="text-secondary font-semibold">MinIO</span>. Untuk kebutuhan spasial, kami menggunakan <span className="text-secondary font-semibold">GeoServer</span>.</>,
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'DevOps & Keamanan Sistem',
    description:
      <>Meliputi manajemen server <span className="text-secondary font-semibold">Linux</span>, scripting, penggunaan <span className="text-secondary font-semibold">container (Docker)</span>, orkestrasi (<span className="text-secondary font-semibold">Kafka</span>), serta pipeline <span className="text-secondary font-semibold">CI/CD</span> dengan <span className="text-secondary font-semibold">GitLab</span>, <span className="text-secondary font-semibold">Jenkins</span>, dan metodologi <span className="text-secondary font-semibold">Agile</span>. Keamanan sistem dijaga melalui standar <span className="text-secondary font-semibold">OWASP</span>, enkripsi <span className="text-secondary font-semibold">SSL/TLS</span>, dan protokol aman seperti <span className="text-secondary font-semibold">SSH</span> dan <span className="text-secondary font-semibold">SFTP</span>.</>,
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: 'Desain & Antarmuka Pengguna',
    description:
      <>Difokuskan pada pengembangan <span className="text-secondary font-semibold">UI/UX</span> menggunakan <span className="text-secondary font-semibold">Figma</span> dan pengembangan aplikasi mobile lintas platform berbasis <span className="text-secondary font-semibold">AI</span> dengan <span className="text-secondary font-semibold">Flutter</span> dan <span className="text-secondary font-semibold">React Native</span>.</>,
  },
];

const TechCompetenceSection: React.FC = () => {
  return (
    <section className="section bg-gray-50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 mb-4 text-center">
          TEKNOLOGI DAN <span className="text-secondary">KOMPETENSI INTI</span>
        </h2>
        <p className="text-neutral-700 mb-10 max-w-2xl mx-auto text-center text-base md:text-lg">
          <span className="text-secondary font-semibold">AITISERVE</span> mengandalkan beragam <span className="text-secondary font-semibold">teknologi</span> terdepan untuk menghadirkan <span className="text-secondary font-semibold">solusi digital</span> yang tangguh, efisien, dan adaptif terhadap kebutuhan <span className="text-secondary font-semibold">industri</span>. Dengan pendekatan berbasis <span className="text-secondary font-semibold">AI</span> dan <span className="text-secondary font-semibold">IT modern</span>, berikut adalah <span className="text-secondary font-semibold">ekosistem teknologi</span> yang mendukung <span className="text-secondary font-semibold">layanan</span> kami:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {competencies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.035] hover:border-secondary/60 focus-within:shadow-lg focus-within:scale-[1.035] focus-within:border-secondary/60 items-center text-center"
              tabIndex={0}
            >
              <div className="bg-secondary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <div className="text-secondary">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCompetenceSection; 