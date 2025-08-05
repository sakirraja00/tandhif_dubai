import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language, direction } = useLanguage();

  const testimonials = [
    {
      name: 'Marie Laurent',
      position: {
        fr: 'Directrice, CleanPro Services',
        en: 'Director, CleanPro Services',
        ar: 'مديرة، CleanPro Services'
      },
      content: {
        fr: 'KLEANIT a révolutionné notre façon de gérer nos interventions. Notre productivité a augmenté de 40% !',
        en: 'KLEANIT has revolutionized how we manage our operations. Our productivity increased by 40%!',
        ar: 'لقد غيّر KLEANIT طريقتنا في إدارة عملياتنا. زادت إنتاجيتنا بنسبة 40٪!'
      },
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Thomas Dubois',
      position: {
        fr: 'Entrepreneur',
        en: 'Entrepreneur',
        ar: 'رائد أعمال'
      },
      content: {
        fr: 'Un outil indispensable pour mon entreprise de nettoyage. Le support client est exceptionnel.',
        en: 'An essential tool for my cleaning business. The customer support is outstanding.',
        ar: 'أداة لا غنى عنها لشركتي. دعم العملاء ممتاز.'
      },
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sophie Martin',
      position: {
        fr: 'Gérante, EcoClean',
        en: 'Manager, EcoClean',
        ar: 'مديرة، EcoClean'
      },
      content: {
        fr: 'Interface intuitive et fonctionnalités complètes. Exactement ce dont nous avions besoin.',
        en: 'Intuitive interface and complete features. Exactly what we needed.',
        ar: 'واجهة سهلة الاستخدام وميزات شاملة. بالضبط ما كنا بحاجة إليه.'
      },
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('testimonialsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
              dir={direction}
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-blue-500 opacity-50" />
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.content[language]}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position[language]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
