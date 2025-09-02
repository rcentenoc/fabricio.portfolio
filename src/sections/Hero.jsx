export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center px-6 md:px-12">
            <div className="max-w-3xl">
                <p className="text-teal-400 text-sm md:text-base font-mono mb-4">Hola, mi nombre es</p>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight mb-4">
                    Fabricio Centeno
                </h1>

                <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-6">
                    Desarrollo productos para la web.
                </h2>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                    Soy ingeniero full-stack especializado en desarrollar aplicaciones y sitios web. Actualmente, me enfoco en
                    crear productos accesibles orientados a gestores <span className="text-teal-400">Inteligencia Artificial</span>.
                </p>

                <a
                    href="#contact"
                    className="inline-block px-6 py-3 border border-teal-400 rounded text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-mono text-sm transition duration-300"
                >
                    Contáctame
                </a>
            </div>
        </section>
    )
}
