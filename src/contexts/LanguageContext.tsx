import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: Direction;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    
    // Hero Section
    heroTitleKleanitStyle: 'Simplifiez la gestion de votre entreprise de nettoyage',
    heroSubtitleKleanitStyle: 'Tandhif vous aide à optimiser vos interventions, gérer vos équipes et développer votre activité.',
    startFreeTrial: 'Commencer l essai gratuit',
    discoverFeatures: 'Découvrir les fonctionnalités',
    
    // Services
    servicesTitle: 'Tout ce dont vous avez besoin pour gérer votre activité',
    servicesSubtitle: 'Solutions de nettoyage complètes adaptées à vos besoins',
    residential: 'Planification intelligente',
    M1:'Optimisez vos interventions avec notre système de planification avancé.',
    M2:'Suivez vos produits et équipements en temps réel.',
    M3:'Générez et envoyez vos factures en quelques clics.',
    M4:"Coordonnez efficacement vos équipes sur le terrain.",
    commercial: 'Gestion des stocks',
    deepCleaning: 'Facturation automatisée',
    carpetCleaning: 'Gestion déquipe',
    // windowCleaning: 'Nettoyage de Vitres',
    // moveInOut: 'Nettoyage Déménagement',
    
    // About
    aboutTitle: 'À Propos de Tandhif Dubai',
    aboutText: 'Depuis notre établissement à Dubaï, Tandhif s\'est engagé à fournir des services de nettoyage exceptionnels qui dépassent les attentes. Notre équipe de professionnels qualifiés utilise des techniques avancées et des produits écologiques pour garantir un environnement propre et sain.',
    
    // Contact
    contactTitle: 'Contactez-Nous',
    contactSubtitle: 'Prêt à transformer votre espace ? Contactez-nous dès aujourd\'hui',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    message: 'Message',
    send: 'Envoyer',
    
    // Footer
    footerText: '© 2025 Tandhif Dubai. Tous droits réservés.',
    
    // Pricing
    pricingTitle: 'Une offre simple et transparente',
    basic: 'Offre Unique',
    premium: 'Offre Unique',
    enterprise: 'Entreprise',
    
    // Testimonials
    testimonialsTitle: 'Ce Que Disent Nos Clients',
    
    // WhatsApp
    whatsappText: 'Chattez avec nous',

    latestArticles: 'Derniers articles', // en: 'Latest Articles', ar: 'أحدث المقالات'
article1Title: 'Comment optimiser la gestion de votre entreprise de nettoyage en 2024 | Guide complet',
article1Desc: 'Guide pratique pour transformer votre entreprise de nettoyage grâce aux nouvelles technologies et stratégies de gestion. Découvrez comment augmenter votre efficacité et votre rentabilité.',
article2Title: 'Les tendances révolutionnaires du nettoyage professionnel en 2024 | Analyse complète',
article2Desc: 'Analyse approfondie des innovations technologiques et des nouvelles pratiques qui révolutionnent le secteur du nettoyage professionnel en 2024.',
article3Title: 'Guide ultime : Réussir dans le secteur du ménage à domicile en 2024',
article3Desc: 'Découvrez les stratégies essentielles pour créer et développer une entreprise de ménage à domicile prospère. Guide pratique pour les entrepreneurs du secteur.'

  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitleKleanitStyle: 'Simplify the management of your cleaning business',
heroSubtitleKleanitStyle: 'Tandhif helps you optimize your operations, manage your teams, and grow your business.',
startFreeTrial: 'Start Free Trial',
discoverFeatures: 'Discover Features',

// Services
servicesTitle: 'Everything you need to manage your business',
servicesSubtitle: 'Complete cleaning solutions tailored to your needs',
residential: 'Smart Scheduling',
M1: 'Optimize your operations with our advanced scheduling system.',
M2: 'Track your products and equipment in real time.',
M3: 'Generate and send your invoices in just a few clicks.',
M4: 'Coordinate your field teams efficiently.',
commercial: 'Inventory Management',
deepCleaning: 'Automated Invoicing',
carpetCleaning: 'Team Management',

    // About
    aboutTitle: 'About Tandhif Dubai',
    aboutText: 'Since our establishment in Dubai, Tandhif has been committed to providing exceptional cleaning services that exceed expectations. Our team of qualified professionals uses advanced techniques and eco-friendly products to ensure a clean and healthy environment.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Ready to transform your space? Get in touch with us today',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    
    // Footer
    footerText: '© 2025 Tandhif Dubai. All rights reserved.',
    
    // Pricing
    pricingTitle: 'Pricing Plans',
    basic: 'Basic',
    premium: 'Premium',
    enterprise: 'Enterprise',
    
    // Testimonials
    testimonialsTitle: 'What Our Clients Say',
    
    // WhatsApp
    whatsappText: 'Chat with us',


    latestArticles: 'Latest Articles',
