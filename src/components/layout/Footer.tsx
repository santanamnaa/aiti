import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#12192C] to-[#0A0E18] px-6 pt-12 pb-4 font-poppins">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between items-start">
        <div className="flex flex-col items-start min-w-[250px]">
          <img src="/images/figma/logo_aiti.png" alt="aiti logo" className="h-32 w-32 md:h-40 md:w-40 object-contain mb-6" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full justify-between items-start">
          <div>
            <span className="block text-white font-semibold text-base mb-3">NAVIGATES</span>
            <ul className="text-white/80 text-sm space-y-2">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolios</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <span className="block text-white font-semibold text-base mb-3">FOLLOW US</span>
            <ul className="text-white/80 text-sm space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://threads.net" target="_blank" rel="noopener noreferrer">Threads</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div className="max-w-xs">
            <span className="block text-white font-semibold text-base mb-3">GET IN TOUCH</span>
            <ul className="text-white/80 text-sm space-y-2">
              <li>+62 852 5151 9897</li>
              <li>hr@aitiserve.co.id</li>
              <li>Jl. Manglid, Komplek Grand Kopo Parahyangan Blok A No.20 Margahayu Selatan, Margahayu, Kab. Bandung, Jawa Barat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white/20 pt-4 gap-2">
        <span className="text-white/70 text-xs">© 2025 AITISERVE. All Right Reserved.</span>
        <div className="flex gap-8">
          <Link to="/terms-of-service" className="text-white/70 text-xs hover:text-[#08C2C1] transition">Terms and Conditions</Link>
          <Link to="/privacy-policy" className="text-white/70 text-xs hover:text-[#08C2C1] transition">Privacy and Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
