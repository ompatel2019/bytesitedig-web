import {React, useState} from 'react'
import logo from '../images/logoDark.svg'

const Navbar = () => {  
    return (
        <>
            <div id='home' className='bg-c1 max-md:hidden'>
                <nav className='2xl:px-[160px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] py-[32px] max-sm:py-[24px] flex justify-between items-center sticky top-0'>
                    <div>
                        <img className='w-16 max-sm:w-12' src={logo} alt="Bytesite digital logo"/>
                    </div>

                    <div className='bg-c2 max-md:hidden 2xl:text-xl text-c3 text-lg border-[1px] border-white px-8 p-[0.75rem] rounded-full'>
                        <ul className='font-questrial flex space-x-8'>
                            {['Home', 'Services', 'Projects', 'Pricing', 'Contact'].map((item, index) => (
                            <li className='nav-item' key={index}>
                                <a href={`#${item.toLowerCase()}`}>
                                <span className='nav-text-one'>{item}</span>
                                <span className='nav-text-two'>{item}</span>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div className='max-md:hidden'>
                        <button className='bg-c3 font-questrial text-lg button 2xl:text-xl'>
                            Book a call +
                        </button>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar