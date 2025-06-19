import React from 'react'
import developmentIcon from '/developmentIcon.svg'
import designIcon from '/designIcon.svg'

const WhatICanDo = () => {
    return (
        // <!-- What i can Do Section -->
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What i can do</span>
                    <h2>I Don't Just Make Projects, I Build Solutions To Help Bussiness Grow</h2>
                    <p>Every great project starts with understanding the problem. Here's how I solve yours.</p>
                </div>

                <div className="about-content">


                    <div className="about-text whatICanItems">
                        <h3>WhAT I CAN DO</h3>
                        <div className="whatICanItemsContainer">
                            <div className="what-i-can-do">
                                <div className=""><img src={designIcon} alt="design-icon" /></div>
                                <h4>Design</h4>
                                <p>Designing interfaces that are intuitive, efficient and enjoyable to use</p>
                            </div>

                            <div className="what-i-can-do">
                                <div className=""><img src={developmentIcon} alt="development-icon" /></div>
                                <h4>Development</h4>
                                <p>Bringing  your vision into life with the latest technology and design trends</p>
                            </div>
                        </div>



                    </div>

                    <div className="approach-section">
                        <h3>My Approach</h3>
                        <div className="approach-steps">
                            <div className="step">
                                <div className="step-number">01</div>
                                <div className="step-content">
                                    <h4>Listen & Understand</h4>
                                    <p>I dive deep into your business goals, challenges, and vision before writing a single line of code.</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">02</div>
                                <div className="step-content">
                                    <h4>Design & Plan</h4>
                                    <p>Strategic planning and user-centered design ensure your solution works perfectly for your audience.</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">03</div>
                                <div className="step-content">
                                    <h4>Build & Iterate</h4>
                                    <p>Agile development with regular check-ins keeps you involved and ensures we're always on track.</p>
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