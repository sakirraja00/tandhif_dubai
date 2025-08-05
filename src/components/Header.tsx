import React from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../images/logo.png';
import icon from '../images/imgpsh_fullsize_anim__1_-removebg-preview.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const { language, setLanguage, t, direction } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);``
  };

  const languages = [
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'ar' as const, name: 'العربية', flag: '🇦🇪' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('contact')}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {/* <Globe size={18} /> */}
                <span style={{ fontSize: '30px', lineHeight: '20px' }}>
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
                <span className="text-sm font-semibold">
    {language.toUpperCase()}
  </span>

              </button>
              
              {isLangOpen && (
                <div className={`absolute ${direction === 'rtl' ? 'left-0' : 'right-0'} mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${
                        language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
  onClick={toggleTheme}
  className="p-2 border border-gray-400 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
>
  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
</button>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('contact')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;