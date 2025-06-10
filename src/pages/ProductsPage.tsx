import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CtaSection from '../components/home/CtaSection';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    // Update page title
    document.title = 'Products - AITI Solutions';
  }, []);
  
  const products: Product[] = [
    {
      id: 'erp',
      title: t('products.erpTitle'),
      description: t('products.erpDescription'),
      features: [
        t('products.erpFeature1'),
        t('products.erpFeature2'),
        t('products.erpFeature3'),
        t('products.erpFeature4'),
        t('products.erpFeature5'),
        t('products.erpFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'crm',
      title: t('products.crmTitle'),
      description: t('products.crmDescription'),
      features: [
        t('products.crmFeature1'),
        t('products.crmFeature2'),
        t('products.crmFeature3'),
        t('products.crmFeature4'),
        t('products.crmFeature5'),
        t('products.crmFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'project',
      title: t('products.projectTitle'),
      description: t('products.projectDescription'),
      features: [
        t('products.projectFeature1'),
        t('products.projectFeature2'),
        t('products.projectFeature3'),
        t('products.projectFeature4'),
        t('products.projectFeature5'),
        t('products.projectFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'hr',
      title: t('products.hrTitle'),
      description: t('products.hrDescription'),
      features: [
        t('products.hrFeature1'),
        t('products.hrFeature2'),
        t('products.hrFeature3'),
        t('products.hrFeature4'),
        t('products.hrFeature5'),
        t('products.hrFeature6')
      ],
      image: '/images/imagehere.png'
    }
  ];
  
  return (
    <>
      
      {/* Products */}
      <section className="py-24 bg-gray-50 min-h-screen relative overflow-hidden">
        {/* Decorative Gradient Header */}
        <div className="container mx-auto px-6 scrollbar-none relative z-10">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center justify-center relative">
            {/* Blurred Gradient Background - larger and more offset */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
              <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
            </div>
            <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
              <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
                Produk & Solusi <span className="text-secondary">AITISERVE</span>
                <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
              </h2>
              <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
                Temukan berbagai produk dan solusi digital inovatif dari <span className='text-secondary font-semibold'>AITISERVE</span> yang dirancang untuk mendukung transformasi bisnis Anda. Kami menghadirkan sistem ERP, CRM, Project Management, HR, dan layanan teknologi lainnya yang adaptif, efisien, dan siap menjawab tantangan era digital.
              </p>
            </div>
          </div>
          <div className="space-y-24">
            {products.map((product, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });
              return (
                <div 
                  key={product.id}
                  ref={ref}
                  id={product.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div 
                    className={
                      `relative z-10 ${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} ` +
                      'transition-all duration-500'
                    }
                    style={{ 
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(40px)',
                    }}
                  >
                    <div className="bg-gradient-to-br from-white via-secondary/10 to-primary/5 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                        {product.title}
                      </h2>
                      <p className="text-neutral-700 mb-8 text-lg font-light">{product.description}</p>
                      <div className="space-y-4 mb-8">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                            <p className="text-neutral-800 text-base md:text-lg font-medium">{feature}</p>
                          </div>
                        ))}
                      </div>
                      <button className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-md hover:bg-secondary hover:text-primary transition-all duration-300">
                        {t('productsPage.learnMoreButton')}
                      </button>
                    </div>
                  </div>
                  <div 
                    className={
                      `relative z-10 ${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'} ` +
                      'transition-all duration-500 flex justify-center'
                    }
                    style={{ 
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(40px)',
                      transitionDelay: '0.2s'
                    }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full max-w-md h-auto rounded-2xl shadow-2xl border-4 border-white bg-white object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ProductsPage;