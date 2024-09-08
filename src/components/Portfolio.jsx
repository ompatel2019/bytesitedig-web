import React from 'react'
import PortfolioItem from './PortfolioItem'
import useFadeIn from './Animations.jsx'; 
import iclLogo from '../images/iclLogo.png'
import isolvePlumbingLogo from '../images/isolvePlumbingLogo.jpeg'
import a1educationLogo from '../images/a1educationLogo.png'
import rgbplumbingLogo from '../images/RgbLogo.svg'
import embarkLogo from '../images/embarkLogo.svg'
import bytesiteLogo from '../images/bytesitedigLogo.svg'
import streamlineLogo from '../images/streamlineLogo.svg'

const Portfolio = () => {
  useFadeIn(); 
  return (
    <>
      <div className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[24px] bg-c1'>
      <h2 className='max-md:text-left font-dm-mono text-c4 text-h3 max-md:text-h5 text-right fade-right lg:mb-12 mb-8 max-md:mb-2'>04-PORTFOLIO</h2>

      <div className='space-y-4 fade-right md:hidden mb-6'>
            <p className='text-c3 font-dm-sans'>
            <span className='text-[24px] font-serif leading-6'>“</span>Twelve months ago, Om built a stunning, modern website for our tuition business, blending function with exceptional design. He thoroughly understood our needs, delivering an industry-leading website. Om's responsive, provides detailed updates, and offers competitive pricing. Highly recommend and look forward to future collaborations. Thank you, Om!
            </p>
            <div>
              <p className='text-gray-400 font-dm-sans text-h6'>
                Michael Chan
              </p>
              <p className='text-[#999999] font-dm-sans text-h7'>
                Founder of Mathologist & KIT Education
              </p>
            </div>
          </div>
        <div className='max-md:block grid grid-cols-2 lg:gap-12 md:gap-8 2xl:px-[120px]'> 

          <div className='space-y-12'>
            <div className='space-y-4 fade-left'>
              <a href="https://www.playicl.com.au/">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-[#3E065F]'>
                  <img className='rounded-2xl max-md:w-32' src={iclLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a className='hover:text-blue-500' href="https://www.playicl.com.au/">2024 ⋅ ICL</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Needed a website which enables users to understand league operations and register online.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-left max-md:text-center'>
              <a href="https://a1education.com.au/">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-[#fff]'>
                  <img className='max-md:w-40' src={a1educationLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a href="https://a1education.com.au/">2023 ⋅ A1 EDUCATION</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                Wanted to establish an online presence and showcase their educational services.
                </p>
              </div>
            </div>

            <div className='space-y-4 fade-left max-md:text-center'>
              <a href="https://www.figma.com/proto/3zT6h4kKetBfaTJrIvHlqc/Internship-Platform-Website-Prototype-Athena?node-id=1171-11257&node-type=FRAME&t=AJHkhk1PPn72W2pL-0&scaling=min-zoom&content-scaling=fixed&page-id=68%3A5641&starting-point-node-id=911%3A4739">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-[#7d74cc]'>
                  <img src={embarkLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1 fade-left max-md:text-center'>
                <a href="https://www.figma.com/proto/3zT6h4kKetBfaTJrIvHlqc/Internship-Platform-Website-Prototype-Athena?node-id=1171-11257&node-type=FRAME&t=AJHkhk1PPn72W2pL-0&scaling=min-zoom&content-scaling=fixed&page-id=68%3A5641&starting-point-node-id=911%3A4739">
                  <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                    2024 ⋅ EMBARK INTERNSHIP PLATFORM (DESIGN)
                  </h4>
                </a>
                <p className='font-dm-mono text-[#999999]'>
                Showcasing internship platform designs
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-left'>
              <a href="https://ubl-invoice-generator.vercel.app/">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-[#c96050]'>
                  <img className='max-md:w-8' src={streamlineLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a className='max-md:hidden' href="https://ubl-invoice-generator.vercel.app/">2024 ⋅ STREAMLINE INVOICE GENERATION (LARGER SCREENS ONLY)</a>
                  <a className='md:hidden'>2024 ⋅ STREAMLINE INVOICE GENERATION (LARGER SCREENS ONLY)</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                Simplifying invoice generation processes.
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-12'>
            <div className='space-y-4 fade-right max-md:hidden'>
              <p className='lg:leading-10 text-c3 font-dm-sans text-h5 lg:text-h6 md:text-h7 md:leading-7'>
              <span className='text-[96px] font-serif lg:text-[80px] md:text-[72px]'>“</span>Twelve months ago, Om built a stunning, modern website for our tuition business, blending function with exceptional design. He thoroughly understood our needs, delivering an industry-leading website. Om's responsive, provides detailed updates, and offers competitive pricing. Highly recommend and look forward to future collaborations. Thank you, Om!
              </p>
              <div>
                <p className='text-gray-400 font-dm-sans text-h6'>
                  Michael Chan
                </p>
                <p className='text-[#999999] font-dm-sans text-h7'>
                  Founder of Mathologist & KIT Education
                </p>
              </div>
            </div>

            <div className='space-y-4 fade-right max-md:text-center'>
              <a href="https://isolveplumbing.netlify.app/">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center'>
                  <img className='' src='' alt="" />
                </div>
              </a>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a href="https://isolveplumbing.netlify.app/">2024 ⋅ ISOLVE PLUMBING</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Wanted to make up for their lack of internet presence.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-right max-md:text-center'>
              <a href="http://rgbplumbing.com/">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-[#4e4e4e]'>
                  <img className='w-48 max-md:w-32' src={rgbplumbingLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a href="http://rgbplumbing.com/">2024 ⋅ RGB PLUMBING</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lower budget but wanted to detail services and enable online engagements.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-right max-md:text-center'>
              <a href="ytesitesdigital.com.au">
                <div className='border-4 border-[#606060] h-[24rem] max-md:h-[15rem] rounded-2xl hover:scale-105 transition-transform flex justify-center items-center bg-c2'>
                  <img className='w-20 max-md:w-12' src={bytesiteLogo} alt="" />
                </div>
              </a>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6 hover:underline transition-all'>
                  <a href="bytesitesdigital.com.au">2024 ⋅ BYTESITE DIGITAL</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Well ofcourse, we made this website on our own. 
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio