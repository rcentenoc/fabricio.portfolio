export default function About() {
    return (
        <section id="about" className="h-full max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">
                <span className="text-teal-400 font-mono mr-2">01.</span>About Me
            </h2>

            <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>
                    Hello! I’m Fabricio, a full-stack engineer with a passion for crafting intuitive and accessible digital experiences.
                    My journey in web development began with curiosity and evolved into a deep commitment to building things that make a difference.
                </p>
                <p>
                    I’ve worked on a range of projects, from early-stage startups to enterprise platforms. I'm currently sharpening my skills with tools like React, Node.js, and Tailwind CSS.
                </p>
                <p>
                    Here are a few technologies I’ve been working with recently:
                </p>

                <ul className="grid grid-cols-2 gap-x-10 text-sm font-mono mt-4">
                    <li className="before:content-['▹'] before:text-teal-400">JavaScript (ES6+)</li>
                    <li className="before:content-['▹'] before:text-teal-400">React</li>
                    <li className="before:content-['▹'] before:text-teal-400">Node.js</li>
                    <li className="before:content-['▹'] before:text-teal-400">Tailwind CSS</li>
                </ul>
            </div>
        </section>
    );
}