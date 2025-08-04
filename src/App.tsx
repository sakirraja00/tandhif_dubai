import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import DerniersArticles from './components/DerniersArticles';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Services />
            {/* <About /> */}
            <Pricing />
            <DerniersArticles/>
            <Contact />
            <Testimonials />
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;