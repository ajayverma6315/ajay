import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 lg:px-12 py-4 lg:py-8 z-50 relative pointer-events-auto">
      <a 
        href="#home"
        className="flex items-center gap-1 lg:gap-2 cursor-pointer scale-75 lg:scale-100 origin-left"
      >
        <div className="text-white flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 22h4.5l2-4.5h5l2 4.5H21L12 2zm-1.5 10.5L12 8l1.5 4.5h-3z" fill="white"/>
          </svg>
        </div>
        <span className="text-[32px] font-bold tracking-wide">Portfolio</span>
      </a>
      
      <ul className="flex gap-3 lg:gap-10 text-[14px] lg:text-[19px] font-medium text-gray-400">
        <li>
          <a href="#home" className="hover:text-white cursor-pointer transition-colors pb-1 border-b-2 border-transparent block">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-white cursor-pointer transition-colors pb-1 border-b-2 border-transparent block">About</a>
        </li>
        <li className="hidden sm:block">
          <a href="#projects" className="hover:text-white cursor-pointer transition-colors pb-1 border-b-2 border-transparent block">Projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-white cursor-pointer transition-colors pb-1 border-b-2 border-transparent block">Skills</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white cursor-pointer transition-colors pb-1 border-b-2 border-transparent block">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
