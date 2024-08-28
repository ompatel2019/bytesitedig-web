import React, { useState } from 'react';

const NavbarMob = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="md:hidden max-md:px-[48px] max-sm:px-[16px] font-questrial bg-c1 text-c4 z-50 sticky top-0">
        <nav className="px-[16px] pt-[24px] pb-[16px] flex justify-between z-50 relative">
          <h2 className="text-[32px]">Byt.</h2>

          <label className="hamburger z-50">
            <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <svg
              viewBox="0 0 32 32"
              className="cursor-pointer z-50"
            >
              <path
                className="line line-top-bottom"
                d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"
              ></path>
              <path className="line" d="M7 16H27"></path>
            </svg>
          </label>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-c1 bg-opacity-95 flex items-center justify-center z-40 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <ul className="font-questrial text-c4 text-h5 space-y-8 text-center z-50">
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#whyworkwithus" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#form" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMob;