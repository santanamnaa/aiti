import React from 'react';
import { Users, Rocket, Lightbulb, HeartHandshake, PenTool, Code2, FileCode2 } from 'lucide-react';
const positions = [
  {
    icon: <PenTool className="w-12 h-12 text-[#08C2C1]" />,
    title: 'UI/UX DESIGNER',
    desc: 'Bertanggung jawab untuk merancang tampilan dan pengalaman pengguna yang menarik, intuitif, dan fungsional pada produk digital kami.',
    mailSubject: 'Apply%20for%20UI%2FUX%20Designer',
  },
  {
    icon: <Code2 className="w-12 h-12 text-[#08C2C1]" />,
    title: 'FRONTEND DEVELOPER',
    desc: 'Mengembangkan antarmuka web yang responsif dan interaktif menggunakan teknologi modern sesuai kebutuhan bisnis.',
    mailSubject: 'Apply%20for%20Frontend%20Developer',
  },
  {
    icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
    title: 'BACKEND ENGINEER',
    desc: 'Membangun dan memelihara sistem backend yang scalable, aman, dan efisien untuk mendukung aplikasi digital.',
    mailSubject: 'Apply%20for%20Backend%20Engineer',
  },
  {
    icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
    title: 'AI/ML ENGINEER',
    desc: 'Merancang dan mengimplementasikan solusi AI/ML inovatif untuk meningkatkan kapabilitas produk digital.',
    mailSubject: 'Apply%20for%20AI%2FML%20Engineer',
  },
];

const benefits = [
  {
    icon: <Users className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Tim Kolaboratif',
    desc: 'Bekerja bersama profesional yang suportif, terbuka, dan saling menginspirasi.',
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Inovasi Tanpa Batas',
    desc: 'Budaya inovasi dan eksplorasi teknologi terbaru di setiap proyek.',
  },
  {
    icon: <Rocket className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Perkembangan Karir',
    desc: 'Dukungan pengembangan diri, pelatihan, dan peluang naik jenjang karir.',
  },
  {
    icon: <HeartHandshake className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Lingkungan Fleksibel',
    desc: 'Kerja remote, hybrid, dan work-life balance yang sehat.',
  },
  {
    icon: <PenTool className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Proyek Menantang',
    desc: 'Terlibat dalam proyek-proyek digital yang berdampak dan menantang.',
  },
  {
    icon: <Code2 className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Teknologi Terkini',
    desc: 'Akses ke tools dan teknologi terbaru untuk pengembangan diri.',
  },
  {
    icon: <FileCode2 className="w-12 h-12 text-[#08C2C1]" />,
    title: 'Keseimbangan Hidup',
    desc: 'Lingkungan kerja yang mendukung keseimbangan antara karir dan kehidupan pribadi.',
  },
];

const CareersPage: React.FC = () => {
  return (
    <main className="relative bg-white min-h-screen overflow-x-hidden font-poppins">
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-32 pb-12 flex flex-col lg:flex-row gap-16">
        {/* Hero Section */}
        <div className="flex-1">
          {/* Tag */}
          <div className="inline-flex items-center px-6 py-2 border border-[#08C2C1]/30 rounded-xl bg-white mb-6">
            <span className="text-[#08C2C1] font-medium text-lg capitalize">We're hiring!</span>
          </div>
          {/* Title */}
          <div>
            <h1 className="text-[64px] font-medium uppercase text-[#7E7E7E] leading-[96px] mb-4">be part of</h1>
            <h1 className="text-[64px] font-bold uppercase text-[#08C2C1] leading-[96px] mb-8">our missions!</h1>
          </div>
          {/* Description */}
          <p className="text-lg font-medium text-[#0E1423] capitalize max-w-2xl mb-8">
            Bergabunglah bersama <span className="text-[#08C2C1] font-semibold">AITISERVE</span> dan jadilah bagian dari tim inovatif yang membentuk masa depan digital Indonesia. Kami mencari talenta terbaik yang siap berkembang, berkolaborasi, dan berkontribusi dalam menciptakan solusi teknologi berdampak.
          </p>
        </div>
        {/* Positions Section */}
        <div className="flex-1 flex flex-col items-end">
          <div className="flex flex-col gap-8 w-full max-w-2xl ml-auto">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start bg-white/90 rounded-3xl p-8 border border-[#08C2C1]/30 hover:border-transparent transition-all backdrop-blur-md"
              >
                <div className="w-16 h-16 flex items-center justify-center">{pos.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold uppercase text-[#08C2C1] mb-2">{pos.title}</h3>
                  <p className="text-base font-medium text-[#0E1423] capitalize mb-4">{pos.desc}</p>
                  <a
                    href={`mailto:hr@aitiserve.com?subject=${pos.mailSubject}`}
                    className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-[#08C2C1] text-white font-medium text-lg capitalize shadow hover:bg-[#0E1423] transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-[64px] font-medium uppercase text-[#7E7E7E] leading-[96px] mb-4">Benefits</h2>
          <h2 className="text-[64px] font-bold uppercase text-[#08C2C1] leading-[96px] mb-8">that you will get</h2>
          <p className="text-lg font-medium text-[#0E1423] capitalize max-w-3xl mx-auto mb-8">
            Nikmati berbagai benefit menarik yang mendukung perkembangan karir dan keseimbangan hidupmu di <span className="text-[#08C2C1] font-semibold">AITISERVE</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/90 rounded-3xl p-8 border border-transparent backdrop-blur-md shadow-md h-full"
            >
              <div className="mb-4">{item.icon}</div>
              <div className="font-bold text-xl uppercase text-[#08C2C1] mb-2 text-center">{item.title}</div>
              <div className="text-[#0E1423] text-base font-medium text-center capitalize">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Come Join Us Section
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#08C2C1] mb-4 uppercase">Come Join Us!</h3>
        <p className="text-lg md:text-xl text-[#0E1423] mb-6 font-light">
          Tidak menemukan posisi yang cocok? <span className="text-[#08C2C1] font-semibold">AITISERVE</span> selalu mencari talenta yang passionate, kreatif, dan ingin bertumbuh bersama kami.<br />
          Ceritakan keunikan dan impianmu, serta bagaimana kamu ingin berkontribusi di dunia teknologi!
        </p>
        <a
          href="mailto:hr@aitiserve.com"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#08C2C1] via-[#0E1423] to-[#08C2C1] text-white font-semibold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Kirim CV & Cerita Kamu
        </a>
      </div> */}
    </main>
  );
};

export default CareersPage;
