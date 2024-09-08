import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Lottie from 'lottie-react';
import fiveStars from '../images/stars.svg';
import scrollAnimation from '../assets/scroll.json'; 
import useFadeIn from './Animations.jsx'; 

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  useFadeIn(); 
  const testimonials = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  ];

  const [displayTestimonials, setDisplayTestimonials] = useState(testimonials);
  const [buttonText, setButtonText] = useState('Get Started');
  const typewriterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayTestimonials(testimonials.slice(0, -1));
        setButtonText('Book a call');
      } else {
        setDisplayTestimonials(testimonials);
        setButtonText('Get Started');
      }
    };

    // Debounce the resize event for performance
    const debounceResize = () => {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(handleResize, 150);
      };
    };

    window.addEventListener('resize', debounceResize());

    return () => {
      window.removeEventListener('resize', debounceResize());
    };
  }, [testimonials]);

  useEffect(() => {
    const words = ['TO DESIGN', 'TO DEVELOP', 'IN SEO'];

    let mainTimeline = gsap.timeline({ repeat: -1 });

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

    // Cleanup animation on unmount
    return () => mainTimeline.kill();
  }, []);

  return (
    <div id='home' className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[24px] bg-c1'>
      <div className='flex text-center text-white font-sans space-x-14 max-md:space-x-4 justify-center'>
        {displayTestimonials.map((testimonial, index) => (
          <div className='flex flex-col items-center w-56' key={index}>
            <img className='2xl:w-48 max-md:w-24' src={fiveStars} alt="" />
            <p className='2xl:text-lg max-md:text-[12px]'>{testimonial}</p>
          </div>
        ))}
      </div>

      <h1 className='2xl:text-[120px] 2xl:leading-[120px] text-c4 text-h3 md:text-h2 xl:text-h1 xl:leading-[96px] max-sm:leading-[56px] mt-[24px] md:mt-[48px] text-center'>
        WE OFFER SOLUTIONS <br /> <span ref={typewriterRef}></span><span id='cursor' className='blinking-cursor'>|</span>.
      </h1>

      <p className='font-mono text-xl max-md:text-[12px] xl:text-h6 mt-[16px] md:mt-[32px] text-white text-center'>
        Find a place on the internet within 14 days.
      </p>

      <div className='flex flex-row font-mono gap-2 mt-[20px] md:mt-[40px] justify-center fade-down max-md:text-sm'>
        <button className='button-2'>
          {buttonText}
        </button>

        <button className='button-2'>
          Services
        </button>
      </div>

      <div className='flex justify-center pt-8 pb-2 fade-up'>
        <Lottie className='w-16 max-md:w-12' animationData={scrollAnimation} loop={true} />
      </div>

    </div>
  );
};

export default Hero;
