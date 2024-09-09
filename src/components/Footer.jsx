import React from 'react';
import emailLogo from '../images/emailDark.svg';
import phoneLogo from '../images/phoneDark.svg';
import locationLogo from '../images/locationDark.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import tiktok from '../images/tiktok.svg';

const Footer = () => {
  
  const socialIcons = [
    { src: instagram, alt: "Instagram" },
    { src: tiktok, alt: "TikTok" },
    { src: linkedin, alt: "LinkedIn" },
  ];

  const information = [
    {
      information: 'info@byte.com',
      link: 'mailto:info@byte.com',
      logo: emailLogo,
      alt: 'Email'
    },
    {
      information: '0490536019',
      link: 'tel:+610490536019',
      logo: phoneLogo,
      alt: 'Phone'
    },
    {
      information: 'Sydney, NSW',
      logo: locationLogo,
      alt: 'Location',
      link: '#' // No real link provided, use a placeholder
    }
  ];

  return (
    <div id='footer' className='2xl:px-[160px] 2xl:py-[96px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] py-[48px] bg-c2'>
      <div className='flex flex-col space-y-12 max-md:space-y-6 max-sm:space-y-2'>
        <div className='flex justify-between max-sm:items-center max-sm:gap-2'>
          <div className='flex gap-4'>
            <div className='space-y-2 flex flex-col justify-around'>
              {socialIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className="cursor-pointer" />
              ))}
            </div>
            <h2 className='text-c4 font-dm-sans text-h4 md:leading-[3rem] max-sm:text-h7'>
              Ah sh<span className=''>*</span>t, I've reached the end, <br className='max-sm:hidden'/> go back up <a href="#home">&uarr;</a>
            </h2>
          </div>

          <div className='flex flex-col md:space-y-2'>
            {information.map((item, index) => (
              <a key={index} href={item.link} className="flex gap-2 items-center">
                <img className='w-8 h-8 max-sm:w-4' src={item.logo} alt={item.alt} />
                <p className='text-c4 font-dm-sans text-h6 max-md:text-h7 max-sm:text-[10px]'>{item.information}</p>
              </a>
            ))}
          </div>
        </div>

        <div className='text-[#606060] font-dm-mono text-h1 tracking-widest text-center max-md:text-h2 max-md:tracking-wide max-sm:text-h5'>
          BYTESITE DIGITAL
        </div>

        <div className='text-c4 font-questrial text-h6 text-center border-t-2 border-[#606060] pt-4 max-sm:text-h7'>
        © 2024 Bytesites Digital. All rights reserved.
        </div>
      </div>

    </div>
  );
}

export default Footer;
