// Updated Footer.tsx
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../images/logo.png';
import icon from '../images/imgpsh_fullsize_anim__1_-removebg-preview.png';


const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
          <div 
            className="flex items-center cursor-pointer group" 
          
          >
            <div className="relative">
            <img
               src={icon}
               alt="App Icon"
               className="h-7 w-7 mr-1 group-hover:scale-110 transition-transform duration-300"
              />

            </div>
           <div className="flex items-center">
           <img
              src={logo}
              alt="Tandhif Logo"
              className="h-4 object-contain "
            />
           </div>  
          </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerCompanyDesc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('features')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('pricing')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('blog')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legalInfo')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('legalNotice')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('termsOfUse')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">info@tandhifdubai.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-400">{t('address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t('footerText')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
