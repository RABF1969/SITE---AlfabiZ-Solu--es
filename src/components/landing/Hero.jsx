import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection, handleContactClick }) => {

  return (
    <section className="pt-24 pb-16 hero-pattern min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">Sites que</span>
                <br />
                <span className="text-foreground">Convertem</span>
              </motion.h1>
              <motion.p
                className="text-xl text-slate-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforme sua presença digital com sites profissionais, modernos e otimizados para resultados.
                Sua empresa merece destaque na web!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 pulse-glow"
              >
                Ver Portfólio <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <span className="text-slate-300 font-medium">+50 clientes satisfeitos</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  alt="Profissional criando sites modernos e responsivos" className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-semibold">100% Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;