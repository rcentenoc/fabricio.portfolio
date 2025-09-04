import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        company: 'KhipuCode',
        position: 'Desarrollador Full Stack',
        range: 'Feb 2025 – Presente',
        description: [
            'Desarrollo de servicios backend, exposición de APIs REST, GraphQL y socket.IO.',
            'Integración de IA con Gemini para extracción estructurada de texto desde documentos y automatización de reportes.',
        ],
        url: 'https://backup.khipucode.com/'
    },
    {
        company: 'Tdx Perú S.A.C.',
        position: 'Desarrollador Back-End',
        range: 'Feb 2022 – Abr 2024',
        description: [
            'Desarrollo de aplicativo móvil en React Native para asistencia en traducciones, integrando API de DeepL.',
            'Refactorización de sistema de gestión documental desarrollado.',
        ],
        url: 'https://tdxperu.com/'
    },
    {
        company: 'Famai Seal JET S.A.C.',
        position: 'Practicante de Desarrollo Web',
        range: 'May 2023 – Ago 2023',
        description: [
            'Desarrollo de un sistema de control de asistencia para empleados utilizando React.js, Node.js y SQL Server.',
            'estión de mantenimiento de software y hardware bajo estándares ISO 9001'
        ],
        url: 'https://famaisealjet.com/'
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="md:h-full h-[30rem] max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-100 mb-12">
                <span className="text-teal-400 font-mono mr-2">02.</span>Mi experiencia

            </h2>

            <div className="md:flex">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:w-1/4 mb-6 md:mb-0 border-l border-gray-700 ">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`cursor-pointer text-left w-full px-4 py-3 border-l-2 font-mono text-sm transition-colors duration-150 ${index === activeTab
                                ? 'text-teal-400 border-teal-400 bg-[#112240]'
                                : 'text-gray-400 border-transparent hover:bg-[#1d2b45]'
                                }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Content with animation */}
                <div className="md:w-3/4 md:pl-8  relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <h3 className="pl-2 text-lg md:text-xl font-semibold text-gray-100 mb-1">
                                {experiences[activeTab].position}{' '}
                                <a
                                    href={experiences[activeTab].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline"
                                >
                                    @ {experiences[activeTab].company}
                                </a>
                            </h3>
                            <p className="pl-2 text-sm text-gray-400 font-mono mb-4">
                                {experiences[activeTab].range}
                            </p>
                            <ul className="pl-2 list-disc list-inside space-y-2 text-gray-400">
                                {experiences[activeTab].description.map((item, idx) => (
                                    <ul
                                        key={idx}
                                        className="relative pl-4 before:absolute before:left-0 before:content-['▹'] before:text-teal-400"
                                    >
                                        {item}
                                    </ul>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
