import { useState } from "react";

export default function HomeNav() {
  // State to handle the hamburger menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src="https://placehold.co/50x50"
            alt="BrainAcademy logo"
            className="w-12 h-12"
          />
          <span className="ml-2 text-lg font-bold">BrainAcademy</span>
        </div>

        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger icon */}
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Links in desktop view (aligned right) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:ml-auto flex-col md:flex-row items-center md:space-x-6 md:space-y-0 mt-4 md:mt-0`}
        >
          <a
            href="#"
            className="text-lg font-semibold text-black border-b-2 border-transparent hover:border-gray-400"
          >
            TEST
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-black border-b-2 border-transparent hover:border-gray-400"
          >
            COURSE
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-black border-b-2 border-transparent hover:border-gray-400"
          >
            ASK DOUBT
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-black border-b-2 border-transparent hover:border-gray-400"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}
