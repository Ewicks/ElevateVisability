import React from 'react'
import world from '../assets/images/ball3.png';

function about() {
  return (
    <div>
      <div className="container about">
        <div className="row">
          <div className="col">
            <h1 className='about-title'>About Us</h1>
            <p className='about-subtitle'>Get to know a bit about the team and what drives us</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center flex-column text-light">
            <h2>We beleive...</h2>
            <p>You should simply be able to work on your
               core product without having to worry about
                infrastructure and how to deploy it.</p>
          </div>
          <div className="col-6">
            <img src={world} className='about-img' alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={world} className='about-img' alt="" />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center flex-column text-light">
            <h2>We beleive...</h2>
            <p>You should simply be able to work on your
               core product without having to worry about
                infrastructure and how to deploy it.</p>
          </div>
          
        </div>
      </div>
      <hr className='about-hr'/>
      <div className="container">
        <div className="row">
          <div className="col text-light">
            <h1 className='about-title mt-0'>What we offer</h1>
            <p className='about-subtitle mb-5'>A dashboard that provides unparalleled hospitality.</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex flex-column">
            <div className="sales-container gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>Increased sales</h2>
                <p className='sales-subtitle text-left'>Command the interface at your fingertips. <br />
                  Go to any page, <br /> create an object, secret, and
                  much more.</p>
              </div>
              <div className='image-section'>
                <img className='sales-img' src={world} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 d-flex flex-column">
            <div className="sales-container container-2 gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>Increased sales</h2>
                <p className='sales-subtitle text-left'>Command the interface at your fingertips. <br />
                  Go to any page, <br /> create an object, secret, and
                  much more.</p>
              </div>
              <div className='image-section'>
                <img className='sales-img' src={world} alt="" />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex flex-column">
            <div className="sales-container container-3 gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>Increased sales</h2>
                <p className='sales-subtitle text-left'>Command the interface at your fingertips. <br />
                  Go to any page, <br /> create an object, secret, and
                  much more.</p>
              </div>
              <div className='image-section'>
                <img className='sales-img' src={world} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about