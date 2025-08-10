import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "🎉 Inscrição realizada!",
        description: "Você receberá nossas novidades em breve!",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Fique por dentro das novidades
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Receba dicas exclusivas sobre desenvolvimento web e marketing digital
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-full border-2 bg-card border-border focus:border-primary focus:outline-none text-foreground"
              required
            />
            <Button
              type="submit"
              className="bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap"
            >
              Inscrever-se
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;