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
            <p className="text-teal-400 font-mono mb-2">04. What's Next?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
                Get In Touch
            </h2>

            {status === 'success' ? (
                <div className="mt-10 bg-[#112240] border border-teal-400 rounded p-6 text-gray-300 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-teal-400">Message Sent!</h3>
                    <p className="mb-6">
                        Thank you for reaching out. I'll get back to you as soon as possible!
                    </p>
                    <button
                        onClick={resetForm}
                        className="cursor-pointer inline-block px-6 py-3 border border-teal-400 rounded text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-mono text-sm transition duration-300"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <>
                    <p className="text-gray-400 text-base md:text-lg mb-10">
                        I'm currently open to new opportunities, collaborations, or just having a friendly chat.
                        Whether you have a question or just want to say hi, my inbox is always open.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 space-y-6 text-left"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Name</label>
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
                            <label className="block text-sm text-gray-400 mb-1">Message</label>
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
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        {status === 'error' && (
                            <p className="mt-4 text-red-400 font-mono text-sm">
                                Oops! Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </>
            )}
        </section>
    );
}
