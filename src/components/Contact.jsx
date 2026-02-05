import { CircleCheck, ShieldCheck, Zap } from 'lucide-react'
import Reveal from './ui/Reveal'

const Contact = () => {
    return (
        // < !--Contact Section-- >

        <section id="contact" className="flex justify-center py-16 scroll-mt-24">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">

                <div className="flex flex-col text-center gap-2 md:gap-2 md:text-center">
                    <span className="section-tag">Let's Get Started</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[color:var(--ink)]" data-scrub-headline>Ready to transform your ideas?</h2>
                    <p className="font-body font-light text-sm sm:text-base text-[color:var(--ink-muted)]">Don't let another day pass wondering "what if." Your competition isn't waiting, and neither should you. Let's build something amazing together.</p>
                </div>

                <div className="w-full max-w-4xl flex flex-col gap-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                        <Reveal>
                            <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                <h4 className="text-lg font-semibold flex gap-2 items-center text-[color:var(--ink)]">Free strategy session</h4>
                                <p className="text-sm text-[color:var(--ink-muted)]">30-minute consultation to discuss your project and explore possibilities.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                <h4 className="text-lg font-semibold flex gap-2 items-center text-[color:var(--ink)]"> Fast turnaround</h4>
                                <p className="text-sm text-[color:var(--ink-muted)]">Most projects start within one week of agreement.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                                <h4 className="text-lg font-semibold flex gap-2 items-center text-[color:var(--ink)]">Risk-free guarantee</h4>
                                <p className="text-sm text-[color:var(--ink-muted)]">Not satisfied with the initial work? Get free iterations or your money back.</p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal>
                        <div className="card-surface rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
                            <div>
                                <span className="text-lg text-[color:var(--ink)] font-heading flex gap-2 items-center">
                                    <span className="material-symbols-outlined">phone_in_talk</span> Prefer a phone call
                                </span>
                                <div className="mt-2">
                                    <span className="text-sm font-body text-[color:var(--ink-muted)]">+260 (965) 771 259 | +260 (770) 666 136</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-lg text-[color:var(--ink)] font-heading flex gap-2 items-center">
                                    <span className="material-symbols-outlined">bubble</span> Prefer socials
                                </span>
                                <div className="mt-2 flex gap-4">
                                    <span className="text-sm font-body text-[color:var(--ink-muted)]"><a href="#" target="_blank">LinkedIn</a></span>
                                    <span className="text-sm font-body text-[color:var(--ink-muted)]"><a href="#" target="_blank">Facebook</a></span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Contact
