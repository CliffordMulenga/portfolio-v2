import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img.jpg'

const Featurework = () => {
  return (
    // <!-- Featured Work Section -->
    <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="section-header">
                <span className="section-tag">Featured Work</span>
                <h2>Projects That Made Link Difference</h2>
                <p>Real solutions for real businesses. Here's how I've helped clients achieve their goals.</p>
            </div>
            
            {/* Featured Work Cards */}
            <div className="portfolio-grid">
                {/* project 1 */}
                <div className="project-card">
                    <div className="project-image">
                        <img src={img} alt="project" />
                    </div>
                    <div className="project-content">
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">PostgreSQL</span>
                        </div>
                        <h3>EcoTrack - Sustainability Platform</h3>
                        <p>A comprehensive platform helping businesses track and reduce their carbon footprint. Increased client engagement by 340% and helped save over 10,000 tons of CO2.</p>
                        <div className="project-results">
                            <div className="result">
                                <span className="result-number">340%</span>
                                <span className="result-label">Engagement Increase</span>
                            </div>
                            <div className="result">
                                <span className="result-number">10K+</span>
                                <span className="result-label">Tons CO2 Saved</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="project-card">
                    <div className="project-image swap-image">
                        <img src={img} alt="project" />
                    </div>
                    <div className="project-content swap-content">
                        <div className="project-tags">
                            <span className="tag">React Native</span>
                            <span className="tag">Firebase</span>
                            <span className="tag">Stripe</span>
                        </div>
                        <h3>FinanceFlow - Personal Finance App</h3>
                        <p>Mobile app that simplifies personal finance management. Featured in App Store and achieved 50K+ downloads in first 6 months with 4.8-star rating.</p>
                        <div className="project-results">
                            <div className="result">
                                <span className="result-number">50K+</span>
                                <span className="result-label">Downloads</span>
                            </div>
                            <div className="result">
                                <span className="result-number">4.8★</span>
                                <span className="result-label">App Store Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* project 2 */}
                <div className="project-card">
                    <div className="project-image">
                        <img src={img} alt="project" />
                    </div>
                    <div className="project-content">
                        <div className="project-tags">
                            <span className="tag">Vue.js</span>
                            <span className="tag">Python</span>
                            <span className="tag">AWS</span>
                        </div>
                        <h3>MedConnect - Healthcare Portal</h3>
                        <p>Secure patient portal connecting healthcare providers with patients. Reduced appointment scheduling time by 75% and improved patient satisfaction scores.</p>
                        <div className="project-results">
                            <div className="result">
                                <span className="result-number">75%</span>
                                <span className="result-label">Time Reduction</span>
                            </div>
                            <div className="result">
                                <span className="result-number">95%</span>
                                <span className="result-label">Satisfaction Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-cta">
                <p>Want to see more projects or discuss how I can help with yours?</p>
                <div className="buttons">
                    <Link to="#contact" className="btn-primary">Let's Talk</Link>
                    <Link to="#contact" className="btn-secondary">More Projects</Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Featurework