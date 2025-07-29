import React from 'react'
import { WordRotate } from './magicui/word-rotate'
import TimeCheck from './TimeCheck'

const Herosection = () => {

    return (
        <section className='relative h-screen w-full flex justify-center items-center'>
            {/* Timers */}
            <div className=''>
                <TimeCheck />
            </div>

            <div className='w-[95%] md:w-[80%] h-[50%] flex items-end'>
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <div className='flex gap-4 sm:gap-8 items-center'>
                        <img src="/profile.jfif" alt="face" className='rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] border-2 bg-amber-400' />
                        <div className='overflow-hidden'>
                            <div className="border-b-2 border-gray-600 py-0">
                                <WordRotate words={["Developer.", "Designer.", "tech guy."]} className={'text-[60px] sm:text-[100px] md:text-[120px] '} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[95%] text-center md:w-[50%] md:text-start'>
                        <p className='text-sm text-gray-600'>I help ambitious businesses and entrepreneurs build powerful software solutions that drive growth,
                            increase efficiency, and create competitive advantages in today's digital landscape.</p>
                        <p>
                            <span className='font-bold text-[12px] italic'>Based in Zambia</span>
                            <span className='font-light text-[12px] text-gray-400'> | </span>
                            <span className='font-bold text-[12px] italic'>Avaliable for work</span>
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Herosection
