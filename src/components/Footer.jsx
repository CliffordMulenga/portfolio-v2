import githubIcon from '/githubIcon.svg'
import dribbleIcon from '/dribbleIcon.png'
import Contact from './Contact'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full">
      <Contact />
      <div className="flex justify-center border-t border-[color:var(--border)] py-16">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <p className="text-lg text-[color:var(--ink)] font-medium leading-relaxed max-w-md">
                Thanks for reaching the end. If you like what you see, let's connect and build something together.
              </p>
              <div className="pt-2">
                <p className="text-[color:var(--ink)] font-medium mb-1">Alternatively, here's a fancy sheet of paper.</p>
                <a href="#" className="text-[color:var(--accent-strong)] font-medium underline underline-offset-4 decoration-1">Resume</a>
              </div>
              <p className="text-sm text-[color:var(--ink-soft)]">&copy; {date} Clifford Mulenga. All rights reserved.</p>
            </div>

            <div className="flex flex-col md:items-end space-y-6">
              <div className="hidden md:block text-[color:var(--ink)]">
                <ArrowUpRight className="h-10 w-10" />
              </div>
              <div className="flex flex-col md:items-end space-y-4">
                <a href="#" target="_blank" className="footer-social-link text-lg">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#" target="_blank" className="footer-social-link text-lg">
                  <span>Instagram</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
                <a href="mailto:hello@example.com" className="footer-social-link text-lg">
                  <span>Email me</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
                <div className="flex gap-4 pt-2">
                  <a href="#" target="_blank" className="text-sm text-[color:var(--ink-soft)] flex gap-2 items-center transition hover:text-[color:var(--ink)]">
                    <span><img src={dribbleIcon} alt="" className="h-4 w-4" /></span>
                    <span>Dribbble</span>
                  </a>
                  <a href="#" target="_blank" className="text-sm text-[color:var(--ink-soft)] flex gap-2 items-center transition hover:text-[color:var(--ink)]">
                    <span><img src={githubIcon} alt="github-icon" className="h-4 w-4" /></span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
