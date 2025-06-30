import React from 'react';
import Footer from '../components/layout/Footer';
import { ServerCog, Users, Monitor, RefreshCw, LifeBuoy, Map, Network } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'System Architecture & Solution Development',
    desc: 'Including Telco & IT system design, OSS/BSS, and AI implementation based on Retrieval-Augmented Generation (RAG). Our team masters full-stack development using Java, Kotlin, Python, Go, Node.js, as well as modern interface development with React Native, Flutter, and various frontend frameworks.'
  },
  {
    number: '02',
    title: 'DESIGN SYSTEM',
    desc: 'We design technology solutions based on agreed-upon needs. This includes system architecture design, database schema, and efficient and intuitive user interface (UI/UX) design.'
  },
  {
    number: '03',
    title: 'Implementation/Development',
    desc: 'Our development team builds the system in stages, with an agile or waterfall approach according to the character of the project. This process involves code development, module integration, and technical documentation.'
  },
  {
    number: '04',
    title: 'TESTING',
    desc: 'We conduct a series of tests to ensure that the system runs according to specifications and is free from bugs. Testing types include functional, integration, performance, security, and user acceptance test (UAT).'
  },
  {
    number: '05',
    title: 'Implementation and Deployment',
    desc: 'After the system passes the test, we assist in the implementation process to the production environment, including user training and post-launch support.'
  },
  {
    number: '06',
    title: 'Maintenance and Evaluation',
    desc: 'We provide periodic system maintenance services to ensure optimal performance, as well as conducting evaluations for potential further development.'
  },
];

const benefits = [
  {
    icon: <ServerCog className="w-10 h-10 text-[#08C2C1]" />, // Structured & Flexible Approach
    title: 'Structured & Flexible Approach',
    desc: "Following the SDLC principle but still adjusting to the client's conditions and capacity."
  },
  {
    icon: <Users className="w-10 h-10 text-[#08C2C1]" />, // Collaborative
    title: 'Collaborative',
    desc: "We work side by side with the client's internal team, not replacing it."
  },
  {
    icon: <Monitor className="w-10 h-10 text-[#08C2C1]" />, // Appropriate Solutions
    title: 'Appropriate Solutions',
    desc: 'Our recommendations are not only the latest technology, but also relevant to business needs.'
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-[#08C2C1]" />, // Real Transformation
    title: 'Real Transformation',
    desc: 'Focus on results that improve the efficiency, capability, and competitiveness of the organization.'
  },
];

const ServicesDetailPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#12192C] to-[#0A0E18] min-h-screen text-white font-poppins">
      {/* Hero/Tag Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 md:px-0">
        <div className="inline-block bg-white/10 border border-[#08C2C1]/30 rounded-xl px-6 py-2 mb-6 text-[#08C2C1] font-semibold text-base tracking-wide">Service</div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          <span className="text-[#7E7E7E]">IT & AI </span>
          <span className="text-[#08C2C1]">consultant</span>
        </h1>
        <p className="max-w-2xl text-center text-white/80 text-lg font-medium mt-4">
          We provide comprehensive IT consulting services and assist clients in realizing impactful digital transformation. With a strategic approach aligned with the six main stages in the Software Development Life Cycle (SDLC), we ensure that every project runs in a targeted, measurable, and sustainable manner.
        </p>
      </section>

      {/* Consultation Stages Section */}
      <section className="py-16 px-4 md:px-0 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#7E7E7E]">Consultation Stages </span>
            <span className="text-[#08C2C1]">according to SDLC</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white/10 border border-[#757575]/30 rounded-3xl p-8 flex gap-6 shadow-lg backdrop-blur-md items-start">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#08C2C1]/10 text-[#08C2C1] text-2xl font-bold mr-2 border border-[#08C2C1]/30">{stage.number}</div>
              <div>
                <div className="text-xl font-bold text-[#08C2C1] mb-1">{stage.title}</div>
                <div className="text-white/90 text-base font-medium">{stage.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-0 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-[#7E7E7E]">Why Choose </span>
            <span className="text-[#08C2C1]">Our Consulting Services?</span>
          </h2>
        </div>
        <p className="max-w-2xl mx-auto text-center text-white/80 text-lg font-medium">
          We believe great work starts with great support. From growth opportunities to flexible work, here's what you can expect when you join our team.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-0 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#7E7E7E]">Benefits</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/10 border border-[#08C2C1]/30 rounded-3xl p-8 flex flex-col items-center shadow-lg backdrop-blur-md">
              <div className="mb-4">{benefit.icon}</div>
              <div className="text-xl font-bold text-[#08C2C1] mb-2 text-center">{benefit.title}</div>
              <div className="text-white/90 text-base font-medium text-center">{benefit.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesDetailPage; 