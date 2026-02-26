import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="sobre-mi" className="py-28 lg:py-36 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-primary-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-40" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/40">
                            <img
                                src="/images/hero.png"
                                alt="Licenciada en enfermería"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
                        </div>

                        {/* Experience badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -bottom-8 -right-4 lg:-right-8 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-6 shadow-xl shadow-primary-400/25"
                        >
                            <p className="text-4xl font-bold">+10</p>
                            <p className="text-sm text-primary-100 mt-1">Años de<br />experiencia</p>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-block px-3 py-1.5 bg-primary-100/60 text-primary-700 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                            Sobre Mí
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Compromiso con tu{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                bienestar
                            </span>
                        </h2>

                        <p className="text-neutral-500 mb-6 leading-relaxed text-base">
                            Soy Silvia Alejandra Quiroz, licenciada en enfermería con matrícula profesional y más de una década de experiencia en
                            atención domiciliaria. Mi vocación es brindar un cuidado integral, humano y de calidad
                            a cada uno de mis pacientes.
                        </p>

                        <p className="text-neutral-500 mb-8 leading-relaxed text-base">
                            Creo firmemente que la recuperación es más efectiva en un ambiente familiar y cálido.
                            Por eso, llevo la atención profesional directamente a tu hogar, garantizando comodidad,
                            confianza y resultados.
                        </p>

                        {/* Features list */}
                        <div className="space-y-4">
                            {[
                                'Matrícula profesional verificada y vigente',
                                'Capacitación continua en nuevas técnicas',
                                'Atención personalizada y empática',
                                'Informes detallados para el médico tratante',
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-neutral-600">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
