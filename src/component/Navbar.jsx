import React, { useState } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-[32px] font-[700] font-abhaya">
          <span className="text-black">Real </span>
          <span className="text-orange-500">Estate</span>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-gray-700 focus:outline-none">
            {menuOpen ? <IoClose size={28} /> : <IoReorderThree size={28} />}
          </button>
        </div>

        {/* Menu Links */}
        <ul className={`lg:flex lg:space-x-8 lg:text-gray-700 ${menuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none text-center lg:text-left`}>
   {[
     { name: "Home", path: "/" },
     { name: "About us", path: "/about-us" },
     { name: "Property", path: "/property-screen" },
     { name: "Blog", path: "/blog-screen" },
     { name: "Contact us", path: "/contact-us" },
   ].map((item, index) => (
     <li key={index} className="py-2 lg:py-0 text-[#020617] font-[400] text-[18px] font-abhaya cursor-pointer">
       <Link to={item.path} onClick={() => menuOpen && setMenuOpen(false)}>
         {item.name}
       </Link>
     </li>
   ))}
</ul>


        {/* Login and Sign Up Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="hover:text-orange-500 text-[#020617] font-[400] text-[18px] font-abhaya cursor-pointer">
            <Link to="/sign-in">Login</Link>
          </button>
          <button className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 text-white font-[400] text-[18px] font-abhaya cursor-pointer">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>
      </nav>

      {/* Spacer to Prevent Content Overlapping */}
      <div className="h-[72px]"></div>
    </div>
  );
}
