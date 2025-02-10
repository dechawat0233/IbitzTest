"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2C2C29] p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          Vallarismaps
        </a>

        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="/map" className="hover:text-gray-300">
              Map
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl mr-5"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2">
          <li>
            <a href="/" className="block hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="/map" className="hover:text-gray-300">
              Map
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
