import React from 'react'
import ingressive from '../assets/logo.png'
import zuri from '../assets/Zuri.png'
import './Footer.css'


const Footer = () => {
  return (
    <div className=''>
        <div className='footer'>
          <img src={zuri} alt='/' className='my-3 w-[138px] sm:[185px] h-[18px] sm-[24px]' />
          <h3 className='text-gray-500 text-sm sm:text-base my-3'>HNG Internship 9 Frontend Task</h3>
          <img src={ingressive} alt='/' className='w-[99px] h-[24px] sm:w-[132px] sm:h-[32px]' />
        </div>
    </div>
  )
}

export default Footer