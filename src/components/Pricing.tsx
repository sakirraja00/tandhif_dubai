import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    // {
    //   name: t('basic'),
    //   price: '299',
    //   period: 'AED/mois',
    //   description: 'Parfait pour les petits espaces',
    //   features: [
    //     'Nettoyage bi-mensuel',
    //     'Aspirateur et serpillière',
    //     'Nettoyage des surfaces',
    //     'Salle de bain basique',
    //     'Support standard'
    //   ],
    //   popular: false
    // },
    {
      name: t('premium'),
      price: '19,90€',
      period: '/mois',
      description: '14 jours dessai gratuit',
      features: [
        'Clients illimités',
        'Planification avancée',
        'Facturation automatique',
        'Gestion des stocks',
        'Support client prioritaire',
        'Rapports détaillés'
      ],
      popular: true
    },
    // {
    //   name: t('enterprise'),
    //   price: '999',
    //   period: 'AED/mois',
    //   description: 'Pour les grandes propriétés',
    //   features: [
    //     'Nettoyage sur mesure',
    //     'Équipe dédiée',
    //     'Produits premium',
    //     'Service 24/7',
    //     'Manager personnel',
    //     'Rapport détaillé'
    //   ],
    //   popular: false
    // }
  ];

  return (
    <section id='about' className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricingTitle')}
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et à votre budget
          </p> */}
        </div>

        <div className="flex justify-center gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {/* {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Plus Populaire
                  </span>
                </div>
              )} */}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                Commencer l'essai gratuit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;