import React from 'react'
import "../../src/App.css";
import { Link } from 'react-router-dom';


function home() {
  return (
    <div>
        <section>
            <div className="container-fluid">
                <div className="row home-page">
                    <div className="col d-flex justify-content-flex-start align-items-flex-start flex-column px-5">
                        <h1 className='text-light home-title'>Web Development <br />& SEO <br />Services</h1>
                        <p className='home-subtitle'>At ElevateVisability, we specialize in boosting revenue <br />
                         for businesses of all sizes. With innovative strategies and proven methods, we help clients
                          achieve sales goals and maximize profitability.</p>
                        <Link to='/contact' className='home-btn mt-4'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fuid my-5">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-column align-items-center">
                        <p className='one-circle mx-auto'>1</p>
                        <h2 className='text-center title'>Up your digital game</h2>
                        <h1 className='text-center text-light'>Our Services</h1>
                        <hr className='border-bottom-blue my-5 mx-auto'></hr>
                        <p className='text-light text-center mb-5 subtitle-p'>Established since 2008, we are a UK-based website development company with clients who come to us for highly skilled and future-proof coding and web design, at a fair price and stay with us for our commitment to supporting their digital businesses for the long term.</p>
                    </div>
                </div>
                <div className="row mx-5">
                    <div className="col-md-5 col-sm-12 d-flex flex-column gap-5 justify-content-center align-c align-items-end align-items-sm-center">
                        <div className="box">
                            <h2 className='box-title mb-3'>eCommerce Development</h2>
                            <p className='box-text'>We are certified developers of world-renowned platforms with experience since 2008.</p>
                        </div>
                        <div className="box">
                            <h2 className='box-title mb-3'>Monthly Support Packages</h2>
                            <p className='box-text'>While you are focussed on your business, you can rely on us to keep your website or app up to date, continually optimised and safe from hackers.</p>
                        </div>
                    </div>
                    <div className="col-sm-2 d-line-none d-flex justify-content-center align-items-center line-col">
                        <div className='middle-part'></div>
                    </div>
                    <div class="col-md-5 x-pad col-sm-12 d-flex flex-column gap-5 justify-content-center align-c align-items-center align-items-sm-center">
                    <div className="box">
                            <h2 className='box-title mb-3'>Full Stack Development</h2>
                            <p className='box-text'>Our Full Stack developers can handle everything to do with web development and can satisfy the needs of both your customers and your business.</p>
                        </div>
                        <div className="box">
                            <h2 className='box-title mb-3'>Technologies</h2>
                            <p className='box-text'>We continuously invest in our people to ensure they are ready for the next upgrade, trend and innovation. We are masters of our craft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section-cut extra-m'>
            <div className="container-fluid extra-m">
                <div className='cut'></div>
                <div className="row">
                    <div className="col d-flex justify-content-center flex-column">
                        <p className='one-circle green-circle mx-auto'>2</p>
                        <h2 className='text-center title green'>From start-ups to big business </h2>
                        <h1 className='text-center text-light'>Trust us with your development needs</h1>
                        <hr className='border-bottom-green my-5 mx-auto'></hr>
                        <p className='text-light text-center mb-5'>Railway provides infrastructure primitives with sane defaults to manage secrets, builds, and deploys. So you can start <br /> quickly and focus on your product.</p>
                    </div>
                </div>
                <div className="row mx-5">
                    <div className="col-md-5 col-sm-12 d-flex align-c flex-column gap-5 justify-content-center align-items-end align-items-sm-center">
                        <div className="box box-green">
                            <h2 className='box-title-green mb-3'>We design websites for your customers</h2>
                            <p className='box-text'>You only have a few seconds to capture your web visitor's attention, so make sure you do it right. A good website will have a simple, user-friendly layout with easy to follow navigation.</p>
                        </div>
                        <div className="box box-green">
                            <h2 className='box-title-green mb-3'>Award winning web development agency</h2>
                            <p className='box-text'>we’ll deliver services and solutions that meet both your needs and budget whether it be a simple website or full eCommerce solution.</p>
                        </div>
                    </div>
                    <div className="col-2 d-line-none d-flex justify-content-center align-items-center">
                        <div className='middle-part middle-part-green'></div>
                    </div>
                    <div className="col-md-5 x-pad col-sm-12 align-c d-flex flex-column gap-5 justify-content-center align-items-flex-start align-items-sm-center">
                    <div className="box box-green">
                            <h2 className='box-title-green mb-3'>Business growth is fuelled by continuous digital improvement</h2>
                            <p className='box-text'>Our team of skilled professionals can step in on any web or app project to get you over the line or be there from the very start.</p>
                        </div>
                        <div className="box box-green">
                            <h2 className='box-title-green mb-3'>We’ll love helping companies grow</h2>
                            <p className='box-text'>Working with a team experienced in both app and web development, ensures your website is not only future proof, but that you will also be able to create a great app to enhance your visitors experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>   
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center mx-5">
                        <div className="contact-container bg-opacity-50 text-light">
                            <h2>Contact us <br />to learn more</h2>
                            <p>We are happy to talk over the phone more about what we can offer and if you are a good fit for us.</p>
                            <Link to='/contact' className='home-btn btn'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default home