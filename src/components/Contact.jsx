import React from 'react'

const Contact = () => {
    return (
        // < !--Contact Section-- >

        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="section-header">
                            <span className="section-tag">Lets Get Started</span>
                            <h2>Ready to Transform Your Ideas?</h2>
                            <p>Don't let another day pass wondering "what if." Your competition isn't waiting, and neither should you. Let's build something amazing together.</p>
                        </div>

                        <div className="contact-info-grid">
                            <div className="contact-benefits">
                                <div className="benefit">
                                    <div className="benefit-icon">✅</div>
                                    <div className="benefit-text">
                                        <h4>Free Strategy Session</h4>
                                        <p>30-minute consultation to discuss your project and explore possibilities</p>
                                    </div>
                                </div>
                                <div className="benefit">
                                    <div className="benefit-icon">⚡</div>
                                    <div className="benefit-text">
                                        <h4>Fast Turnaround</h4>
                                        <p>Most projects start within 1 week of agreement</p>
                                    </div>
                                </div>
                                <div className="benefit">
                                    <div className="benefit-icon">🛡️</div>
                                    <div className="benefit-text">
                                        <h4>Risk-Free Guarantee</h4>
                                        <p>Not satisfied with the initial work?, free iterations still not satisfied?, Get your money back, no questions asked</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-methods">
                                {/* <div className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div className="method-info">
                                        <span className="method-label">Email</span>
                                        <span className="method-value">clifford</span>
                                    </div>
                                </div> */}
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <span class="material-symbols-outlined">
                                            phone_in_talk
                                        </span>
                                    </div>
                                    <div className="method-info">
                                        <span className="method-label">Prefer Phone Call</span>
                                        <span className="method-value">+260 (965) 771 259 / +260 (770) 666 136</span>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <span class="material-symbols-outlined">
                                            bubble</span>
                                    </div>
                                    <div className="method-info">
                                        <span className="method-label">Prefer Socials</span>
                                        <div className="method-value-socials">
                                            <span className="method-value"><a href="" target="_blank">Linkden</a></span>
                                            <span className="method-value"><a href="" target="_blank">Facebook</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* form */}

                    {/* <!-- contact form --> */}

                    {/* <div className="contact-form-container">
                        <h2>Send Me A Message</h2>
                        <form className="contact-form" id="contact-form">
                            <div className="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label for="company">Company/Organization</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="form-group">
                                <label for="project-type">Project Type *</label>
                                <select id="project-type" name="project-type" required>
                                    <option value="">Select project type</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="mobile-app">Mobile Application</option>
                                    <option value="api">API Development</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="budget">Budget Range</label>
                                <select id="budget" name="budget">
                                    <option value="">Select budget range</option>
                                    <option value="under-5k">Under $5,000</option>
                                    <option value="5k-15k">$5,000 - $15,000</option>
                                    <option value="15k-50k">$15,000 - $50,000</option>
                                    <option value="50k-plus">$50,000+</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="timeline">Desired Timeline</label>
                                <select id="timeline" name="timeline">
                                    <option value="">Select timeline</option>
                                    <option value="asap">ASAP</option>
                                    <option value="1-month">Within 1 month</option>
                                    <option value="2-3-months">2-3 months</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="message">Project Details *</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project, goals, and any specific requirements..." required></textarea>
                            </div>

                            <button type="submit" className="btn-primary btn-full">
                                <span className="btn-text">Send Project Details</span>
                                <span className="btn-loading">Sending...</span>
                            </button>

                            <p className="form-note">
                                I'll respond within 24 hours with next steps and potential timeline.
                            </p>
                        </form>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default Contact