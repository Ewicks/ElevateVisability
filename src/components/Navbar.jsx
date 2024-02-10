import { useState } from 'react';
import Hamburger from '../assets/images/menu.png';
import '../../src/App.css';
import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid navbar-m mx-5">
        <div className="logo">
        <a href='/' className='logo'>ElevateVisability</a>
        </div>
        
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoMdClose /> : <RiMenu4Fill />}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
