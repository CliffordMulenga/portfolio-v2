import React from 'react'
import { Link } from 'react-router-dom'
// import whatsappIcon from '/whatsapp.svg'
// import emailIcon from '/email.svg'
import SectionHeading from './ui/sectionHeading'
import { Mail } from 'lucide-react'


const HomeServices = () => {
   return (
      // <!-- services -->
      <section >
         <div className="container">
            <div className="p-8 bg-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 font-body my-[5rem]">
               <SectionHeading title={'Tell me about about next Project?'} />
               <p className='text-2xl font-medium font-heading text-center'>Every business is unique. Let's discuss your specific requirements and create Link solution that fits perfectly.</p>
               <div className="w-[80%] flex gap-4 flex-col items-center justify-center text-center sm:flex-row">
                  <Link to="#contact" target='_blank' className="transition py-2 px-8 rounded-md bg-gray-900 text-gray-50 hover:bg-transparent hover:text-gray-900 hover:border hover:border-gray-400 w-full sm:w-max flex items-center gap-2"><span><img src="/whatsapp.svg" alt="" className='text-gray-50'/></span><span>WhatsApp</span></Link>
                  <Link to="#contact" target='_blank' className="transition py-2 px-8 rounded-md border text-gray-900 bg-transparent border-gray-400  hover:bg-gray-900  hover:border-none hover:text-gray-50 w-full sm:w-max  flex items-center gap-2"><span><Mail/></span> <span>Email</span></Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeServices