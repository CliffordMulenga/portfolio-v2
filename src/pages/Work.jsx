import SectionHeading from '@/components/ui/sectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projects.json'

const Work = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

  return (
    <main className="pt-28">
      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="All work" />
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading text-[color:var(--ink)]">
            Exploring products, brands, and digital platforms.
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[color:var(--ink-muted)]">
            A complete archive of case studies and product experiences crafted with clarity, motion, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work
