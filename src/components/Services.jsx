import React from 'react'
import Service from './Service'
import useFadeIn from './Animations.jsx'; 

const Services = () => {
  useFadeIn(); 
  return (
    <>

    <div className='2xl:px-[160px] 2xl:py-[56px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[24px] bg-c1'>

      <div>

        <h2 className='font-sans text-c4 text-h3'>
          02-SERVICES
        </h2>

      </div>


    </div>




    <Service/>
    </>
  )
}

export default Services