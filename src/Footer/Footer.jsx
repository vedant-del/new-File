import React from "react";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
            <Link to="/" className="navbar-brand">
              <h1 className="m-0">
                <FaUserTie />
                Startup
              </h1>
            </Link>
            <p className="mt-3 mb-4">
              Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
              stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
              amet erat lorem stet eos. Diam amet et kasd eos duo.
            </p>
          </div>
        </div>
        <div className="get-in-touch">
          <div className="col-lg-4 col-md-12 pt-5 mb-5 phone-maegin">
            <div className="section-title section-title-sm position-relative">
              <h3 className="text-light mb-0">Get In Touch</h3>
            </div>
            <div className="line-animated"></div>
            <div className="d-flex mb-2">
              <p className="mb-0">
                {" "}
                <MdOutlineLocationOn />
                123 Street, Abc State, india
              </p>
            </div>
            <div className="d-flex mb-2">
              <p className="mb-0">
                <HiOutlineMailOpen />
                info@example.com
              </p>
            </div>
            <div className="d-flex mb-2">
              <p className="mb-0">
                <BiPhoneCall />
                +012 345 67890
              </p>
            </div>
            <div className="d-flex twiter-img mt-4">
              <a className="btn-footer btn-primary btn-square me-2" href="#">
                <SlSocialTwitter />
              </a>
              <a className="btn-footer btn-primary btn-square me-2" href="#">
                <FaFacebook />
              </a>
              <a className="btn-footer btn-primary btn-square me-2" href="#">
                <TiSocialLinkedin />
              </a>
              <a className="btn-footer btn-primary btn-square" href="#">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
          <div className="Quick-Links phone-maegin">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="text-light mb-0">Quick Links</h3>
            </div>
            <div className="line-animated"></div>
            <div className="link-animated d-flex">
              <Link className="text-light arrow mb-2" to="/">
                <BsArrowRight />
                Home
              </Link>
              <Link className="text-light arrow mb-2" to="/aboutus">
                <BsArrowRight />
                About Us
              </Link>
              <Link className="text-light arrow mb-2" to="/services">
                <BsArrowRight />
                Our Services
              </Link>
              <a className="text-light arrow mb-2" to="/team">
                <BsArrowRight />
                Meet The Team
              </a>
              <Link className="text-light arrow" to="/contact">
                <BsArrowRight />
                Contact Us
              </Link>
            </div>
          </div>
          <div className="Quick-Links mobile-vivu phone-maegin">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="text-light mb-0">Popular Links</h3>
            </div>
            <div className="line-animated"></div>
            <div className="link-animated d-flex flex-column justify-content-start">
              <Link className="text-light arrow mb-2" to="/">
                <BsArrowRight />
                Home
              </Link>
              <Link className="text-light arrow mb-2" to="/aboutus">
                <BsArrowRight />
                About Us
              </Link>
              <Link className="text-light arrow mb-2" to="/services">
                <BsArrowRight />
                Our Services
              </Link>
              <a className="text-light arrow mb-2" to="/team">
                <BsArrowRight />
                Meet The Team
              </a>
              <Link className="text-light arrow" to="/contact">
                <BsArrowRight />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid-footer text-white-footer">
        <p className="last-footer">
          &copy;
          <a className=" border-bottom">Startup</a>. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
