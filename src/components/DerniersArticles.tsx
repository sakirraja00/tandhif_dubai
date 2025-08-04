import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import img1 from '../images/Client1.jpg';
import img2 from '../images/Cling2.jpg';
import img3 from '../images/cling3.jpg';
const DerniersArticles: React.FC = () => {
  const { t, language } = useLanguage();

  const articles = [
    {
      titleKey: 'article1Title',
      descKey: 'article1Desc',
      date: '15 Mars 2024',
      readTime: '10 min de lecture',
      image: img1
    },
    {
      titleKey: 'article2Title',
      descKey: 'article2Desc',
      date: '10 Mars 2024',
      readTime: '12 min de lecture',
      image: img2,
    },
    {
      titleKey: 'article3Title',
      descKey: 'article3Desc',
      date: '5 Mars 2024',
      readTime: '15 min de lecture',
      image: img3
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
         <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
        {t('latestArticles')}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {articles.map((article, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-105">
            <img src={article.image} alt="" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3  className="text-xl font-semibold mb-3 text-black dark:text-white hover:text-blue-500 transition-colors duration-200">
                {t(article.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(article.descKey)}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="mr-2">📅 {article.date}</span>
                <span>• {article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default DerniersArticles;
