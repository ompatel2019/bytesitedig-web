import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import stars from '../images/stars.svg';
import heroButton from '../images/heroButton.svg';
import heroImg from '../images/heroImg.svg';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const words = ['TO DESIGN', 'TO DEVELOP', 'IN SEO'];

    // Main timeline
    let mainTimeline = gsap.timeline({
      repeat: -1,
    });

    words.forEach(word => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3,
      });

      textTimeline.to(typewriterRef.current, {
        text: word,
        duration: 1.5,
      });

      mainTimeline.add(textTimeline);
    });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-8 max-md:hidden'>
      <div className='bg-c1 col-span-1 md:col-span-5 p-6 md:pl-[120px] md:pr-[80px] md:py-[64px]'>
        <div className='flex flex-col md:flex-row font-dm-sans text-c4 space-y-4 md:space-y-0 md:space-x-8 text-center'>
          <div className='flex flex-col items-center gap-2 xl:text-h7 text-[12px]'>
            <img src={stars} alt="" className='' />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          </div>
          <div className='flex flex-col items-center gap-2 xl:text-h7 text-[12px]'>
            <img src={stars} alt="" className='' />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          </div>
          <div className='flex flex-col items-center gap-2 xl:text-h7 text-[12px]'>
            <img src={stars} alt="" className='' />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          </div>
        </div>

        <h1 className='text-c4 text-h3 md:text-h2 xl:text-h1 xl:leading-[96px] mt-[24px] md:mt-[48px]'>
          WE OFFER SOLUTIONS <br /> <span ref={typewriterRef}></span><span id='cursor' className='blinking-cursor'>|</span>.
        </h1>

        <p className='font-mono text-sm md:text-h7 xl:text-h6 mt-[16px] md:mt-[32px] text-white'>
          Find a place on the internet within 14 days.
        </p>

        <div className='w-full flex flex-col md:flex-row font-mono gap-2 mt-[20px] md:mt-[40px]'>
          <button className='button-2 w-full md:w-auto'>
            Book a call
          </button>

          <button className='button-2 w-full md:w-auto'>
            Services
          </button>
        </div>

        <div className='mt-[24px] md:mt-[32px]'>
          <img src={heroButton} alt="" className='rotate-animation w-12 h-12 md:w-16 md:h-16' />
        </div>
      </div>

      <div className='col-span-1 md:col-span-3 p-6 md:pr-[120px] md:pl-[24px]'>
        <img className='h-full  max-w-sm md:max-w-md xl:max-w-lg object-cover' src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;