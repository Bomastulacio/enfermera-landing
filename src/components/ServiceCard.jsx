import { motion } from 'framer-motion'

export default function ServiceCard({ service, index }) {
    const number = String(index + 1).padStart(2, '0')

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group flex-shrink-0 w-72 sm:w-80 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-100/40 transition-shadow duration-500 cursor-pointer border border-neutral-100 hover:border-primary-200"
        >
            {/* Image Container */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-primary-600">{number}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors duration-300 font-sans">
                    {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.description}
                </p>
                {/* Arrow link */}
                <div className="mt-4 flex items-center gap-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0">
                    <span className="text-sm font-medium">Más info</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}
