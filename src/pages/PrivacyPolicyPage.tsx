import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-md py-24 px-4">
      <div className="max-w-3xl mx-auto py-24">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">{t('privacy.title')}</h1>
          <p className="mb-8 text-lg text-gray-700">{t('privacy.lastUpdated')}</p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section1.title')}</h2>
            <p className="text-gray-700">{t('privacy.section1.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section2.title')}</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>{t('privacy.section2.items.0')}</li>
              <li>{t('privacy.section2.items.1')}</li>
              <li>{t('privacy.section2.items.2')}</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section3.title')}</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>{t('privacy.section3.items.0')}</li>
              <li>{t('privacy.section3.items.1')}</li>
              <li>{t('privacy.section3.items.2')}</li>
              <li>{t('privacy.section3.items.3')}</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section4.title')}</h2>
            <p className="text-gray-700">{t('privacy.section4.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section5.title')}</h2>
            <p className="text-gray-700">{t('privacy.section5.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section6.title')}</h2>
            <p className="text-gray-700">{t('privacy.section6.content')} <a href={`mailto:${t('privacy.section6.email')}`} className="text-secondary underline">{t('privacy.section6.email')}</a>.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section7.title')}</h2>
            <p className="text-gray-700">{t('privacy.section7.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t('privacy.section8.title')}</h2>
            <p className="text-gray-700">{t('privacy.section8.content')} <a href={`mailto:${t('privacy.section8.email')}`} className="text-secondary underline">{t('privacy.section8.email')}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 