import React from 'react';
import { User } from 'lucide-react';

const profile = {
  name: 'CHAERRY',
  title: 'Solution Architect | IT & Telecommunications Expert',
  location: 'Bandung, Indonesia',
  image: '/images/directur.png', // Ganti dengan path foto profil
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

const PortfolioSection: React.FC = () => {
  return (
    <section className="section bg-gray-50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 mb-4 text-center">
          PORTOFOLIO <span className="text-secondary">DIREKSI</span>
        </h2>
        <p className="text-neutral-700 mb-10 max-w-2xl mx-auto text-center text-base md:text-lg">
          <span className="text-secondary font-semibold">AITISERVE</span> dibangun oleh para profesional berpengalaman dengan keahlian mendalam di bidang <span className="text-secondary font-semibold">teknologi</span>. Dengan pemahaman kuat terhadap kebutuhan <span className="text-secondary font-semibold">industri</span>, kami hadir sebagai mitra terpercaya dalam menyediakan <span className="text-secondary font-semibold">solusi digital</span> yang inovatif dan berdampak.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Kiri: Card Profil */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center shadow-sm">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-40 object-cover rounded-lg mb-4 border"
            />
            <div className="text-xl font-bold text-neutral-900 mb-1">{profile.name}</div>
            <div className="text-neutral-700 text-sm mb-2 text-center">{profile.title}</div>
            <div className="text-secondary text-sm font-medium">{profile.location}</div>
          </div>
          {/* Kanan: Ringkasan & Keahlian */}
          <div className="flex flex-col gap-8">
            {/* Ringkasan Profesional */}
            <div>
              <div className="flex items-center mb-2">
                <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-2" />
                <span className="font-bold text-neutral-800 text-lg">Ringkasan Profesional</span>
              </div>
              <div className="text-neutral-700 text-base md:text-lg pl-6">{summary}</div>
            </div>
            {/* Keahlian Utama */}
            <div>
              <div className="flex items-center mb-2">
                <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-2" />
                <span className="font-bold text-neutral-800 text-lg">Keahlian Utama</span>
              </div>
              <ul className="list-disc pl-10 text-neutral-700 text-base md:text-lg space-y-1">
                {skills.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;