import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center flex-column my-5">
                <div className="logo">
                    <p>logo</p>
                </div>
                <div className="phone mt-3">
                    <FaPhone />
                    <p className='phone-number'>07572012255</p>
                </div>
                <div className="email">
                    <MdEmail />
                    <a href="#">ethanowicks9@gmail.com</a>
                </div>
                <p className='my-4'>© 2024 ShapeHouse | FAQ Privacy Policy</p>
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="footer-column">
                    <ul>
                        <p>contact</p>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <p>contact</p>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <p>contact</p>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <p>contact</p>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Footer