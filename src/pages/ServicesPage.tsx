import React, { useEffect } from 'react';
import { ServerCog, Share2, Map, Smartphone, Monitor, Users, RefreshCw, LifeBuoy, Database, Network, Layers, Check } from 'lucide-react';
import CtaSection from '../components/home/CtaSection';

const serviceList = [
  {
    icon: <Network className="w-8 h-8 text-secondary" />, 
    title: 'Network Inventory & Auto-Discovery',
    desc: 'Platform inventarisasi jaringan fiber, Metro Ethernet, WiFi, dan auto-discovery perangkat untuk efisiensi provisioning dan monitoring real-time.',
    id: 'network-inventory',
  },
  {
    icon: <ServerCog className="w-8 h-8 text-primary" />, 
    title: 'OSS/BSS Integration & Automation',
    desc: 'Integrasi dan otomasi sistem OSS/BSS (OSM/UIM/ASAP, Clarity OSS) untuk provisioning layanan enterprise dan peningkatan SLA.',
    id: 'oss-bss',
  },
  {
    icon: <Map className="w-8 h-8 text-secondary" />, 
    title: 'Geospatial & GIS Solutions',
    desc: 'Pengembangan aplikasi GIS, digitalisasi data pertanahan, dan solusi pemetaan digital untuk enterprise dan pemerintahan.',
    id: 'gis',
  },
  {
    icon: <Monitor className="w-8 h-8 text-primary" />, 
    title: 'Custom Software Development',
    desc: 'Aplikasi web, mobile, dan desktop untuk enterprise, modernisasi sistem legacy, dan solusi bisnis berbasis AI.',
    id: 'custom-software',
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />, 
    title: 'IT & AI Consulting',
    desc: 'Konsultasi strategis transformasi digital, audit infrastruktur, dan pengembangan roadmap teknologi berbasis AI.',
    id: 'consulting',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />, 
    title: 'System Integration & Modernization',
    desc: 'Integrasi sistem lama ke platform modern, migrasi data, dan modernisasi workflow bisnis.',
    id: 'integration',
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-secondary" />, 
    title: 'Technical Support & Managed Services',
    desc: 'Dukungan teknis, pemeliharaan sistem, dan layanan managed service berbasis SLA untuk kelancaran operasional.',
    id: 'support',
  },
];

const projectHighlights = [
  {
    icon: <Network className="w-7 h-7 text-secondary" />,
    title: 'UIMAX-ISP & UIMAX-OSP',
    desc: 'Platform inventarisasi jaringan fiber dan auto-discovery untuk Telkom Indonesia, migrasi data Oracle ke Neo4j Graph Database.',
    client: 'PT Exalogic Integrasi Communication',
    date: '2018–2023',
  },
  {
    icon: <ServerCog className="w-7 h-7 text-primary" />,
    title: 'OSS/BSS Enterprise Integration',
    desc: 'Integrasi OSM/UIM/ASAP untuk layanan Metro Ethernet, VPN IP, VSAT, Indihome, meningkatkan SLA dan efisiensi provisioning.',
    client: 'PT Telkomsigma (Telkom Group)',
    date: '2016–2018',
  },
  {
    icon: <Map className="w-7 h-7 text-secondary" />,
    title: 'GIS & Land Registration System',
    desc: 'Sistem GIS dan aplikasi pendaftaran bidang tanah untuk digitalisasi data pertanahan nasional (BPN).',
    client: 'PT. Jasindo Abadi Utama',
    date: '2005–2009',
  },
  {
    icon: <Monitor className="w-7 h-7 text-primary" />,
    title: 'OSS Discovery Module',
    desc: 'Modul OSS discovery untuk Telkomsel dan Telkom Indonesia, memperluas visibilitas dan pengelolaan layanan jaringan.',
    client: 'Clarity OSS / Synchronoss Technologies',
    date: '2012–2015',
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Layanan - AITISERVE';
  }, []);

  return (
    <>
      {/* Services Grid Modern & Clean */}
      <section className="py-24 bg-gray-50 min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-6 scrollbar-none relative z-10">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center justify-center relative">
            {/* Blurred Gradient Background - larger and more offset */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
              <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
            </div>
            <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
              <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
                Layanan <span className="text-secondary">AITISERVE</span>
                <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
              </h2>
              <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
                Temukan layanan enterprise, OSS/BSS, GIS, integrasi sistem, dan transformasi digital berbasis pengalaman nyata dari <span className='text-secondary font-semibold'>AITISERVE</span> untuk mendukung efisiensi dan inovasi bisnis Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Ruang Lingkup Layanan</h2>
          <div className="divide-y divide-gray-200">
            {serviceList.map((service, idx) => (
              <div key={service.id} className="flex flex-col items-center text-center gap-4 py-10 group hover:bg-secondary/5 transition-all duration-300">
                <div className="mb-2 scale-110 group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
                <div className="font-extrabold text-xl md:text-2xl text-primary mb-2 group-hover:text-secondary transition-colors duration-300 tracking-tight">{service.title}</div>
                <div className="text-neutral-700 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectHighlights.map((proj, idx) => (
              <div key={idx} className="bg-gradient-to-br from-secondary/5 via-primary/10 to-white rounded-3xl shadow-lg p-8 flex flex-col items-start border-t-4 border-b-4 border-transparent hover:border-primary/60 hover:shadow-2xl transition-all duration-300 group card-hover relative overflow-hidden">
                <div className="mb-4">{proj.icon}</div>
                <div className="font-bold text-lg text-primary mb-1 group-hover:text-secondary transition-colors duration-300">{proj.title}</div>
                <div className="text-neutral-600 text-base font-light mb-2">{proj.desc}</div>
                <div className="mt-auto text-sm text-neutral-500">{proj.client} <span className="mx-1">•</span> {proj.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
