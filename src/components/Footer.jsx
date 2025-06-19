import React from 'react'
import githubIcon from '/githubIcon.svg'
import dribbleIcon from '/dribbleIcon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
    <div className="container">          
        <div className="footer-bottom">
            <p>&copy; {date} Clifford the Designer. All rights reserved.</p>
            <div className="footer-bottom-links">
                <Link href="#" target="_blank"> <span><img src={dribbleIcon} alt=""/></span> 
                    
                    <span>Dribble</span>
                
                </Link>
                <Link href="#" target="_blank">
                    <span><img src={githubIcon} alt="github-icon"/></span>
                    
                    <span>GitHub</span>
                
                </Link>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer