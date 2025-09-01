import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const navLinks = [
    { name: 'About me', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact me', id: 'contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#0a192fe6] backdrop-blur shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-teal-400 font-mono text-xl font-bold">
                        &lt;RFCC /&gt;
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center text-sm font-mono text-gray-300">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="hover:text-teal-400 transition-colors duration-200 group"
                            >
                                <span className="text-teal-400 mr-1">0{index + 1}.</span>
                                <span className="hover:font-bold">{link.name}</span>
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="ml-4 px-4 py-2 border border-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200"
                            rel="noopener"
                        >
                            Resume
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-teal-400 focus:outline-none"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Bars3Icon className="h-6 w-6 cursor-pointer" />
                    </button>
                </div>
            </header>

            {/* OVERLAY (fuera del header) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* MOBILE DRAWER (fuera del header) */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#112240] text-white z-[110]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                        <XMarkIcon className="h-6 w-6 text-teal-400 cursor-pointer" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-6 text-base font-mono p-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-gray-300 hover:text-teal-400"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-teal-400 mr-2">0{index + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="mt-4 inline-block px-4 py-2 border border-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] hover:font-bold transition duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </>
    )
}
