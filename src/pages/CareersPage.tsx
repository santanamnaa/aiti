import React from 'react';
import { Users, Rocket, Lightbulb, HeartHandshake, PenTool, Code2, FileCode2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CareersPage: React.FC = () => {
  const { t } = useTranslation();

  const positions = [
    {
      icon: <PenTool className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.positions.0.title'),
      desc: t('careersPage.positions.0.desc'),
      mailSubject: 'Apply%20for%20UI%2FUX%20Designer',
    },
    {
      icon: <Code2 className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.positions.1.title'),
      desc: t('careersPage.positions.1.desc'),
      mailSubject: 'Apply%20for%20Frontend%20Developer',
    },
    {
      icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.positions.2.title'),
      desc: t('careersPage.positions.2.desc'),
      mailSubject: 'Apply%20for%20Backend%20Engineer',
    },
    {
      icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.positions.3.title'),
      desc: t('careersPage.positions.3.desc'),
      mailSubject: 'Apply%20for%20AI%2FML%20Engineer',
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.0.title'),
      desc: t('careersPage.benefits.items.0.desc'),
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.1.title'),
      desc: t('careersPage.benefits.items.1.desc'),
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.2.title'),
      desc: t('careersPage.benefits.items.2.desc'),
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.3.title'),
      desc: t('careersPage.benefits.items.3.desc'),
    },
    {
      icon: <PenTool className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.4.title'),
      desc: t('careersPage.benefits.items.4.desc'),
    },
    {
      icon: <Code2 className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.5.title'),
      desc: t('careersPage.benefits.items.5.desc'),
    },
    {
      icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
      title: t('careersPage.benefits.items.6.title'),
      desc: t('careersPage.benefits.items.6.desc'),
    },
  ];
  return (
    <main className="relative bg-white min-h-screen overflow-x-hidden font-poppins">
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-60 pb-12 flex flex-col lg:flex-row gap-16">
        {/* Hero Section */}
        <div className="flex-1">
          {/* Tag */}
          <div className="inline-flex items-center px-6 py-2 border border-[#08C2C1]/30 rounded-xl bg-white mb-6">
            <span className="text-[#08C2C1] font-medium text-lg capitalize">{t('careersPage.hero.tag')}</span>
          </div>
          {/* Title */}
          <div>
            <h1 className="text-[64px] font-medium uppercase text-[#7E7E7E] leading-[96px] mb-4">{t('careersPage.hero.title')}</h1>
            <h1 className="text-[64px] font-bold uppercase text-[#08C2C1] leading-[96px] mb-8">{t('careersPage.hero.titleHighlight')}</h1>
          </div>
          {/* Description */}
          <p className="text-lg font-medium text-[#0E1423] capitalize max-w-2xl mb-8" dangerouslySetInnerHTML={{ __html: t('careersPage.hero.description') }}></p>
        </div>
        {/* Positions Section */}
        <div className="flex-1 flex flex-col items-end">
          <div className="flex flex-col gap-8 w-full max-w-2xl ml-auto">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start bg-white/90 rounded-3xl p-8 border border-[#08C2C1]/30 hover:border-transparent transition-all backdrop-blur-md"
              >
                <div className="w-16 h-16 flex items-center justify-center">{pos.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold uppercase text-[#08C2C1] mb-2">{pos.title}</h3>
                  <p className="text-base font-medium text-[#0E1423] capitalize mb-4">{pos.desc}</p>
                  <a
                    href={`mailto:hr@aitiserve.com?subject=${pos.mailSubject}`}
                    className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-[#08C2C1] text-white font-medium text-lg capitalize shadow hover:bg-[#0E1423] transition-all duration-300"
                  >
                    {t(`careersPage.positions.${idx}.apply`)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-[64px] font-medium uppercase text-[#7E7E7E] leading-[96px] mb-4">{t('careersPage.benefits.title')}</h2>
          <h2 className="text-[64px] font-bold uppercase text-[#08C2C1] leading-[96px] mb-8">{t('careersPage.benefits.titleHighlight')}</h2>
          <p className="text-lg font-medium text-[#0E1423] capitalize max-w-3xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: t('careersPage.benefits.description') }}></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/90 rounded-3xl p-8 border border-transparent backdrop-blur-md shadow-md h-full"
            >
              <div className="mb-4">{item.icon}</div>
              <div className="font-bold text-xl uppercase text-[#08C2C1] mb-2 text-center">{item.title}</div>
              <div className="text-[#0E1423] text-base font-medium text-center capitalize">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Come Join Us Section
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#08C2C1] mb-4 uppercase">Come Join Us!</h3>
        <p className="text-lg md:text-xl text-[#0E1423] mb-6 font-light">
          Tidak menemukan posisi yang cocok? <span className="text-[#08C2C1] font-semibold">AITISERVE</span> selalu mencari talenta yang passionate, kreatif, dan ingin bertumbuh bersama kami.<br />
          Ceritakan keunikan dan impianmu, serta bagaimana kamu ingin berkontribusi di dunia teknologi!
        </p>
        <a
          href="mailto:hr@aitiserve.com"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#08C2C1] via-[#0E1423] to-[#08C2C1] text-white font-semibold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Kirim CV & Cerita Kamu
        </a>
      </div> */}
    </main>
  );
};

export default CareersPage;
