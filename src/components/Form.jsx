import React from 'react';
import emailLogo from '../images/email.svg';
import phoneLogo from '../images/phone.svg';
import locationLogo from '../images/location.svg';
import useFadeIn from './Animations.jsx'; // Import the custom fade-in hook

const Form = () => {
  useFadeIn(); // Apply the fade-in hook
  const information = [
    {
      heading: 'Send a message',
      subheading: 'Our friendly team is here to help.',
      information: 'info@byte.com',
      link: 'mailto:info@byte.com',
      logo: emailLogo
    },
    {
      heading: 'Call us',
      subheading: 'Monday-Friday from 10am to 5pm',
      information: '0490536019',
      link: 'tel:+610490536019',
      logo: phoneLogo
    },
    {
      heading: 'Location',
      subheading: 'We are based in Sydney, NSW',
      information: 'Sydney, NSW',
      logo: locationLogo
    }
  ];

  return (
    <div>
      <div id='contact' className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] py-[48px] lg:pb-[96px] bg-[#fafafa]'>
        <h2 className='max-sm:text-left font-medium font-dm-mono text-c2 text-h3 max-sm:text-h5 text-right mb-2 fade-right'>06-CONTACT FORM</h2>

        <div className='flex flex-col md:flex-row md:grid grid-cols-2 gap-16 max-sm:gap-4 fade-down'>
          <div className='bg-c2 p-12 rounded-lg space-y-4 max-sm:p-6 order-1 md:order-2'>
            <h3 className='text-c4 text-h5 max-sm:text-h6 font-dm-sans'>You’ve got ideas? We have the skills to convert them. Let’s put the pen to paper.</h3>
            <form action="" className='space-y-4 2xl:space-y-6'>
              <div className='flex space-x-4 max-sm:space-x-0 max-sm:flex-col max-sm:space-y-4'>
                <input className='2xl:p-3 bg-transparent rounded-md border-2 border-c4 p-2 px-4 font-dm-mono w-full text-c4 max-sm:text-[12px] transition-all hover:pl-8 hover:pt-3' type="text" placeholder='Full Name' required/>
                <input className='2xl:p-3 bg-transparent rounded-md border-2 border-c4 p-2 px-4 font-dm-mono w-full text-c4 max-sm:text-[12px] transition-all hover:pl-8 hover:pt-3' type="text" placeholder='Email' required/>
              </div>
              <input className='2xl:p-3 bg-transparent rounded-md border-2 border-c4 p-2 px-4 font-dm-mono w-full text-c4 max-sm:text-[12px] transition-all hover:pl-8 hover:pt-3' type="text" placeholder='Phone (Optional)'/>
              <input className='2xl:p-3 bg-transparent rounded-md border-2 border-c4 py-2 px-4 font-dm-mono w-full text-c4 max-sm:text-[12px] align-top pb-32 2xl:pb-48 transition-all hover:pl-8 hover:pt-3' type="text" placeholder='A short message for us...' required/>
              
              <button className="animated-button font-dm-mono max-sm:text-[12px] max-sm:px-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Submit</span>
                <span className="circle"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </form>
          </div>

          <div className='flex flex-col justify-around order-2 md:order-1 max-sm:items-start fade-up'>
            <h3 className='text-h4 font-medium max-sm:text-[24px] max-sm:font-semibold font-dm-sans'>97% Of Consumers Go Online To Find Information about local Businesses, where will they go to find out more about you?</h3>
            <p className='text-h5 max-sm:hidden font-questrial'>Get in touch with us so these customers can see what you’re really about.</p>

            <div className='flex flex-col max-md:flex-row max-sm:flex-col max-md:gap-2'>
              {information.map((item, index) => (
                <div key={index} className='flex gap-8 space-y-4 max-sm:gap-4 max-md:gap-2'>
                  <img className='w-8 max-sm:w-6' src={item.logo} alt={item.heading} />
                  <div>
                    <p className='font-semibold font-dm-mono max-sm:text-[16px]'>{item.heading}</p>
                    <p className='font-dm-mono max-sm:text-[12px]'>{item.subheading}</p>
                    <a href={item.link}>
                      <p className='font-dm-questrial text-gray-500 max-sm:text-[12px]'>{item.information}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
