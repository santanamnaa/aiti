import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      id: 'summary',
      label: t('aboutPage.sections.summary.label'),
      content: (
        <div className="space-y-4">
          <p>
            <b>{t('aboutPage.sections.summary.content.0')}</b>
          </p>
          <p>
            {t('aboutPage.sections.summary.content.1')}
          </p>
          <p>
            {t('aboutPage.sections.summary.content.2')}
          </p>
        </div>
      ),
    },
    {
      id: 'vision-mission',
      label: t('aboutPage.sections.visionMission.label'),
      content: (
        <div className="space-y-4">
          <div>
            <span className="block text-[#08C2C1] font-semibold mb-1">{t('aboutPage.sections.visionMission.vision')}</span>
            <p>
              {t('aboutPage.sections.visionMission.visionText')}
            </p>
          </div>
          <div>
            <span className="block text-[#08C2C1] font-semibold mb-1">{t('aboutPage.sections.visionMission.mission')}</span>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t('aboutPage.sections.visionMission.mission.0')}</li>
              <li>{t('aboutPage.sections.visionMission.mission.1')}</li>
              <li>{t('aboutPage.sections.visionMission.mission.2')}</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'company-values',
      label: t('aboutPage.sections.values.label'),
      content: (
        <div className="flex flex-col gap-4">
          {[
            {
              letter: 'T',
              title: t('aboutPage.sections.values.T.title'),
              desc: t('aboutPage.sections.values.T.desc'),
            },
            {
              letter: 'A',
              title: t('aboutPage.sections.values.A.title'),
              desc: t('aboutPage.sections.values.A.desc'),
            },
            {
              letter: 'N',
              title: t('aboutPage.sections.values.N.title'),
              desc: t('aboutPage.sections.values.N.desc'),
            },
            {
              letter: 'G',
              title: t('aboutPage.sections.values.G1.title'),
              desc: t('aboutPage.sections.values.G1.desc'),
            },
            {
              letter: 'G',
              title: t('aboutPage.sections.values.G2.title'),
              desc: t('aboutPage.sections.values.G2.desc'),
            },
            {
              letter: 'U',
              title: t('aboutPage.sections.values.U.title'),
              desc: t('aboutPage.sections.values.U.desc'),
            },
            {
              letter: 'H',
              title: t('aboutPage.sections.values.H.title'),
              desc: t('aboutPage.sections.values.H.desc'),
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
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-60 pb-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Nav */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div>
              <span className="block text-[40px] md:text-[48px] font-medium uppercase text-[#7E7E7E] font-poppins leading-[1.1] mb-4">{t('aboutPage.title')}</span>
              <span className="block text-[40px] md:text-[48px] font-bold uppercase text-[#08C2C1] font-poppins leading-[1.1] mb-8">{t('aboutPage.titleHighlight')}</span>
            </div>
            <p className="text-[#0E1423] text-base md:text-lg font-poppins max-w-xs mb-8">
              {t('aboutPage.description')}
            </p>
            <div className="flex flex-col gap-2">
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
