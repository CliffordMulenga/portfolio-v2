import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle mobile menu
    const handleToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Close menu on link click (especially on mobile)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Add scroll effect to navbar (e.g. change background when scrolled)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to internal anchor links
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const targetId = link.getAttribute("href");
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    const offsetTop = targetEl.offsetTop - 70;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            });
        });
    }, []);

    return (
        // Navigation
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    
                    <span className="logo-text">Clifford</span>
                    <span className="logo-subtitle">Bsc. Computer Science</span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="nav-menu">
                    <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link></li>
                    <li><Link to="/portfolio" className="nav-link" onClick={handleLinkClick}>Work</Link></li>
                    <li><Link to="/contact" className="nav-link cta-button" onClick={handleLinkClick}>Whats your next project?</Link></li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? "active" : ""}`} id="hamburger" onClick={handleToggle}>
                    <span className="material-symbols-outlined">fiber_manual_record</span>
                    <span> {isMenuOpen ? 'Close': 'menu'}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
