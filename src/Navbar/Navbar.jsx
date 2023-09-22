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
      <div className="topbartext">
        <MdOutlineLocationOn className="location-logo" />
        <div className="address">123 Street, Abc State, india</div>
        <BiPhoneCall className="location-logo" />
        <div className="address">+012 345 6789</div>
        <MdOutlineEmail className="location-logo" />
        <div className="address">info@example.com</div>
      </div>
      <div className="social-icon d-inline-flex align-items-center-topbat">
        <a
          className="btn img btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <SlSocialTwitter />
        </a>
        <a
          className="btn img btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <FaFacebook />
        </a>
        <a
          className="btn img btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <TiSocialLinkedin />
        </a>
        <a
          className="btn img btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <IoLogoInstagram />
        </a>
        <a
          className="btn img btn-sm btn-outline-light btn-sm-square rounded-circle"
          href=""
        >
          <PiYoutubeLogoFill />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
