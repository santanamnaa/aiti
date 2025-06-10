import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section bg-primary text-white py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hubungi Kami
        </motion.h2>
        
        <motion.p
          className="text-neutral-100 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Untuk konsultasi lebih lanjut, hubungi kami melalui email atau kunjungi situs web kami.
        </motion.p>

        <div className="flex justify-center items-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-white text-white font-semibold text-lg bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Mail className="w-5 h-5" />
            Hubungi Kami
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;