import SectionHeading from './ui/sectionHeading'
import { Mail } from 'lucide-react'
import Reveal from './ui/Reveal'


const HomeServices = () => {
   return (
      // <!-- services -->
      <section className="py-12 sm:py-16">
         <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
               <div className="card-surface rounded-3xl px-6 py-12 sm:px-12 sm:py-14 flex flex-col items-center justify-center gap-4 font-body">
                  <SectionHeading title={'Let’s build together'} />
                  <p className="text-xl sm:text-2xl font-medium font-heading text-center text-[color:var(--ink)]">Every business is unique. Let's shape a solution that feels premium and performs at scale.</p>
                  <div className="w-full flex gap-4 flex-col items-center justify-center text-center sm:flex-row">
                     <a href="#contact" className="transition rounded-full bg-[color:var(--accent)] px-8 py-3 text-white hover:bg-[color:var(--accent-strong)] w-full sm:w-max flex items-center justify-center gap-2"><span><img src="/whatsapp.svg" alt="" className="h-4 w-4" /></span><span>WhatsApp</span></a>
                     <a href="#contact" className="transition rounded-full border border-[color:var(--border)] px-8 py-3 text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)] w-full sm:w-max flex items-center justify-center gap-2"><span><Mail className="h-4 w-4" /></span> <span>Email</span></a>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>
   )
}

export default HomeServices
