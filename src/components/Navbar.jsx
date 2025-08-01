import React from "react";
import { NavLink } from "react-router";

// react icons
import { FaFacebook, FaDribbble, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { Path: "/", link: "Home" },
    { Path: "/about", link: "About" },
    { Path: "/post", link: "Post" },
    { Path: "/services", link: "Services" },
    { Path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black">
      <nav className="px-4 py-4">
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
            </div>
      </nav>
    </header>
  );
};

export default Navbar;
