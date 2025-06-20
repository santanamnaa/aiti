import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Handshake } from 'lucide-react';
import FaqSection from '../components/home/FaqSection';

const coreValues = [
  {
    icon: <Lightbulb className="w-8 h-8 text-hijau" />, 
    title: 'Innovation & Excellence',
    desc: 'We are committed to delivering cutting-edge solutions and maintaining the highest standards in engineering consulting and telecommunications. Our goal is to drive progress by consistently improving network performance and customer satisfaction.'
  },
  {
    icon: <Handshake className="w-8 h-8 text-hijau" />,
    title: 'Precision & Reliability',
    desc: 'We ensure accuracy and dependability in every project, from meticulous drive testing to comprehensive benchmarking. Our clients trust us to provide data-driven insights and actionable recommendations that enhance network efficiency.'
  },
  // Add more values as needed
];

const aboutFaqs = [
  {
    question: 'What services does your company offer?',
    answer: 'We offer end-to-end digital transformation, AI-driven solutions, IT consulting, application development, and technical support.'
  },
  {
    question: 'Who do you work with?',
    answer: 'We partner with businesses, enterprises, and organizations seeking to innovate and excel in the digital era.'
  },
  {
    question: 'Why should I choose your company?',
    answer: 'We combine deep industry expertise, a passion for innovation, and a commitment to delivering measurable results for our clients.'
  },
  {
    question: 'How do your services benefit my business?',
    answer: 'Our solutions drive efficiency, growth, and competitive advantage through technology, automation, and data-driven decision making.'
  },
];

const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4 relative">
        <div className="max-w-3xl mx-auto pt-24 md:pt-30 pb-16 md:pb-20">
          <div className="uppercase text-white/70 tracking-widest text-sm mb-4">About Us</div>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-6">"Driving Innovation,<br />Together"</h1>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Our mission is to push the boundaries of what's possible, leveraging AI advancements and IT to empower businesses with unparalleled connectivity, automation, and intelligence.
          </p>
          <a href="/contact" className="inline-block text-white/90 border-b border-white/40 hover:opacity-80 transition text-base md:text-lg">
            Contact us here <span className="ml-1">↗</span>
          </a>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="w-full relative">
        <img src="/images/branding/logo.svg" alt="Showcase" className="w-full h-48 md:h-[60vh] object-cover object-center" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent" />
      </section>

      {/* CEO Quote Section */}
      <section className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-white font-light mb-8">
            "In this industry, every innovation stems from technology—our future depends on leveraging AI, data, and cutting-edge networks to reshape customer experiences and uncover new avenues for sustainable growth."
          </blockquote>
          <div className="text-white/70 text-base md:text-lg">Achmad Faizal, CEO &amp; Founder</div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-light text-white mb-6">Our core values</h2>
              <p className="text-white/80 text-base md:text-lg mb-10">
                The foundation of our success lies in the principles that guide everything we do. From delivering innovative solutions to fostering trusted partnerships, our values drive us to excel and empower our clients to achieve their goals.
              </p>
            </div>
            <div className="space-y-8 md:space-y-10">
              {coreValues.map((v, i) => (
                <div key={v.title} className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 mt-1">{v.icon}</div>
                  <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 w-full">
                    <div className="text-primary font-bold mb-1">#{(i+1).toString().padStart(2,'0')}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={aboutFaqs} title="FAQ" subtitle="Commonly asked questions" />
    </>
  );
};

export default AboutPage;