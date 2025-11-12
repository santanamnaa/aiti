import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();

  const MENU = [
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.portfolio'), to: '/portfolio' },
    { label: t('nav.blog'), to: '/blog' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.careers'), to: '/career' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Tentukan apakah warna harus putih (home/contact) atau hitam (lainnya) SAAT header transparan
  const isWhiteHeader = location.pathname === '/' || location.pathname === '/contact';

  // Logika warna teks:
  // - Jika header tidak transparan (isScrolled): selalu putih
  // - Jika transparan: putih untuk home/contact, hitam untuk lain
  const navTextColor = isScrolled ? 'text-white' : (isWhiteHeader ? 'text-white' : 'text-black');
  const logoTextColor = navTextColor;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLangMenuOpen && !target.closest('.language-switcher')) {
        setIsLangMenuOpen(false);
      }
    };
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-1000 ease-in-out font-poppins ${
        isScrolled
          ? 'bg-gradient-to-b from-[#12192C]/95 to-[#0A0E18]/95 shadow-[0_0_15px_0_rgba(0,0,0,0.08)]'
          : 'bg-transparent shadow-none'
      }`}
      style={{ fontFamily: 'Poppins, sans-serif', height: '100px' }}
    >
      <div className="w-full max-w-[1512px] mx-auto flex justify-between items-center px-6 md:px-[60px] h-full" style={{ height: '100px', paddingTop: 0, paddingBottom: 0 }}>
        <Link to="/" className="flex items-center gap-2 select-none group">
          {/* Logo text, bisa diganti SVG jika ada asset dari Figma */}
          <span className={`${logoTextColor} font-bold text-2xl tracking-wide uppercase transition-all duration-300 group-hover:text-[#08C2C1] group-hover:scale-105`}>AITISERVE</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[48px] text-base font-semibold uppercase tracking-wide">
          {MENU.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `text-[#08C2C1] border-b-2 border-[#08C2C1] pb-1 transition`
                  : `${navTextColor} hover:text-[#08C2C1] transition pb-1`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Language Switcher */}
          <div className="relative language-switcher">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`${navTextColor} hover:text-[#08C2C1] transition flex items-center gap-1 uppercase font-semibold`}
            >
              {i18n.language === 'en' ? 'EN' : 'ID'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-[#E5E7EB] overflow-hidden z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full px-4 py-2 text-left hover:bg-[#08C2C1] hover:text-white transition ${
                    i18n.language === 'en' ? 'bg-[#08C2C1] text-white' : 'text-[#12192C]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('id')}
                  className={`w-full px-4 py-2 text-left hover:bg-[#08C2C1] hover:text-white transition ${
                    i18n.language === 'id' ? 'bg-[#08C2C1] text-white' : 'text-[#12192C]'
                  }`}
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Language Switcher Mobile */}
          <div className="relative language-switcher">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-white hover:text-[#08C2C1] transition flex items-center gap-1 uppercase font-semibold text-sm"
            >
              {i18n.language === 'en' ? 'EN' : 'ID'}
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-[#E5E7EB] overflow-hidden z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full px-4 py-2 text-left hover:bg-[#08C2C1] hover:text-white transition ${
                    i18n.language === 'en' ? 'bg-[#08C2C1] text-white' : 'text-[#12192C]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('id')}
                  className={`w-full px-4 py-2 text-left hover:bg-[#08C2C1] hover:text-white transition ${
                    i18n.language === 'id' ? 'bg-[#08C2C1] text-white' : 'text-[#12192C]'
                  }`}
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#08C2C1] focus:outline-none"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#12192C] to-[#0A0E18] absolute w-full left-0 top-full shadow-xl animate-fade-in">
          <nav className="px-6 py-6 flex flex-col gap-6 text-base font-semibold uppercase font-poppins tracking-wide">
            {MENU.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? `text-[#08C2C1] border-b-2 border-[#08C2C1] pb-1 transition`
                    : `${navTextColor} hover:text-[#08C2C1] transition pb-1`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* Tambahkan tombol CTA di mobile jika ada di Figma */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
