import React from "react";
import { FaUserTie } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="startup">
            <FaUserTie className="user-logo" />
            <span className="Startup-name">
            Startup
            </span>
          </h1>
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/aboutus" className="nav-item nav-a">
            About
          </Link>
          <Link to="/services" className="nav-item nav-a">
            Services
          </Link>
          {/* <a to="/task" className="nav-item nav-a">
            Task
          </a> */}
          <div className="nav-item pages dropdown dropdown">
            <a
              to="#"
              className="nav-a dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
              <IoMdArrowDropdown style={{alignitems: "center", marginLeft:"5px",fontSize:"20px"}}/>
            <div className="dropdown-menu dropdown-content m-0">
              <ul>
                <li>
              <Link to="/features" className="dropdown-item">
                Our features
              </Link>
                </li>
                <li>
              <a to="/team" className="dropdown-item">
                Team Members
              </a>
                </li>
                <li>
              <a to="/profile" className="dropdown-item">
                Profile
              </a>
                </li>
                <li>
              <Link to="/Login" className="dropdown-item">
                Login
              </Link>
                </li>
                <li>
              <a className="dropdown-item">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <a to="/contact" className="nav-item nav-a">
            Contact
          </a>
        </div>
      </div>
  );
};

export default Header;
