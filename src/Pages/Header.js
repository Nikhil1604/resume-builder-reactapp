import React from 'react'
import image1 from '../images/image1.jpg'

const Header = () => {
  return (
    // header page
    <div className='header'>
        {/* text part */}
        <div className='header-text'>
            <h3>Resume Builder</h3>
            <p> adipisicing exercitation cupidatat excepteur eiusmod nostrud incididunt. Culpa sunt fugiat Lorem ea minim labore veniam cupidatat ad deserunt minim. Deserunt qui incididunt duis reprehenderit exercitation amet aliqua in non adipisicing do fugiat dolore officia.</p>
        </div>
        {/* image part */}
        <div className='header-image'>
            <img src={image1} alt='other' />
        </div>

    </div>
    // end of header section
  )
}

export default Header