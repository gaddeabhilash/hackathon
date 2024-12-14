import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-pink-500 p-5 shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white">
          Plagiarism Checker
        </h1>
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-yellow-300">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-yellow-300">
              signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
