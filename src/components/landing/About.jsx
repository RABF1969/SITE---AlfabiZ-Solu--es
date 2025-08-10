import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Sobre a Alfabiz Soluções
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformar ideias em experiências digitais incríveis.
            Com anos de experiência, criamos sites que não apenas impressionam, mas também geram resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  alt="Equipe da Alfabiz Soluções trabalhando em projetos web" className="w-full h-auto rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-slate-300 font-medium">Projetos Entregues</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-slate-300 font-medium">Anos de Experiência</div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Design responsivo e moderno',
                'Otimização para mecanismos de busca (SEO)',
                'Velocidade de carregamento otimizada',
                'Suporte técnico especializado'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Check className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-slate-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;