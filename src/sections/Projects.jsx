import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Spotify Tracker',
        description:
            'A web app that visualizes your Spotify listening history and top tracks using the Spotify Web API.',
        tech: ['React', 'Tailwind', 'Spotify API'],
        github: 'https://github.com/yourname/spotify-tracker',
        live: 'https://spotify-tracker.vercel.app',
    },
    {
        title: 'Dev Blog',
        description:
            'A personal blog platform with Markdown support and syntax highlighting, built with Next.js and MDX.',
        tech: ['Next.js', 'MDX', 'Tailwind'],
        github: 'https://github.com/yourname/dev-blog',
        live: '',
    },
    {
        title: 'Portfolio Website',
        description:
            'A modern portfolio site to showcase my skills, work, and experience. You’re looking at it!',
        tech: ['React', 'Vite', 'Tailwind'],
        github: 'https://github.com/yourname/portfolio',
        live: '',
    },
    {
        title: 'Portfolio Website',
        description:
            'A modern portfolio site to showcase my skills, work, and experience. You’re looking at it!',
        tech: ['React', 'Vite', 'Tailwind'],
        github: 'https://github.com/yourname/portfolio',
        live: '',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-100 mb-12">
                <span className="text-teal-400 font-mono mr-2">03.</span>Algunas cosas que he construido
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#112240] p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                            <div className="flex space-x-3 text-teal-400">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Repository"
                                    >
                                        <CodeBracketIcon className="h-5 w-5 hover:text-teal-300 transition-colors duration-200" />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Live Demo"
                                    >
                                        <ArrowTopRightOnSquareIcon className="h-5 w-5 hover:text-teal-300 transition-colors duration-200" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                        <ul className="flex flex-wrap gap-3 text-xs text-gray-400 font-mono mt-auto">
                            {project.tech.map((tech, i) => (
                                <li key={i} className="before:content-['▹'] before:text-teal-400 before:mr-1">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <Link
                to="/projectsArchive"
                className="inline-block mt-12 text-teal-400 font-mono text-sm hover:font-bold transition duration-200"
            >
                View Full Archive
            </Link>
        </section>
    );
}
