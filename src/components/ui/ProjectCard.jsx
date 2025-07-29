import React from 'react'

const ProjectCard = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='h-[360px] sm:h-[400px]'>
                <img src="/img.jpg" alt="" className='w-full h-full object-cover rounded-[24px]'/>
            </div>
            <div className='flex flex-col gap-2'>
                <ul className='flex gap-4'>
                    <li className='px-2 py-1 rounded-full bg-gray-300 text-gray-500 text-[8px]'>ReactJs</li>
                    <li className='px-2 py-1 rounded-full bg-gray-300 text-gray-500 text-[8px]'>Tailwind</li>
                    <li className='px-2 py-1 rounded-full bg-gray-300 text-gray-500 text-[8px]'>Shadcn</li>
                </ul>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'><span className='text-xl font-bold font-headin'>Limo</span> <span className='text-[12px] text-gray-500 font-body ml-2 font-medium'>Website</span></div>
                    <p className='text-[14px] text-gray-500 font-light'>2024</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
