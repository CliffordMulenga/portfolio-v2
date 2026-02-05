import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProjectDetails from '@/components/ProjectDetails'
import projects from '@/data/projects.json'

const Project = () => {
  const { id } = useParams()
  const project = useMemo(() => projects.find((item) => item.id === id), [id])

  if (!project) {
    return (
      <main className="pt-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-heading text-[color:var(--ink)]">Project not found</h1>
          <p className="mt-3 text-[color:var(--ink-muted)]">The project you're looking for doesn't exist yet.</p>
          <Link to="/work" className="mt-6 inline-flex text-sm font-semibold text-[color:var(--ink)] underline decoration-1 underline-offset-4">
            Back to all work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      <ProjectDetails project={project} />
    </main>
  )
}

export default Project
