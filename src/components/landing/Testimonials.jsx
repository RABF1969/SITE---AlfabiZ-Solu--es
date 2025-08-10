import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData } from '@/data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-primary text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;