import React from 'react'
import './Navbar.css'
import { PiMouseSimpleLight } from "react-icons/pi";


//images
import imgTwo from '../../assests/img-2.png'
import imgOne from '../../assests/img-1.png'

//React Icons
import { SlDiamond } from "react-icons/sl";

const Navabar = () => {
  return (
    <div className='main-container'>
      <div className='nav-container'>
        <div className='nav-img-1'>
          <h1><SlDiamond size='20px' color='white'/>Pop Rock Crystal</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Help</li>
          </ul>
        </nav>
        <div className='nav-img-2'>
          <img src={imgTwo} alt='img-2' />
        </div>
      </div>
      <div className='mid-content'>
        <div className='content-title'>
          <h3>Welcome to</h3>
          <h1>Pop Rock Crystal Shop!</h1>
          <p>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>
          <div className='content-btn'>
            <button className='content-btn-1'>SHOP NOW</button>
            <button className='content-btn-2'>about us</button>
          </div>
        </div>
        <div className='content-img'>
          <img src={imgOne} alt='img-one'/>
          <h1>Crystal Agate Phone Grip - 18.99$</h1>
        </div>
      </div>
      <div className='wave'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,234.7C274.3,235,343,181,411,170.7C480,160,549,192,617,213.3C685.7,235,754,245,823,213.3C891.4,181,960,107,1029,80C1097.1,53,1166,75,1234,74.7C1302.9,75,1371,53,1406,42.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </div>
      <div className='scroll-down'>
        <h1>< PiMouseSimpleLight size={25} />Scroll Down</h1>
      </div>
    </div>
  )
}

export default Navabar
