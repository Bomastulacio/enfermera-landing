export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-neutral-900 text-neutral-400">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-white tracking-tight">
                                Lic. Silvia
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Licenciada en enfermería a domicilio. Cuidado personalizado con calidez humana y compromiso.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Inicio', href: '#inicio' },
                                { label: 'Servicios', href: '#servicios' },
                                { label: 'Sobre Mí', href: '#sobre-mi' },
                                { label: 'Contacto', href: '#contacto' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                +54 9 362 4746-392
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Lun - Sáb, 8:00 - 20:00
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                Resistencia, Chaco y alrededores
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500">
                        © {year} Lic. Silvia Quiroz. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-neutral-600">
                        Diseñado con ❤️ para tu bienestar
                    </p>
                </div>
            </div>
        </footer>
    )
}
