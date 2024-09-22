import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">BrainAcademy</h2>
          <p className="text-sm">Copyright © 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="https://twitter.com" className="hover:text-gray-300">Twitter</a>
          <a href="https://facebook.com" className="hover:text-gray-300">Facebook</a>
          <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
