import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/data/pricingData';

const Pricing = ({ handlePurchaseClick }) => {

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 border ${
                plan.popular
                  ? 'bg-primary/10 border-primary transform scale-105'
                  : 'bg-card border-border hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold mb-2 gradient-text">
                  {plan.price}
                </div>
                <div className="text-sm text-slate-400">
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="flex-shrink-0 text-green-500" size={20} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handlePurchaseClick}
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Escolher Plano
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;