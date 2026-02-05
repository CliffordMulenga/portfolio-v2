import SectionHeading from './ui/sectionHeading'
import ProjectCard from './ui/ProjectCard'
import projects from '../data/projects.json'
import { Link } from 'react-router-dom'

const SelectedWork = () => {
    const featuredProjects = projects
        .filter((project) => project.featured)
        .sort((a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0
            const dateB = b.date ? new Date(b.date).getTime() : 0
            return dateB - dateA
        })
        .slice(0, 4);

    return (
        <section id="work" className="flex justify-center py-16 scroll-mt-24">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <SectionHeading title={'Selected work'} />
                        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading text-[color:var(--ink)]" data-scrub-headline>
                            A curated collection of product and brand experiences.
                        </h2>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="flex justify-center sm:justify-end">
                    <Link to="/work" className="text-sm font-semibold text-[color:var(--ink)] underline decoration-1 underline-offset-4 hover:text-[color:var(--accent-strong)]">
                        View all work
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SelectedWork
