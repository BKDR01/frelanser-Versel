//import React from 'react'
//import AppStore from './../../assets/icons/appstr.png';
//import PlayMar from './../../assets/icons/playmrkt.png';
//const Footer = () => {
//    return (
//        <footer className="bg-[#1F1F1F]">
//            <div className="w-[1210px] mx-auto pt-[90px] pb-[55px]">
//                <div className="flex pb-[55px] border-b-[1px] border-b-[#FFFFFF]">
//
//                    <div className='leading-[34px] mr-[84px]'>
//                        <p className="font-extrabold text-white text-[12px]">For clients</p>
//
//                        <p className="font-semibold text-white text-[12px] mt-[8px]">How to Hire</p>
//                        <p className="font-semibold text-white text-[12px]">Talent Marketplace</p>
//                        <p className="font-semibold text-white text-[12px]">Project Catalog</p>
//                        <p className="font-semibold text-white text-[12px]">Talent Scout</p>
//                        <p className="font-semibold text-white text-[12px]">Enterprise</p>
//                        <p className="font-semibold text-white text-[12px]">Payroll Services</p>
//                        <p className="font-semibold text-white text-[12px]">Direct Contracts</p>
//                        <p className="font-semibold text-white text-[12px]">Hire Worldwide</p>
//                        <p className="font-semibold text-white text-[12px]">Hire in the USA</p>
//                    </div>
//
//                    <div className='leading-[34px] mr-[110px]'>
//                        <p className="font-extrabold text-white text-[12px]">For Talent</p>
//
//                        <p className="font-semibold text-white text-[12px] mt-[8px]">For Talent</p>
//                        <p className="font-semibold text-white text-[12px]">How to Find Work</p>
//                        <p className="font-semibold text-white text-[12px]">Direct Contracts</p>
//                        <p className="font-semibold text-white text-[12px]">Find Freelance Jobs Worldwide</p>
//                        <p className="font-semibold text-white text-[12px]">Find Freelance Jobs in the USA</p>
//                    </div>
//
//                    <div className='leading-[34px] mr-[97px]'>
//                        <p className="font-extrabold text-white text-[12px]">Resources</p>
//
//                        <p className="font-semibold text-white text-[12px] mt-[8px]">Help & Support</p>
//                        <p className="font-semibold text-white text-[12px]">Success Stories</p>
//                        <p className="font-semibold text-white text-[12px]">Upwork Reviews</p>
//                        <p className="font-semibold text-white text-[12px]">Resources</p>
//                        <p className="font-semibold text-white text-[12px]">Blog</p>
//                        <p className="font-semibold text-white text-[12px]">Community</p>
//                        <p className="font-semibold text-white text-[12px]">Affiliate Program</p>
//                    </div>
//
//                    <div className='leading-[34px] mr-[17px]'>
//                        <p className="font-extrabold text-white text-[12px]">Company</p>
//
//                        <p className="font-semibold text-white text-[12px] mt-[8px]">About Us</p>
//                        <p className="font-semibold text-white text-[12px]">Leadership</p>
//                        <p className="font-semibold text-white text-[12px]">Investor Relations</p>
//                        <p className="font-semibold text-white text-[12px]">Careers</p>
//                        <p className="font-semibold text-white text-[12px]">Our Impact</p>
//                        <p className="font-semibold text-white text-[12px]">Press</p>
//                        <p className="font-semibold text-white text-[12px]">Contact Us</p>
//                        <p className="font-semibold text-white text-[12px]">Trust, Safety & Security</p>
//                        <p className="font-semibold text-white text-[12px]">UK Modern Slavery Statement</p>
//                    </div>
//
//                    <div>
//                        <p className="font-extrabold text-white text-[12px]">Download our App</p>
//                        <div className='flex mt-[36px] gap-[4px]'>
//                            <img src={PlayMar} alt="Play Market" />
//                            <img src={AppStore} alt="App Store" />
//                        </div>
//                    </div>
//
//                </div>
//                <div className='flex gap-[40px] mt-[31px] h-[21px] border-r-[1px] border-r-white w-[480px] items-center'>
//                    <p className='text-white text-[10px]'>2021- 2022 uptechunt</p>
//                    <p className='text-white text-[10px]'>Terms of Service</p>
//                    <p className='text-white text-[10px]'>Privacy Policy</p>
//                    <p className='text-white text-[10px]'>CA Notice at Collection</p>
//                </div>
//            </div>
//        </footer>
//    )
//}
//
//export default Footer
import React, { useState } from "react";
import AppStore from "./../../assets/icons/appstr.png";
import PlayMar from "./../../assets/icons/playmrkt.png";
import ProfView from "../../Page/ProfileView/ProfView";

const sections = [
  {
    title: "For clients",
    items: [
      "How to Hire",
      "Talent Marketplace",
      "Project Catalog",
      "Talent Scout",
      "Enterprise",
      "Payroll Services",
      "Direct Contracts",
      "Hire Worldwide",
      "Hire in the USA",
    ],
  },
  {
    title: "For Talent",
    items: [
      "For Talent",
      "How to Find Work",
      "Direct Contracts",
      "Find Freelance Jobs Worldwide",
      "Find Freelance Jobs in the USA",
    ],
  },
  {
    title: "Resources",
    items: [
      "Help & Support",
      "Success Stories",
      "Upwork Reviews",
      "Resources",
      "Blog",
      "Community",
      "Affiliate Program",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Leadership",
      "Investor Relations",
      "Careers",
      "Our Impact",
      "Press",
      "Contact Us",
      "Trust, Safety & Security",
      "UK Modern Slavery Statement",
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-[1210px] w-full mx-auto pt-[40px] pb-[30px] px-4">
        <div className="hidden sm:flex flex-wrap gap-[40px] pb-[40px] border-b border-white">
          {sections.map((sec, i) => (
            <div key={i} className="leading-[28px] min-w-[150px] flex-1">
              <p className="font-extrabold text-[12px]">{sec.title}</p>
              <div className="mt-2 space-y-1">
                {sec.items.map((item, j) => (
                  <p key={j} className="font-semibold text-[12px]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="min-w-[150px] flex-1">
            <p className="font-extrabold text-[12px]">Download our App</p>
            <div className="flex mt-[20px] gap-[8px]">
              <img src={PlayMar} alt="Play Market" />
              <img src={AppStore} alt="App Store" />
            </div>
          </div>
        </div>

        <div className="sm:hidden pb-[30px] border-b border-white">
          {sections.map((sec, i) => (
            <div key={i} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center py-3"
                onClick={() => toggleSection(i)}
              >
                <span className="font-extrabold text-[14px]">{sec.title}</span>
                <span className="text-[18px]">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="pl-2 pb-3 space-y-1">
                  {sec.items.map((item, j) => (
                    <p key={j} className="font-semibold text-[12px]">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4">
            <p className="font-extrabold text-[14px]">Download our App</p>
            <div className="flex mt-[12px] gap-[8px]">
              <img src={PlayMar} alt="Play Market" />
              <img src={AppStore} alt="App Store" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[40px] mt-[20px] text-center sm:text-left">
          <p className="text-[10px]">2021-2022 uptechunt</p>
          <p className="text-[10px]">Terms of Service</p>
          <p className="text-[10px]">Privacy Policy</p>
          <p className="text-[10px]">CA Notice at Collection</p>
        </div>
      </div>
    </footer>



    
    </>
  );
};

export default Footer;
 