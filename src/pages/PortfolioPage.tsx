import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


interface ExperienceItem {
  yearRange: string;
  title: string;
  company: string;
  location?: string;
  bullets: string[];
}

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
}

interface DireksiData {
  name: string;
  title: string;
  location: string;
  overview: string;
  summary: string;
  skills: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: string[];
  tools: { category: string; items: string[] }[];
}

interface PMExperience {
  year: string;
  title: string;
  company: string;
  roles: string;
}

interface PMData {
  name: string;
  title: string;
  location: string;
  skills: string[];
  experiences: PMExperience[];
}

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'direksi' | 'pm'>('direksi');

  const direksi: DireksiData = {
    name: t('portfolio.direksi.name'),
    title: t('portfolio.direksi.title'),
    location: t('portfolio.direksi.location'),
    overview:
      '',
    summary:
      t('portfolio.direksi.summary'),
    skills: [
      t('portfolio.direksi.skills.0'),
      t('portfolio.direksi.skills.1'),
      t('portfolio.direksi.skills.2'),
      t('portfolio.direksi.skills.3'),
      t('portfolio.direksi.skills.4'),
      t('portfolio.direksi.skills.5'),
      t('portfolio.direksi.skills.6'),
      t('portfolio.direksi.skills.7'),
      t('portfolio.direksi.skills.8'),
      t('portfolio.direksi.skills.9'),
    ],
    experiences: [
      {
        yearRange: t('portfolio.direksi.experiences.0.yearRange'),
        title: t('portfolio.direksi.experiences.0.title'),
        company: t('portfolio.direksi.experiences.0.company'),
        location: t('portfolio.direksi.experiences.0.location'),
        bullets: [
          t('portfolio.direksi.experiences.0.bullets.0'),
          t('portfolio.direksi.experiences.0.bullets.1'),
          t('portfolio.direksi.experiences.0.bullets.2')
        ],
      },
      {
        yearRange: t('portfolio.direksi.experiences.1.yearRange'),
        title: t('portfolio.direksi.experiences.1.title'),
        company: t('portfolio.direksi.experiences.1.company'),
        location: t('portfolio.direksi.experiences.1.location'),
        bullets: [
          t('portfolio.direksi.experiences.1.bullets.0'),
          t('portfolio.direksi.experiences.1.bullets.1')
        ],
      },
      {
        yearRange: t('portfolio.direksi.experiences.2.yearRange'),
        title: t('portfolio.direksi.experiences.2.title'),
        company: t('portfolio.direksi.experiences.2.company'),
        location: t('portfolio.direksi.experiences.2.location'),
        bullets: [
          t('portfolio.direksi.experiences.2.bullets.0'),
          t('portfolio.direksi.experiences.2.bullets.1')
        ],
      },
      {
        yearRange: t('portfolio.direksi.experiences.3.yearRange'),
        title: t('portfolio.direksi.experiences.3.title'),
        company: t('portfolio.direksi.experiences.3.company'),
        location: t('portfolio.direksi.experiences.3.location'),
        bullets: [
          t('portfolio.direksi.experiences.3.bullets.0'),
          t('portfolio.direksi.experiences.3.bullets.1')
        ],
      },
      {
        yearRange: t('portfolio.direksi.experiences.4.yearRange'),
        title: t('portfolio.direksi.experiences.4.title'),
        company: t('portfolio.direksi.experiences.4.company'),
        location: t('portfolio.direksi.experiences.4.location'),
        bullets: [
          t('portfolio.direksi.experiences.4.bullets.0'),
          t('portfolio.direksi.experiences.4.bullets.1')
        ],
      },
    ],
    education: [
      {
        year: t('portfolio.direksi.education.0.year'),
        institution: t('portfolio.direksi.education.0.institution'),
        degree: t('portfolio.direksi.education.0.degree')
      }
    ],
    certifications: [
      t('portfolio.direksi.certifications.0'),
      t('portfolio.direksi.certifications.1')
    ],
    tools: [
      { category: t('portfolio.direksi.tools.0.category'), items: ['Java', 'Kotlin', 'Python', 'Go', 'Node.js', 'C#', 'JavaScript'] },
      { category: t('portfolio.direksi.tools.1.category'), items: ['Express.js', 'Semantic UI', 'jQuery', 'Pug.js', 'Swagger'] },
      { category: t('portfolio.direksi.tools.2.category'), items: ['Docker', 'MinIO', 'Supabase'] },
      { category: t('portfolio.direksi.tools.3.category'), items: ['Linux', 'GitLab', 'Trello', 'Apache Kafka', 'NGINX'] },
      { category: t('portfolio.direksi.tools.4.category'), items: ['SSH', 'SFTP', 'SCP', 'SSL/TLS'] },
      { category: t('portfolio.direksi.tools.5.category'), items: ['Figma'] },
      { category: t('portfolio.direksi.tools.6.category'), items: ['Flutter', 'React Native'] },
      { category: t('portfolio.direksi.tools.7.category'), items: ['GeoServer', 'Neo4j Spatial'] },
    ],
  };

  const pm: PMData = {
    name: t('portfolio.pm.name'),
    title: t('portfolio.pm.title'),
    location: t('portfolio.pm.location'),
    skills: [
      t('portfolio.pm.skills.0'),
      t('portfolio.pm.skills.1'),
      t('portfolio.pm.skills.2'),
      t('portfolio.pm.skills.3'),
      t('portfolio.pm.skills.4'),
      t('portfolio.pm.skills.5'),
      t('portfolio.pm.skills.6'),
      t('portfolio.pm.skills.7'),
      t('portfolio.pm.skills.8'),
      t('portfolio.pm.skills.9'),
    ],
    experiences: [
      {
        year: t('portfolio.pm.experiences.0.year'),
        title: t('portfolio.pm.experiences.0.title'),
        company: t('portfolio.pm.experiences.0.company'),
        roles: t('portfolio.pm.experiences.0.roles'),
      },
      {
        year: t('portfolio.pm.experiences.1.year'),
        title: t('portfolio.pm.experiences.1.title'),
        company: t('portfolio.pm.experiences.1.company'),
        roles: t('portfolio.pm.experiences.1.roles'),
      },
      {
        year: t('portfolio.pm.experiences.2.year'),
        title: t('portfolio.pm.experiences.2.title'),
        company: t('portfolio.pm.experiences.2.company'),
        roles: t('portfolio.pm.experiences.2.roles'),
      },
      {
        year: t('portfolio.pm.experiences.3.year'),
        title: t('portfolio.pm.experiences.3.title'),
        company: t('portfolio.pm.experiences.3.company'),
        roles: t('portfolio.pm.experiences.3.roles'),
      },
      {
        year: t('portfolio.pm.experiences.4.year'),
        title: t('portfolio.pm.experiences.4.title'),
        company: t('portfolio.pm.experiences.4.company'),
        roles: t('portfolio.pm.experiences.4.roles'),
      },
      {
        year: t('portfolio.pm.experiences.5.year'),
        title: t('portfolio.pm.experiences.5.title'),
        company: t('portfolio.pm.experiences.5.company'),
        roles: t('portfolio.pm.experiences.5.roles'),
      },
      {
        year: t('portfolio.pm.experiences.6.year'),
        title: t('portfolio.pm.experiences.6.title'),
        company: t('portfolio.pm.experiences.6.company'),
        roles: t('portfolio.pm.experiences.6.roles'),
      },
      {
        year: t('portfolio.pm.experiences.7.year'),
        title: t('portfolio.pm.experiences.7.title'),
        company: t('portfolio.pm.experiences.7.company'),
        roles: t('portfolio.pm.experiences.7.roles'),
      },
      {
        year: t('portfolio.pm.experiences.8.year'),
        title: t('portfolio.pm.experiences.8.title'),
        company: t('portfolio.pm.experiences.8.company'),
        roles: t('portfolio.pm.experiences.8.roles'),
      },
      {
        year: t('portfolio.pm.experiences.9.year'),
        title: t('portfolio.pm.experiences.9.title'),
        company: t('portfolio.pm.experiences.9.company'),
        roles: t('portfolio.pm.experiences.9.roles'),
      },
      {
        year: t('portfolio.pm.experiences.10.year'),
        title: t('portfolio.pm.experiences.10.title'),
        company: t('portfolio.pm.experiences.10.company'),
        roles: t('portfolio.pm.experiences.10.roles'),
      },
      {
        year: t('portfolio.pm.experiences.11.year'),
        title: t('portfolio.pm.experiences.11.title'),
        company: t('portfolio.pm.experiences.11.company'),
        roles: t('portfolio.pm.experiences.11.roles'),
      },
      {
        year: t('portfolio.pm.experiences.12.year'),
        title: t('portfolio.pm.experiences.12.title'),
        company: t('portfolio.pm.experiences.12.company'),
        roles: t('portfolio.pm.experiences.12.roles'),
      },
      {
        year: t('portfolio.pm.experiences.13.year'),
        title: t('portfolio.pm.experiences.13.title'),
        company: t('portfolio.pm.experiences.13.company'),
        roles: t('portfolio.pm.experiences.13.roles'),
      },
      {
        year: t('portfolio.pm.experiences.14.year'),
        title: t('portfolio.pm.experiences.14.title'),
        company: t('portfolio.pm.experiences.14.company'),
        roles: t('portfolio.pm.experiences.14.roles'),
      },
    ],
  };

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
              {activeTab === 'direksi' ? (
                <>
                  <span className="text-secondary">{t('portfolio.header.direksi')}</span>
                </>
              ) : (
                <>
                  <span className="text-secondary">{t('portfolio.header.pm')}</span>
                </>
              )}
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
            {t('portfolio.header.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-0">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-10">
        <button
          className={`px-6 py-0 rounded-t-lg border-b-2 ${
            activeTab === 'direksi'
              ? 'border-secondary text-secondary font-semibold'
              : 'border-transparent text-gray-600'
          }`}
          onClick={() => setActiveTab('direksi')}
        >
          {t('portfolio.tabs.direksi')}
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg border-b-2 ${
            activeTab === 'pm'
              ? 'border-secondary text-secondary font-semibold'
              : 'border-transparent text-gray-600'
          }`}
          onClick={() => setActiveTab('pm')}
        >
          {t('portfolio.tabs.pm')}
        </button>
      </div>

      {/* Content */}
      {activeTab === 'direksi' ? (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
          {/* Header Card */}
          <div className="rounded-3xl px-6 py-12 shadow-lg max-w-3xl mx-auto w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-1">{direksi.name}</h2>
            <p className="text-secondary text-lg md:text-xl mb-1">{direksi.title}</p>
            <p className="text-gray-500 text-base md:text-lg">{direksi.location}</p>
          </div>
          {/* Overview */}
          {/* <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Portofolio Direksi</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">{direksi.overview}</p>
          </div> */}
          {/* Ringkasan Profesional */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{t('portfolio.sections.professionalSummary')}</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">{direksi.summary}</p>
          </div>
          {/* Keahlian Utama */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{t('portfolio.sections.mainSkills')}</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700 text-base sm:text-lg">
              {direksi.skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          {/* Pengalaman Profesional */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{t('portfolio.sections.professionalExperience')}</h3>
            <div className="space-y-6 mt-4">
              {direksi.experiences.map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <div className="min-w-max text-secondary font-semibold text-sm sm:text-base md:text-lg md:pt-1">{exp.yearRange}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{exp.company}{exp.location && ` — ${exp.location}`}</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 text-sm sm:text-base">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pendidikan */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{t('portfolio.sections.education')}</h3>
            <ul className="space-y-4 mt-2">
              {direksi.education.map((e, i) => (
                <li key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="min-w-max font-semibold text-secondary text-sm sm:text-base md:text-lg">{e.year}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">{e.institution}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{e.degree}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Sertifikasi */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{t('portfolio.sections.certifications')}</h3>
            <ul className="mt-2 space-y-1 text-secondary text-base sm:text-lg">
              {direksi.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
          {/* Header Card Project Manager */}
          <div className="rounded-3xl px-6 py-12 shadow-lg max-w-3xl mx-auto w-full text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">{pm.name}</h2>
            <p className="text-secondary text-base sm:text-lg mb-1">{pm.title}</p>
            <p className="text-gray-500 text-sm sm:text-base">{pm.location}</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('portfolio.sections.mainSkills')}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-base sm:text-lg">
            {pm.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('portfolio.sections.professionalExperience')}</h3>
          <div className="space-y-6">
            {pm.experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                <div className="min-w-max text-secondary font-semibold text-sm sm:text-base md:text-lg md:pt-1">{exp.year}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-600 text-sm sm:text-base"><span className="font-semibold">{t('portfolio.pm.rolesLabel')}</span> {exp.roles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
