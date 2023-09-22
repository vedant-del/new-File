import React from "react";
import about from "../img/about.jpg";
import { FaCheck } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import carousel from "../img/carousel-1.jpg";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <>
      <div className="carousel-item active ">
        <div className="background-img carousel-img">
          <img className="slide carousel-img" src={carousel} />
        </div>
        <div className="carousel-caption about-carousel">
          <div className="h1-font-size">
            <h1 className="display-1 h1-font-size carousel-margin-top">About Us</h1>
            <h5 className="text-white ">
              <Link className="h-5-Aboout" to="/">
                Home
              </Link>
              0
              <Link className="h-5-Aboout" to="/aboutus">
                About
              </Link>
            </h5>
          </div>
        </div>
      </div>

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
      <Footer />
    </>
  );
};

export default Aboutus;
