import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaBrain, FaDesktop, FaMobileAlt, FaLaptop, FaMapMarkedAlt, FaHeadphones } from "react-icons/fa";

const solutions = [
  {
    icon: <FaBrain size={36} className="text-[#08C2C1]" />,
    title: 'IT & AI CONSULTANT',
    desc: 'Providing Strategic Assistance In Digital Transformation, Including Technology Needs Mapping, AI-Based System Planning, And ...',
  },
  {
    icon: <FaDesktop size={32} className="text-[#08C2C1]" />,
    title: 'WEBSITE APPLICATION DEVELOPMENT',
    desc: 'Building Modern Web Applications With Responsive Design, Optimal Performance, ...',
  },
  {
    icon: <FaMobileAlt size={32} className="text-[#08C2C1]" />,
    title: 'MOBILE APPLICATION DEVELOPMENT',
    desc: 'Designing And Developing AI-Based Mobile Applications With Superior User Experience.',
  },
  {
    icon: <FaLaptop size={32} className="text-[#08C2C1]" />,
    title: 'DESKTOP APPLICATION DEVELOPMENT',
    desc: 'Develop Robust, Secure, And Integrated Desktop Software According To The Specific Needs.',
  },
  {
    icon: <FaMapMarkedAlt size={32} className="text-[#08C2C1]" />,
    title: 'GEOGRAPHIC INFORMATION SYSTEM (GIS) DEVELOPMENT',
    desc: 'Provide GIS Solutions For Location Visualization, Spatial Analysis, And Decision Making.',
  },
  {
    icon: <FaHeadphones size={32} className="text-[#08C2C1]" />,
    title: 'TECHNICAL SUPPORT',
    desc: 'Provide 24/7 Professional Technical Assistance Services To Ensure Smooth System Operations And Minimal Disruption.',
  },
];


