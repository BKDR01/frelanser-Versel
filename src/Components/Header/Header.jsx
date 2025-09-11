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
      <div className='bg bg-no-repeat bg-cover max-w[1220px] mx-auto flex flex-col pt-[30px] pb-[10px] gap-2 md:flex-row items-center text-center justify-around'>
        <div className='text-white max-w-[12200px] text-center md:text-left md:max-w-xl'>
          <h1 className='w-[689px] font-bold text-[43px] pt-[50px] pb-[10px] sm:text-4xl md:text-5xl'>Join world’s best market place</h1>
          <div className='text-white pb-[28px] text-sm sm:text-base flex-col'>
            <p>Find the best Talent and best works based on your skills from around the world.</p>
          </div>
          <div className='flex space-x-4 justify-center'>
            <button id='run' className='w-150px border-2 border-white py-[12px] px-[32px] rounded-3xl'>Find Talent</button>
            <button id='run' className='w-150px border-2 border-white py-[12px] px-[32px] rounded-3xl'>Find Work</button>
          </div>
        </div>
        <div className='w-full md:w-[700px] flex justify-center'>
          <img src={imager} alt="" />

        </div>
      </div>
      <Banner2 />
    </header>
  )
}

export default Header