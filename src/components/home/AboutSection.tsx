import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="section py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-12 md:mb-20 text-center">
          SEKILAS TENTANG <span className="text-cyan-500">AITISERVE</span>
        </h2>
        <motion.p
          className="text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-500 font-semibold">PT AITISERVE DJAYA NARAYA</span> adalah perusahaan teknologi yang berdiri pada tahun 2024, fokus menghadirkan solusi digital berbasis kecerdasan buatan (AI) dan teknologi informasi (TI). Kami hadir sebagai mitra transformasi digital untuk masa depan Indonesia yang lebih cerdas dan berkelanjutan.
        </motion.p>
        <a
          href="/about"
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-2 rounded-full shadow transition text-lg"
        >
          Selengkapnya
        </a>
      </div>
    </section>
  );
};

export default AboutSection;