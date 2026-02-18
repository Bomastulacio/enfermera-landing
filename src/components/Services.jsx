import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: 'Control y Seguimiento',
        description: 'Monitoreo de signos vitales, control de glucemia, presión arterial y seguimiento post-quirúrgico personalizado.',
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
    },
    {
        title: 'Curaciones y Heridas',
        description: 'Tratamiento profesional de heridas, curaciones complejas, cuidado de úlceras y cambio de vendajes.',
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
    },
    {
        title: 'Administración de Medicación',
        description: 'Aplicación de inyectables, sueros, medicación endovenosa y control de tratamientos farmacológicos.',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80',
    },
    {
        title: 'Cuidado del Adulto Mayor',
        description: 'Asistencia integral para personas mayores: higiene, movilización, acompañamiento y bienestar diario.',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
    },
    {
        title: 'Cuidados Post-Operatorios',
        description: 'Seguimiento especializado tras intervenciones quirúrgicas, cuidado de drenajes y prevención de complicaciones.',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    },
]

export default function Services() {
    return (
        <section id="servicios" className="py-28 lg:py-36 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* Left: Title Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-[340px] flex-shrink-0 lg:sticky lg:top-32 lg:self-start"
                    >
                        <span className="inline-block px-3 py-1.5 bg-primary-100/60 text-primary-700 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                            Servicios
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Cuidado profesional{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                en tu hogar
                            </span>
                        </h2>
                        <p className="text-neutral-500 leading-relaxed text-base">
                            Brindo una amplia gama de servicios de enfermería a domicilio, adaptados a las
                            necesidades específicas de cada paciente. Profesionalismo, calidez y compromiso en cada visita.
                        </p>
                        <div className="mt-8 flex items-center gap-3 text-sm text-neutral-400">
                            <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span>Deslizá para ver todos los servicios</span>
                        </div>
                    </motion.div>

                    {/* Right: Scrollable Cards */}
                    <div className="flex-1 min-w-0">
                        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide lg:flex-wrap lg:overflow-x-visible">
                            {services.map((service, index) => (
                                <div key={index} className="snap-start">
                                    <ServiceCard service={service} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar utility */}
            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    )
}
