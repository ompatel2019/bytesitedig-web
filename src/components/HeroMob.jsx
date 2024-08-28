import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import stars from '../images/stars.svg';
import heroButton from '../images/heroButton.svg';

const HeroMob = () => {
  return (
    <>
    <div className='md:hidden bg-c1 px-[12px] md:px-[48px]'>

    <div className='flex flex-col font-dm-sans text-c4 space-x-8 text-center'>
            <div>
                <div className='flex flex-row items-center gap-2 text-[8px]'>
                  <img src={stars} alt="" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </div>
                <div className='flex flex-col items-center gap-2 text-[8px]'>
                  <img src={stars} alt="" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 text-[8px]'>
              <img src={stars} alt="" />
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
            </div>
          </div>
    </div>
    </>
  )
}

export default HeroMob