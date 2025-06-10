import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-200 text-lg mb-8 font-light">
              {t('footer.about_description')}
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Uncomment and update with real links if available */}
              {/* <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a> */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.links')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services#network-inventory" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  Network Inventory & Auto-Discovery
                </Link>
              </li>
              <li>
                <Link to="/services#oss-bss" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  OSS/BSS Integration & Automation
                </Link>
              </li>
              <li>
                <Link to="/services#gis" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  Geospatial & GIS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#custom-software" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  IT & AI Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#integration" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  System Integration & Modernization
                </Link>
              </li>
              <li>
                <Link to="/services#support" className="text-gray-200 text-lg hover:text-secondary font-semibold transition-colors">
                  Technical Support & Managed Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('contact.title')}</h3>
            <ul className="space-y-6">
              <li className="flex items-center justify-start">
                <MapPin className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-lg font-medium">
                  <a href="https://maps.app.goo.gl/2Qn6Qw2v8Qw1v1vA7" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Jl. Manglid, Komplek Grand Kopo Parahyangan Blok A No 20, Margahayu Selatan, Margahayu Kab. Bandung Jawa Barat
                  </a>
                </span>
              </li>
              <li className="flex items-center justify-start">
                <Mail className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-lg font-medium">
                  <a href="mailto:hr@aitiserve.co.id" target="_blank" rel="noopener noreferrer" className="hover:underline">hr@aitiserve.co.id</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-base mb-4 md:mb-0 font-light">
            Copyright © PT AITISERVE DJAYA NARAYA (AITISERVE) 2025. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <Link to="/privacy-policy" className="text-gray-200 text-base hover:text-secondary font-semibold transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-200 text-base hover:text-secondary font-semibold transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;