article1Title: 'How to Optimize Your Cleaning Business in 2024 | Complete Guide',
article1Desc: 'Practical guide to transform your cleaning business with new technologies and management strategies. Learn how to boost your efficiency and profitability.',
article2Title: 'Revolutionary Trends in Professional Cleaning in 2024 | Complete Analysis',
article2Desc: 'In-depth analysis of technological innovations and new practices revolutionizing the professional cleaning sector in 2024.',
article3Title: 'Ultimate Guide: Succeeding in the Home Cleaning Sector in 2024',
article3Desc: 'Discover essential strategies to create and grow a successful home cleaning business. A practical guide for sector entrepreneurs.'

  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitleKleanitStyle: 'بسّط إدارة أعمال التنظيف الخاصة بك',
heroSubtitleKleanitStyle: 'تانديف تساعدك على تحسين عملياتك، إدارة فرقك، وتطوير نشاطك.',
startFreeTrial: 'ابدأ التجربة المجانية',
discoverFeatures: 'اكتشف الميزات',

// Services
servicesTitle: 'كل ما تحتاجه لإدارة عملك',
servicesSubtitle: 'حلول تنظيف شاملة مصممة حسب احتياجاتك',
residential: 'جدولة ذكية',
M1: 'قم بتحسين عملياتك باستخدام نظام الجدولة المتقدم لدينا.',
M2: 'تابع منتجاتك ومعداتك في الوقت الحقيقي.',
M3: 'أنشئ وأرسل الفواتير ببضع نقرات فقط.',
M4: 'نسّق فرق العمل الميدانية بكفاءة.',
commercial: 'إدارة المخزون',
deepCleaning: 'فواتير تلقائية',
carpetCleaning: 'إدارة الفريق',

    // About
    aboutTitle: 'حول تنظيف دبي',
    aboutText: 'منذ تأسيسنا في دبي، التزمت تنظيف بتقديم خدمات تنظيف استثنائية تفوق التوقعات. يستخدم فريقنا من المحترفين المؤهلين تقنيات متقدمة ومنتجات صديقة للبيئة لضمان بيئة نظيفة وصحية.',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'مستعد لتحويل مساحتك؟ تواصل معنا اليوم',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Footer
    footerText: '© 2025 تنظيف دبي. جميع الحقوق محفوظة.',
    
    // Pricing
    pricingTitle: 'خطط الأسعار',
    basic: 'أساسي',
    premium: 'مميز',
    enterprise: 'مؤسسي',
    
    // Testimonials
    testimonialsTitle: 'ما يقوله عملاؤنا',
    
    // WhatsApp
    whatsappText: 'تحدث معنا',

    latestArticles: "أحدث المقالات",
  article1Title: "كيفية تحسين عملك في مجال التنظيف في عام 2024 | دليل شامل",
  article1Desc: "دليل عملي لتحويل عملك في مجال التنظيف باستخدام التقنيات الحديثة واستراتيجيات الإدارة. تعرف على كيفية زيادة الكفاءة والربحية.",
  article2Title: "اتجاهات ثورية في التنظيف الاحترافي في عام 2024 | تحليل كامل",
  article2Desc: "تحليل معمق للابتكارات التكنولوجية والممارسات الجديدة التي تحدث ثورة في قطاع التنظيف الاحترافي في عام 2024.",
  article3Title: "الدليل النهائي: النجاح في قطاع تنظيف المنازل في عام 2024",
  article3Desc: "اكتشف الاستراتيجيات الأساسية لإنشاء وتطوير عمل ناجح في مجال تنظيف المنازل. دليل عملي لرواد الأعمال في هذا القطاع."

  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      <div dir={direction} className={direction === 'rtl' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};