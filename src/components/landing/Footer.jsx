import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/landing/Logo';

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <Logo />
            </div>
            <p className="text-slate-400">
              Transformando ideias em experiências digitais incríveis desde 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-primary mb-4 block">Serviços</span>
            <ul className="space-y-2 text-slate-300">
              <li>Desenvolvimento Web</li>
              <li>Design Personalizado</li>
              <li>E-commerce</li>
              <li>Otimização SEO</li>
              <li>Hospedagem</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-primary mb-4 block">Empresa</span>
            <ul className="space-y-2 text-slate-300">
              <li>Sobre Nós</li>
              <li>Portfólio</li>
              <li>Depoimentos</li>
              <li>Blog</li>
              <li>Carreira</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-primary mb-4 block">Contato</span>
            <div className="space-y-3 text-slate-300">
              <a href="tel:+5594991544129" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>(94) 99154-4129</span>
              </a>
              <a href="mailto:contato.alfabiz@gmail.com" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>contato.alfabiz@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Redenção, PA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Alfabiz Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;