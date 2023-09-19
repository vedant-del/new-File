import React from "react";
import carousel from "../img/carousel-1.jpg";
import {FaUsers} from "react-icons/fa";
import {BsCheckLg} from "react-icons/bs";
import {FaAward} from "react-icons/fa";
import "./Home.css";

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
    </>
  );
};

export default Home;
