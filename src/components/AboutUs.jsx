import React from 'react'
import useFadeIn from './Animations.jsx'; 

const AboutUs = () => {
  useFadeIn(); 
  return (
    <>
      <div className='2xl:px-[160px] 2xl:py-[56px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] py-[96px] bg-c1'>
      
        <div className='grid grid-cols-3 space-x-8'>
          <div className='space-y-2 col-span-2 max-md:col-span-3 fade-left'>
            <h2 className='font-dm-mono text-c4 text-h3 max-md:text-h5'>
              03-ABOUT US
            </h2>
            <p className='font-dm-sans text-c4 text-h5 max-md:text-h7'>
            At Bytesite Digital, we found many small businesses still lack an online presence, and website costs are often too high. We're here to close that gap by providing tailored, affordable website solutions, ensuring businesses get exactly what they need without overpaying.        </p>
          
          <div className='flex space-x-8'>

            <div className='text-c4 space-y-1 border-r-gray-400 border-r-[2px] pr-6'>
              <h3 className='font-dm-mono text-h5 font-bold'>5-Star</h3>
              <p className='font-questrial'>Reviews on all projects</p>
            </div>
            
            <div className='text-c4 space-y-1 border-r-gray-400 border-r-[2px] pr-6'>
              <h3 className='font-dm-mono text-h5 font-bold'>10+</h3>
              <p className='font-questrial'>Projects completed successfully</p>
            </div>

            <div className='text-c4 space-y-1'>
              <h3 className='font-dm-mono text-h5 font-bold'>Om Patel</h3>
              <p className='font-questrial'>Founder & Lead Designer / Developer</p>
            </div>

          </div>
          
          
          
          </div>


          <div className='fade-right'>
            <img className='rounded-lg' src="https://via.placeholder.com/400x400" alt="Placeholder" style={{ width: 'auto', height: 'auto' }} />
          </div>

        </div>

      </div>
    </>
  )
}

export default AboutUs