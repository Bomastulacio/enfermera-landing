import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50" />

            {/* Decorative blobs */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-8 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-start text-left gap-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/60 text-primary-700 text-sm font-medium rounded-full backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            Cuidado profesional a domicilio
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1]">
                            Tu salud,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                nuestra prioridad
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-neutral-500 max-w-lg leading-relaxed">
                            Atención de enfermería personalizada y profesional en la comodidad de tu hogar.
                            Más de 10 años de experiencia cuidando a quienes más importan.
                        </p>

                        <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-4">
                            <motion.a
                                href="#contacto"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-xl shadow-primary-400/25 hover:shadow-primary-500/30 transition-shadow duration-300"
                            >
                                Agendar Turno
                            </motion.a>
                            <motion.a
                                href="#servicios"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white border-2 border-primary-200 rounded-2xl hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300"
                            >
                                Ver Servicios
                            </motion.a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-8 mt-14">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary-600">10+</p>
                                <p className="text-xs text-neutral-400 mt-1">Años de experiencia</p>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary-600">500+</p>
                                <p className="text-xs text-neutral-400 mt-1">Pacientes atendidos</p>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary-600">24/7</p>
                                <p className="text-xs text-neutral-400 mt-1">Disponibilidad</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary-200/30">
                            <img
                                src="/images/hero.png"
                                alt="Licenciada en enfermería brindando cuidado a domicilio"
                                className="w-full h-[580px] object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
                        </div>
                        {/* Floating card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="absolute -bottom-6 -left-8 z-20 bg-white rounded-2xl p-5 shadow-xl shadow-neutral-200/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-neutral-800">Matrícula Verificada</p>
                                    <p className="text-xs text-neutral-400">Profesional habilitada</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
