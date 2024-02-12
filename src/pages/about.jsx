import React from 'react'
import world from '../assets/images/ball3.png';

function about() {
  return (
    <div>
      <div className="container-fluid about">
        <div className="row">
          <div className="col">
            <h1 className='about-title'>About Us</h1>
            <p className='about-subtitle'>Get to know a bit about the team and what drives us</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column text-light">
            <h2>We beleive...</h2>
            <p className='about-para'>With a dedicated team of professionals, 
            we strive to always kepp up to date with latest technologies,
            designs to ensure we continue to surpass our competition. We will not stop 
            until we have exceeded our clients expectations. <br /> <br />
            Our goal is to help all businesses to get to the next level by generating more business
            via their new tailord website via the power of SEO and added professionalism a website will
            add to the business which greatly underestimated in this digital age.</p>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img src={world} className='about-img' alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-5">
            <img src={world} className='about-img' alt="" />
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column text-light">
            <h2>We beleive...</h2>
            <p className='about-para'>You should simply be able to work on your
               core product without having to worry about
                infrastructure and how to deploy it.</p>
          </div>
          
        </div>
      </div>
      <hr className='about-hr'/>
      <div className="container">
        <div className="row">
          <div className="col text-light">
            <h1 className='about-title mb-5'>What we offer</h1>
          </div>
        </div>
        <div className="row px-4 mb-3">
          <div className="col-12 d-flex flex-column">
            <div className="sales-container gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>Web Development</h2>
                <p className='sales-subtitle text-left'>Whether you're
                 just starting out or looking to revamp your online 
                 presence, our team is dedicated to creating stunning
                  websites that not only look great but also drive results.</p>
              </div>
              <div className='image-section'>
                <img className='sales-img' src={world} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4 mb-5">
          <div className="col-md-6 col-sm-12 mt-3 mb-3 d-flex flex-column">
            <div className="sales-container container-2 gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>SEO Optimization</h2>
                <p className='sales-subtitle text-left'>With SEO,
                 you can boost online visibility, attract more visitors, 
                 and convert them into loyal customers. It's a smart,
                  ongoing investment – like having a 24/7 salesperson 
                  promoting your business online.</p>
              </div>
              <div className='image-section'>
                <img className='sales-img' src={world} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-3 d-flex flex-column">
            <div className="sales-container container-3 gap-5 px-5">
              <div className='sales-text text-light'>
                <h2>Website Maintenance</h2>
                <p className='sales-subtitle text-left'>We ensure that 
                your online presence remains seamless and up-to-date. We 
                understand that maintaining a website can be time-consuming
                and challenging, which is why our team is here to handle all
                 aspects of upkeep for you.</p>
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