import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer container-fluid'>
        <div className="row">
            <div className="col-md-6 col-sm-12 order-sm-2 order-xs-2 d-flex justify-content-center align-items-center flex-column my-5">
                <div className="">
                    <Link className='footer-logo' to='/'>ElevateVisability</Link>
                </div>
                <div className="phone mt-3">
                    <FaPhone />
                    <p className='phone-number'>07572012255</p>
                </div>
                <div className="email">
                    <MdEmail />
                    <p className='email-text'>ethanowicks9@gmail.com</p>
                </div>
                <div className="text-center">
                    <p className='my-4 mx-3'>© 2024 ElevateVisibility | FAQ Privacy Policy</p>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 order-sm-1 order-xs-1 d-flex justify-content-center align-items-center">
                <div className="footer-column">
                    <ul className='p-0'>
                        <p className='links-title'>LINKS</p>
                        <li>
                            <Link to='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>

                        </li>
                        <li>
                            <Link to='/blogs'>Blogs</Link>

                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Footer