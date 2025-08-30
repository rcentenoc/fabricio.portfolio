export default function Footer() {
    return (
        <footer className="w-full py-8 px-6 text-center text-gray-500 text-sm">
            <div className="flex justify-center items-center space-x-6 mb-4">
                {/* GitHub */}
                <a
                    href="https://github.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-teal-400 transition"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                    >
                        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.7 1.27 3.35.97.1-.75.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.46-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .97-.31 3.2 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.22-1.5 3.19-1.18 3.19-1.18.65 1.64.25 2.86.13 3.16.75.82 1.2 1.85 1.2 3.11 0 4.43-2.7 5.41-5.27 5.69.41.36.77 1.09.77 2.2v3.25c0 .31.2.67.8.55A10.51 10.51 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-teal-400 transition"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                    >
                        <path d="M4.98 3.5a2.5 2.5 0 10.02 5 2.5 2.5 0 00-.02-5zM3 8.75h4v12.5H3V8.75zM9 8.75h3.6v1.75h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.65v7.05h-4V14.5c0-1.4-.03-3.2-2-3.2s-2.3 1.55-2.3 3.1v6.85H9V8.75z" />
                    </svg>
                </a>

                {/* Email */}
                <a
                    href="mailto:tuemail@email.com"
                    aria-label="Email"
                    className="text-gray-400 hover:text-teal-400 transition"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                    >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
                    </svg>
                </a>
            </div>

            <p className="text-xs text-gray-500 font-mono">
                Designed & Built by Fabricio Centeno © {new Date().getFullYear()}
            </p>
        </footer>
    );
}
