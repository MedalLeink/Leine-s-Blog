import React from 'react'

const Navbar = () => {

    const NavItems = [
       {Path: "/", link: "Home"}, 
       {Path: "/about", link: "About"}, 
       {Path: "/post", link: "Post"}, 
       {Path: "/services", link: "Services"}, 
       {Path: "/contact", link: "Contact"} 
    ]
  return (
    <head>
        <nav>
            <a href="/" className='text-xl font-bold text-white'>Leine's <span>Blog</span></a>
        </nav>
    </head>
  )
}

export default Navbar