import React from 'react'
import githubIcon from '/githubIcon.svg'
import dribbleIcon from '/dribbleIcon.png'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full">
        <Contact/>
    <div className="flex justify-center mt-8 py-4 border-t border-gray-300">          
        <div className="w-[90%] md:w-[80%] flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
            <p className='text-sm text-gray-500'>&copy; {date} Clifford the Designer. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="#" target="_blank" className='text-sm text-gray-500 flex gap-2 items-center'> 
                <span><img src={dribbleIcon} alt=""/></span> 
                    
                    <span>Dribble</span>
                
                </Link>
                <Link href="#" target="_blank" className='text-sm text-gray-500 flex gap-2 items-center'>
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