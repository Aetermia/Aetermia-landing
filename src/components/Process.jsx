import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico del destino',
    description: 'Analizamos tu oferta turística, tus procesos y qué necesita hoy tu visitante para definir la mejor solución.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Diseño y desarrollo',
    description: 'Construimos tu portal o aplicación con identidad propia: mapas, eventos, reservas, idiomas y panel de gestión.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Lanzamiento',
    description: 'Publicamos, capacitamos a tu equipo y dejamos todo listo para que lo uses sin depender de terceros.',
  },
  {
    icon: RefreshCw,
    number: '04',
    title: 'Mantenimiento y escalado',
    description: 'Actualizamos contenido, monitoreamos el servicio y escalamos ante temporadas altas y picos de demanda.',
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative py-20 sm:py-28 lg:py-32 bg-cream-200"
      aria-labelledby="process-title"
    >
      <WaveDivider fill="#193628" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sand-100 text-sand-700 rounded-full text-sm font-medium mb-4">
            Cómo trabajamos
          </span>
          <h2 id="process-title" className="section-title">
            Un proceso claro,
            <br />
            <span className="text-primary-600">del diagnóstico al soporte continuo</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Acompañamos a tu municipalidad en cada etapa, con comunicación constante
            y resultados medibles para tu destino.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-primary-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left bg-white rounded-2xl border border-dark-200 p-6 sm:p-8 hover:border-primary-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                    <step.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-bold text-sand-300 select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{step.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}