import { useState } from 'react';
import Hamburger from '../assets/images/menu.png';
import '../../src/App.css';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid mx-5">
        <div className="logo">
        <h1>ElevateVisability</h1>


        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            {/* Use the <img> tag for images */}
            <img className='menu-img' src={Hamburger} alt="Hamburger Icon" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              Contact
            </li>
            <li>
              Contact
            </li>
            <li>
              Contact
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
