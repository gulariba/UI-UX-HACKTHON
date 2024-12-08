'use client';

import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-[100px] flex justify-between items-center bg-[#FBEBB5] px-6 md:px-12 shadow-lg relative">
      

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center space-x-12 font-poppins">
        <a href="#home" className="text-[#000000] text-lg hover:text-gray-600">
          Home
        </a>
        <a href="#shop" className="text-[#000000] text-lg hover:text-gray-600">
          Shop
        </a>
        <a href="#about" className="text-[#000000] text-lg hover:text-gray-600">
          About
        </a>
        <a href="#contact" className="text-[#000000] text-lg hover:text-gray-600">
          Contact
        </a>
      </div>

      {/* Right Side: Icons */}
      <div className="flex space-x-6 font-poppins text-[#000000] text-base">
        <a href="#user" className="hover:text-gray-600">
          <FaUser className="h-5 w-5" />
        </a>
        <a href="#search" className="hover:text-gray-600">
          <FaSearch className="h-5 w-5" />
        </a>
        <a href="#wishlist" className="hover:text-gray-600">
          <FaHeart className="h-5 w-5" />
        </a>
        <a href="#cart" className="hover:text-gray-600">
          <FaShoppingCart className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button
          className="text-[#000000] text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-[#FBEBB5] shadow-lg z-10 flex flex-col items-center space-y-6 font-poppins transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-[500px]"
        }`}
      >
        <a
          href="#home"
          className="block text-[#000000] text-lg py-3 text-center hover:text-gray-600"
          onClick={toggleMobileMenu}
        >
          Home
        </a>
        <a
          href="#shop"
          className="block text-[#000000] text-lg py-3 text-center hover:text-gray-600"
          onClick={toggleMobileMenu}
        >
          Shop
        </a>
        <a
          href="#about"
          className="block text-[#000000] text-lg py-3 text-center hover:text-gray-600"
          onClick={toggleMobileMenu}
        >
          About
        </a>
        <a
          href="#contact"
          className="block text-[#000000] text-lg py-3 text-center hover:text-gray-600"
          onClick={toggleMobileMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
