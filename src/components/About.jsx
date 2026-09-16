import { motion } from 'framer-motion';
import { Target, Globe, Users, Award } from 'lucide-react';

export function About() {
  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 lg:py-32 bg-cream-100"
      aria-labelledby="about-title"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
              Sobre Nosotros
            </span>

            <h2 id="about-title" className="section-title">
              Especialistas en tecnología
              <br />
              <span className="text-primary-600">para el turismo municipal</span>
            </h2>

            <p className="section-subtitle mt-6">
              En AETERMIA entendemos cómo funciona el turismo en los municipios:
              temporadas, eventos, gestión de información y la necesidad de que todo
              esté siempre actualizado.
            </p>

            <p className="mt-6 text-lg text-dark-600 leading-relaxed">
              Trabajamos con transparencia, comunicación constante y enfoque en
              resultados para tu destino. Cada municipio es único y merece una
              solución pensada para sus atractivos, su comunidad y sus visitantes.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Target, label: 'Enfoque en tu destino' },
                { icon: Globe, label: 'Portales multilingüe' },
                { icon: Users, label: 'Para secretarías y entes' },
                { icon: Award, label: 'Calidad garantizada' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-primary-50/70 rounded-lg hover:bg-primary-100/80 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <item.icon className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-dark-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen decorativa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100/50 to-primary-200/30 border border-primary-200 shadow-sm">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-4 shadow-md">
                    <Users className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900">Enfoque en resultados</h3>
                  <p className="text-sm text-dark-600 mt-1">Transformamos la información turística de tu municipio en una experiencia digital clara para el visitante.</p>
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
