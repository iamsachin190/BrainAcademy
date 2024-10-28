import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../Images/BrainLogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="BrainAcademy logo" className="w-15 h-12" />
        </div>

        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Links in desktop view (aligned right) */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row items-center md:space-x-6 md:ml-auto space-y-4 md:space-y-0 md:flex mt-4 md:mt-0 bg-gray-800 p-4 rounded-lg md:bg-transparent md:p-0`}
        >
          <Link
            to="/practice"
            className="text-lg font-semibold text-white md:text-gray-800 border-b-2 border-transparent hover:border-gray-400"
          >
            TEST
          </Link>
          <Link
            to="/courses"
            className="text-lg font-semibold text-white md:text-gray-800 border-b-2 border-transparent hover:border-gray-400"
          >
            COURSE
          </Link>
          <Link
            to="/askdoubt"
            className="text-lg font-semibold text-white md:text-gray-800 border-b-2 border-transparent hover:border-gray-400"
          >
            ASK DOUBT
          </Link>
          <Link
            to="/ask-question"
            className="text-lg font-semibold text-white md:text-gray-800 border-b-2 border-transparent hover:border-gray-400"
          >
            ABOUT
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
