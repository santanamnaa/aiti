import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Monitor,
  Smartphone,
  Package,
  Headset,
  Map,
  Layout,
  Users,
  ShieldCheck,
  Database,
  Smile,
} from 'lucide-react';

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
        hover:shadow-lg hover:scale-[1.035] hover:border-secondary/60 focus-within:shadow-lg focus-within:scale-[1.035] focus-within:border-secondary/60
      `}
      style={{ transitionDelay: `${delay * 100}ms` }}
      tabIndex={0}
    >
      <div className="bg-secondary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <div className="text-secondary">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700 text-sm">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: <><span className="text-secondary font-semibold">Konsultasi IT</span> dan <span className="text-secondary font-semibold">AI</span></>,
    description:
      'Memberikan pendampingan strategis dalam transformasi digital, termasuk pemetaan kebutuhan teknologi, perencanaan sistem berbasis AI, dan pengembangan roadmap teknologi yang berkelanjutan.',
    delay: 0,
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-secondary font-semibold">Aplikasi Web</span></>,
    description:
      'Membangun aplikasi web modern dengan desain responsif, performa optimal, dan skalabilitas tinggi untuk mendukung kebutuhan bisnis digital masa kini.',
    delay: 1,
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-secondary font-semibold">Aplikasi Mobile</span></>,
    description:
      'Merancang dan mengembangkan aplikasi mobile berbasis AI dengan pengalaman pengguna (UX) yang unggul dan kompatibel lintas platform (Android & iOS).',
    delay: 2,
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-secondary font-semibold">Aplikasi Desktop</span></>,
    description:
      'Mengembangkan perangkat lunak desktop yang tangguh, aman, dan terintegrasi sesuai kebutuhan spesifik organisasi atau instansi.',
    delay: 3,
  },
  {
    icon: <Map className="w-7 h-7" />,
    title: <>Pengembangan <span className="text-secondary font-semibold">Sistem Informasi Geografis (GIS)</span></>,
    description:
      'Menyediakan solusi GIS untuk visualisasi lokasi, analisis spasial, dan pengambilan keputusan berbasis data geospasial yang akurat dan interaktif.',
    delay: 4,
  },
  {
    icon: <Smile className="w-7 h-7" />,
    title: <><span className="text-secondary font-semibold">Dukungan Teknis</span></>,
    description:
      'Menyediakan layanan bantuan teknis profesional 24/7 guna memastikan operasional sistem berjalan lancar dan minim gangguan.',
    delay: 5,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-4 text-center">
          RUANG LINGKUP <span className="text-secondary">LAYANAN</span>
        </h2>
        <p className="text-neutral-700 mb-10 max-w-2xl mx-auto text-center text-base md:text-lg">
          Sebagai perusahaan yang mengintegrasikan <span className="text-secondary font-semibold">kecerdasan buatan</span> dan <span className="text-secondary font-semibold">teknologi informasi</span>, <span className="text-secondary font-semibold">AITISERVE</span> menyediakan layanan lengkap yang dirancang untuk menjawab tantangan era digital. Ruang lingkup layanan kami meliputi:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default ServicesSection;