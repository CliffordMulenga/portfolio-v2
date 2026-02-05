import developmentIcon from '/developmentIcon.svg'
import designIcon from '/designIcon.svg'
import SectionHeading from './ui/sectionHeading'
import Reveal from './ui/Reveal'

const WhatICanDo = () => {
    return (
        // <!-- What i can Do Section -->
        <section id="services" className="flex justify-center py-12 sm:py-16 scroll-mt-24">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
                <div className="flex flex-col text-center gap-3">
                    
                    <Reveal>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[color:var(--ink)]" data-scrub-headline>I don't just make projects, I build solutions that help businesses grow</h2>
                    </Reveal>
                    <Reveal>
                        <p className="font-body font-light text-sm sm:text-base text-[color:var(--ink-muted)]">Every great project starts with understanding the problem. Here's how I solve yours.</p>
                    </Reveal>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] items-start">
                    <div className="flex flex-col gap-4">
                        <SectionHeading title={'What I can do'} />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Reveal>
                                <div className="card-surface rounded-2xl p-5 flex flex-col gap-3 text-center sm:text-left items-center sm:items-start">
                                    <img src={designIcon} alt="design-icon" className="h-12 w-12" />
                                    <h4 className="text-xl font-semibold text-[color:var(--ink)]">Design</h4>
                                    <p className="text-sm text-[color:var(--ink-muted)]">Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="card-surface rounded-2xl p-5 flex flex-col gap-3 text-center sm:text-left items-center sm:items-start">
                                    <img src={developmentIcon} alt="development-icon" className="h-12 w-12" />
                                    <h4 className="text-xl font-semibold text-[color:var(--ink)]">Development</h4>
                                    <p className="text-sm text-[color:var(--ink-muted)]">Bringing your vision to life with modern, scalable technology.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <SectionHeading title={'My approach'} />
                        <div className="flex flex-col gap-5">
                            <Reveal>
                                <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                    <div className="font-body text-sm uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">01</div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-[color:var(--ink)]">Listen & Understand</h4>
                                        <p className="text-sm text-[color:var(--ink-muted)]">I dive deep into your business goals, challenges, and vision before writing a single line of code.</p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.05}>
                                <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                    <div className="font-body text-sm uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">02</div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-[color:var(--ink)]">Design & Plan</h4>
                                        <p className="text-sm text-[color:var(--ink-muted)]">Strategic planning and user-centered design ensure your solution works perfectly for your audience.</p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                    <div className="font-body text-sm uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">03</div>
                                    <div className="step-content">
                                        <h4 className="text-xl font-semibold text-[color:var(--ink)]">Build & Iterate</h4>
                                        <p className="text-sm text-[color:var(--ink-muted)]">Agile development with regular check-ins keeps you involved and ensures we're always on track.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhatICanDo
