import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    // navbar
    <div className='navi'>
      {/* navbar heading */}
      <div className='navi-title'> 
        <h1>Resume <span>Builder</span></h1>
      </div>
      {/* navbar items */}
      <div className='navi-items'>
        <span>Home</span>
        <span>Resume</span>
        <span>Login</span>
        <span>Register</span>
      </div>

    </div>
  )
}

export default Navbar