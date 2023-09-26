import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    // footer
    <div className='foot'>
        {/* footer links */}
        <div className='foot-link'>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Template</span>
        </div>
        {/* Address */}
        <div className='foot-add'>
            <h3>Main Office</h3>
            <p>Kothrud</p>
            <p>Pune-411032</p>
        </div>
    </div>
  )
}

export default Footer