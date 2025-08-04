import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
<section id="home" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 text-center text-white ">
  <div className="max-w-4xl mx-auto px-6 mt-5">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-black  dark:text-white mb-6">

     {t('heroTitleKleanitStyle')}
    </h1>
    <p className="text-lg text-black dark:text-white  mb-10">
    {t('heroSubtitleKleanitStyle')}
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="px-6 py-3 rounded-full bg-[#FFD900] hover:bg-yellow-400 text-black font-semibold transition-colors duration-200">
      {t('startFreeTrial')}
      </button>
      <button className="px-6 py-3 rounded-full bg-[#3A3A3C] hover:bg-[#505052] text-white font-semibold transition-colors duration-200">
      {t('discoverFeatures')}
      </button>
    </div>
  </div>
</section>
  );
};

export default Hero;