import React from 'react';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


function pricing() {
  return (
    <div>
      <div className="container">
        <h1 className='text-light text-center mt-5 pricing-title'>Pricing</h1>
        <p className='text-center pricing-subtitle mb-5 mt-3'>Work with us to find a price that suits you</p>
        <div className="row mb-5 mx-2">
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card blue-card">
              <h2 className='card-type card-type-blue'>Starter</h2>
              <p className='card-type-text blue-text'>For small businesses that are getting started.</p>
              <h2 className='price price-blue'>Custom Pricing</h2>
              <p className='price price-blue'>All in one package</p>
              <hr className='price-hr price-hr-blue' />
              <div className="pricing-points blue-points">
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Mordern design tailored to your brands <br />
                  identity and style</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>24/7 support</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Website maintenance: Add, edit, delete features, text or images and fix any bugs if needed.</p>
                </div>
              </div>
              <Link to='/contact' className='price-btn price-blue-btn'>Contact Us</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card">
              <h2 className='card-type'>Enterprise</h2>
              <p className='card-type-text'>For large enterprises that want exceed their digital expectations.</p>
              <h2 className='price'>Custom Pricing</h2>
              <p className='price'>All in one package</p>
              <hr className='price-hr price-hr-green' />
              <div className="pricing-points">
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Mordern design tailored to your brands <br />
                  identity and style</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Rapid deployment: Have your website up and running in record speeds</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>24/7 support</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Website maintenance: Add, edit, delete features, text or images and fix any bugs if needed</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>SEO Optimization: Get to the top of google's search ranking</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Mobile Responsiveness: Ensure your website looks great seamlessly on all devices</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Scalability: Flexible options to accommodate increased traffic, content, and functionality</p>
                </div>
              </div>
              <Link to='/contact' className='price-btn'>Contact Us</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card green-card">
              <h2 className='card-type card-type-green'>Pro</h2>
              <p className='card-type-text green-text'>For businesses that want to get the next level.</p>
              <h2 className='price price-green'>Custom Pricing</h2>
              <p className='price price-green'>All in one package</p>
              <hr className='price-hr' />
              <div className="pricing-points green-text">
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Mordern design tailored to your brands <br />
                  identity and style</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>SEO Optimization: Get to the top of google's search ranking</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>24/7 support</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Website maintenance: Add, edit, delete features, text or images and fix any bugs if needed</p>
                </div>
              </div>
              <Link to='/contact' className='price-btn price-btn-green'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center my-5">
            <Link to='/about' className='learn-more-btn btn'>
              <span className='learn-more-text'>Learn More</span>About Us <FaArrowRight className='arrow-right-about' />

            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing