import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Globe, MapPin, Calendar, Users, Star, Sun, Mountain } from 'lucide-react';

const attractions = ['Playa y balneario', 'Casco histórico', 'Circuito gastronómico'];
const languages = ['ES', 'EN', 'PT'];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-primary-50/70" />
        {/* Resplandor del atardecer */}
        <div className="absolute -top-32 -right-24 w-2/3 h-2/3 bg-gradient-to-bl from-sand-200/80 via-sand-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-primary-100/40 to-transparent rounded-full blur-3xl" />
        {/* Silueta de montañas */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-48 sm:h-64 lg:h-80 text-primary-900 opacity-[0.06]"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,260 L0,196 L160,120 L320,212 L500,140 L680,228 L880,150 L1080,232 L1260,180 L1440,250 L1440,260 Z" />
          <path d="M0,260 L0,232 L220,180 L420,244 L640,200 L860,256 L1080,220 L1440,252 L1440,260 Z" opacity="0.55" />
        </svg>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/60 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              Tecnología para Turismo Municipal
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight tracking-tight text-balance"
            >
              Potenciá el turismo de tu
              <br />
              <span className="text-primary-600">municipio con tecnología</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-dark-600 leading-relaxed max-w-xl text-balance"
            >
              Desarrollamos, mantenemos y escalamos portales y aplicaciones de
              turismo para municipios: destinos, eventos, reservas e información
              siempre al día para tus visitantes.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contacto"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Propuesta
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#servicios"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conocé nuestra solución
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Panel de viaje */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="hidden lg:block relative"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md ml-auto">
              {/* Tarjeta de destino */}
              <div className="bg-white rounded-3xl shadow-xl shadow-primary-900/10 border border-dark-200/80 overflow-hidden">
                {/* Imagen ficticia de destino */}
                <div className="relative h-44 bg-gradient-to-br from-sand-200 via-sand-400 to-primary-600">
                  <Mountain className="absolute -bottom-8 right-8 w-28 h-28 text-white/25" />
                  <Sun className="absolute top-4 right-4 w-10 h-10 text-sand-100/90" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-primary-800 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    Destino del mes
                  </span>
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-1 text-white/95 text-sm font-medium">
                    <Star className="w-4 h-4 text-sand-200 fill-current" />
                    4.9 · +2.300 reseñas
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Clima e idiomas */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sand-100 text-sand-700 rounded-lg text-xs font-semibold">
                      <Sun className="w-3.5 h-3.5" />
                      27° · Soleado
                    </span>
                    <div className="flex items-center gap-1 text-xs font-semibold">
                      {languages.map((lang, i) =>
                        i === 0 ? (
                          <span key={lang} className="px-2 py-1 rounded-md bg-primary-600 text-white">
                            {lang}
                          </span>
                        ) : (
                          <span key={lang} className="px-2 py-1 rounded-md text-dark-400">
                            {lang}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Atractivos */}
                  <div className="bg-cream-100 border border-dark-100 rounded-xl p-3">
                    <p className="text-xs font-medium text-dark-500 mb-2">Qué hacer en el destino</p>
                    <ul className="space-y-1.5">
                      {attractions.map((attraction) => (
                        <li key={attraction} className="flex items-center gap-2 text-sm text-dark-700">
                          <MapPin className="w-3.5 h-3.5 text-primary-600" />
                          {attraction}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reserva */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-dark-500">
                      Entradas desde <span className="font-bold text-dark-900">$0</span>
                    </div>
                    <button className="btn-primary">Reservar ahora</button>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante: evento */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 top-28 bg-white rounded-xl shadow-lg border border-dark-200 p-3.5 pr-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-dark-900">Fiesta de la Cerveza</p>
                  <p className="text-[11px] text-dark-500">Miramar · Este fin de semana</p>
                </div>
              </motion.div>

              {/* Tarjeta flotante: visitas */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-8 -bottom-6 bg-white rounded-xl shadow-lg border border-dark-200 p-3.5 pr-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-sand-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark-900">12.4k</p>
                  <p className="text-[11px] text-dark-500">visitas este mes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-dark-400" />
      </motion.div>
    </section>
  );
}