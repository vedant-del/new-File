import React from "react";
import { FaUserTie } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <a to="/" className="navbar-brand p-0">
          <h1 className="startup">
            <FaUserTie className="user-logo" />
            <span className="Startup-name">
            Startup
            </span>
          </h1>
        </a>
        <div className="navbar-nav">
          <a to="/" className="nav-item nav-a">
            Home
          </a>
          <a to="/about" className="nav-item nav-a">
            About
          </a>
          <a to="/service" className="nav-item nav-a">
            Services
          </a>
          <a to="/task" className="nav-item nav-a">
            Task
          </a>
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
              <a to="/feature" className="dropdown-item">
                Our features
              </a>
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
              <a to="/login" className="dropdown-item">
                Login
              </a>
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
    </div>
  );
};

export default Header;
