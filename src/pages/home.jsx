import React from 'react'
import "../../src/App.css";
import { Link } from 'react-router-dom';


function home() {
  return (
    <div>
        <section>
            <div className="container-fluid">
                <div className="row home-page">
                    <div className="col d-flex justify-content-center align-items-flex-start flex-column px-5">
                        <h1 className='text-light home-title'>Instant Deployments, <br /> Effortless Scale</h1>
                        <p className='home-subtitle'>Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required.</p>
                        <Link to='/contact' className='home-btn'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fuid my-5">
                <div className="row">
                    <div className="col d-flex justify-content-center flex-column">
                        <p className='one-circle mx-auto'>1</p>
                        <h2 className='text-center title'>Now Boarding, Express</h2>
                        <h1 className='text-center text-light'>Start at Bullet Speed</h1>
                        <hr className='border-bottom-blue my-5 mx-auto'></hr>
                        <p className='text-light text-center'>Railway provides infrastructure primitives with sane defaults to manage secrets, builds, and deploys. So you can start <br /> quickly and focus on your product.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 d-flex flex-column gap-5 justify-content-center align-items-end">
                        <div className="box">
                            <h2 className='box-title'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                        <div className="box">
                            <h2 className='box-title'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <div className='middle-part'></div>
                    </div>
                    <div className="col-5 d-flex flex-column gap-5 justify-content-center align-items-flex-start">
                    <div className="box">
                            <h2 className='box-title'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                        <div className="box">
                            <h2 className='box-title'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section-cut'>
            <div className="container-fluid">
                <div className='cut'></div>
                <div className="row">
                    <div className="col d-flex justify-content-center flex-column">
                        <p className='one-circle green-circle mx-auto'>2</p>
                        <h2 className='text-center title green'>Now Boarding, Express</h2>
                        <h1 className='text-center text-light'>Start at Bullet Speed</h1>
                        <hr className='border-bottom-green my-5 mx-auto'></hr>
                        <p className='text-light text-center'>Railway provides infrastructure primitives with sane defaults to manage secrets, builds, and deploys. So you can start <br /> quickly and focus on your product.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 d-flex flex-column gap-5 justify-content-center align-items-end">
                        <div className="box box-green">
                            <h2 className='box-title-green'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                        <div className="box box-green">
                            <h2 className='box-title-green'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <div className='middle-part middle-part-green'></div>
                    </div>
                    <div className="col-5 d-flex flex-column gap-5 justify-content-center align-items-flex-start">
                    <div className="box box-green">
                            <h2 className='box-title-green'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
                        </div>
                        <div className="box box-green">
                            <h2 className='box-title-green'>All Code Welcome</h2>
                            <p className='box-text'>From Ada to Zig, start by deploying a repo, an image, or a template.</p>
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
                            <h2>Deploy an app to <br /> production in minutes</h2>
                            <p>Join hundreds of thousands of users deploying <br /> applications effortlessly on Railway</p>
                            <Link to='/contact' className='home-btn'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        


    </div>
  )
}

export default home