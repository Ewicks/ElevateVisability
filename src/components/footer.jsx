import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer container-fluid pt-5'>
        <div className="row">
            <div className="col-md-6 col-sm-12 order-sm-2 order-xs-2 d-flex justify-content-center align-items-center flex-column my-5">
                <div className="">
                    <a className='footer-logo' href='/'>ElevateVisability</a>
                </div>
                <div className="phone mt-3">
                    <FaPhone />
                    <p className='phone-number'>07572012255</p>
                </div>
                <div className="email">
                    <MdEmail />
                    <p className='email-text'>ethan@elevatevisibility.co.uk</p>
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
                            <a href='/pricing'>Pricing</a>
                        </li>
                        <li>
                            <a href='/about'>About</a>

                        </li>
                        <li>
                            <a href='/blogs'>Blogs</a>

                        </li>
                        <li>
                            <a href='/contact'>Contact</a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Footer