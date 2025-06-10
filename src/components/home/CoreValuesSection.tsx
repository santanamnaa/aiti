import React from 'react';
import { motion } from 'framer-motion';
import { ellipse } from 'framer-motion/client';

const values = [
  {
    letter: 'T',
    title: 'TRANSFORMASI',
    description: 'Berkomitmen pada perubahan positif dan berkelanjutan dalam menghadapi tantangan.',
  },
  {
    letter: 'A',
    title: 'AMANAH',
    description: 'Menjunjung tinggi integritas, tanggung jawab, dan kepercayaan.',
  },
  {
    letter: 'N',
    title: 'NYATA',
    description: 'Fokus pada hasil yang konkret, terukur, dan memberikan dampak nyata.',
  },
  {
    letter: 'G',
    title: 'GIGIH',
    description: 'Konsisten dan tangguh dalam menghadapi tantangan dan mencapai target.',
  },
  {
    letter: 'G',
    title: 'GESIT',
    description: 'Adaptif terhadap perubahan, cepat tanggap dalam mengambil keputusan.',
  },
  {
    letter: 'U',
    title: 'UNGGUL',
    description: 'Berorientasi hasil dengan standar kualitas tinggi.',
  },
  {
    letter: 'H',
    title: 'HARMONIS',
    description: 'Menjalin hubungan baik antar tim, mitra, dan seluruh pemangku kepentingan.',
  },
];

const visi = `Menjadi mitra terpercaya dalam transformasi digital yang unggul dan inovatif, serta perusahaan teknologi terdepan yang menghadirkan solusi berbasis kecerdasan buatan dan teknologi informasi untuk masa depan yang berkelanjutan dan berdampak nyata.`;

const misi = [
  'Menghadirkan solusi AI dan TI yang efisien, bernilai tambah, dan berorientasi pada masa depan.',
  'Mendukung transformasi digital melalui layanan konsultasi, implementasi teknologi, dan kemitraan strategis.',
  'Meningkatkan kualitas sumber daya manusia dengan menanamkan budaya inovatif dan pengembangan kompetensi berkelanjutan.'
];

const CoreValuesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50 py-24 relative overflow-hidden"
    >
      {/* Title centered at the top */}
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-10 text-center">
        VISI DAN MISI DAN <span className="text-secondary">NILAI–NILAI PERUSAHAAN</span>
      </h2>
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section for Visi and Misi */}
        <div className="flex flex-col gap-10">
          {/* VISI */}
          <div className="bg-white/60 border border-gray-200 rounded-xl p-6 mb-6 flex flex-col">
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-2" />
              <span className="font-bold text-neutral-800 text-lg">VISI</span>
            </div>
            <div className="text-neutral-700 text-base md:text-lg pl-6">{visi}</div>
          </div>
          {/* MISI */}
          <div className="bg-white/60 border border-gray-200 rounded-xl p-6 mb-10 flex flex-col">
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full bg-secondary mr-2" />
              <span className="font-bold text-neutral-800 text-lg">MISI</span>
            </div>
            <ol className="list-decimal pl-10 text-neutral-700 text-base md:text-lg space-y-2">
              {misi.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        {/* Right Section for Nilai-Nilai Perusahaan */}
        <div className="overflow-auto max-h-[calc(100vh-6rem)] scrollbar-none">
          <div className="flex items-center mb-10">
            <span className="inline-block w-6 h-6 rounded-full bg-secondary mr-2" />
            <span className="font-bold text-lg text-neutral-800">NILAI–NILAI PERUSAHAAN</span>
          </div>
          <div className="flex flex-col gap-20 md:gap-5">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-secondary min-w-[48px] text-center leading-none">
                  {value.letter}
                </div>
                <div>
                  <div className="font-bold text-lg md:text-xl text-neutral-900 mb-1">{value.title}</div>
                  <div className="text-neutral-700 text-base md:text-lg">{value.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative circle background shape */}
      
    </section>
  );
};

export default CoreValuesSection;