import React from 'react';
import { Home,Calendar,Package,ScrollText,Users, Building, Sparkles, Car as Carpet, AppWindow as Window, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calendar,
      title: t('residential'),
      description:  t('M1'),
      color: 'blue'
    },
    {
      icon: Package,
      title: t('commercial'),
      description:  t('M2'),
      color: 'teal'
    },
    {
      icon: ScrollText,
      title: t('deepCleaning'),
      description:  t('M3'),
      color: 'purple'
    },
    {
      icon: Users,
      title: t('carpetCleaning'),
      description:  t('M4'),
      color: 'green'
    },
    // {
    //   icon: Window,
    //   title: t('windowCleaning'),
    //   description: 'Nettoyage de vitres pour une transparence parfaite',
    //   color: 'orange'
    // },
    // {
    //   icon: Truck,
    //   title: t('moveInOut'),
    //   description: 'Nettoyage complet lors de votre déménagement',
    //   color: 'red'
    // }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    En savoir plus →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;