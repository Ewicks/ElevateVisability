import { useState } from 'react';
import '../../src/App.css';
import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid navbar-m mx-5">
        <div className="logo">
        <Link to='/' onClick={() => setShowNavbar(false)} className='logo'>
          <img src={Logo} className='logo' alt="" />
        </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoMdClose /> : <RiMenu4Fill />}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
                <NavLink onClick={() => setShowNavbar(false)} to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setShowNavbar(false)} to="/about">About</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setShowNavbar(false)} to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setShowNavbar(false)} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
