import { motion } from 'framer-motion';
import { Globe, RefreshCw, Zap, Target } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const stats = [
  {
    icon: Globe,
    title: 'Multilingüe',
    description: 'Portales en español, inglés y portugués para ampliar tu alcance internacional.',
  },
  {
    icon: RefreshCw,
    title: 'Siempre al día',
    description: 'Horarios, eventos y tarifas actualizados por nuestro equipo, sin que te preocupes.',
  },
  {
    icon: Zap,
    title: 'Listos para la temporada alta',
    description: 'Escalamos tu portal ante los picos de demanda de cada temporada turística.',
  },
  {
    icon: Target,
    title: 'Enfoque en tu destino',
    description: 'Cada solución pensada para los atractivos, la comunidad y los visitantes de tu municipio.',
  },
];

export function Stats() {
  return (
    <section
      className="relative bg-primary-800 py-16 sm:py-20"
      aria-label="Por qué elegirnos"
    >
      <WaveDivider fill="#FEFEF5" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sand-300 mx-auto lg:mx-0 mb-4">
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold mb-1.5">{stat.title}</h3>
              <p className="text-sm text-primary-200/80 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}