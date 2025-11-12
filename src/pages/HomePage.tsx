import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaBrain, FaDesktop, FaMobileAlt, FaLaptop, FaMapMarkedAlt, FaHeadphones } from "react-icons/fa";
import { getBlogPosts } from '../utils/blogData';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  // Get blog posts data (same as BlogPage)
  const blogPosts = getBlogPosts(t);
  // Show only first 4 posts on homepage
  const displayedBlogPosts = blogPosts.slice(0, 4);

  const solutions = [
    {
      icon: <FaBrain size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.0.title'),
      desc: t('home.solutions.items.0.desc'),
    },
    {
      icon: <FaDesktop size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.1.title'),
      desc: t('home.solutions.items.1.desc'),
    },
    {
      icon: <FaMobileAlt size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.2.title'),
      desc: t('home.solutions.items.2.desc'),
    },
    {
      icon: <FaLaptop size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.3.title'),
      desc: t('home.solutions.items.3.desc'),
    },
    {
      icon: <FaMapMarkedAlt size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.4.title'),
      desc: t('home.solutions.items.4.desc'),
    },
    {
      icon: <FaHeadphones size={36} className="text-[#08C2C1]" />,
      title: t('home.solutions.items.5.title'),
      desc: t('home.solutions.items.5.desc'),
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#12192C] to-[#0A0E18] min-h-screen font-poppins">
      {/* HERO + OUR SOLUTIONS SECTION - Figma Presisi */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[900px] flex flex-col items-start justify-start overflow-hidden px-4 sm:px-6 md:px-10 pt-32 pb-16" >
        {/* Background utama (foto VR) */}
        <img src="/images/figma/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        {/* Konten utama HERO */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-0" style={{height: 'calc(50vh + 100px)', minHeight: 300}}>
          <h1 className="text-white text-[32px] sm:text-[44px] md:text-[80px] font-extrabold uppercase tracking-tight text-left leading-[1.08] mb-4" style={{letterSpacing: '-0.04em'}}>
            {t('home.hero.title')}<br />
            <span className="text-[#08C2C1]">{t('home.hero.titleHighlight')}</span>
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] font-normal text-left max-w-xl sm:max-w-2xl mb-8 leading-snug md:leading-normal">
            {t('home.hero.subtitle')}
          </p>
          <a href="#solutions" className="inline-flex items-center bg-[#08C2C1] text-white hover:bg-[#0E1423] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-[16px] sm:text-[18px] font-medium shadow-md hover:shadow-lg transition-all duration-200">
            {t('home.hero.cta')}
            <span className="ml-2 text-[20px] sm:text-[22px]">→</span>
          </a>
        </div>
        {/* OUR SOLUTIONS - Overlap Card */}
        <div className="relative z-20 w-full mx-auto px-2 sm:px-4 md:px-0 -mt-10 sm:-mt-16" id="solutions">
          <div className="flex flex-col md:flex-row items-end gap-8 lg:gap-16">
            {/* Judul kiri, rata bawah dengan card pertama */}
            <div className="flex flex-col w-[200px] self-end pb-10 md:pb-24 mb-4 md:mb-0 ml-20 sm:ml-22 md:ml-24 lg:ml-28">
              <span className="text-white text-[18px] sm:text-[22px] font-bold uppercase tracking-widest mb-1">{t('home.solutions.our')}</span>
              <span className="text-[#08C2C1] text-[32px] sm:text-[40px] font-bold uppercase leading-tight">{t('home.solutions.title')}</span>
            </div>
            {/* Card-card solutions */}
            <div
              className="flex-1 flex gap-8 overflow-x-auto pb-2 hide-scrollbar"
              ref={solutionsRef}
              style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex-shrink-0 min-w-[260px] sm:min-w-[300px] md:min-w-[320px] max-w-[340px] bg-gradient-to-br from-[#0A1A2F]/80 to-[#0A1A2F]/60 border border-[#08C2C1]/30 rounded-[18px] p-4 sm:p-6 shadow-lg backdrop-blur-md flex flex-col gap-2 sm:gap-3"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="mb-4 flex justify-center w-full">{item.icon}</div>
                  <div className="text-[16px] sm:text-[18px] font-bold text-[#08C2C1] mb-1 uppercase leading-tight text-center w-full">{item.title}</div>
                  <div className="text-white text-[14px] sm:text-[15px] font-medium leading-relaxed text-center w-full">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* BRIGHTER FUTURE SECTION - Figma Presisi */}
      <section className="relative flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 py-16 bg-[#F8FAFC]" style={{minHeight: 332}}>
        <div className="flex flex-col items-center gap-8 max-w-[920px] w-full">
          <div className="flex flex-col items-center w-full max-w-[540px] mb-4">
            <span className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-medium text-[#7E7E7E] uppercase text-center leading-[1.1] tracking-[-0.02em] mb-2" style={{textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>{t('home.brighterFuture.title')}</span>
            <span className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-semibold text-[#08C2C1] uppercase text-center leading-[1.1] tracking-[-0.02em] mb-4" style={{textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>{t('home.brighterFuture.titleHighlight')}</span>
          </div>
          <div className="w-full max-w-[920px] text-[16px] md:text-[18px] font-medium text-[#0E1423] text-center leading-[2] capitalize mb-4" style={{minHeight: 64}}>
            {t('home.brighterFuture.description')}
          </div>
        </div>
      </section>
      {/* TECHNOLOGY & CORE COMPETENCIES - Figma Presisi */}
      <section className="w-full py-16 bg-[#F8FAFC] px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 px-0">
          {/* KIRI: Judul dan deskripsi, sticky di desktop, lebar fix 360px */}
          <div className="md:w-[360px] w-full flex-shrink-0 flex flex-col justify-start md:sticky md:top-32 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-[#7E7E7E] text-[24px] sm:text-[32px] md:text-[44px] font-medium uppercase tracking-tight mb-2 leading-tight" style={{letterSpacing: '-0.02em'}}>{t('home.tech.title')}</h2>
            <h2 className="text-[#08C2C1] text-[24px] sm:text-[32px] md:text-[44px] font-semibold uppercase tracking-tight mb-8 leading-tight" style={{letterSpacing: '-0.02em'}}>{t('home.tech.titleHighlight')}</h2>
            <p className="text-[#12192C] text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-xs md:max-w-none">{t('home.tech.description')}</p>
          </div>
          {/* KANAN: Card scrollable vertical, tinggi fix 520px, gap sesuai Figma */}
          <div className="flex-1 max-h-[420px] sm:max-h-[520px] overflow-y-auto hide-scrollbar flex flex-col gap-8 pb-2 md:pb-0 pr-1 sm:pr-2">
            <div className="flex flex-col gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-1.svg" alt="Tech 1" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>{t('home.tech.competencies.0.title')}</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">{t('home.tech.competencies.0.description')}</div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-2.svg" alt="Tech 2" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>{t('home.tech.competencies.1.title')}</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">{t('home.tech.competencies.1.description')}</div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-3.svg" alt="Tech 3" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>{t('home.tech.competencies.2.title')}</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">{t('home.tech.competencies.2.description')}</div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-4.svg" alt="Tech 4" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>{t('home.tech.competencies.3.title')}</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">{t('home.tech.competencies.3.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM/PORTFOLIO */}
      <section className="w-full py-16 bg-[#F8FAFC] px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-[1200px] mx-auto px-0 flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-[657px] mb-4">
            <h2
              className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-medium uppercase text-[#7E7E7E] text-center leading-[1.1] tracking-[-0.02em] mb-2"
              style={{
                textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('home.portfolio.title')}
            </h2>
            <h2
              className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-semibold uppercase text-[#08C2C1] text-center leading-[1.1] tracking-[-0.02em] mb-8"
              style={{
                textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('home.portfolio.titleHighlight')}
            </h2>
          </div>
          <div className="w-full max-w-[920px] text-[16px] md:text-[18px] font-medium text-[#0E1423] text-center leading-relaxed mb-8">
            {t('home.portfolio.description')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[920px] w-full mb-8">
            {/* Direksi Card */}
            <Link to="/portfolio" className="bg-white rounded-xl shadow-lg border border-[#E5E7EB] p-6 sm:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-[#08C2C1] transition-all duration-300 group">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#08C2C1] text-[20px] sm:text-[24px] font-bold uppercase">{t('home.portfolio.direksi.label')}</h3>
                <div className="text-[#12192C] text-[18px] sm:text-[22px] font-semibold">{t('home.portfolio.direksi.name')}</div>
                <div className="text-[#08C2C1] text-[14px] sm:text-[16px] font-medium">{t('home.portfolio.direksi.title')}</div>
                <div className="text-[#7E7E7E] text-[13px] sm:text-[14px]">{t('home.portfolio.direksi.location')}</div>
              </div>
              <div className="border-t border-[#E5E7EB] my-2"></div>
              <p className="text-[#0E1423] text-[14px] sm:text-[15px] leading-relaxed line-clamp-4">
                {t('home.portfolio.direksi.summary')}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.direksi.skills.0')}</span>
                <span className="text-[#7E7E7E]">•</span>
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.direksi.skills.1')}</span>
                <span className="text-[#7E7E7E]">•</span>
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.direksi.skills.2')}</span>
              </div>
              <div className="mt-4 text-[#08C2C1] text-[14px] sm:text-[15px] font-medium group-hover:underline">
                {t('home.portfolio.direksi.viewDetail')} →
              </div>
            </Link>
            {/* Project Manager Card */}
            <Link to="/portfolio" className="bg-white rounded-xl shadow-lg border border-[#E5E7EB] p-6 sm:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-[#08C2C1] transition-all duration-300 group">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#08C2C1] text-[20px] sm:text-[24px] font-bold uppercase">{t('home.portfolio.pm.label')}</h3>
                <div className="text-[#12192C] text-[18px] sm:text-[22px] font-semibold">{t('home.portfolio.pm.name')}</div>
                <div className="text-[#08C2C1] text-[14px] sm:text-[16px] font-medium">{t('home.portfolio.pm.title')}</div>
                <div className="text-[#7E7E7E] text-[13px] sm:text-[14px]">{t('home.portfolio.pm.location')}</div>
              </div>
              <div className="border-t border-[#E5E7EB] my-2"></div>
              <p className="text-[#0E1423] text-[14px] sm:text-[15px] leading-relaxed">
                {t('home.portfolio.pm.summary')}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.pm.skills.0')}</span>
                <span className="text-[#7E7E7E]">•</span>
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.pm.skills.1')}</span>
                <span className="text-[#7E7E7E]">•</span>
                <span className="text-[#08C2C1] text-[12px] sm:text-[13px] font-medium">{t('home.portfolio.pm.skills.2')}</span>
              </div>
              <div className="mt-4 text-[#08C2C1] text-[14px] sm:text-[15px] font-medium group-hover:underline">
                {t('home.portfolio.pm.viewDetail')} →
              </div>
            </Link>
          </div>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center bg-[#08C2C1] text-white hover:bg-[#0E1423] px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-[16px] sm:text-[18px] font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            {t('home.portfolio.viewFull')}
            <span className="ml-2 text-[20px] sm:text-[22px]">→</span>
          </Link>
        </div>
      </section>
      {/* BLOG/INSIGHTS */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#F8FAFC] gap-[50px] px-4 sm:px-6 md:px-10">
        {/* Title and Description Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-0 gap-[40px] md:gap-[100px] mb-8">
          {/* Title */}
          <div className="flex flex-col justify-center items-start w-full md:w-[595px] h-auto md:h-[180px]">
            <span
              className="text-[#7E7E7E] font-poppins font-medium uppercase text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-2"
              style={{ textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)' }}
            >
              {t('home.blog.title')}
            </span>
            <span
              className="text-[#08C2C1] font-poppins font-semibold uppercase text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-8"
              style={{ textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)' }}
            >
              {t('home.blog.titleHighlight')}
            </span>
          </div>
          {/* Description */}
          <div className="w-full md:w-[697px] min-h-[48px] flex items-center">
            <span className="font-poppins font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[32px] text-[#0E1423] capitalize">
              {t('home.blog.description')}
            </span>
          </div>
        </div>
        {/* Blog Cards Row - Using same structure as BlogPage */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-0">
          {displayedBlogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden w-full max-w-[448px] h-[497px] mx-auto cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-2 hover:border-[#08C2C1]"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="w-full h-[240px] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-0">
                <h3 className="text-[24px] font-bold uppercase text-[#08C2C1] mb-2 leading-[41px] line-clamp-2 overflow-hidden text-ellipsis">{post.title}</h3>
                <p className="text-[#0E1423] font-medium text-[16px] mb-2 capitalize leading-[29px] line-clamp-3 overflow-hidden text-ellipsis">{post.description}</p>
                <span className="text-[#7E7E7E] text-[16px] font-medium mt-auto capitalize leading-[32px]">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Link to full blog page */}
        <div className="flex justify-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center bg-[#08C2C1] text-white hover:bg-[#0E1423] px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-[16px] sm:text-[18px] font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            {t('home.blog.viewAll') || 'Lihat Semua Blog'}
            <span className="ml-2 text-[20px] sm:text-[22px]">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
