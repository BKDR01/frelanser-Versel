import React from 'react';
import imug from './../../assets/img/Group (2).png';

const Banner2 = () => {
    return (
        <div className='bg-[#DDE1F3] flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-16 md:py-12'>
            <div className='mb-6 md:mb-0'>
                <img src={imug} alt="Find Talents Illustration" className='w-32 md:w-48' />
            </div>

            <div className='text-center md:text-left md:max-w-xl space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold text-black'>
                    Find best Talents
                </h2>
                <p className='text-sm md:text-base text-gray-700'>
                    Find the best Talent and best works based on your skills from around the world.
                </p>
                <button className='bg-[#4260DA] py-3 px-6 rounded-full text-white hover:bg-blue-700 transition'>
                    Find Talents
                </button>
            </div>
        </div>
    );
};

export default Banner2;
