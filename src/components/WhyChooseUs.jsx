import React from 'react'
import useFadeIn from './Animations.jsx'; 
import tick from '../images/tick.svg'
import cross from '../images/cross.svg'

const WhyChooseUs = () => {
  useFadeIn(); 
  return (
    <>
      <div id='pricing' className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[48px] lg:py-[96px] bg-[#fafafa]'>
      <h2 className='max-sm:text-left font-medium font-dm-mono text-c2 text-h3 max-sm:text-h5 text-left mb-2'>05-WHY US,NOT THEM?</h2>
      <p className='font-dm-sans text-h4 max-sm:text-h7 font-medium'>An average website for a small business can range from $2000 - $5000 in Australia. <span className='text-[#606060]'>We do it cheaper, we do it better. </span></p>

      <div className='flex justify-center py-8'>

        <div className='bg-white border-2 border-c2 rounded-lg p-10 flex font-dm-sans font-semibold lg:text-h5 max-sm:text-[9px] max-sm:py-2 max-sm:px-0'>
          <div className='p-8 space-y-2 max-sm:p-4'>
            <p className='text-transparent'>Thing</p>
            <p>Duration</p>
            <p>Total Cost</p>
            <p>Coded</p>
            <p>Help with Content</p>
            <p>Custom Made</p>
            <p>FREE Blueprint</p>
            <p>Maintenance</p>
          </div>

          <div className='p-8 px-12 bg-c2 text-white rounded-2xl space-y-2 max-sm:p-4 max-sm:px-8'>
              <p className='underline font-dm-mono text-center'>Us</p>
              <p>14 days</p>
              <p>$899-$1299</p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={tick} className='max-sm:w-[12px]' alt=""/>
                Yes
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={tick} className='max-sm:w-[12px]' alt=""/>
                Yes
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={tick} className='max-sm:w-[12px]' alt=""/>
                Yes
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={tick} className='max-sm:w-[12px]' alt=""/>
                Yes
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={tick} className='max-sm:w-[12px]' alt=""/>
                Yes
              </p>
          </div>

          <div className='p-8 px-12 bg-white text-c2 rounded-2xl space-y-2 max-sm:px-2 max-sm:p-4'>
              <p className='underline font-dm-mono text-center'>Others</p>
              <p>1-2 months</p>
              <p>$2000 - $5000</p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={cross} className='max-sm:w-[12px]' alt=""/>
                No
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={cross} className='max-sm:w-[12px]' alt=""/>
                No
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                <img src={cross} className='max-sm:w-[12px]' alt=""/>
                Recycled
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
                😂                
              </p>
              <p className='flex gap-2 max-sm:gap-[4px]'>
              😂
              </p>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default WhyChooseUs