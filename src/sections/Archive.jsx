import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const projects = [
    {
        title: 'Spotify Tracker',
        tech: ['React', 'Tailwind', 'Spotify API'],
        description:
            'A web app that visualizes your Spotify listening history and top tracks using the Spotify Web API.',
        year: 2024,
        github: 'https://github.com/yourname/spotify-tracker',
        live: 'https://spotify-tracker.vercel.app',
    },
    {
        title: 'Dev Blog',
        tech: ['Next.js', 'MDX', 'Tailwind'],
        description:
            'A personal blog platform with Markdown support and syntax highlighting, built with Next.js and MDX.',
        year: 2023,
        github: 'https://github.com/yourname/dev-blog',
        live: '',
    },
    {
        title: 'Portfolio Website',
        tech: ['React', 'Vite', 'Tailwind'],
        description:
            'A modern portfolio site to showcase my skills, work, and experience. You’re looking at it!',
        year: 2025,
        github: 'https://github.com/yourname/portfolio',
        live: '',
    },
    {
        title: 'Task Manager',
        tech: ['Vue', 'Firebase'],
        description:
            'A task management app to help you organize your daily tasks and projects.',
        year: 2022,
        github: 'https://github.com/yourname/task-manager',
        live: 'https://tasks.example.com',
    },
    {
        title: 'Weather App',
        tech: ['React', 'OpenWeatherMap API'],
        description:
            'A simple weather app that fetches real-time weather data using the OpenWeatherMap API.',
        year: 2021,
        github: '',
        live: '',
    },
]

export default function Archive() {
    return (
        <section id="archive" className="bg-[#0a192f] min-h-screen px-6 py-24">

            {/* <Link to="/" className="flex justify-center pb-15 text-teal-400 font-mono text-xl font-bold">
                <img src="/logo.png" alt="home" className='h-auto w-[3rem] hover:scale-105' />
            </Link> */}
            <Link to="/" className="flex justify-center pb-15 text-teal-400 font-mono text-xl font-bold">
                <span
                    aria-label="home"
                    className=" block w-[3rem] h-[3rem] bg-teal-400 hover:scale-105 transition-transform
      [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]
      [-webkit-mask-image:url('/logo.png')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
                />
            </Link>



            <h2 className="text-2xl font-bold text-gray-100 mb-12">
                <span className="text-teal-400 font-mono mr-2"></span>Project Archive
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-300 font-mono text-sm border-collapse">
                    <thead>
                        <tr className="text-teal-400 border-b border-gray-700">
                            <th className="py-2 px-3 font-normal">Project</th>
                            <th className="py-2 px-3 font-normal">Technologies</th>
                            <th className="py-2 px-3 font-normal">Description</th>
                            <th className="py-2 px-3 font-normal">Year</th>
                            <th className="py-2 px-3 font-normal">Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr
                                key={index}
                                className="hover:bg-[#1d2b45] transition-colors duration-200 border-b border-gray-800"
                            >
                                <td className="py-3 px-3 text-teal-400">
                                    {project.live ? (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </td>
                                <td className="py-3 px-3">
                                    <ul className="flex flex-wrap gap-x-3 text-gray-400">
                                        {project.tech.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="py-3 px-3">
                                    <ul className="flex flex-wrap gap-x-3 text-gray-400">
                                        {project.description}
                                    </ul>
                                </td>
                                <td className="py-3 px-3 text-gray-400">{project.year}</td>
                                <td className="py-3 px-3 flex space-x-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub Repo"
                                        >
                                            <CodeBracketIcon className="h-5 w-5 text-teal-400 hover:text-teal-300 transition" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Live Demo"
                                        >
                                            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-teal-400 hover:text-teal-300 transition" />
                                        </a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </section>
    )
}
