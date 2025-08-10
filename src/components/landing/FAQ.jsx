import React from 'react';
import { motion } from 'framer-motion';
import { faqData } from '@/data/faqData';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
              <p className="text-slate-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;