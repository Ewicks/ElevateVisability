import React from 'react'
import BlogImg from '../../assets/images/blog-img.jpeg';
import Author from '../../assets/images/author.png';

function blog1() {
  return (
    <div>
        <div className="container-fluid px-5 mt-3 title-container">
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <h1>How People Judge Your Website & Decide Whether to Contact You</h1>
                    </div>
                    <div className="author">
                        <img src={Author} alt="" />
                        <h3 className='my-3 text-dark'>Mark Walker-Ford</h3>
                        <p className='text-dark'>Director, Elevate Visibility</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="container-fluid blog-post-bg">
        <div className="row">
            <div className="col-12 text-dark p-5 line-height-p">
                <p>
                Are you wondering how people judge your <span className='color'>website design</span>? Want to know what they look at how they act whilst visiting your site? <br />Crucial share the stats you need to know in this infographic. <br />Here’s a summary of what they share:
                </p>
                <ul>
                    <li>The power of digital influence</li>
                    <li>How quickly people judge your website</li>
                    <li>First impressions</li>
                    <li>Where visitors look</li>
                    <li>Page scrolling habits</li>
                </ul>
                <p>Check out the infographic for more detail.</p>
                <img className='blog-img' src={BlogImg} alt="" />
                <p className='mt-5'>
                In today’s digital age, your website is often the first point of contact between your business and potential customers. <br />It serves as a virtual storefront, a platform to showcase your products, services, and brand identity. But have you ever considered how quickly people judge your website and decide whether to contact you? <br />In this blog post, we’ll explore the power of digital influence, the importance of first impressions, where visitors look on your site, their page scrolling habits, and the significance of mobile-friendliness in shaping user decisions.
                </p>
                <h2>The Power of Digital Influence</h2>
                <p>
                In today’s digital landscape, your website serves as the cornerstone of your online presence. It’s not just a virtual storefront; it’s a powerful tool for shaping perceptions, building credibility, and driving business growth. <br />The way your website is designed and presented can have a profound impact on how potential customers perceive your brand and whether they choose to engage with you. <br />Let’s delve deeper into the factors that influence digital influence and explore actionable tips for small business website owners to maximize their online presence:
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default blog1