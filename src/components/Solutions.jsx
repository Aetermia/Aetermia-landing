import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Ticket, Globe, LayoutDashboard, TrendingUp, ArrowRight } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const solutions = [
  {
    icon: MapPin,
    title: 'Mapa interactivo de destinos',
    description: 'Tu oferta turística visible con geolocalización: atractivos, circuitos y puntos de interés fáciles de recorrer.',
  },
  {
    icon: CalendarDays,
    title: 'Agenda de eventos y actividades',
    description: 'Publicá fiestas, ferias y actividades con fechas claras, filtros por categoría y difusión en redes y buscadores.',
  },
  {
    icon: Ticket,
    title: 'Reservas y consultas online',
    description: 'Los visitantes reservan excursiones, alojamientos y servicios directo desde tu portal, sin intermediarios.',
  },
  {
    icon: Globe,
    title: 'Portales multilingüe',
    description: 'Contenido adaptado a turistas de habla hispana, inglesa y portuguesa para ampliar tu alcance internacional.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard de gestión',
    description: 'Un panel simple para tu equipo: cargar novedades, medir visitas y administrar toda la información sin depender de nadie.',
  },
  {
    icon: TrendingUp,
    title: 'SEO local y visibilidad',
    description: 'Tu municipio aparece cuando te buscan: "qué hacer", "dónde comer" y "eventos en tu destino" desde Google.',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative py-20 sm:py-28 lg:py-32 bg-white"
      aria-labelledby="solutions-title"
    >
      <WaveDivider fill="#FEFCF8" />
      <div className="section-container">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            Para tu municipio
          </span>
          <h2 id="solutions-title" className="section-title">
            Todo lo que tu destino necesita,
            <br />
            <span className="text-primary-600">en un solo lugar</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Pensamos cada solución para que tu equipo municipal tenga el control:
            sin intermediarios, con datos propios y contenido fácil de actualizar.
          </p>
        </motion.div>

        {/* Grid de soluciones */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Soluciones para el turismo municipal"
        >
          {solutions.map((solution) => (
            <motion.article
              key={solution.title}
              variants={item}
              role="listitem"
              className="flex items-start gap-4 p-6 bg-cream-100 border border-dark-200 rounded-xl hover:border-primary-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0"
                aria-hidden="true"
              >
                <solution.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-900 mb-1.5">{solution.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{solution.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-600 mb-4">Contanos qué necesita hoy tu secretaría de turismo.</p>
          <motion.a
            href="#contacto"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Armar una propuesta a medida
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}