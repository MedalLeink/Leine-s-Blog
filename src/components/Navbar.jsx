import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const navItems = [
       {Path: "/", link: "Home"}, 
       {Path: "/about", link: "About"}, 
       {Path: "/post", link: "Post"}, 
       {Path: "/services", link: "Services"}, 
       {Path: "/contact", link: "Contact"} 
    ]
  return (
    <header className='bg-black'>
        <nav className='px-4 py-4'>
            <a href="/" className='text-xl font-bold text-indigo-600'>Leine's<span className='text-amber-400'>Blog</span></a>
            
            {/* nav items */}
            <ul>
                {
                    navItems.map(({path, link}) => <li>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar