import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Lincoln Curtis',
    role: 'Solution Architect | IT & Telecommunications Expert',
    image: '/images/figma/team1.png',
    summary: 'Seorang Solution Architect berpengalaman dengan lebih dari 20 tahun kiprah di bidang teknologi informasi dan telekomunikasi. Memiliki spesialisasi dalam merancang dan mengimplementasikan solusi berskala enterprise, modernisasi sistem legacy, serta transformasi digital berbasis AI dan sistem terdistribusi. Menguasai berbagai bahasa pemrograman dan arsitektur sistem modern dengan fokus pada efisiensi, skalabilitas, dan keberlanjutan.',
    skills: [
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
    ],
    experience: [
      {
        year: '2018 - 2023',
        company: 'PT. Exalogic Integrasi Communication — Solution Architect',
        location: 'Bandung, Indonesia',
      },
      {
        year: '2016 - 2018',
        company: 'PT. Telkomsigma (Telkom Group) — Solution Architect',
        location: 'Bandung, Indonesia',
      },
      {
        year: '2012 - 2015',
        company: 'Clarity OSS / Synchronoss Technologies — Oracle & Java Developer / Business Analyst',
        location: 'Indonesia',
      },
      {
        year: '2009 - 2012',
        company: 'Sansaine Exindo — Java & OSS Developer',
        location: 'Indonesia',
      },
      {
        year: '2005 - 2009',
        company: 'PT. Jasindo Abadi Utama — C# & GIS Developer',
        location: 'Indonesia',
      },
    ],
  },
  {
    name: 'Kaiya Korsgaard',
    role: 'Product Manager',
    image: '/images/figma/team2.png',
  },
  {
    name: 'Rayna Bator',
    role: 'Product Designer',
    image: '/images/figma/team3.png',
  },
  {
    name: 'Corey Culhane',
    role: 'Senior Engineer',
    image: '/images/figma/team4.png',
  },
];

const ArrowDown = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const PortfolioPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState(0);

  // Only render if teamMembers[0] exists
  if (!teamMembers[0]) return null;

  const accordionData = [
    {
      title: 'Ringkasan Professional',
      content: teamMembers[0].summary,
    },
    {
      title: 'Keahlian Utama',
      content: (
        <ul className="list-disc pl-6 text-[#0E1423] text-[16px] space-y-1">
          {teamMembers[0].skills && teamMembers[0].skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Professional Experience',
      content: (
        <div className="flex flex-col gap-4">
          {teamMembers[0].experience && teamMembers[0].experience.map((exp, i) => (
            <div key={i} className="flex flex-row gap-6 items-center">
              <span className="text-[#08C2C1] font-semibold w-32">{exp.year}</span>
              <span className="text-[#0E1423] font-medium flex-1">{exp.company}</span>
              <span className="text-[#7E7E7E] w-40">{exp.location}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-poppins">
      {/* Section Title */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <div className="flex flex-col items-center w-full max-w-[920px] mb-8">
          <h2 className="text-[44px] font-medium text-[#7E7E7E] uppercase text-center leading-[1.1] tracking-[-0.02em] mb-[-8px]" style={{textShadow:'0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>ideas that</h2>
          <h2 className="text-[44px] font-semibold text-[#08C2C1] uppercase text-center leading-[1.1] tracking-[-0.02em]" style={{textShadow:'0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>Turned Into Impact</h2>
        </div>
        <p className="text-[16px] md:text-[18px] font-medium text-[#0E1423] text-center leading-[2] capitalize max-w-[920px] mb-12">
          We design and build digital products that solve real problems. See how our solutions are helping businesses grow, scale, and lead in their industries.
        </p>
        {/* Main Content: 2 columns on desktop, stacked on mobile */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center">
          {/* Left: Team Card */}
          <div className="flex-1 max-w-[448px] w-full bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center p-0 min-h-[400px] mx-auto border border-[#08C2C1]/20 relative">
            <img src={teamMembers[0].image} alt={teamMembers[0].name} className="h-[300px] w-full object-cover rounded-t-[24px]" />
            <div className="w-full bg-gradient-to-t from-[#0E1423] to-transparent p-6 flex flex-col items-start absolute bottom-0 left-0" style={{height: 120}}>
              <div className="text-[32px] font-bold text-[#08C2C1] leading-[48px] capitalize drop-shadow-lg">{teamMembers[0].name}</div>
              <div className="text-white text-[16px] font-medium leading-[24px] capitalize drop-shadow">{teamMembers[0].role}</div>
            </div>
          </div>
          {/* Right: Accordion */}
          <div className="flex-1 w-full max-w-[600px] flex flex-col gap-6">
            {accordionData.map((item, idx) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md border border-[#08C2C1]/10 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 focus:outline-none group"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="text-[18px] font-semibold text-[#08C2C1] group-hover:text-[#0E1423] transition-colors">{item.title}</span>
                  <span className="ml-2 text-[#08C2C1]">
                    <ArrowDown open={openIdx === idx} />
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 px-6 ${openIdx === idx ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'} overflow-hidden`}
                >
                  <div className="text-[#0E1423] text-[16px]">
                    {typeof item.content === 'string' ? <span>{item.content}</span> : item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Other Team Members */}
      <section className="w-full flex flex-col items-center pb-16 px-4">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.slice(1).map((member) => (
            <div key={member.name} className="relative bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center p-0 min-h-[300px] border border-[#08C2C1]/20">
              <img src={member.image} alt={member.name} className="h-[300px] w-full object-cover rounded-t-[24px]" />
              <div className="w-full bg-gradient-to-t from-[#0E1423] to-transparent p-6 flex flex-col items-start" style={{height: 100}}>
                <div className="text-[24px] font-bold text-[#08C2C1] leading-[36px] capitalize drop-shadow-lg">{member.name}</div>
                <div className="text-white text-[16px] font-medium leading-[24px] capitalize drop-shadow">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
