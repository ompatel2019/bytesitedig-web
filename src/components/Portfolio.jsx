import React from 'react'
import PortfolioItem from './PortfolioItem'
import useFadeIn from './Animations.jsx'; 

const Portfolio = () => {
  useFadeIn(); 
  return (
    <>
      <div className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[24px] bg-c1'>
        <h2 className='max-md:text-center font-dm-mono text-c4 text-h3 max-md:text-h5 text-right fade-right lg:mb-12 mb-8'>04-PORTFOLIO</h2>
        <div className='max-md:block grid grid-cols-2 lg:gap-12 md:gap-8'> 

          <div className='space-y-12'>
            <div className='space-y-4 fade-left'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="https://www.playicl.com.au/">2024 ⋅ ICL</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-left max-md:text-center'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="a1education.com">2023 ⋅ A1 EDUCATION</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>
            <div className='space-y-4 fade-left max-md:text-center'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1 fade-left max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6'>
                  2024 ⋅ EMBARK INTERNSHIP PLATFORM
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>
            <div className='space-y-4 fade-left'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1 max-md:text-center'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="https://ubl-invoice-generator.vercel.app/">2024 ⋅ STREAMLINE INVOICE GENERATION (LAPTOP ONLY)</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>


          </div>

          <div className='space-y-12'>
            <div className='space-y-4 fade-right max-md:hidden'>
              <p className='lg:leading-10 text-c3 font-dm-sans text-h5 lg:text-h6 md:text-h7 md:leading-7'>
              <span className='text-[96px] font-serif lg:text-[80px] md:text-[72px]'>“</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam blanditiis alias excepturi quod fugit, corrupti commodi, minima totam quibusdam cupiditate in nesciunt dolorum porro veritatis repellendus, labore iusto. Molestias eligendi quo consequuntur eum nobis harum cum illum? Officia earum consectetur a esse tenetur quaerat cum numquam laboriosam?
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
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="https://isolveplumbing.netlify.app/">2024 ⋅ ISOLVE PLUMBING</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-right max-md:text-center'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="http://rgbplumbing.com/">2024 ⋅ RGB PLUMBING</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            </div>

            <div className='space-y-4 fade-right'>
              <div className='border-4 border-[#606060] h-[30rem] rounded-2xl'>
                <img src="" alt="" />
              </div>

              <div className='space-y-1'>
                <h4 className='font-questrial text-c4 text-h6'>
                  <a href="bytesitesdigital.com.au">2024 ⋅ BYTESITE DIGITAL</a>
                </h4>
                <p className='font-dm-mono text-[#999999]'>
                  Well of course, we made this website on our own. 
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