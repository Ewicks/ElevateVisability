import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center flex-column my-5">
                <div className="logo">
                    <a className='footer-logo' href='/'>ElevateVisability</a>
                </div>
                <div className="phone mt-3">
                    <FaPhone />
                    <p className='phone-number'>07572012255</p>
                </div>
                <div className="email">
                    <MdEmail />
                    <a href="#">ethanowicks9@gmail.com</a>
                </div>
                <div className="text-center">
                    <p className='my-4 mx-3'>© 2024 ElevateVisability | FAQ Privacy Policy</p>
                </div>
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="footer-column">
                    <ul>
                        <p className='links-title'>LINKS</p>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/blos">Blogs</a>
                        </li>
                        <li>
                            <a href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Footer