import React from "react";

function Header() {
  return (
    <header className="w-full p-5 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Plagiarism Detection Tool
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
