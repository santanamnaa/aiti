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

const PortfolioPage: React.FC = () => {
  const [selectedMemberIdx, setSelectedMemberIdx] = useState(0);
  const selectedMember = teamMembers[selectedMemberIdx];

  // Komponen detail berbeda-beda berdasarkan role
  const renderDetailsSection = (member: typeof teamMembers[0]) => {
    switch (member.role) {
      case 'Solution Architect | IT & Telecommunications Expert':
        return (
          <div className="flex-[2] bg-white rounded-[20px] shadow-lg border border-[#E5E7EB] p-8 flex flex-col gap-8">
            {/* Ringkasan Professional */}
            <div>
              <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Ringkasan Professional</div>
              <div className="text-[15px] text-[#222] leading-relaxed">{member.summary}</div>
            </div>
            <div className="border-t border-[#E5E7EB]" />
            {/* Keahlian Utama */}
            <div>
              <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Keahlian Utama</div>
              <ul className="list-disc pl-6 text-[15px] text-[#222] space-y-1">
                {member.skills && member.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[#E5E7EB]" />
            {/* Professional Experience */}
            <div>
              <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Professional Experience</div>
              <div className="flex flex-col gap-2">
                {member.experience && member.experience.map((exp, i) => (
                  <div key={i} className="flex flex-row gap-4 items-center">
                    <span className="text-[#08C2C1] font-semibold w-32">{exp.year}</span>
                    <span className="text-[#222] font-medium flex-1">{exp.company}</span>
                    <span className="text-[#7E7E7E] w-40">{exp.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Product Manager':
        return (
          <div className="flex-[2] bg-white rounded-[20px] shadow-lg border border-[#E5E7EB] p-8 flex flex-col gap-8">
            <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Tentang Product Manager</div>
            <div className="text-[15px] text-[#222] leading-relaxed">Kaiya Korsgaard adalah Product Manager yang berfokus pada pengembangan produk digital inovatif dan kolaborasi tim lintas fungsi untuk mencapai tujuan bisnis.</div>
          </div>
        );
      case 'Product Designer':
        return (
          <div className="flex-[2] bg-white rounded-[20px] shadow-lg border border-[#E5E7EB] p-8 flex flex-col gap-8">
            <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Tentang Product Designer</div>
            <div className="text-[15px] text-[#222] leading-relaxed">Rayna Bator adalah Product Designer yang ahli dalam menciptakan pengalaman pengguna yang menarik dan desain antarmuka yang intuitif.</div>
          </div>
        );
      case 'Senior Engineer':
        return (
          <div className="flex-[2] bg-white rounded-[20px] shadow-lg border border-[#E5E7EB] p-8 flex flex-col gap-8">
            <div className="text-[18px] font-semibold text-[#08C2C1] mb-2">Tentang Senior Engineer</div>
            <div className="text-[15px] text-[#222] leading-relaxed">Corey Culhane adalah Senior Engineer dengan pengalaman luas dalam pengembangan perangkat lunak dan solusi teknologi skala besar.</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen font-poppins">
      {/* Title Section */}
      <section className="w-full flex flex-col items-center pt-32 pb-6 px-4">
        <h2 className="text-[44px] font-medium text-[#7E7E7E] uppercase text-left w-full max-w-[1200px] mb-0" style={{letterSpacing: '-0.02em'}}>IDEAS THAT</h2>
        <h2 className="text-[44px] font-semibold text-[#08C2C1] uppercase text-left w-full max-w-[1200px] mb-6" style={{letterSpacing: '-0.02em'}}>TURNED INTO IMPACT</h2>
        <p className="text-[16px] font-medium text-[#222] text-left w-full max-w-[1200px] mb-10">We Design And Build Digital Products That Solve Real Problems. See How Our Solutions Are Helping Businesses Grow, Scale, And Lead In Their Industries.</p>
        {/* Team Cards Row */}
        <div className="w-full max-w-[1200px] flex flex-row gap-6 mb-12 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-[#08C2C1]/40 scroll-smooth">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className={`flex flex-col justify-end items-start bg-white rounded-[20px] shadow-lg p-4 pt-6 pb-6 w-1/4 min-w-[220px] max-w-[300px] h-[370px] relative border transition-all duration-200 ${selectedMemberIdx === idx ? 'border-[#08C2C1] border-2' : 'border-transparent'}`}
              style={{boxShadow: selectedMemberIdx === idx ? '0 4px 24px 0 rgba(8,194,193,0.10)' : undefined, cursor: 'pointer'}}
              onClick={() => setSelectedMemberIdx(idx)}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-0"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 rounded-[20px] z-5" />
              {/* Card Content */}
              <div className="relative z-10 w-full mt-2">
                <div className={`text-[20px] font-bold leading-tight mb-1 ${selectedMemberIdx === idx ? 'text-[#08C2C1]' : 'text-[#222]'}`}>{member.name}</div>
                <div className={`text-[14px] font-medium ${selectedMemberIdx === idx ? 'text-[#08C2C1]' : 'text-[#7E7E7E]'}`}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Details Section */}
      <section className="w-full flex flex-col items-center pb-16 px-4">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8">
          {/* Left: Circular Image Card */}
          {selectedMember && (
            <div className="flex-1 max-w-[350px] bg-white rounded-[20px] shadow-lg border-2 border-[#08C2C1] flex flex-col items-center py-8 px-6 self-start">
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-[#08C2C1] mb-6">
                <img src={selectedMember.image} alt={selectedMember.name} className="object-cover w-full h-full" />
              </div>
              <div className="text-[22px] font-bold text-[#08C2C1] mb-1 text-center">{selectedMember.name}</div>
              <div className="text-[15px] font-medium text-[#08C2C1] text-center">{selectedMember.role}</div>
            </div>
          )}
          {/* Right: Details Card */}
          {selectedMember && renderDetailsSection(selectedMember)}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
