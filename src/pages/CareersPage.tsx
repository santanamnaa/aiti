import React from 'react';
import { Users, Rocket, Lightbulb, HeartHandshake } from 'lucide-react';

// const careers = [
//   {
//     title: 'Frontend Developer',
//     location: 'Remote / Bandung',
//     type: 'Full-time',
//     description: 'Bangun antarmuka web modern dan responsif menggunakan React dan teknologi terbaru.',
//     requirements: [
//       'Pengalaman React/Next.js',
//       'Familiar dengan Tailwind CSS',
//       'Mampu bekerja kolaboratif',
//     ],
//   },
//   {
//     title: 'Backend Engineer',
//     location: 'Remote / Bandung',
//     type: 'Full-time',
//     description: 'Kembangkan API dan sistem backend scalable dengan Node.js atau Go.',
//     requirements: [
//       'Pengalaman Node.js/Go',
//       'Familiar dengan database SQL/NoSQL',
//       'Paham RESTful API',
//     ],
//   },
//   {
//     title: 'AI/ML Engineer',
//     location: 'Remote / Bandung',
//     type: 'Full-time',
//     description: 'Rancang dan implementasikan solusi AI/ML untuk produk digital inovatif.',
//     requirements: [
//       'Pengalaman Python & ML libraries',
//       'Paham konsep AI/ML',
//       'Senang eksplorasi teknologi baru',
//     ],
//   },
// ];

const whyUs = [
  {
    icon: <Users className="w-8 h-8 text-secondary" />, 
    title: 'Tim Kolaboratif',
    desc: 'Bekerja bersama profesional yang suportif, terbuka, dan saling menginspirasi.'
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />, 
    title: 'Inovasi Tanpa Batas',
    desc: 'Budaya inovasi dan eksplorasi teknologi terbaru di setiap proyek.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-secondary" />, 
    title: 'Perkembangan Karir',
    desc: 'Dukungan pengembangan diri, pelatihan, dan peluang naik jenjang karir.'
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />, 
    title: 'Lingkungan Fleksibel',
    desc: 'Kerja remote, hybrid, dan work-life balance yang sehat.'
  },
];

const CareersPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 scrollbar-none relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-center relative">
          {/* Blurred Gradient Background - larger and more offset */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
            <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
          </div>
          <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
            <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
              Karir di <span className="text-secondary">AITISERVE</span>
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
              Bergabunglah bersama <span className="text-secondary font-semibold">AITISERVE</span> dan jadilah bagian dari tim inovatif yang membentuk masa depan digital Indonesia. Kami mencari talenta terbaik yang siap berkembang, berkolaborasi, dan berkontribusi dalam menciptakan solusi teknologi berdampak.
            </p>
          </div>
        </div>

        {/* Careers Section
        <div className="max-w-5xl mx-auto mt-16 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Lowongan Tersedia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careers.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-secondary mb-2">{job.title}</h4>
                <div className="text-sm text-neutral-500 mb-2">{job.location} &bull; {job.type}</div>
                <p className="text-neutral-700 mb-4 flex-1">{job.description}</p>
                <ul className="list-disc pl-5 text-neutral-600 text-sm mb-4">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <a
                  href="mailto:hr@aitiserve.com?subject=Lamar%20{job.title}"
                  className="mt-auto inline-block px-6 py-2 rounded-full bg-secondary text-white font-semibold text-base shadow hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  Lamar Sekarang
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why Us Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Why Join <span className="text-secondary">AITISERVE?</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-b-4 border-transparent hover:border-secondary/60 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-300">{item.title}</div>
                <div className="text-neutral-600 text-base font-light mb-2">{item.desc}</div>
                <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Come Join Us Section */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Come Join Us!</h3>
          <p className="text-lg md:text-xl text-neutral-700 mb-6 font-light">
            Tidak menemukan posisi yang cocok? <span className="text-secondary font-semibold">AITISERVE</span> selalu mencari talenta yang passionate, kreatif, dan ingin bertumbuh bersama kami.<br />
            Ceritakan keunikan dan impianmu, serta bagaimana kamu ingin berkontribusi di dunia teknologi!
          </p>
          <a
            href="mailto:hr@aitiserve.com"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-primary text-white font-semibold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Kirim CV & Cerita Kamu
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
