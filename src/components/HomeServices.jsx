import React from 'react'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  return (
    // <!-- services -->
     <section id="services" className="services">
        <div className="container">
           <div className="services-cta">
                <h3>Tell me about about next Project?</h3>
                <p>Every business is unique. Let's discuss your specific requirements and create Link solution that fits perfectly.</p>

                <div className="primary-contact">
                    <Link to="" className="btn-unqiue" target="_blank">Email</Link>
                    <Link to="#contact" className="btn-unqiue" target="_blank">WhatsApp</Link>
                </div>
        </div> 
        </div>
     </section>
  )
}

export default HomeServices