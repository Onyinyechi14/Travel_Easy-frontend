import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons
import TRAVEL_logo from '../../assets/images/TRAVEL_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-0 bg-slate-950 sticky top-0 z-40">
      <div>
        <img className="rounded-full w-24 h-24" src={TRAVEL_logo} alt="Travel Easy" />
      </div>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-white w-6 h-4" /> : <FaBars className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Full menu for larger screens */}
      <ul className={`md:flex space-x-20 ${isOpen ? 'block' : 'hidden'} md:block mr-6`}>
        <li><Link className="text-white no-underline hover:text-blue-900 cursor-pointer" to="/">Home</Link></li>
        <li><Link className="text-white no-underline hover:text-blue-900 cursor-pointer" to="/bookings">Bookings</Link></li>
        <li><Link className="text-white no-underline hover:text-blue-900 cursor-pointer" to="/services">Services</Link></li>
        <li><Link className="text-white no-underline hover:text-blue-900 cursor-pointer" to="/about">About</Link></li>
        <li><Link className="text-white no-underline hover:text-blue-900 cursor-pointer" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
