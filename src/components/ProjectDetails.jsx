import { useRef } from 'react'
import Reveal from './ui/Reveal'

const ProjectDetails = ({ project }) => {
  const snapshotsRef = useRef(null)
  if (!project) return null

  const parsedYear = project.date ? new Date(project.date).getFullYear() : null
  const displayYear = Number.isFinite(parsedYear) ? parsedYear : project.year

  const scrollSnapshots = (direction) => {
    if (!snapshotsRef.current) return
    const amount = Math.round(snapshotsRef.current.clientWidth * 0.9)
    snapshotsRef.current.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id={`project-${project.id}`} className="scroll-mt-24">
      <header className="case-header px-6 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="space-y-6">
              <div className="section-tag">{project.category}</div>
              <h1 className="reveal-text text-[42px] sm:text-[64px] md:text-[96px] font-heading text-[color:var(--ink)] leading-[0.9]">
                {project.title}
              </h1>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="py-20 px-6 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h5 className="text-xs uppercase text-[color:var(--ink-soft)] mb-4">Role / Services</h5>
            <div className="stripe" />
            <ul className="space-y-1 text-base text-[color:var(--ink)]">
              {project.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase text-[color:var(--ink-soft)] mb-4">Credits</h5>
            <div className="stripe" />
            <ul className="space-y-1 text-base text-[color:var(--ink)]">
              {project.credits?.length ? (
                project.credits.map((credit) => (
                  <li key={`${credit.name}-${credit.role}`}>
                    {credit.name} : {credit.role}
                  </li>
                ))
              ) : (
                <li>Solo project : Design + Development</li>
              )}
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase text-[color:var(--ink-soft)] mb-4">Location & Year</h5>
            <div className="stripe" />
            <p className="text-base text-[color:var(--ink)]">{project.location} · {displayYear}</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="single-image rounded-3xl h-[70vh]">
            <img
              className="w-full h-full object-cover scale-105"
              src={project.heroImage}
              alt={`${project.title} hero`}
              data-parallax="0.15"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 lg:px-12 bg-[color:var(--accent-soft)]/40">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <div key={image} className={`overflow-hidden rounded-3xl bg-[color:var(--surface)] shadow-[var(--shadow-card)] ${index === 1 ? 'md:mt-10' : ''}`}>
              <img src={image} alt={`${project.title} gallery ${index + 1}`} className="w-full h-full object-cover" data-parallax="0.1" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-5xl grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="space-y-5">
              <p className="text-[color:var(--ink-muted)] text-base sm:text-lg">{project.summary}</p>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">Results</p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-[color:var(--ink)]">
                  {project.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links?.live ? (
                  <a href={project.links.live} className="rounded-full hover:bg-[color:var(--accent)] px-6 py-2 text-sm font-semibold text-white bg-[color:var(--accent-strong)] hover:text-black">Live site</a>
                ) : null}
                {project.links?.github ? (
                  <a href={project.links.github} className="rounded-full border border-[color:var(--border)] px-6 py-2 text-sm font-semibold text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)]">GitHub</a>
                ) : null}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card)]">
              <h4 className="text-sm uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">Other Information</h4>
              <p className="mt-3 text-base text-[color:var(--ink)]">Client: {project.client}</p>
              <p className="mt-2 text-base text-[color:var(--ink)]">Category: {project.category}</p>
              <p className="mt-2 text-base text-[color:var(--ink)]">Tag: {project.tag}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {project.snapshots?.length ? (
        <section className="pb-20 px-6 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">Project snapshots</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollSnapshots('prev')}
                    className="rounded-full border border-[color:var(--border)] px-3 py-2 text-xs font-semibold text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollSnapshots('next')}
                    className="rounded-full bg-[color:var(--accent-strong)] px-3 py-2 text-xs font-semibold text-white hover:bg-[color:var(--accent)] hover:text-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </Reveal>
            <div
              ref={snapshotsRef}
              className="mt-6 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            >
              {project.snapshots.map((snapshot, index) => (
                <div
                  key={`${project.id}-snapshot-${index}`}
                  className="min-w-[80%] snap-center sm:min-w-[60%] lg:min-w-[45%] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-card)]"
                >
                  <img
                    src={snapshot}
                    alt={`${project.title} snapshot ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </section>
  )
}

export default ProjectDetails
