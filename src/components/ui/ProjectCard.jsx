import Reveal from './Reveal'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    const parsedYear = project?.date ? new Date(project.date).getFullYear() : null
    const displayYear = Number.isFinite(parsedYear) ? parsedYear : project?.year

    return (
        <Reveal>
            <article className="project-group flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-6">
                    <div className="project-card-bg absolute inset-0" />
                    <img
                        src={project.heroImage}
                        alt={`${project.title} preview`}
                        className="project-image relative z-10 w-4/5 h-4/5 object-contain mx-auto my-auto mt-10"
                        data-parallax="0.12"
                    />
                </div>
                <div className="flex items-center gap-2">
                    {project.logo ? (
                        <img src={project.logo} alt={`${project.client} logo`} className="h-6 w-fit mb-4 object-contain" />
                    ) : (
                        <span className="text-sm font-semibold text-[color:var(--ink)]">{project.client}</span>
                    )}
                    <p className="text-sm text-[color:var(--ink-soft)]">{displayYear}</p>
                </div>
                <h3 className="text-[24px] font-bold text-[#2B3340] leading-tight mb-2">
                    {project.title}
                </h3>
                <Link
                    to={`/work/${project.id}`}
                    className="text-[16px] font-bold text-[#2B3340] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
                    View Project
                </Link>
            </article>
        </Reveal>
    )
}

export default ProjectCard
