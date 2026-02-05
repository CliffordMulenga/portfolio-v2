import { WordRotate } from './magicui/word-rotate'
import Reveal from './ui/Reveal'

const Herosection = () => {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[color:var(--accent-soft)] blur-3xl opacity-70" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#F3D7A6] blur-3xl opacity-60" />

            <div className="mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative h-[110px] w-[110px] rounded-full border border-[color:var(--border)] bg-white shadow-[var(--shadow-soft)]">
                        <img src="/profile.jfif" alt="Clifford Mulenga portrait" className="h-full w-full rounded-full object-cover" />
                    </div>
                </Reveal>

                    <div className="overflow-hidden">
                        <div className="pb-2" >
                            <WordRotate words={["designer.", "developer."]} className="text-[56px] leading-[0.9] text-[color:var(--ink)] sm:text-[88px] md:text-[110px]" />
                        </div>
                    </div>

                <Reveal>
                    <p className="max-w-3xl text-base sm:text-lg text-[color:var(--ink-muted)]">
                        I design calm, minimalist digital experiences that feel premium and work effortlessly. Based in Zambia, collaborating globally with ambitious teams.
                    </p>
                </Reveal>

                <Reveal>
                    <span className="text-sm font-semibold text-[color:var(--ink)]">Product Designer + Frontend Developer</span>
                </Reveal>

                <Reveal>
                    <a href="#work" className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)]">
                        ↓
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

export default Herosection
