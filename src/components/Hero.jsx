import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Lottie from 'lottie-react';
import fiveStars from '../images/stars.svg';
import scrollAnimation from '../assets/scroll.json'; 

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const testimonials = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  ];

  const [displayTestimonials, setDisplayTestimonials] = useState(testimonials);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayTestimonials(testimonials.slice(0, -1));
      } else {
        setDisplayTestimonials(testimonials);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [testimonials]);

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
    <div className='2xl:px-[160px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] py-[32px] max-sm:py-[24px] bg-c1'>
      <div className='flex text-center text-white font-sans space-x-8 justify-around'>
        {displayTestimonials.map((testimonial, index) => (
          <div className='flex flex-col items-center w-56' key={index}>
            <img className='2xl:w-48 max-md:w-24' src={fiveStars} alt="" />
            <p className='2xl:text-lg max-md:text-sm'>{testimonial}</p>
          </div>
        ))}
      </div>

      <h1 className='text-c4 text-h3 md:text-h2 xl:text-h1 xl:leading-[96px] max-sm:leading-[56px] mt-[24px] md:mt-[48px] text-center'>
        WE OFFER SOLUTIONS <br /> <span ref={typewriterRef}></span><span id='cursor' className='blinking-cursor'>|</span>.
      </h1>

      <p className='font-mono text-sm md:text-h7 xl:text-h6 mt-[16px] md:mt-[32px] text-white text-center'>
        Find a place on the internet within 14 days.
      </p>

      <div className='w-full flex flex-col md:flex-row font-mono gap-2 mt-[20px] md:mt-[40px] justify-center'>
        <button className='button-2 w-full md:w-auto'>
          Book a call
        </button>

        <button className='button-2 w-full md:w-auto'>
          Services
        </button>
      </div>

      <div className='flex justify-center py-8'>
        <Lottie className='' animationData={scrollAnimation} loop={true} />
      </div>

    </div>
  );
};

export default Hero;
