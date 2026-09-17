import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, CalendarDays, Home as HomeIcon, Sparkles, ArrowRight } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const screens = [
  {
    key: 'inicio',
    label: 'Inicio',
    icon: HomeIcon,
    image: '/images/proyectos/tandil-inicio.png',
    description: 'Buscador de destinos, categorías de interés y asistente con IA integrado para orientar al visitante.',
  },
  {
    key: 'eventos',
    label: 'Eventos',
    icon: CalendarDays,
    image: '/images/proyectos/tandil-eventos.png',
    description: 'Agenda oficial de fiestas, festivales y actividades culturales, siempre con fecha y descripción al día.',
  },
  {
    key: 'mapa',
    label: 'Mapa',
    icon: MapPin,
    image: '/images/proyectos/tandil-mapa.png',
    description: 'Mapa interactivo georreferenciado con los atractivos y prestadores habilitados, filtrable por categoría.',
  },
];

export function Portfolio() {
  const [active, setActive] = useState(screens[0].key);
  const activeScreen = screens.find((screen) => screen.key === active);

  return (
    <section
      id="proyectos"
      className="relative py-20 sm:py-28 lg:py-32 bg-cream-100"
      aria-labelledby="portfolio-title"
    >
      <WaveDivider fill="#FEFCF8" />
      <div className="section-container">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nuestro trabajo
          </span>
          <h2 id="portfolio-title" className="section-title">
            Un ejemplo real
            <br />
            <span className="text-primary-600">de nuestra tecnología</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Construimos Tandil Turismo como plataforma demo para mostrar, en la
            práctica, cómo funcionaría un portal turístico municipal completo:
            hecho a medida, con datos propios y listo para escalar.
          </p>
        </motion.div>

        {/* Aviso de estado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 text-sand-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Demo en desarrollo · aún no publicada
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
        >
          {/* Mockup con capturas */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden bg-white border border-dark-200 shadow-xl shadow-primary-900/10">
              {/* Barra estilo navegador */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-100 border-b border-dark-200">
                <span className="w-2.5 h-2.5 rounded-full bg-dark-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-300" />
                <span className="ml-3 text-[11px] text-dark-500 font-medium truncate">
                  tandilturismo.ar/{active}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScreen.key}
                  src={activeScreen.image}
                  alt={`Captura de Tandil Turismo · sección ${activeScreen.label}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>

            {/* Selector de pantallas */}
            <div className="flex flex-wrap gap-2 mt-5" role="tablist" aria-label="Secciones de la demo">
              {screens.map((screen) => (
                <button
                  key={screen.key}
                  type="button"
                  role="tab"
                  aria-selected={active === screen.key}
                  onClick={() => setActive(screen.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active === screen.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-white border border-dark-200 text-dark-600 hover:border-primary-300'
                  }`}
                >
                  <screen.icon className="w-4 h-4" aria-hidden="true" />
                  {screen.label}
                </button>
              ))}
            </div>
          </div>

          {/* Descripción de la pantalla activa */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-dark-200 rounded-xl p-6"
              >
                <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <activeScreen.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  Sección: {activeScreen.label}
                </h3>
                <p className="text-sm text-dark-600 leading-relaxed">
                  {activeScreen.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 text-sm text-dark-500 leading-relaxed">
              Esta demo la desarrollamos íntegramente nosotros para validar el
              producto con municipios interesados. No representa un contrato
              vigente con la Municipalidad de Tandil.
            </p>

            <a href="#contacto" className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700">
              Quiero algo así para mi municipio
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
