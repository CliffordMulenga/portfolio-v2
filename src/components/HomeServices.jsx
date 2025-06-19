import React from 'react'
import { Link } from 'react-router-dom'
import whatsappIcon from '/whatsapp.svg'
import emailIcon from '/email.svg'

const HomeServices = () => {
  return (
    // <!-- services -->
     <section id="services" className="services">
        <div className="container">
           <div className="services-cta">
                <h3>Tell me about about next Project?</h3>
                <p>Every business is unique. Let's discuss your specific requirements and create Link solution that fits perfectly.</p>

                <div className="primary-contact">
                <Link to="#contact" className="btn-unqiue" target="_blank"> <span><img src={whatsappIcon} alt="whatsapp-icon" /></span> <span>WhatsApp</span></Link>

                    <Link to="" className="btn-unqiue" target="_blank"> <span><img src={emailIcon} alt="email-icon" /></span> <span>Email</span></Link>
                </div>
        </div> 
        </div>
     </section>
  )
}

export default HomeServices