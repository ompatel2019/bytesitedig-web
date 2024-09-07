import React from 'react'
import useFadeIn from './Animations.jsx'; 
import hourGlass from '../images/hourGlass.svg'
import blueprintService from '../images/blueprintService.svg'
import designService from '../images/designService.svg'
import designAndDevelopService from '../images/development.svg'

const Services = () => {
  useFadeIn(); 

  const services = [
    {
      serviceName: 'FREE BLUEPRINT',
      durations: '2-3 days',
      serviceDescription: 'Custom website blueprint tailored to your brand, provided at no cost. Ensures a seamless user experience.',
      serviceTools: ['Relume', 'FigJam'],
      serviceImage: blueprintService,
    },
    {
      serviceName: 'DESIGN SOLUTION',
      durations: '3-4 days',
      serviceDescription: 'Creative design strategies that align with your brand, from concept to implementation, ensuring your vision is brought to life.',
      serviceTools: ['Figma', 'Adobe Colour', 'Dribbble'],
      serviceImage: designService,
    },
    {
      serviceName: 'DEVELOP & DEPLOY',
      durations: '3-4 days',
      serviceDescription: 'Building responsive, high-performance websites with clean code, optimized for all devices and deploying on the internet.',
      serviceTools: ['HTML', 'ReactJS', 'TailwindCSS'],
      serviceImage: designAndDevelopService,
    }
  ];

  return (
    <div className='2xl:px-[160px] 2xl:py-[56px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] pt-[24px] bg-c1'>
      
      <div className='space-y-2'>
        <h2 className='font-dm-mono text-c4 text-h3 max-md:text-h5'>02-SERVICES</h2>
        <p className='font-dm-sans text-c4 text-h5 max-md:text-h7'>
          We offer an array of services designed to help you effectively expand your brand in the digital realm. Our comprehensive solutions are tailored to enhance your online presence and drive growth.
        </p>
      </div>

      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 py-8'>
        {services.map(({ serviceName, durations, serviceDescription, serviceTools, serviceImage }, index) => (
          <div key={index} className='border-2 border-gray-400 px-6 pt-12 rounded-lg flex flex-col justify-center items-center space-y-6 nav-item'>
            
            <div className='flex justify-center space-x-4 font-dm-sans'>
              <div className='flex p-2 py-[0.25rem] items-center space-x-2 rounded-md border-2 border-gray-400 text-white'>
                <div className='max-md:w-2 max-md:h-2 w-3 h-3 bg-green-400 rounded-full glow'></div>
                <p className='max-md:text-sm'>Active</p>
              </div>
              <div className='flex p-2 items-center space-x-2 rounded-md bg-white text-c2'>
                <img src={hourGlass} alt="Hourglass" />
                <p className='max-md:text-sm'>{durations}</p>
              </div>
            </div>

            <div className='space-y-2 text-c4'>
              <h3 className='font-dm-mono text-center text-h5 max-md:text-h6'>{serviceName}</h3>
              <p className='2xl:text-lg text-center font-dm-sans text-gray-300 max-md:text-sm'>{serviceDescription}</p>
            </div>

            <div className='w-full flex space-x-2 text-center max-md:text-[12px]'>
              {serviceTools.map((tool, idx) => (
                <div key={idx} className='w-full bg-c4 font-questrial rounded-sm'>
                  <p>{tool}</p>
                </div>
              ))}
            </div>

            <div className='relative flex justify-center w-full'>
              <img className='' src={serviceImage} alt={serviceName} />
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Services;
