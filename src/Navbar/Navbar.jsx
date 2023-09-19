import React from "react";
import "./Navbar.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-1">
        <div className="topbartext">
          <MdOutlineLocationOn className="location-logo" />
          <div className="address">123 Street, Abc State, india</div>
          <BiPhoneCall className="location-logo" />
          <div className="address">+012 345 6789</div>
          <MdOutlineEmail className="location-logo" />
          <div className="address">info@example.com</div>
        </div>
        <div className="social-icon">
          <ul>
            <a>
              <li className="img">
                <SlSocialTwitter />
              </li>
            </a>
            <a>
              <li className="img">
                <FaFacebook />
              </li>
            </a>
            <a>
              <li className="img">
                <TiSocialLinkedin />
              </li>
            </a>
            <a>
              <li className="img">
                <IoLogoInstagram />
              </li>
            </a>
            <a>
              <li className="img">
                <PiYoutubeLogoFill />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
