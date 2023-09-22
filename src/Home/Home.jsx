import React from "react";
import carousel from "../img/carousel-1.jpg";
import {FaCheck, FaCubes, FaShieldAlt, FaUsers, FaUsersCog} from "react-icons/fa";
import {BsCheckLg} from "react-icons/bs";
import {FaAward} from "react-icons/fa";
import about from "../img/about.jpg";
import feature from "../img/feature.jpg";
import "./Home.css";
import Footer from "../Footer/Footer";
import { IoIosCall } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="carousel-item active">
        <div className="background-img slider">
          <img className="slide" src={carousel} />
        </div>
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="center">
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
              Creative & Innovative
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
              Creative & Innovative <br></br>Digital Solution
            </h1>
            <a
              to="/contact"
              className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="box">
          <div className="box-home">
            <div className="inerbox">
              <FaUsers className="content-inerbox" />
            </div>
            <div className="inerbox-text">
              Happy Clients
              <br />
              <h1>12345</h1>
            </div>
          </div>
          <div className="box-home white-box">
            <div className="inerbox center-box">
              <BsCheckLg className="content-inerbox inerbox-white" />
            </div>
            <div className="inerbox-text text-center">
            Projects Done
              <br />
              <h1>12345</h1>
            </div>
          </div>
          <div className="box-home">
            <div className="inerbox">
              <FaAward className="content-inerbox" />
            </div>
            <div className="inerbox-text">
            Win Awards
              <br />
              <h1>12345</h1>
            </div>
          </div>
        </div>
      </div>


      {/* *******************  About us ************** */}
      <div className="aboutus">
        <div className="left-cantent">
          <h3>About Us</h3>
          <h1>The Best IT Solution With 10 Years of Experience</h1>
          <div className="line-animated"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            aspernatur eveniet ea consequuntur dolores aliquam ullam voluptates
            magni ad libero magnam at eaque eum, laboriosam odio? Quisquam quo
            maxime id?
          </p>
          <div className="checkicon">
            <h5 className="fist-row">
              <span className="spantag">
                <FaCheck className="icone" />
                Award Winning
              </span>
              <span className="spantag right-side">
                <FaCheck className="icone first" />
                Professional Staff
              </span>
            </h5>
            <h5 className="two-row">
              <span className="spantag">
                <FaCheck className="icone" />
                24/7 Support
              </span>
              <span className="spantag right-side">
                <FaCheck className="icone" />
                Fair Prices
              </span>
            </h5>
          </div>
          <div className="last-content-aboutus">
            <div className="last-box-aboutus">
              <IoIosCall />
            </div>
            <div className="last-box-right">
              Call to ask any question
              <br />
              <h3 className="number">+012 345 6789</h3>
            </div>
          </div>
        </div>
        <div className="right-img">
          <img src={about} />
        </div>
      </div>

      {/* ******************** Features ****************** */}
      <div className="features-heading">
        <div className="heading">
          <h3 className="center-heading">WHY CHOOSE US</h3>
          <h1 className="center-heading">We Are Here to Grow Your</h1>
          <h1 className="center-heading">Business Exponentially</h1>
          <div className="line-animated center-animated"></div>
        </div>

        <div className="features-content">
          <div className="features-box-1">
            <div>
              <div className="box-features">
                <FaCubes />
              </div>
              <div className="iner-box-content">
                <h2>Best In Industry</h2>
                <p>
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
            </div>
            <div>
              <div className="box-features second-box">
                <FaAward />
              </div>
              <div className="iner-box-content">
                <h2>Award Winning</h2>
                <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
                </p>
              </div>
            </div>
          </div>

          <div className="features-box-2">
            <img src={feature} />
          </div>
          <div className="features-box-3">
            <div>
              <div className="box-features">
                <FaUsersCog />
              </div>
              <div className="iner-box-content">
                <h2>Professional Staff</h2>
                <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
                </p>
              </div>
            </div>
            <div>
              <div className="box-features second-box">
                <IoIosCall />
              </div>
              <div className="iner-box-content">
                <h2>24/7 Support</h2>
                <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ****************** services us ************** */}
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
                        {/* <div className=''>
                            <h3 className=''>Call Us For Quote</h3>
                        </div> */}
                        <div className='inner-text-Services'>
                        <h2>Call Us For Quote</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolorum eius corporis esse minima non deleniti nostrum assumenda aliquam qui doloribus facere in, iste sapiente minus accusamus exercitationem beatae soluta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
