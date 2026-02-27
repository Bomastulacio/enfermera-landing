import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitContactForm } from '../firebase/contactService'
import BrandAsset from './BrandAsset'

const serviceOptions = [
    'Control y Seguimiento',
    'Curaciones y Heridas',
    'Administración de Medicación',
    'Cuidado del Adulto Mayor',
    'Cuidados Post-Operatorios',
    'Otro',
]

export default function ContactForm() {
    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        tipoServicio: '',
        mensaje: '',
    })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            await submitContactForm(form)
            setStatus('success')
            setForm({ nombre: '', telefono: '', tipoServicio: '', mensaje: '' })
        } catch (err) {
            console.error('Error al enviar formulario:', err)
            setStatus('error')
        }
    }

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
                            <BrandAsset className="w-16 h-16 rounded-full border-2 border-primary-100 shadow-sm" />
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    ),
                                    label: 'WhatsApp',
                                    value: '+54 9 362 4746-392',
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
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-neutral-100/50 border border-neutral-100"
                        >
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-sans">Solicitar Turno</h3>
                            <p className="text-sm text-neutral-400 mb-8">Todos los campos son obligatorios</p>

                            <div className="space-y-5">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        value={form.nombre}
                                        onChange={handleChange}
                                        placeholder="Ej: María García"
                                        className="w-full px-4 py-3.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 placeholder:text-neutral-300"
                                    />
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Teléfono (WhatsApp)
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        required
                                        value={form.telefono}
                                        onChange={handleChange}
                                        placeholder="Ej: +54 9 11 1234-5678"
                                        className="w-full px-4 py-3.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 placeholder:text-neutral-300"
                                    />
                                </div>

                                {/* Tipo de Servicio */}
                                <div>
                                    <label htmlFor="tipoServicio" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Tipo de Servicio
                                    </label>
                                    <select
                                        id="tipoServicio"
                                        name="tipoServicio"
                                        required
                                        value={form.tipoServicio}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                                    >
                                        <option value="" disabled>Seleccioná un servicio</option>
                                        {serviceOptions.map((opt) => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        required
                                        rows={4}
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        placeholder="Contame brevemente qué necesitás..."
                                        className="w-full px-4 py-3.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none placeholder:text-neutral-300"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={status !== 'sending' ? { scale: 1.01, y: -1 } : {}}
                                whileTap={status !== 'sending' ? { scale: 0.99 } : {}}
                                className={`w-full mt-8 py-4 text-base font-semibold rounded-2xl transition-all duration-300 
                  ${status === 'sending'
                                        ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-400/25 hover:shadow-primary-500/30 hover:from-primary-600 hover:to-primary-700'
                                    }`}
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : (
                                    'Enviar Solicitud'
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-5 p-4 bg-primary-50 border border-primary-200 rounded-xl flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-primary-800">¡Gracias por tu mensaje!</p>
                                            <p className="text-xs text-primary-600">Te contactaremos a la brevedad.</p>
                                        </div>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-red-800">Error al enviar</p>
                                            <p className="text-xs text-red-600">Por favor, intentá nuevamente o contactanos por WhatsApp.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