const HomePage: React.FC = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll ke paling kanan saat mount
    if (solutionsRef.current) {
      solutionsRef.current.scrollLeft = solutionsRef.current.scrollWidth;
    }
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#12192C] to-[#0A0E18] min-h-screen font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* HERO + OUR SOLUTIONS SECTION - Figma Presisi */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[900px] flex flex-col items-start justify-start overflow-hidden px-4 sm:px-6 md:px-0" style={{paddingTop: '64px'}}>
        {/* Background utama (foto VR) */}
        <img src="/images/figma/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        {/* Konten utama HERO */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-0" style={{height: 'calc(60vh + 120px)', minHeight: 400}}>
          <h1 className="text-white text-[32px] sm:text-[44px] md:text-[80px] font-extrabold uppercase tracking-tight text-left leading-[1.08] mb-4 sm:mb-6" style={{letterSpacing: '-0.04em'}}>
            Scalable Tech.<br />
            <span className="text-[#08C2C1]">Global Impact.</span>
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] font-normal text-left max-w-xl sm:max-w-2xl mb-6 sm:mb-8 leading-snug md:leading-normal">
            We Design Robust Digital Platforms And Custom Solutions That Grow With Your Business—<b>Locally And Globally.</b>
          </p>
          <a href="#solutions" className="inline-flex items-center bg-[#08C2C1] text-white hover:bg-[#0E1423] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-[16px] sm:text-[18px] font-medium shadow-md hover:shadow-lg transition-all duration-200">
            Get Started
            <span className="ml-2 text-[20px] sm:text-[22px]">→</span>
          </a>
        </div>
        {/* OUR SOLUTIONS - Overlap Card */}
        <div className="relative z-20 w-full max-w- mx-auto px-2 sm:px-4 md:px-0 -mt-10 sm:-mt-16" id="solutions">
          <div className="flex flex-col md:flex-row items-end gap-6 md:gap-10 lg:gap-16">
            {/* Judul kiri, rata bawah dengan card pertama */}
            <div className="flex flex-col w-[200px] self-end pb-10 md:pb-24 mb-4 md:mb-0 ml-20 sm:ml-22 md:ml-24 lg:ml-28">
              <span className="text-white text-[18px] sm:text-[22px] font-bold uppercase tracking-widest mb-1">OUR</span>
              <span className="text-[#08C2C1] text-[32px] sm:text-[40px] font-bold uppercase leading-tight">SOLUTIONS</span>
            </div>
            {/* Card-card solutions */}
            <div
              className="flex-1 flex gap-4 md:gap-6 overflow-x-auto pb-2 hide-scrollbar"
              ref={solutionsRef}
              style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex-shrink-0 min-w-[260px] sm:min-w-[300px] md:min-w-[320px] max-w-[340px] bg-gradient-to-br from-[#0A1A2F]/80 to-[#0A1A2F]/60 border border-[#08C2C1]/30 rounded-[18px] p-4 sm:p-6 shadow-lg backdrop-blur-md flex flex-col gap-2 sm:gap-3"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="mb-2">{item.icon}</div>
                  <div className="text-[16px] sm:text-[18px] font-bold text-[#08C2C1] mb-1 uppercase leading-tight">{item.title}</div>
                  <div className="text-white text-[14px] sm:text-[15px] font-medium leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* BRIGHTER FUTURE SECTION - Figma Presisi */}
      <section className="relative  flex flex-col items-center justify-center w-full px-4 py-12 sm:py-16 md:py-20 bg-[#F8FAFC]" style={{minHeight: 332}}>
        <div className="flex flex-col items-center gap-6 max-w-[920px] w-full">
          <div className="flex flex-col items-center w-full max-w-[540px]">
            <span className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-medium text-[#7E7E7E] uppercase text-center leading-[1.1] tracking-[-0.02em] mb-[6px]" style={{textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>Shaping a</span>
            <span className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-semibold text-[#08C2C1] uppercase text-center leading-[1.1] tracking-[-0.02em]" style={{textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)'}}>brighter future</span>
          </div>
          <div className="w-full max-w-[920px] text-[16px] md:text-[18px] font-medium text-[#0E1423] text-center leading-[2] capitalize" style={{minHeight: 64}}>
            AITISERVE specializes in software development and digital platform services, including programming, web portal management, as well as IT consulting and technical support. Our expertise spans AI-powered web and mobile applications, geographic information systems (GIS), and desktop solutions tailored to various business sectors and organizations.
          </div>
        </div>
      </section>
      {/* TECHNOLOGY & CORE COMPETENCIES - Figma Presisi */}
      <section className="w-full py-12 sm:py-20 md:py-[100px] bg-[#F8FAFC]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12 px-2 sm:px-4 md:px-0">
          {/* KIRI: Judul dan deskripsi, sticky di desktop, lebar fix 360px */}
          <div className="md:w-[360px] w-full flex-shrink-0 flex flex-col justify-start md:sticky md:top-32 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-[#7E7E7E] text-[24px] sm:text-[32px] md:text-[44px] font-medium uppercase tracking-tight mb-1 sm:mb-2 leading-tight" style={{letterSpacing: '-0.02em'}}>TECHNOLOGY &</h2>
            <h2 className="text-[#08C2C1] text-[24px] sm:text-[32px] md:text-[44px] font-semibold uppercase tracking-tight mb-4 sm:mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>CORE COMPETENCIES</h2>
            <p className="text-[#12192C] text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-xs md:max-w-none">Our expertise covers a wide range of technology stacks and core competencies to deliver the best digital solutions for your business.</p>
          </div>
          {/* KANAN: Card scrollable vertical, tinggi fix 520px, gap sesuai Figma */}
          <div className="flex-1 max-h-[420px] sm:max-h-[520px] overflow-y-auto hide-scrollbar flex flex-col gap-6 sm:gap-8 pb-2 md:pb-0 pr-1 sm:pr-2">
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-1.svg" alt="Tech 1" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-1 sm:mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>System Architecture & Solution Development</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">Including Telco & IT system design, OSS/BSS, and AI implementation based on Retrieval-Augmented Generation (RAG). Our team masters full-stack development using Java, Kotlin, Python, Go, Node.js, as well as modern interface development with React Native, Flutter, and various frontend frameworks.</div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-2.svg" alt="Tech 2" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-1 sm:mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>Database & Infrastructure</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">Including relational and graph database management (Oracle, PostgreSQL, Neo4j), cloud and vector database utilization such as Supabase and Pinecone, as well as server and storage support based on Linux, NGINX, and MiniO. For spatial needs, we use GeoServer.</div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-3.svg" alt="Tech 3" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-1 sm:mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>DevOps & System Security</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">Including Linux server management, scripting, container usage (Docker), orchestration (Kafka), and CI/CD pipelines with GitLab, Jenkins, and Agile methodology. System security is maintained through OWASP standards, SSL/TLS encryption, and secure protocols such as SSH and SFTP.</div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-start bg-white rounded-[18px] sm:rounded-[22px] shadow-lg p-5 sm:p-8 border border-[#08C2C1]/30 min-w-[260px] sm:min-w-[340px] flex-shrink-0 transition-all duration-200 hover:shadow-xl hover:border-[#08C2C1]">
                <img src="/images/figma/tech-competence-4.svg" alt="Tech 4" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-3 sm:mb-4" />
                <div className="text-[#08C2C1] text-[16px] sm:text-[18px] font-extrabold uppercase mb-1 sm:mb-2 leading-tight tracking-tight" style={{letterSpacing: '-0.01em'}}>Design & User Interface</div>
                <div className="text-[#12192C] text-[15px] sm:text-[16px] font-medium leading-relaxed">Focused on UI/UX development using Figma and AI-based cross-platform mobile application development with Flutter and React Native.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM/PORTFOLIO */}
      <section className="w-full py-12 sm:py-20 bg-[#F8FAFC]">
        <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-5 md:px-0 flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-[657px] mb-8 sm:mb-10">
            <h2
              className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-medium uppercase text-[#7E7E7E] text-center leading-[1.1] tracking-[-0.02em] mb-[-8px]"
              style={{
                textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)',
                letterSpacing: '-0.02em',
              }}
            >
              IDEAS THAT
            </h2>
            <h2
              className="w-full text-[24px] sm:text-[32px] md:text-[44px] font-semibold uppercase text-[#08C2C1] text-center leading-[1.1] tracking-[-0.02em]"
              style={{
                textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)',
                letterSpacing: '-0.02em',
              }}
            >
              TURNED INTO IMPACT
            </h2>
          </div>
          <div className="w-full max-w-[920px] text-[16px] md:text-[18px] font-medium text-[#0E1423] text-center leading-[2] capitalize mb-8" style={{minHeight: 64}}>
            AITISERVE specializes in software development and digital platform services, including programming, web portal management, as well as IT consulting and technical support. Our expertise spans AI-powered web and mobile applications, geographic information systems (GIS), and desktop solutions tailored to various business sectors and organizations.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 max-w-[920px] w-full">
            {/* Team 1 */}
            <div className="relative bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center p-0 min-h-[250px] max-w-full sm:max-w-full mx-auto">
              <img src="/images/figma/team1.png" alt="Team 1" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1423] to-transparent p-4 sm:p-6 flex flex-col items-start" style={{height: 120}}>
                <div className="text-[20px] sm:text-[32px] font-bold text-[#08C2C1] leading-[32px] sm:leading-[48px] capitalize">Lincoln Curtis</div>
                <div className="text-white text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] capitalize">Solution Architect | IT & Telecommunications Expert</div>
              </div>
            </div>
            {/* Team 2 */}
            <div className="relative bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center p-0 min-h-[250px] max-w-full sm:max-w-full mx-auto">
              <img src="/images/figma/team2.png" alt="Team 2" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1423] to-transparent p-4 sm:p-6 flex flex-col items-start" style={{height: 100}}>
                <div className="text-[20px] sm:text-[32px] font-bold text-[#08C2C1] leading-[32px] sm:leading-[48px] capitalize">Kaiya Korsgaard</div>
                <div className="text-white text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] capitalize">Product Manager</div>
              </div>
            </div>
            {/* Team 3 */}
            <div className="relative bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center p-0 min-h-[250px] max-w-full sm:max-w-full mx-auto">
              <img src="/images/figma/team3.png" alt="Team 3" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1423] to-transparent p-4 sm:p-6 flex flex-col items-start" style={{height: 100}}>
                <div className="text-[20px] sm:text-[32px] font-bold text-[#08C2C1] leading-[32px] sm:leading-[48px] capitalize">Rayna Bator</div>
                <div className="text-white text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] capitalize">Product Designer</div>
              </div>
            </div>
            {/* Team 4 */}
            <div className="relative bg-white/10 backdrop-blur-[13px] rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center p-0 min-h-[250px] max-w-full sm:max-w-full mx-auto">
              <img src="/images/figma/team4.png" alt="Team 4" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1423] to-transparent p-4 sm:p-6 flex flex-col items-start" style={{height: 100}}>
                <div className="text-[20px] sm:text-[32px] font-bold text-[#08C2C1] leading-[32px] sm:leading-[48px] capitalize">Corey Culhane</div>
                <div className="text-white text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] capitalize">Senior Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG/INSIGHTS */}
      <section className="w-full flex flex-col items-center justify-center py-12 sm:py-20 bg-[#F8FAFC] gap-[50px]">
        {/* Title and Description Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1392px] px-2 sm:px-5 md:px-0 gap-[40px] md:gap-[100px]">
          {/* Title */}
          <div className="flex flex-col justify-center items-start w-full md:w-[595px] h-auto md:h-[180px]">
            <span
              className="text-[#7E7E7E] font-poppins font-medium uppercase text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-[-8px]"
              style={{ textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)' }}
            >
              TECH INSIGHTS &
            </span>
            <span
              className="text-[#08C2C1] font-poppins font-semibold uppercase text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em]"
              style={{ textShadow: '0px 1px 3px rgba(28,32,43,0.05), 0px 1px 2px rgba(28,32,43,0.04)' }}
            >
              INDUSTRY UPDATES
            </span>
          </div>
          {/* Description */}
          <div className="w-full md:w-[697px] min-h-[48px] flex items-center">
            <span className="font-poppins font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[32px] text-[#0E1423] capitalize">
              AITISERVE specializes in software development and digital platform services, including programming, web portal management, as well as IT consulting and technical support. Our expertise spans AI-powered web and mobile applications, geographic information systems (GIS), and desktop solutions tailored to various business sectors and organizations.
            </span>
          </div>
        </div>
        {/* Blog Cards Row */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px] lg:gap-[24px] px-2 sm:px-4 md:px-0">
          {/* Blog 1 */}
          <div className="flex flex-col items-start bg-white shadow-lg overflow-hidden min-w-0 max-w-full w-full h-[420px] sm:h-[497px] border border-[#E5E7EB] transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[180px] sm:h-[240px] bg-white bg-opacity-[0.09] backdrop-blur-[13px] relative">
              <img src="/images/figma/blog1.png" alt="Blog 1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start p-[12px] gap-[16px] sm:gap-[24px] w-full flex-1">
              <div className="flex flex-col gap-[6px] sm:gap-[8px] w-full">
                <div className="text-[#08C2C1] font-bold uppercase text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] mb-0">June, 24 2025</div>
                <div className="text-[#08C2C1] font-bold uppercase text-[18px] sm:text-[24px] leading-[28px] sm:leading-[41px] tracking-tight mb-0">Advanced Java Concurrency: Patterns and Best Practices</div>
                <div className="text-[#0E1423] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] capitalize mb-0">Concurrency is a cornerstone of modern software development, enabling applications to perform multiple tasks simultaneously and make efficient ...</div>
                <div className="text-[#7E7E7E] font-medium text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] capitalize">Read more →</div>
              </div>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="flex flex-col items-start bg-white shadow-lg overflow-hidden min-w-0 max-w-full w-full h-[420px] sm:h-[497px] border border-[#E5E7EB] transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[180px] sm:h-[240px] bg-white bg-opacity-[0.09] backdrop-blur-[13px] relative">
              <img src="/images/figma/blog2.png" alt="Blog 2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start p-[12px] gap-[16px] sm:gap-[24px] w-full flex-1">
              <div className="flex flex-col gap-[6px] sm:gap-[8px] w-full">
                <div className="text-[#08C2C1] font-bold uppercase text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] mb-0">June, 23 2025</div>
                <div className="text-[#08C2C1] font-bold uppercase text-[18px] sm:text-[24px] leading-[28px] sm:leading-[41px] tracking-tight mb-0">Google UX Design Certificate in 2025</div>
                <div className="text-[#0E1423] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] capitalize mb-0">Will the Google UX Certificate get you a UX designer job in 2025? How to take the most advantage of the course curriculum.</div>
                <div className="text-[#7E7E7E] font-medium text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] capitalize">Read more →</div>
              </div>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="flex flex-col items-start bg-white shadow-lg overflow-hidden min-w-0 max-w-full w-full h-[420px] sm:h-[497px] border border-[#E5E7EB] transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[180px] sm:h-[240px] bg-white bg-opacity-[0.09] backdrop-blur-[13px] relative">
              <img src="/images/figma/blog3.png" alt="Blog 3" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start p-[12px] gap-[16px] sm:gap-[24px] w-full flex-1">
              <div className="flex flex-col gap-[6px] sm:gap-[8px] w-full">
                <div className="text-[#08C2C1] font-bold uppercase text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] mb-0">June, 22 2025</div>
                <div className="text-[#08C2C1] font-bold uppercase text-[18px] sm:text-[24px] leading-[28px] sm:leading-[41px] tracking-tight mb-0">How Thinking Like a Product Designer Changed My Design ...</div>
                <div className="text-[#0E1423] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] capitalize mb-0">Five lessons I've learned about deliverables that Junior Designer Me could've never imagined.</div>
                <div className="text-[#7E7E7E] font-medium text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] capitalize">Read more →</div>
              </div>
            </div>
          </div>
          {/* Blog 4 */}
          <div className="flex flex-col items-start bg-white shadow-lg overflow-hidden min-w-0 max-w-full w-full h-[420px] sm:h-[497px] border border-[#E5E7EB] transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[180px] sm:h-[240px] bg-white bg-opacity-[0.09] backdrop-blur-[13px] relative">
              <img src="/images/figma/blog4.png" alt="Blog 4" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start p-[12px] gap-[16px] sm:gap-[24px] w-full flex-1">
              <div className="flex flex-col gap-[6px] sm:gap-[8px] w-full">
                <div className="text-[#08C2C1] font-bold uppercase text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] mb-0">June, 25 2025</div>
                <div className="text-[#08C2C1] font-bold uppercase text-[18px] sm:text-[24px] leading-[28px] sm:leading-[41px] tracking-tight mb-0">The Future of AI in Everyday Life</div>
                <div className="text-[#0E1423] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] capitalize mb-0">Discover how artificial intelligence is seamlessly integrating into daily routines, from smart homes to personalized healthcare solutions.</div>
                <div className="text-[#7E7E7E] font-medium text-[14px] sm:text-[16px] leading-[28px] sm:leading-[32px] capitalize">Read more →</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
