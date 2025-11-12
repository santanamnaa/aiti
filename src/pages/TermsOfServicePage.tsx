import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfServicePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-md py-24 px-4">
      <div className="max-w-3xl mx-auto py-24">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">{t('terms.title')}</h1>
          <p className="mb-8 text-lg text-gray-700">{t('terms.lastUpdated')}</p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section1.title')}</h2>
            <p className="text-gray-700">{t('terms.section1.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section2.title')}</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>{t('terms.section2.items.0')}</li>
              <li>{t('terms.section2.items.1')}</li>
              <li>{t('terms.section2.items.2')}</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section3.title')}</h2>
            <p className="text-gray-700">{t('terms.section3.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section4.title')}</h2>
            <p className="text-gray-700">{t('terms.section4.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section5.title')}</h2>
            <p className="text-gray-700">{t('terms.section5.content')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section6.title')}</h2>
            <p className="text-gray-700">{t('terms.section6.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t('terms.section7.title')}</h2>
            <p className="text-gray-700">{t('terms.section7.content')} <a href={`mailto:${t('terms.section7.email')}`} className="text-secondary underline">{t('terms.section7.email')}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 