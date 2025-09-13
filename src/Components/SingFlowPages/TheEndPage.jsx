import React from 'react'
import Profil from './../../assets/img/Mask Group.png';
import { RiArrowLeftWideLine } from "react-icons/ri";

function TheEndPage() {
  return (
<div className="w-[794px] px-[50px] pt-[44px] pb-[50px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] sm:px-[118px] mx-[50px]">
        <div>
          <h2 className="text-[20px] font-bold mb-[37px] sm:text-[20px] text-center">
            Create profile
          </h2>
            <div>
                <div className='mb-[25px] '>
                    <div className='flex justify-between items-center '>
                        <RiArrowLeftWideLine />
                        <h2>6/8</h2>
                    </div>
                    <div className='bg-[#F2F2F2] rounded-[100px] mt-[42px]'><div className='w-[80%] border-[5px] border-[#FF4C4A] rounded-[100px]'></div></div>
                </div>
                <h2 className='text-[16px] font-semibold mb-[18px] text-[#2A1E17] sm:text-[26px]'>Add contact information.</h2>
                <p className='text-[10px] mb-[40px] text-[#554B45] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>

                <div>
                    <div className='flex justify-center gap-[42px] items-center flex-wrap'>
                        <div>
                            <img src={Profil} className='mb-[23px] mx-auto' alt="" />
                            <button className='px-[57px] py-[14px] border rounded-[100px] border-[#D9D9D9] text-[#FF4C4A]'>+  Upload photo</button>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-wrap'>
                                <div className='flex flex-wrap w-full justify-between gap-[20px]'>
                                    <label>
                                        First Name <br />
                                        <input type="text" className='pl-[10px] py-[12px] bg-[#EDEDED] rounded-[10px] border mt-[12px] focus:outline-0' placeholder='Adam'/>
                                    </label>
                                    <label>
                                        Last Name <br />
                                        <input type="text" className='pl-[10px] py-[12px] bg-[#EDEDED] rounded-[10px] border mt-[12px] focus:outline-0' placeholder='Smith'/>
                                    </label>
                                </div>

                                <label className='w-full mt-[20px]'>
                                    Address* 
                                    <input type="text" className='pl-[10px] py-[12px] border rounded-[10px] w-full mt-[20px]' placeholder='Address'/>
                                </label>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="flex justify-center items-center">
          <button className="text-[14px] text-center mt-[46px] bg-[#FF4C4A] text-white font-semibold px-[92px] py-[12px] rounded-[100px] text-nowrap sm:text-[16px]">
            Next
          </button>
        </div>
        </div>
      </div>
  )
}

export default TheEndPage
