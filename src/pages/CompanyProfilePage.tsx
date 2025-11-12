import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const CompanyProfilePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('companyProfile.hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('companyProfile.hero.companyName')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">{t('companyProfile.documentInfo.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-neutral mb-2">{t('companyProfile.documentInfo.version')}</p>
                  <p className="text-neutral mb-2">{t('companyProfile.documentInfo.status')}</p>
                  <p className="text-neutral mb-2">{t('companyProfile.documentInfo.author')}</p>
                </div>
                <div>
                  <p className="text-neutral mb-2">{t('companyProfile.documentInfo.datePublished')}</p>
                  <p className="text-neutral mb-2">{t('companyProfile.documentInfo.fileName')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title={t('companyProfile.copyright.title')}
              centered={false}
            />
            <div className="prose prose-lg">
              <p className="text-neutral mb-6">
                {t('companyProfile.copyright.text')}
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">{t('companyProfile.copyright.confidentiality.title')}</h3>
              <p className="text-neutral mb-6">
                {t('companyProfile.copyright.confidentiality.text')}
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">{t('companyProfile.copyright.confidentiality.subtitle')}</h3>
              <p className="text-neutral">
                {t('companyProfile.copyright.confidentiality.detail')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title={t('companyProfile.toc.title')}
              centered={false}
            />
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-secondary mr-4">i.</span>
                <span className="text-neutral">{t('companyProfile.toc.items.0')}</span>
                <span className="border-b border-dotted border-gray-300 flex-1 mx-4"></span>
                <span className="text-neutral">2</span>
              </div>
              <div className="flex items-center">
                <span className="text-secondary mr-4">ii.</span>
                <span className="text-neutral">{t('companyProfile.toc.items.1')}</span>
                <span className="border-b border-dotted border-gray-300 flex-1 mx-4"></span>
                <span className="text-neutral">2</span>
              </div>
              {/* Add more table of contents items */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfilePage;