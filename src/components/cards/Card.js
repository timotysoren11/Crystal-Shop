import React from 'react'
import './Card.css'

import { IoMdArrowDropdown } from "react-icons/io";

//importing images
import cardImg  from '../../assests/img-1.png'

const Card = () => {
  return (
    <div className='cards-main-container'>

      <div className='card-title'>
        <h1>All product</h1>
        <div className='drop-menu'>
          <div className='drop-menu-1'>
            <h3 className='h3-style'>Filter:</h3>
            <h3>All Products <IoMdArrowDropdown /></h3>
          </div>
          <div className='drop-menu-2'>
            <h3 className='h3-style'>Sort:</h3>
            <h3>Best Selling <IoMdArrowDropdown /></h3>
          </div>
        </div>
      </div>

      {/* Card container */}
      <div className='card-container'>
        
        {/*---------card-row-one----------------- */}
        <div className='card-row-container-1'>
            
            <div className='card-1'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn'>BUY NOW</button>
              </div>
            </div>

            <div className='card-1'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

            <div className='card-1'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

            <div className='card-1'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

          </div>
         {/* --------- Card-row-2---------- */}

         <div className='card-row-container-2'>
            
            <div className='card-2'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

            <div className='card-2'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

            <div className='card-2'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

            <div className='card-2'>
              <img src={cardImg} alt='card-img'/>
              <div className='card-info'>
                <h1>CRYSTAL AGATE PHONE GRIP</h1>
                <h2>18.99$</h2>
                <button className='card-1-btn-1'>BUY NOW</button>
              </div>
            </div>

          </div>

      </div>
      <div className='card-bottom-btn'>
        <h1>View All</h1>
      </div>
      
    </div>
  )
}

export default Card
