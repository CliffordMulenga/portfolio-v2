import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    // <!-- Hero Section -->
    <section id="home" className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span>🚀 Available for New Projects</span>
                </div>
                <h1 className="hero-title">
                    Turn Your <span className="gradient-text">Vision</span> Into 
                    <span className="gradient-text"> Reality</span>
                </h1>
                <p className="hero-subtitle">
                    I help ambitious businesses and entrepreneurs build powerful software solutions that drive growth, 
                    increase efficiency, and create competitive advantages in today's digital landscape.
                </p>

                {/* hero stats */}
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Delivered</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Client Satisfaction</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                </div>

                {/* hero cta */}
                <div className="hero-cta">
                    <Link to="#contact" className="btn-primary">Start Your Project</Link>
                    <Link to="#portfolio" className="btn-secondary">View My Work</Link>
                </div>

            </div>
            
            <div className="hero-visual">
                <div className="floating-card card-1">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="12" fill="#667EEA"/>
                        <path d="M20 25L30 35L40 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Fast Development</span>
                </div>
                <div className="floating-card card-2">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="12" fill="#F093FB"/>
                        <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="3"/>
                        <path d="M25 30L28 33L35 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Quality Assured</span>
                </div>
                <div className="floating-card card-3">x
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="12" fill="#4FACFE"/>
                        <path d="M20 20H40V40H20V20Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25 30H35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M25 35H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Clean Code</span>
                </div>
            </div>
        </div>
        <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
        </div>
    </section>
  )
}

export default Hero