import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      label: t('servicesPage.items.0.label'),
      title: t('servicesPage.items.0.title'),
      desc1: t('servicesPage.items.0.desc1'),
      desc2: t('servicesPage.items.0.desc2'),
      button: t('servicesPage.items.0.button'),
    },
    {
      id: 2,
      label: t('servicesPage.items.1.label'),
      title: t('servicesPage.items.1.title'),
      desc1: t('servicesPage.items.1.desc1'),
      desc2: t('servicesPage.items.1.desc2'),
      button: t('servicesPage.items.1.button'),
    },
    {
      id: 3,
      label: t('servicesPage.items.2.label'),
      title: t('servicesPage.items.2.title'),
      desc1: t('servicesPage.items.2.desc1'),
      desc2: t('servicesPage.items.2.desc2'),
      button: t('servicesPage.items.2.button'),
    },
    {
      id: 4,
      label: t('servicesPage.items.3.label'),
      title: t('servicesPage.items.3.title'),
      desc1: t('servicesPage.items.3.desc1'),
      desc2: t('servicesPage.items.3.desc2'),
      button: t('servicesPage.items.3.button'),
    },
    {
      id: 5,
      label: t('servicesPage.items.4.label'),
      title: t('servicesPage.items.4.title'),
      desc1: t('servicesPage.items.4.desc1'),
      desc2: t('servicesPage.items.4.desc2'),
      button: t('servicesPage.items.4.button'),
    },
    {
      id: 6,
      label: t('servicesPage.items.5.label'),
      title: t('servicesPage.items.5.title'),
      desc1: t('servicesPage.items.5.desc1'),
      desc2: t('servicesPage.items.5.desc2'),
      button: t('servicesPage.items.5.button'),
    },
  ];
  return (
    <main className="w-full min-h-screen bg-white font-poppins">
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-60 pb-16">
        {/* Section Title */}
        <div className="mb-8 flex flex-col gap-0">
          <span className="text-[64px] leading-[96px] font-medium text-[#7E7E7E] uppercase font-poppins mb-4">{t('servicesPage.title')}</span>
          <span className="text-[64px] leading-[96px] font-semibold text-[#08C2C1] uppercase font-poppins mb-8">{t('servicesPage.titleHighlight')}</span>
          <p className="text-[16px] leading-[32px] font-medium text-[#0E1423] capitalize font-poppins max-w-[920px] mb-8">
            {t('servicesPage.description')}
          </p>
        </div>
        {/* Services List */}
        <div className="w-full flex flex-col items-center gap-0">
          {services.map((service, idx) => (
            <React.Fragment key={service.id}>
              <div
                className={`group w-full max-w-[1200px] h-[140px] bg-white/5 flex flex-row items-start p-8 gap-[480px] mb-0 transition-all duration-300
                            hover:h-[283px] hover:bg-[rgba(8,194,193,0.05)] hover:backdrop-blur-[13px] hover:shadow-lg`}
              >
                {/* Label */}
                <div className="flex flex-col items-start">
                  <span className="w-[24px] h-[27px] text-[18px] leading-[27px] font-medium uppercase text-[#7E7E7E] font-poppins">
                    {service.label}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-6 w-[824px]">
                  <div className="flex flex-col gap-2">
                    <span className="w-[824px] h-[36px] text-[24px] leading-[36px] font-bold uppercase text-[#08C2C1] font-poppins mb-2">
                      {service.title}
                    </span>
                    <span className="w-[824px] h-[32px] text-[16px] leading-[32px] font-medium capitalize text-[#7E7E7E] font-poppins mb-2">
                      {service.desc1}
                    </span>
                    {/* desc2 and button: Only show on hover, with transition */}
                    <span
                      className="w-[824px] h-[64px] text-[16px] leading-[32px] font-medium capitalize text-[#0E1423] font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100 mb-2"
                    >
                      {service.desc2}
                    </span>
                  </div>
                  {/* Button is now always present in data, but its visibility is controlled by hover */}
                  {service.id === 1 ? (
                    <Link
                      to="/services/ITConsultantDetailPage"
                      className="w-[196px] h-[47px] flex justify-center items-center px-6 py-2.5 gap-2 border border-[#08C2C1] rounded-[12px] bg-white text-[#08C2C1] text-[18px] leading-[27px] font-medium capitalize font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    >
                      {service.button}
                    </Link>
                  ) : (
                    <button
                      className="w-[196px] h-[47px] flex justify-center items-center px-6 py-2.5 gap-2 border border-[#08C2C1] rounded-[12px] bg-white text-[#08C2C1] text-[18px] leading-[27px] font-medium capitalize font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100 cursor-not-allowed"
                      disabled
                    >
                      {service.button}
                    </button>
                  )}
                </div>
              </div>
              {/* Divider (skip after last service) */}
              {idx < services.length - 1 && (
                <div className="w-full max-w-[1200px] border-t border-[#7E7E7E] opacity-30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;