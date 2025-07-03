import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    label: 'Service 1',
    title: 'IT & AI CONSULTANT',
    desc1: 'AI Based Planning • Digital Transformation',
    desc2: 'Providing strategic assistance in digital transformation, including mapping technology needs, AI-based system planning, and developing a sustainable technology roadmap.',
    button: 'Learn More',
  },
  {
    id: 2,
    label: 'Service 2',
    title: 'Web Application Development',
    desc1: 'Design • Performance • High-Scalability',
    desc2: 'Building modern web applications with responsive design, optimal performance, and high scalability to support current digital business needs.',
    button: 'Learn More',
  },
  {
    id: 3,
    label: 'Service 3',
    title: 'MOBILE Application Development',
    desc1: 'Android • iOS',
    desc2: 'Designing and developing AI-based mobile applications with excellent user experience (UX) and cross-platform compatibility (Android & iOS).',
    button: 'Learn More',
  },
  {
    id: 4,
    label: 'Service 4',
    title: 'DESKTOP Application Development',
    desc1: 'Secure • Integrated',
    desc2: 'Developing robust, secure, and integrated desktop software tailored to the specific needs of organizations or institutions.',
    button: 'Learn More',
  },
  {
    id: 5,
    label: 'Service 5',
    title: 'Geographic Information System (GIS) Development',
    desc1: 'Spatial Analyst • Visualization',
    desc2: 'Providing GIS solutions for location visualization, spatial analysis, and decision-making based on accurate and interactive geospatial data.',
    button: 'Learn More',
  },
  {
    id: 6,
    label: 'Service 6',
    title: 'TECHNICAL SUPPORT',
    desc1: '24/7 • System Operation',
    desc2: 'Providing professional 24/7 technical assistance to ensure smooth system operations with minimal disruption.',
    button: 'Learn More',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-start px-4 md:px-6">
      {/* Section Title */}
      <div className="mt-32 mb-12 w-full max-w-[920px] flex flex-col gap-6 items-start px-4 md:px-10">
        <div className="flex flex-col gap-0">
          <span className="text-[64px] leading-[96px] font-medium text-[#7E7E7E] uppercase font-poppins -mb-3">
            powering
          </span>
          <span className="text-[64px] leading-[96px] font-semibold text-[#08C2C1] uppercase font-poppins">
            the Future Through Tech
          </span>
        </div>
        <p className="text-[16px] leading-[32px] font-medium text-[#0E1423] capitalize font-poppins w-[920px]">
          We provide a wide range of technology services to help your business thrive in the digital era.
        </p>
      </div>

      {/* Services List */}
      <div className="w-full flex flex-col items-center gap-0">
        {services.map((service, idx) => (
          <React.Fragment key={service.id}>
            <div
              className={`group w-[1392px] h-[140px] bg-white/5 flex flex-row items-start p-8 gap-[480px] mb-0 transition-all duration-300
                          hover:h-[283px] hover:bg-[rgba(8,194,193,0.05)] hover:backdrop-blur-[13px] hover:shadow-lg`}
            >
              {/* Label */}
              <div className="flex flex-col items-start">
                <span className="w-[24px] h-[27px] text-[18px] leading-[27px] font-medium uppercase text-[#7E7E7E] font-poppins">
                  {service.label}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-6 w-[824px]">
                <div className="flex flex-col gap-2">
                  <span className="w-[824px] h-[36px] text-[24px] leading-[36px] font-bold uppercase text-[#08C2C1] font-poppins">
                    {service.title}
                  </span>
                  <span className="w-[824px] h-[32px] text-[16px] leading-[32px] font-medium capitalize text-[#7E7E7E] font-poppins">
                    {service.desc1}
                  </span>
                  {/* desc2 and button: Only show on hover, with transition */}
                  <span
                    className="w-[824px] h-[64px] text-[16px] leading-[32px] font-medium capitalize text-[#0E1423] font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  >
                    {service.desc2}
                  </span>
                </div>
                {/* Button is now always present in data, but its visibility is controlled by hover */}
                {service.id === 1 ? (
                  <Link
                    to="/services/ITConsultantDetailPage"
                    className="w-[196px] h-[47px] flex justify-center items-center px-6 py-2.5 gap-2 border border-[#08C2C1] rounded-[12px] bg-white text-[#08C2C1] text-[18px] leading-[27px] font-medium capitalize font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  >
                    {service.button}
                  </Link>
                ) : (
                  <button
                    className="w-[196px] h-[47px] flex justify-center items-center px-6 py-2.5 gap-2 border border-[#08C2C1] rounded-[12px] bg-white text-[#08C2C1] text-[18px] leading-[27px] font-medium capitalize font-poppins transition-opacity duration-300 opacity-0 group-hover:opacity-100 cursor-not-allowed"
                    disabled
                  >
                    {service.button}
                  </button>
                )}
              </div>
            </div>
            {/* Divider (skip after last service) */}
            {idx < services.length - 1 && (
              <div className="w-[1392px] border-t border-[#7E7E7E] opacity-30" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;