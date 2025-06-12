import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Monitor,
  Smartphone,
  Smile,
  Map,
  Layout,
} from 'lucide-react';

// Assume images are in /public/assets or /public
const buildingImg = '/assets/cuate.png';
const subtractImg = '/assets/Subtract.png';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-lg hover:scale-[1.035] hover:border-cyan-400 focus-within:shadow-lg focus-within:scale-[1.035] focus-within:border-cyan-400
      `}
      style={{ transitionDelay: `${delay * 100}ms` }}
      tabIndex={0}
    >
      <div className="bg-cyan-400 bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <div className="text-cyan-500">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700 text-sm">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: <>Konsultasi <span className="text-cyan-500 font-semibold">IT</span> dan <span className="text-cyan-500 font-semibold">AI</span></>,
    description:
      'Pendampingan strategis untuk transformasi digital Anda.',
    delay: 0,
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-cyan-500 font-semibold">Aplikasi Web</span></>,
    description:
      'Aplikasi web modern dengan desain responsif dan performa optimal.',
    delay: 1,
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-cyan-500 font-semibold">Aplikasi Mobile</span></>,
    description:
      'Aplikasi lintas platform berbasis AI untuk pengalaman unggul.',
    delay: 2,
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-cyan-500 font-semibold">Aplikasi Desktop</span></>,
    description:
      'Solusi desktop tangguh dan terintegrasi.',
    delay: 3,
  },
  {
    icon: <Map className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-cyan-500 font-semibold">Sistem Informasi Geografis (GIS)</span></>,
    description:
      'Analisis spasial dan visualisasi lokasi untuk pengambilan keputusan cerdas.',
    delay: 4,
  },
  {
    icon: <Smile className="w-7 h-7" />,
    title: <>Dukungan <span className="text-cyan-500 font-semibold">Teknis</span></>,
    description:
      'Layanan bantuan 24/7 untuk sistem Anda.',
    delay: 5,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50 relative overflow-hidden">
      {/* Decorative right-side circle image */}
      <img
        src={subtractImg}
        alt="Decorative Circle"
        className="hidden md:block absolute top-0 right-0 w-[420px] h-auto z-0 pointer-events-none select-none"
        style={{ maxWidth: '50vw' }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-4 text-center">
          RUANG LINGKUP <span className="text-cyan-500">LAYANAN</span>
        </h2>
        <p className="text-neutral-700 mb-10 max-w-2xl mx-auto text-center text-base md:text-lg">
          Sebagai perusahaan yang mengintegrasikan kecerdasan buatan dan teknologi informasi, AITISERVE menyediakan layanan lengkap yang dirancang untuk menjawab tantangan era digital. Ruang lingkup layanan kami meliputi:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        {/* Building illustration below cards */}
        <div className="flex justify-center mt-6">
          <img
            src={buildingImg}
            alt="Building Illustration"
            className="w-[220px] md:w-[260px] lg:w-[300px] h-auto drop-shadow-xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;