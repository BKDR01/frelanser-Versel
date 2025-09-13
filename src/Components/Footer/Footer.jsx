import React from 'react'
import AppStore from './../../assets/icons/appstr.png';
import PlayMar from './../../assets/icons/playmrkt.png';
const Footer = () => {
    return (
        <footer className="bg-[#1F1F1F]">
            <div className="max-w-[1210px] mx-auto pt-[90px] pb-[55px]">
                <div className="flex pb-[55px] border-b-[1px] border-b-[#FFFFFF]">

                    <div className='leading-[34px] mr-[84px]'>
                        <p className="font-extrabold text-white text-[12px]">For clients</p>

                        <p className="font-semibold text-white text-[12px] mt-[8px]">How to Hire</p>
                        <p className="font-semibold text-white text-[12px]">Talent Marketplace</p>
                        <p className="font-semibold text-white text-[12px]">Project Catalog</p>
                        <p className="font-semibold text-white text-[12px]">Talent Scout</p>
                        <p className="font-semibold text-white text-[12px]">Enterprise</p>
                        <p className="font-semibold text-white text-[12px]">Payroll Services</p>
                        <p className="font-semibold text-white text-[12px]">Direct Contracts</p>
                        <p className="font-semibold text-white text-[12px]">Hire Worldwide</p>
                        <p className="font-semibold text-white text-[12px]">Hire in the USA</p>
                    </div>

                    <div className='leading-[34px] mr-[110px]'>
                        <p className="font-extrabold text-white text-[12px]">For Talent</p>

                        <p className="font-semibold text-white text-[12px] mt-[8px]">For Talent</p>
                        <p className="font-semibold text-white text-[12px]">How to Find Work</p>
                        <p className="font-semibold text-white text-[12px]">Direct Contracts</p>
                        <p className="font-semibold text-white text-[12px]">Find Freelance Jobs Worldwide</p>
                        <p className="font-semibold text-white text-[12px]">Find Freelance Jobs in the USA</p>
                    </div>

                    <div className='leading-[34px] mr-[97px]'>
                        <p className="font-extrabold text-white text-[12px]">Resources</p>

                        <p className="font-semibold text-white text-[12px] mt-[8px]">Help & Support</p>
                        <p className="font-semibold text-white text-[12px]">Success Stories</p>
                        <p className="font-semibold text-white text-[12px]">Upwork Reviews</p>
                        <p className="font-semibold text-white text-[12px]">Resources</p>
                        <p className="font-semibold text-white text-[12px]">Blog</p>
                        <p className="font-semibold text-white text-[12px]">Community</p>
                        <p className="font-semibold text-white text-[12px]">Affiliate Program</p>
                    </div>

                    <div className='leading-[34px] mr-[17px]'>
                        <p className="font-extrabold text-white text-[12px]">Company</p>

                        <p className="font-semibold text-white text-[12px] mt-[8px]">About Us</p>
                        <p className="font-semibold text-white text-[12px]">Leadership</p>
                        <p className="font-semibold text-white text-[12px]">Investor Relations</p>
                        <p className="font-semibold text-white text-[12px]">Careers</p>
                        <p className="font-semibold text-white text-[12px]">Our Impact</p>
                        <p className="font-semibold text-white text-[12px]">Press</p>
                        <p className="font-semibold text-white text-[12px]">Contact Us</p>
                        <p className="font-semibold text-white text-[12px]">Trust, Safety & Security</p>
                        <p className="font-semibold text-white text-[12px]">UK Modern Slavery Statement</p>
                    </div>

                    <div>
                        <p className="font-extrabold text-white text-[12px]">Download our App</p>
                        <div className='flex mt-[36px] gap-[4px]'>
                            <img src={PlayMar} alt="" />
                            <img src={AppStore} alt="" />
                        </div>
                    </div>

                </div>
                <div className='flex gap-[40px] mt-[31px] h-[21px] border-r-[1px] border-r-white w-[480px] items-center'>
                    <p className='text-white text-[10px]'>2021- 2022 uptechunt</p>
                    <p className='text-white text-[10px]'>Terms of Service</p>
                    <p className='text-white text-[10px]'>Privacy Policy</p>
                    <p className='text-white text-[10px]'>CA Notice at Collection</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer