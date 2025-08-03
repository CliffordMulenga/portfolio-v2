import React from 'react'
import SectionHeading from './ui/sectionHeading'
import ProjectCard from './ui/ProjectCard'
import { Link } from 'react-router-dom'

const SelectedWork = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-[90%] md:w-[80%] flex flex-col gap-4'>
                <div>
                    <SectionHeading title={'Selected work'} />
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

                <div className="p-8 bg-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 font-body my-[5rem]">
                <p className='text-2xl font-medium font-heading text-center'>Want to see more projects or discuss how I can help with yours?</p>
                <div className="w-[80%] flex gap-4 flex-col items-center justify-center text-center sm:flex-row">
                    <Link to="#contact" className="transition py-2 px-8 rounded-md bg-gray-900 text-gray-50 hover:bg-transparent hover:text-gray-900 hover:border hover:border-gray-400 w-full sm:w-max">Let's Talk</Link>
                    <Link to="#contact" className="transition py-2 px-8 rounded-md border text-gray-900 bg-transparent border-gray-400  hover:bg-gray-900  hover:border-none hover:text-gray-50 w-full sm:w-max">More Projects</Link>
                </div>
            </div>
            </div>


        </section>
    )
}

export default SelectedWork
