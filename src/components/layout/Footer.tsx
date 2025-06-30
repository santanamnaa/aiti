import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12192C] text-white font-poppins pt-16 pb-16 px-4 md:px-0 min-h-[50vh]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-between gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12">
        
        {/* Brand & Slogan */}
        <div className="flex-1 min-w-0 sm:min-w-[180px] md:min-w-[220px] w-full max-w-full mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold tracking-tight">AITISERVE</span>
          </div>
          <div className="text-neutral-light text-base max-w-xs leading-relaxed opacity-80 break-words">
            Empowering Your Digital Transformation
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 min-w-0 sm:min-w-[180px] md:min-w-[220px] w-full max-w-full mb-6 md:mb-0">
          <div className="mb-3 font-semibold text-lg tracking-tight">Navigation</div>
          <ul className="space-y-2 text-base">
            <li><Link to="/" className="hover:text-[#08C2C1] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#08C2C1] transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#08C2C1] transition">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-[#08C2C1] transition">Blog</Link></li>
            <li><Link to="/about" className="hover:text-[#08C2C1] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#08C2C1] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-0 sm:min-w-[180px] md:min-w-[220px] w-full max-w-full mb-6 md:mb-0">
          <div className="mb-3 font-semibold text-lg tracking-tight">Contact</div>
          <ul className="space-y-2 text-base opacity-80 break-words">
            <li>+62 852 5151 9897</li>
            <li>hr@aitiserve.co.id</li>
            <li>Jl. Manglid, Komplek Grand Kopo Parahyangan Blok A No.20 Margahayu Selatan, Margahayu, Kab. Bandung, Jawa Barat</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-0 sm:min-w-[180px] md:min-w-[220px] max-w-xs mb-6 md:mb-0 w-full max-w-full">
          <div className="mb-3 font-semibold text-lg tracking-tight">Follow Us</div>
          <div className="flex gap-4 items-center flex-wrap">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#08C2C1] transition">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#08C2C1] transition">Instagram</a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#08C2C1] transition">Threads</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#08C2C1] transition">YouTube</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-6 md:px-12">
        <div>© 2025 AITISERVE. All Rights Reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/terms-of-service" className="hover:text-[#08C2C1] transition">Terms and Conditions</Link>
          <Link to="/privacy-policy" className="hover:text-[#08C2C1] transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
