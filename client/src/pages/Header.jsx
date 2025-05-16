import React from 'react';
import edumoon from '../data/edumoon.png'
const Header = () => {
  return (
    <header className="flex items-center justify-around px-4 bg-white shadow-sm">
      <div className="flex items-center">
        <img
          src={edumoon}
          alt="Edumoon Logo"
  className="h-[80px] w-[130px]"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8 text-gray-600 text-lg">
        <a href="#" className="hover:text-[#cc274b]">Home</a>
        <a href="#" className="hover:text-[#cc274b]">Courses</a>
        <a href="#" className="hover:text-[#cc274b]">About</a>
        <a href="#" className="hover:text-[#cc274b]">Events</a>
        <a href="#" className="hover:text-[#cc274b]">Clubs</a>
        <a href="#" className="hover:text-[#cc274b]">Tutions</a>
      </nav>

      {/* Download Button */}
      <button className="bg-[#cc274b] text-white px-6 py-2 rounded-full text-lg hover:bg-rose-600 transition">
        Download App
      </button>
    </header>
  );
};

export default Header;
 