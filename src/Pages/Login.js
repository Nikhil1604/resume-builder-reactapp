import React from 'react'
import './login.css'
import image1 from '../images/image2.jpg'

const Login = () => {
  return (
    // login Page
    <div className='login'>
        {/* login image */}
        <div className='loginImage'>
            <img src={image1} alt='other1'/>
        </div>
        {/* login text */}
        <div className='loginText'>
            <h3>Login</h3>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <p>Login / Sign In</p>
        </div>
    </div>
  )
}

export default Login