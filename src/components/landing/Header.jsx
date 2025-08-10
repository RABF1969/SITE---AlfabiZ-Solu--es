import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';

const Header = ({ scrollToSection, handleContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 1]);

  const navLinks = ['sobre', 'servicos', 'portfolio', 'faq'];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      style={{ opacity: headerOpacity }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-primary font-medium transition-colors duration-300 capitalize"
              >
                {item === 'servicos' ? 'Serviços' : item === 'portfolio' ? 'Portfólio' : item.toUpperCase()}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="bg-secondary hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contato
            </Button>
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-slate-300 hover:text-primary font-medium transition-colors duration-300 text-left capitalize"
                >
                  {item === 'servicos' ? 'Serviços' : item === 'portfolio' ? 'Portfólio' : item.toUpperCase()}
                </button>
              ))}
              <Button
                onClick={handleContactClick}
                className="bg-secondary hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold w-fit"
              >
                Contato
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;