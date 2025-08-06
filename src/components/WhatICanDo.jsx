import React from 'react'
import developmentIcon from '/developmentIcon.svg'
import designIcon from '/designIcon.svg'
import SectionHeading from './ui/sectionHeading'

const WhatICanDo = () => {
    return (
        // <!-- What i can Do Section -->
        <section className="flex justify-center bg-white py-8">
            <div className="w-[90%] md:w-[80%] flex flex-col gap-8">
                <div className=" flex flex-col text-center gap-2 md:gap-2 md:text-center">
                    <h2 className='text-2xl md:text-6xl font-bold'>I Don't Just Make Projects, I Build Solutions To Help Bussiness Grow</h2>
                    <p className='font-body font-light text-sm md:text-[1rem]'>Every great project starts with understanding the problem. Here's how I solve yours.</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="w-full md:w-[70%] flex flex-col gap-4">
                        <SectionHeading title={'What i can do'}/>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <div className="w-[80%] md:w-[50%] flex flex-col justify-center text-center items-center sm:items-start sm:text-start">
                                <div className=""><img src={designIcon} alt="design-icon" /></div>
                                <h4 className='text-xl'>Design</h4>
                                <p className='text-sm'>Designing interfaces that are intuitive, efficient and enjoyable to use</p>
                            </div>
                            <div className="w-[80%] md:w-[50%] flex flex-col justify-center text-center  items-center sm:items-start sm:text-start">
                                <div className=""><img src={developmentIcon} alt="development-icon" /></div>
                                <h4 className='text-xl'>Development</h4>
                                <p className='text-sm'>Bringing  your vision into life with the latest technology and design trends</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[70%] flex flex-col gap-4">
                        <SectionHeading title={'My Approach'} />
                        <div className="flex flex-col gap-4 items-center">
                            <div className="w-[80%] md:w-full flex flex-col gap-2 ">
                                <div className="font-body text-2xl font-light text-gray-600">01</div>
                                <div>
                                    <h4 className='text-xl'>Listen & Understand</h4>
                                    <p className='text-sm'>I dive deep into your business goals, challenges, and vision before writing a single line of code.</p>
                                </div>
                            </div>
                            <div className="w-[80%] md:w-full flex flex-col gap-4">
                                <div className="font-body text-2xl font-light text-gray-600">02</div>
                                <div>
                                    <h4 className='text-xl'>Design & Plan</h4>
                                    <p className='text-sm'>Strategic planning and user-centered design ensure your solution works perfectly for your audience.</p>
                                </div>
                            </div>
                            <div className="w-[80%] md:w-full flex flex-col gap-4">
                                <div className="font-body text-2xl font-light text-gray-600">03</div>
                                <div className="step-content">
                                    <h4 className='text-xl'>Build & Iterate</h4>
                                    <p className='text-sm'>Agile development with regular check-ins keeps you involved and ensures we're always on track.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhatICanDo