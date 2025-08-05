import React, { useState } from "react";
import { NavLink } from "react-router";

// react icons
import { FaFacebook, FaDribbble, FaTwitter, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const navItems = [
    { Path: "/", link: "Home" },
    { Path: "/about", link: "About" },
    { Path: "/post", link: "Post" },
    { Path: "/services", link: "Services" },
    { Path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-indigo-600">
          Leine's<span className="text-amber-400">Blog</span>
        </a>

        {/* nav items */}
        <ul className="md:flex gap-12 text-lg">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center">
            <a href="/" className="hover:text-amber-400"><FaFacebook/></a>
            <a href="/" className="hover:text-amber-400"><FaDribbble/></a>
            <a href="/" className="hover:text-amber-400"><FaTwitter/></a>
            <button className="bg-indigo-600 px-6 py-2 font-medium rounded hover:bg-white hover:text-indigo-600 transition-all duration-200 ease-in">Login</button>
            </div>

            {/* mobile menu btn - display mobile screen */}
            <button onClick={toggleMenu} className="cursor-pointer"><FaBars className="w-5 h-5 md:hidden"/></button>
      </nav>
    </header>



  );
};

export default Navbar;
