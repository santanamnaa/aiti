import React from 'react';
// import Footer from '../../components/layout/Footer'; // Uncomment if you want to use the global Footer
// import Header from '../../components/layout/Header'; // Uncomment if you want to use the global Header

interface Stage {
  number: string;
  title: string;
  desc: string;
}

const stages: Stage[] = [
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

interface Benefit {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  {
    icon: <div className="w-12 h-12 bg-[#08C2C1] rounded-full flex items-center justify-center text-white font-bold">1</div>,
    title: 'Structured & Flexible Approach',
    desc: "Following the SDLC principle but still adjusting to the client's conditions and capacity."
  },
  {
    icon: <div className="w-12 h-12 bg-[#08C2C1] rounded-full flex items-center justify-center text-white font-bold">2</div>,
    title: 'Collaborative',
    desc: "We work side by side with the client's internal team, not replacing it."
  },
  {
    icon: <div className="w-12 h-12 bg-[#08C2C1] rounded-full flex items-center justify-center text-white font-bold">3</div>,
    title: 'Appropriate Solutions',
    desc: 'Our recommendations are not only the latest technology, but also relevant to business needs.'
  },
  {
    icon: <div className="w-12 h-12 bg-[#08C2C1] rounded-full flex items-center justify-center text-white font-bold">4</div>,
    title: 'Real Transformation',
    desc: 'Focus on results that improve the efficiency, capability, and competitiveness of the organization.'
  },
];

const ITConsultantDetailPage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1512px] mx-auto bg-white font-poppins text-[#0E1423] overflow-x-hidden pt-32 pb-32">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center gap-6 mb-24">
        <div className="flex flex-row items-center justify-center gap-2 bg-white border border-[#08C2C1]/30 rounded-xl px-6 py-2 mb-24">
          <span className="text-[#08C2C1] font-semibold text-[18px]">Service</span>
        </div>
        <div className="flex flex-col items-center gap-0 mb-12">
          <span className="text-[64px] font-medium text-[#7E7E7E] uppercase -mb-3 ">IT & AI</span>
          <span className="text-[64px] font-semibold text-[#08C2C1] uppercase ">consultant</span>
        </div>
        <p className="w-full max-w-[1156px] text-center text-[16px] font-medium text-[#0E1423] capitalize leading-[29px]">
          We provide comprehensive IT consulting services and assist clients in realizing impactful digital transformation. 
          With a strategic approach aligned with the six main stages in the Software Development Life Cycle (SDLC), 
          we ensure that every project runs in a targeted, measurable, and sustainable manner.
        </p>
      </div>

      {/* Stages Section - Split Layout */}
      <div className="w-full flex flex-col items-center mb-24 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar Sticky */}
          <div className="w-full md:w-2/5 p-0 mb-8 md:mb-0 md:sticky md:top-32 self-start h-fit">
            <span className="text-[48px] font-medium text-[#7E7E7E] uppercase -mb-3 block">Consultation Stages</span>
            <span className="text-[48px] font-semibold text-[#08C2C1] uppercase mb-4 block">according to SDLC</span>
          </div>
          {/* Konten Kanan */}
          <div className="w-full md:w-3/5 flex flex-col gap-8">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="rounded-[24px] bg-white/10 backdrop-blur-[13px] flex flex-row items-start p-8 gap-6 border border-[#757575]/30"
              >
                <div className="w-6 h-8 flex items-center justify-center text-[16px] font-medium text-[#7E7E7E]">{stage.number}</div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-[24px] font-bold text-[#08C2C1] uppercase mb-1">{stage.title}</div>
                  <div className="text-[16px] font-medium text-[#0E1423] leading-[32px] capitalize">{stage.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="w-full flex flex-col items-center gap-6 mb-24">
        <div className="flex flex-col items-center gap-0">
          <span className="text-[64px] font-medium text-[#7E7E7E] uppercase  -mb-3 text-center">Why Choose</span>
          <span className="text-[64px] font-semibold text-[#08C2C1] uppercase  text-center">Our Consulting Services?</span>
        </div>
        <p className="w-full max-w-[920px] text-center text-[16px] font-medium text-[#0E1423] capitalize leading-[32px]">
          We believe great work starts with great support. From growth opportunities to flexible work, 
          here's what you can expect when you join our team.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-6">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="w-[320px] rounded-[24px] bg-white/10 backdrop-blur-[13px] flex flex-col items-center justify-center p-8 gap-6 border border-[#08C2C1]/30 mb-6"
          >
            <div className="mb-4">{benefit.icon}</div>
            <div className="text-[24px] font-bold text-[#08C2C1] uppercase mb-2 text-center">{benefit.title}</div>
            <div className="text-[16px] font-medium text-[#0E1423] text-center leading-[29px] capitalize">{benefit.desc}</div>
          </div>
        ))}
      </div>

      {/* Jika Anda meng-uncomment Footer, ia akan berada di sini */}
      {/* {<Footer />} */}
    </div>
  );
};

export default ITConsultantDetailPage;
