import { CircleCheck, ShieldCheck, Zap } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        // < !--Contact Section-- >

        <section className="flex justify-center">
            <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-8">

                <div className="flex flex-col text-center gap-2 md:gap-2 md:text-center">
                    <span className="section-tag">Lets Get Started</span>
                    <h2 className='text-2xl md:text-6xl font-bold'>Ready to Transform Your Ideas?</h2>
                    <p className='font-body font-light text-sm md:text-[1rem]'>Don't let another day pass wondering "what if." Your competition isn't waiting, and neither should you. Let's build something amazing together.</p>
                </div>

                <div className="w-full md:w-[70%] flex flex-col gap-4">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="w-[80%] md:w-full flex flex-col gap-2 ">
                            {/* <div>⚡</div> */}
                            <div>
                                <h4 className='text-xl flex gap-2 items-center'><span><CircleCheck className='text-green-300' /></span> Free Strategy Session</h4>
                                <p className='text-sm'>30-minute consultation to discuss your project and explore possibilities</p>
                            </div>
                        </div>
                        <div className="w-[80%] md:w-full flex flex-col gap-2 ">
                            {/* <div>⚡</div> */}
                            <div>
                                <h4 className='text-xl flex gap-2 items-center'> <span><Zap className='text-amber-300' /></span> Fast Turnaround</h4>
                                <p className='text-sm'>Most projects start within 1 week of agreement</p>
                            </div>
                        </div>
                        <div className="w-[80%] md:w-full flex flex-col gap-2 ">
                            {/* <div className="benefit-icon">🛡️</div> */}
                            <div className="benefit-text">
                                <h4 className='text-xl flex gap-2 items-center'> <span><ShieldCheck className='text-amber-900' /></span> Risk-Free Guarantee</h4>
                                <p className='text-sm'>Not satisfied with the initial work?, free iterations still not satisfied?, Get your money back, no questions asked</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center gap-8">
                        <div>
                            <span className="text-xl text-gray-800 font-heading flex gap-2 items-center">
                                <span className="material-symbols-outlined">phone_in_talk</span> Prefer Phone Call
                            </span>

                            <div className='mt-2'>
                                <span className="text-sm font-body text-gray-700">+260 (965) 771 259 | +260 (770) 666 136</span>
                            </div>

                        </div>

                        <div>
                            <span className="text-xl text-gray-800 font-heading flex gap-2 items-center">
                                <span className="material-symbols-outlined">bubble</span> Prefer Socials
                            </span>
                            <div className="mt-2 flex gap-4">
                                <span className="text-sm font-body text-gray-700"><a href="" target="_blank">Linkedin</a></span>
                                <span className="text-sm font-body text-gray-700"><a href="" target="_blank">Facebook</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact