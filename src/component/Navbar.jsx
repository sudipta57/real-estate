import React, { useState } from "react";
import { BiCross } from "react-icons/bi";
import { IoClose, IoReorderThree, IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      {/* navbar Section */}

      <nav className="flex w-full items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <span className="text-black font-abhaya">Real</span>
          <span className="text-orange-500 font-abhaya">Estate</span>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-gray-700 focus:outline-none">
            {menuOpen ? <IoClose /> : <IoReorderThree />}
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`lg:flex lg:space-x-8 lg:text-gray-700 ${
            menuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none text-center lg:text-left`}
        >
          <li className="py-2 lg:py-0 text-orange-500 font-medium cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent">
            <Link to="/" onClick={() => menuOpen && setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-2 lg:py-0 hover:text-orange-500 cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent">
            <Link to="/about-us" onClick={() => menuOpen && setMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li className="py-2 lg:py-0 hover:text-orange-500 cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent">
            <Link
              to="property-screen"
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              Property
            </Link>
          </li>
          <li className="py-2 lg:py-0 hover:text-orange-500 cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent">
            <Link
              to="/blog-screen"
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="py-2 lg:py-0 hover:text-orange-500 cursor-pointer hover:bg-gray-100 lg:hover:bg-transparent">
            <Link
              to="/contact-us"
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Login and Sign Up Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-orange-500">
            <Link to="sign-in">Login</Link>
          </button>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>
      </nav>
      {/* end navbar section */}
    </div>
  );
}
