import React, { useState } from 'react';

const sections = [
  {
    id: 'summary',
    label: 'Summary',
    content: (
      <div className="space-y-4">
        <p>
          <b>PT AITISERVE DJAYA NARAYA (AITISERVE)</b> is a technology company established on August 27, 2024, in Bandung, Indonesia. As a legally registered limited liability company, AITISERVE was founded with a vision to integrate Artificial Intelligence (AI) and Information Technology (IT) to deliver adaptive, efficient, and impactful digital solutions.
        </p>
        <p>
          AITISERVE specializes in software development and digital platform services, including programming, web portal management, as well as IT consulting and technical support. Our expertise spans AI-powered web and mobile applications, geographic information systems (GIS), and desktop solutions tailored to various business sectors and organizations.
        </p>
        <p>
          The name "AITISERVE DJAYA NARAYA" reflects our core values—synergy between intelligence, technology, and service—symbolizing innovation, progress, and sustainability as the foundation for shaping a smarter and more meaningful digital future.
        </p>
      </div>
    ),
  },
  {
    id: 'vision-mission',
    label: 'Vision And Mission',
    content: (
      <div className="space-y-4">
        <div>
          <span className="block text-[#08C2C1] font-semibold mb-1">Vision</span>
          <p>
            To be a trusted partner in superior and innovative digital transformation, as well as a leading technology company that delivers artificial intelligence and information technology-based solutions for a sustainable and impactful future.
          </p>
        </div>
        <div>
          <span className="block text-[#08C2C1] font-semibold mb-1">Mission</span>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delivering efficient, value-added, and future-oriented AI and IT solutions.</li>
            <li>Supporting digital transformation through consulting services, technology implementation, and strategic partnerships.</li>
            <li>Improving the quality of human resources by instilling an innovative culture and sustainable competency development.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'company-values',
    label: 'Company Values',
    content: (
      <div className="flex flex-col gap-4">
        {[
          {
            letter: 'T',
            title: 'Transformasi',
            desc: 'Committed to positive and sustainable change in the face of challenges.',
          },
          {
            letter: 'A',
            title: 'Amanah',
            desc: 'Upholding integrity, responsibility, and trust.',
          },
          {
            letter: 'N',
            title: 'Nyata',
            desc: 'Focusing on concrete, measurable results that provide real impact.',
          },
          {
            letter: 'G',
            title: 'Gigih',
            desc: 'Consistent and resilient in facing challenges and achieving targets.',
          },
          {
            letter: 'G',
            title: 'Gesit',
            desc: 'Adaptive to change, responsive in making decisions.',
          },
          {
            letter: 'U',
            title: 'Unggul',
            desc: 'Results-oriented with high quality standards.',
          },
          {
            letter: 'H',
            title: 'Harmonis',
            desc: 'Establishing good relationships between teams, partners, and all stakeholders.',
          },
        ].map((v, i) => (
          <div key={i} className="flex items-start gap-6">
            <span className="text-[#08C2C1] font-bold text-5xl w-12 text-center font-poppins">{v.letter}</span>
            <div>
              <span className="block font-semibold text-[#08C2C1] text-lg font-poppins">{v.title.toUpperCase()}</span>
              <span className="block text-[#0E1423] text-base font-poppins">{v.desc}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutPage: React.FC = () => {
  // All sections open by default
  const [openSections, setOpenSections] = useState(sections.map(() => true));

  const toggleSection = (idx: number) => {
    setOpenSections((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <section className="min-h-screen bg-white flex flex-col justify-between">
      {/* Header & Nav */}
      <div className="max-w-[1200px] mx-auto w-full pt-32 pb-4 px-6">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left Nav */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div>
              <span className="block text-[40px] md:text-[48px] font-medium uppercase text-[#7E7E7E] font-poppins leading-[1.1]">Shaping a</span>
              <span className="block text-[40px] md:text-[48px] font-bold uppercase text-[#08C2C1] font-poppins leading-[1.1]">Brighter Future</span>
            </div>
            <p className="mt-4 text-[#0E1423] text-base md:text-lg font-poppins max-w-xs">
              We're a team of creators, engineers, and problem-solvers committed to designing technology that moves the world forward—one solution at a time.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  className={`flex items-center gap-2 text-left text-base md:text-lg font-poppins transition-colors ${openSections[i] ? 'text-[#08C2C1] font-semibold' : 'text-[#7E7E7E]'} focus:outline-none`}
                  onClick={() => toggleSection(i)}
                >
                  <span className="text-[#7E7E7E] font-mono w-8">{`0${i + 1}.`}</span>
                  <span className="capitalize">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            {sections.map((s, i) => (
              <div key={s.id} className="mb-2">
                <button
                  className="flex items-center gap-2 w-full text-left group"
                  onClick={() => toggleSection(i)}
                >
                  <span className={`text-lg md:text-xl font-semibold font-poppins capitalize ${openSections[i] ? 'text-[#08C2C1]' : 'text-[#7E7E7E]'}`}>{s.label}</span>
                  <svg className={`ml-2 w-4 h-4 transition-transform ${openSections[i] ? 'rotate-180 text-[#08C2C1]' : 'text-[#7E7E7E]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openSections[i] && (
                  <div className="mt-4 text-[#0E1423] text-base md:text-lg font-poppins border-l-4 border-[#08C2C1] pl-6 py-2 bg-[#F8F9FB] rounded-md animate-fade-in">
                    {s.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
