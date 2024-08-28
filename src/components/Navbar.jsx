import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-8 font-questrial sm:sticky top-0 max-md:hidden z-50 relative">
        <div className="col-span-5 bg-c1 sticky top-0 z-50">
          <nav className="px-[120px] 2xl:px-[200px] flex justify-between pt-[32px] md:pt-[48px] lg:pt-[64px] text-c4 z-50">
            <h2 className="text-[32px]">Byt.</h2>
            <ul className="text-h7 md:text-h7 lg:text-[20px] flex items-center justify-between space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 border-white sticky top-0 z-50">
              <li className="nav-item">
                <a href="#">
                  <span className="nav-text-one">Home</span>
                  <span className="nav-text-two">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#whyworkwithus">
                  <span className="nav-text-one">Pricing</span>
                  <span className="nav-text-two">Pricing</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio">
                  <span className="nav-text-one">Projects</span>
                  <span className="nav-text-two">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#form">
                  <span className="nav-text-one">Contact</span>
                  <span className="nav-text-two">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pr-[80px] col-span-3 bg-c4 z-50">
          <div className="flex justify-end pt-[32px] md:pt-[48px] lg:pt-[64px] md:pr-[32px] lg:pr-[48px] xl:pr-[64px] z-50">
            <button className="text-h7 lg:text-[20px] px-6 rounded-full bg-c2 text-c4 z-50 button hover:px-8">
              <a href="#form">Become a client + </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;