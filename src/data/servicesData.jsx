import React from 'react';
import { Code, Palette, Zap, Users, Globe, Award } from 'lucide-react';

export const servicesData = [
  {
    icon: <Code className="text-amber-600" size={40} />,
    title: 'Desenvolvimento Web',
    description: 'Sites responsivos e modernos com as melhores tecnologias do mercado'
  },
  {
    icon: <Palette className="text-amber-600" size={40} />,
    title: 'Design Personalizado',
    description: 'Layouts únicos que refletem a identidade da sua marca'
  },
  {
    icon: <Zap className="text-amber-600" size={40} />,
    title: 'Otimização SEO',
    description: 'Seu site no topo dos resultados de busca do Google'
  },
  {
    icon: <Users className="text-amber-600" size={40} />,
    title: 'E-commerce',
    description: 'Lojas virtuais completas para vender online'
  },
  {
    icon: <Globe className="text-amber-600" size={40} />,
    title: 'Hospedagem',
    description: 'Hospedagem segura e confiável para seu site'
  },
  {
    icon: <Award className="text-amber-600" size={40} />,
    title: 'Suporte 24/7',
    description: 'Suporte técnico sempre que você precisar'
  }
];