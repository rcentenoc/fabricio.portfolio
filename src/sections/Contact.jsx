import { useState, useRef } from 'react';

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        const formData = new FormData(formRef.current);

        try {
            const res = await fetch('https://formsubmit.co/efren609@duck.com', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                formRef.current.reset();
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setStatus(null);
    };

    return (
        <section
            id="contact"
            className="max-w-2xl mx-auto px-6 py-24 text-center"
        >
            <p className="text-teal-400 font-mono mb-2">03. ¿Que hay de nuevo?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
                Pongámonos en contacto.
            </h2>

            {status === 'success' ? (
                <div className="mt-10 bg-[#112240] border border-teal-400 rounded p-6 text-gray-300 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-teal-400">Mensaje enviado!</h3>
                    <p className="mb-6">
                        Gracias por contactarme. ¡Te responderé lo antes posible!
                    </p>
                    <button
                        onClick={resetForm}
                        className="cursor-pointer inline-block px-6 py-3 border border-teal-400 rounded text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-mono text-sm transition duration-300"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            ) : (
                <>
                    <p className="text-gray-400 text-base md:text-lg mb-10">
                        Estoy abierto a nuevas oportunidades, colaboraciones o simplemente a charlar un rato. Si tienes alguna pregunta o simplemente quieres saludar, mi bandeja de entrada siempre está abierta.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg mb-10">
                        Puedes enviarme un Email o escribeme por whatsapp.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 space-y-6 text-left"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 rounded bg-[#112240] text-gray-100 border border-gray-700 focus:outline-none focus:border-teal-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 rounded bg-[#112240] text-gray-100 border border-gray-700 focus:outline-none focus:border-teal-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Mensaje</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-2 rounded bg-[#112240] text-gray-100 border border-gray-700 focus:outline-none focus:border-teal-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`cursor-pointer px-6 py-3 border border-teal-400 rounded text-teal-400 font-mono text-sm transition duration-300 flex items-center justify-center gap-2
              ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-teal-400 hover:text-[#0a192f]'}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4 text-teal-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Enviando...
                                </>
                            ) : (
                                'Enviar mensaje por Email'
                            )}
                        </button>

                        {status === 'error' && (
                            <p className="mt-4 text-red-400 font-mono text-sm">
                                Oops! Algo salió mal. Inténtalo de nuevo más tarde.

                            </p>
                        )}
                    </form>
                </>
            )}
        </section>
    );
}
