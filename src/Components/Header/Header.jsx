import React from 'react'
import imager from './../../assets/img/Frame.png';
import Nav from '../Nav/Nav'
import Banner2 from '../Banner2/Banner2';
const Header = () => {
  return (
    <header className=' m-auto'>
      <div className='max-w-[1220px] m-auto'>
        <Nav />


      </div >

      <Banner2 />
    </header >
  )
}

export default Header