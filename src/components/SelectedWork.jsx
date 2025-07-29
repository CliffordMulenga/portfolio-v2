import React from 'react'
import SectionHeading from './ui/sectionHeading'
import ProjectCard from './ui/ProjectCard'

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
            </div>


        </section>
    )
}

export default SelectedWork
