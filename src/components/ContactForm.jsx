import { motion } from 'framer-motion'
import BrandAsset from './BrandAsset'

export default function ContactForm() {
    return (
        <section id="contacto" className="py-28 lg:py-36 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-neutral-50" />
            <div className="absolute top-10 left-10 w-80 h-80 bg-primary-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-100/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-3 py-1.5 bg-primary-100/60 text-primary-700 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                            Contacto
                        </span>

                        <div className="flex items-center gap-4 mb-4">
                            <BrandAsset className="w-16 h-16 rounded-full border-2 border-primary-100 shadow-sm flex items-center justify-center bg-white" />
                            <div>
                                <p className="text-sm font-semibold text-neutral-800">Lic. Silvia</p>
                                <p className="text-xs text-primary-600">Atención directa</p>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Hablemos sobre{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                                tu cuidado
                            </span>
                        </h2>
                        <p className="text-neutral-500 mb-10 leading-relaxed text-base max-w-md">
                            Completá el formulario y me pondré en contacto contigo a la brevedad para coordinar una visita.
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    ),
                                    label: 'Correo Electrónico',
                                    value: 'contacto@silviaquirozenfermeria.com',
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    label: 'Horario de Atención',
                                    value: 'Lun - Sáb, 8:00 - 20:00',
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    ),
                                    label: 'Zona de Cobertura',
                                    value: 'Resistencia, Chaco y alrededores',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-neutral-100"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400 uppercase tracking-wide">{item.label}</p>
                                        <p className="text-sm font-medium text-neutral-700">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-neutral-100/50 border border-neutral-100 flex flex-col justify-center h-full">
                            <div className="mb-6 text-center lg:text-left">
                                <span className="inline-block px-3 py-1.5 bg-primary-100/60 text-primary-700 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                                    Contáctame Directo
                                </span>
                                <h3 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 font-sans focus:outline-none uppercase">
                                    Solicitar<br />Turno
                                </h3>
                                <p className="text-base text-neutral-500 mb-8 leading-relaxed max-w-md">
                                    Haz clic en el botón para escribirme directamente por WhatsApp. Te responderé a la brevedad para coordinar tu atención.
                                </p>
                            </div>

                            <motion.a
                                href="https://wa.me/5493624746392?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20turno%20o%20hacer%20una%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 py-4 text-base font-semibold rounded-2xl transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-400/25 hover:shadow-primary-500/30 hover:from-primary-600 hover:to-primary-700"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Solicitar Turno por WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
