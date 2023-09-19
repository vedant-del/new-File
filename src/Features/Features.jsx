import React from "react";
import { FaCubes } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import feature from "../img/feature.jpg";
import "./Features.css";

const Features = () => {
  return (
    <>
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
    </>
  );
};

export default Features;
