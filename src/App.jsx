import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Newsletter from '@/components/landing/Newsletter';
import Footer from '@/components/landing/Footer';
import WhatsappButton from '@/components/landing/WhatsappButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phone = '5594991544129';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Alfabiz Soluções.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Alfabiz Soluções - Criação de Sites Profissionais</title>
        <meta name="description" content="Transforme sua presença digital com sites profissionais e modernos. A Alfabiz Soluções oferece desenvolvimento web de alta qualidade com design responsivo e otimização SEO." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header scrollToSection={scrollToSection} handleContactClick={handleWhatsAppClick} />
        <main>
          <Hero scrollToSection={scrollToSection} handleContactClick={handleWhatsAppClick} />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Pricing handlePurchaseClick={handleWhatsAppClick} />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
        <WhatsappButton onClick={handleWhatsAppClick} />
        <Toaster />
      </div>
    </>
  );
}

export default App;