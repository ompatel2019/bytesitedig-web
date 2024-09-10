import React, { useState } from 'react';
import logo from '../images/logoDark.svg';
import useFadeIn from './Animations.jsx'; // Import the custom fade-in hook
import Redirect from './Redirect'; // Import the Redirect component

const NavbarMob = () => {
  useFadeIn(); // Apply the fade-in hook
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="md:hidden max-md:px-[48px] max-sm:px-[16px] font-questrial bg-c1 text-c4 z-50 sticky top-0">
        <nav className="px-[16px] pt-[16px] flex justify-between z-50 relative fade-up">
          <div>
            <Redirect to="home">
              <img className='w-14' src={logo} alt="Bytesite digital logo" />
            </Redirect>
          </div>

          <label className="hamburger z-50" aria-label="Menu Toggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={toggleMenu}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls="mobile-navigation"
            />
            <svg viewBox="0 0 40 40" className="cursor-pointer z-50">
              <path className="line line-top-bottom" d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"></path>
              <path className="line" d="M7 16H27"></path>
            </svg>
          </label>
        </nav>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 bg-c1 bg-opacity-95 flex items-center justify-center z-40 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="font-questrial text-c4 text-h6 space-y-8 text-center z-50">
          {['Home', 'Pricing', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className={`fadeIn-${index + 1}`} onClick={closeMenu}>
              <Redirect to={item.toLowerCase()}>
                {item}
              </Redirect>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarMob;
