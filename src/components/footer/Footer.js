import React from 'react'
import './Footer.css'
import circleImg from '../../assests/img-1.png'

const Footer = () => {
  return (
    
    <div className='footer-main-container'>
      <div className='flex-container'>
        <div className='footer-content'>
          <h3>BEST PRICE</h3>
          <h1>Agate Phone Grip</h1>
          <h2><span>44.50$</span>19.50$</h2>
          <p>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>
          <button>BUY NOW</button>
        </div>
        <div className='circle-main-container'>
          <div className='circle-container'>
            <img src={circleImg} alt='circle-img'/>
          </div>
          <div className='outer-circle'></div>
        </div>
      </div>
      <div className='wave-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="2" d="M0,256L60,250.7C120,245,240,235,360,213.3C480,192,600,160,720,154.7C840,149,960,171,1080,154.7C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div className='footer-banner'></div>
    </div>
  </div>
     
  )
}

export default Footer
