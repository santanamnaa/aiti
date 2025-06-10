import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="section py-24 bg-gray-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-12 md:mb-20 text-center">
          SEKILAS TENTANG <span className="text-secondary">AITISERVE</span>
        </h2>
        <motion.p
          className="section-subtitle text-lg text-neutral mb-8 md:mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-semibold">PT. AITISERVE DJAYA NARAYA</span>, atau yang lebih dikenal dengan nama <span className="text-secondary font-semibold">AITISERVE</span>, adalah perusahaan teknologi yang lahir dari semangat inovasi dan komitmen untuk membentuk masa depan digital yang lebih cerdas dan berkelanjutan. Didirikan pada <span className="text-secondary font-semibold">27 Agustus 2024</span> di Kota <span className="text-secondary font-semibold">Bandung</span>, <span className="text-secondary font-semibold">AITISERVE</span> hadir sebagai startup visioner yang menggabungkan kecanggihan <span className="text-secondary font-semibold">Kecerdasan Buatan (AI)</span> dan <span className="text-secondary font-semibold">Teknologi Informasi (TI)</span> untuk menghadirkan solusi yang adaptif, efisien, dan berdampak langsung bagi dunia usaha dan masyarakat luas.
        </motion.p>
        <a
          href="/about"
          className="group mt-8 mb-2 block w-fit text-black font-sans font-light text-xl md:text-2xl tracking-wide transition-all duration-300 hover:text-neutral-700 cursor-pointer relative"
          style={{ letterSpacing: '0.01em' }}
        >
          learn more
          <span className="inline-block align-middle ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-700 text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
          <span className="block w-full h-px bg-neutral-300 mt-2 opacity-60"></span>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;