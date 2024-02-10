import React from 'react';
import { TiTick } from "react-icons/ti";

function pricing() {
  return (
    <div>
      <div className="container">
        <h1 className='text-light text-center mt-5 pricing-title'>Pricing</h1>
        <p className='text-center pricing-subtitle mb-5'>Plans that empower you and your team to ship without friction.</p>
        <div className="row mb-5">
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card blue-card">
              <h2 className='card-type card-type-blue'>Enterprise</h2>
              <p className='card-type-text blue-text'>For larger enterprises with support SLA and compliance needs.</p>
              <h2 className='price price-blue'>Custom Pricing</h2>
              <p className='price price-blue'>All in one package</p>
              <hr className='price-hr price-hr-blue' />
              <div className="pricing-points blue-points">
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                    <TiTick />
                  </div>
                  <p className='ms-4'>Custom instance sizing</p>
                </div>
              </div>
              <a href="" className='price-btn price-blue-btn'>Contact Us</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card">
              <h2 className='card-type'>Enterprise</h2>
              <p className='card-type-text'>For larger enterprises with support SLA and compliance needs.</p>
              <h2 className='price'>Custom Pricing</h2>
              <p className='price'>All in one package</p>
              <hr className='price-hr price-hr-green' />
              <div className="pricing-points">
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                    <div className="tick position-absolute">
                      <TiTick />
                    </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
              </div>
              <a href="" className='price-btn'>Contact Us</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-3">
            <div className="card green-card">
              <h2 className='card-type card-type-green'>Enterprise</h2>
              <p className='card-type-text green-text'>For larger enterprises with support SLA and compliance needs.</p>
              <h2 className='price price-green'>Custom Pricing</h2>
              <p className='price price-green'>All in one package</p>
              <hr className='price-hr' />
              <div className="pricing-points green-text">
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                <div className="point position-relative">
                  <div className="tick position-absolute">
                      <TiTick />
                  </div>
                    <p className='ms-4'>Custom instance sizing</p>
                </div>
                
                
                
              </div>
              <a href="" className='price-btn price-btn-green'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing