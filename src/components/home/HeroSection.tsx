import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#18202B] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-400 opacity-30 rounded-full z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-300 opacity-20 rounded-full z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-200 opacity-10 rounded-full z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital Transformation<br />Solutions
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mitra terpercaya Anda dalam solusi teknologi cerdas berbasis AI dan TI untuk masa depan yang berkelanjutan.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Lihat Layanan
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Konsultasi Gratis
            </Link>
          </motion.div>

          <motion.div
            className="text-2xl md:text-3xl font-medium text-white flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shaping a <span className="text-cyan-400 font-bold ml-2">Brighter Future</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;