import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace this with any icon library
import edumoon from '../data/edumoon.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={edumoon}
            alt="Edumoon Logo"
            className="h-[60px] w-[110px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-600 text-lg">
          <a href="#" className="hover:text-[#cc274b]">Home</a>
          <a href="#" className="hover:text-[#cc274b]">Courses</a>
          <a href="#" className="hover:text-[#cc274b]">About</a>
          <a href="#" className="hover:text-[#cc274b]">Events</a>
          <a href="#" className="hover:text-[#cc274b]">Clubs</a>
          <a href="#" className="hover:text-[#cc274b]">Tutions</a>
        </nav>

        {/* Download Button - Desktop */}
        <div className="hidden md:block">
          <button className="bg-[#cc274b] text-white px-6 py-2 rounded-full text-lg hover:bg-rose-600 transition">
            Download App
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="px-4 pb-4 md:hidden flex flex-col space-y-3 text-gray-600 text-base">
          <a href="#" className="hover:text-[#cc274b]">Home</a>
          <a href="#" className="hover:text-[#cc274b]">Courses</a>
          <a href="#" className="hover:text-[#cc274b]">About</a>
          <a href="#" className="hover:text-[#cc274b]">Events</a>
          <a href="#" className="hover:text-[#cc274b]">Clubs</a>
          <a href="#" className="hover:text-[#cc274b]">Tutions</a>
          <button className="bg-[#cc274b] text-white px-4 py-2 rounded-full w-full hover:bg-rose-600 transition">
            Download App
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
