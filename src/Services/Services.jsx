import React from 'react'
import {FaShieldAlt} from 'react-icons/fa'
import carousel from "../img/carousel-1.jpg";
import "./Services.css";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
    <div className="carousel-item active ">
        <div className="background-img carousel-img">
          <img className="slide carousel-img" src={carousel} />
        </div>
        <div className="carousel-caption about-carousel">
          <div className="h1-font-size">
            <h1 className="display-1 h1-font-size carousel-margin-top">Services Us</h1>
            <h5 className="text-white ">
              <Link className="h-5-Aboout" to="/">
                Home
              </Link>
              0
              <Link className="h-5-Aboout" to="/services">
              Services
              </Link>
            </h5>
          </div>
        </div>
      </div>


    
      <div className='features-heading'>
      <div className="heading">
          <h3 className="center-heading">OUR SERVICES</h3>
          <h1 className="center-heading">Custom IT Solutions for Your</h1>
          <h1 className="center-heading">Successful Business</h1>
          <div className="line-animated center-animated"></div>
        </div>
        <div className='Services'>
            <div className='Services-content'>
                <div className='Services-row'>
                    <div className='first-box box-Services'>
                        <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                </div>

                <div className='Services-row'>
                    <div className='first-box box-Services'>
                        <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='last-box-Services box-Services'>
                        <div className='inner-text-Services'>
                        <h2>Call Us For Quote</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolorum eius corporis esse minima non deleniti nostrum assumenda aliquam qui doloribus facere in, iste sapiente minus accusamus exercitationem beatae soluta.</p>
                        <h1 className='last-number'>+012 345 6789</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </> 
  )
}

export default Services
