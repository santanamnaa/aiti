import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Update page title
    document.title = 'Page Not Found - AITI Solutions';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg"> {/* Added padding, background, rounded corners, and shadow */}
        <h1 className="text-9xl font-bold text-secondary">{t('notFound.title')}</h1>
        <h2 className="text-3xl font-semibold text-primary mt-4 mb-6">{t('notFound.heading')}</h2>
        <p className="text-neutral mb-8 max-w-md mx-auto">
          {t('notFound.description')}
        </p>
        <Link
          to="/"
          className="btn btn-primary transition duration-300 ease-in-out hover:bg-primary-darker hover:shadow-md" // Added transition and hover effects
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;