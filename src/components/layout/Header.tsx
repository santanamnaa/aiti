import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

// TODO: Ganti menu dan struktur sesuai urutan & label di Figma
const MENU = [
  // { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-1000 ease-in-out font-poppins shadow-[0_0_15px_0_rgba(0,0,0,0.08)] ${
        isScrolled
          ? 'bg-gradient-to-b from-[#12192C]/95 to-[#0A0E18]/95'
          : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Poppins, sans-serif', height: '100px' }}
    >
      <div className="w-full max-w-[1512px] mx-auto flex justify-between items-center px-6 md:px-[60px] h-full" style={{ height: '100px', paddingTop: 0, paddingBottom: 0 }}>
        <Link to="/" className="flex items-center gap-2 select-none">
          {/* Logo text, bisa diganti SVG jika ada asset dari Figma */}
          <span className={`${logoTextColor} font-bold text-2xl tracking-wide uppercase`}>AITISERVE</span>
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
          {/* Tambahkan tombol CTA jika ada di Figma, contoh: */}
          {/* <Link to="/contact" className="ml-8 px-6 py-2 rounded-full bg-[#08C2C1] text-white font-bold shadow hover:bg-[#0fdad9] transition">Contact Us</Link> */}
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
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
