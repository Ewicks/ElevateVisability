import { useState } from 'react';
import Hamburger from '../assets/images/menu.png';
import '../../src/App.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid mx-5">
        <div className="logo">
        <a href='/'>ElevateVisability</a>


        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            {/* Use the <img> tag for images */}
            <img className='menu-img' src={Hamburger} alt="Hamburger Icon" />
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
