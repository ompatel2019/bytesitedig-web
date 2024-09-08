import React from 'react'
import useFadeIn from './Animations.jsx'; 
import headShot from '../images/bytesitedig.jpg'

const AboutUs = () => {
  useFadeIn(); 

  const stats = [
    { title: '5-Star', description: 'Reviews on all projects' },
    { title: '10+', description: 'Projects completed successfully' },
    { title: 'Om Patel', description: 'Founder & Lead Designer / Developer' },
  ];

  return (
    <div className='2xl:px-[160px] 2xl:py-[56px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] max-sm:pl-[4px] py-[96px] max-md:py-[40px] bg-c1'>
      <div className='grid grid-cols-3 space-x-12 max-lg:space-x-4 max-md:grid-cols-1 space-y-4'>
        {/* Image block */}
        <div className='fade-up max-md:order-1 max-md:hidden'>
          <div className='w-full h-full rounded-lg'>
            <img className='cover h-full rounded-lg' src={headShot} alt="" />
          </div>
        </div>

        {/* Text and stats */}
        <div className='space-y-8 max-md:space-y-4 col-span-2 max-md:col-span-3 max-md:order-2 fade-down'>
          <h2 className='font-dm-mono text-c4 text-h3 max-md:text-h5'>03-ABOUT US</h2>
        <div className='fade-up max-md:order-1 md:hidden'>
          <div className='w-full h-full rounded-lg'>
            <img className='cover h-full rounded-lg' src={headShot} alt="" />
          </div>
        </div>
          <p className='font-dm-sans text-c4 text-h5 max-md:text-h7 max-lg:text-h6'>
            At Bytesite Digital, we found many small businesses still lack an online presence, and website costs are often too high. We're here to close that gap by providing tailored, affordable website solutions, ensuring businesses get exactly what they need without overpaying.
          </p>

          <div className='flex space-x-8 max-md:space-x-2'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-c4 space-y-1 border-r-gray-400 md:pr-6 max-md:pr-2 ${
                  index < stats.length - 1 ? 'border-r-[2px]' : '' 
                }`}
              >
                <h3 className='font-dm-mono text-h5 font-black max-md:text-h7'>{stat.title}</h3>
                <p className='font-questrial max-md:text-[10px] md:text-h7 lg:text-h6'>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
