import React from 'react'
import {FaUserTie} from 'react-icons/fa'
import {LiaBarsSolid} from 'react-icons/lia'
import "./Topbar.css";

const Topbar = () => {
  // var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }

  return (
    <>
    {/* <div className='topbar-logo'>
        <div>
        <a to="/" className="topbar-brand">
          <h1 className="startup">
            <FaUserTie className="user-logo-topbar" />
            <span className="Startup-name-topbar">
            Startup
            </span>
          </h1>
        </a>
        </div>
        <button type='button' className='topbar-button'>
            <div className="nav-item pages dropdown dropdown">
            <a
              to="#"
              className="nav-a dropdown-toggle"
              data-bs-toggle="dropdown"
            >
            <LiaBarsSolid  className='togal-button'/>
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
        </button>
    </div>  */}


    <div className="topnav topbar-logo">
    <a to="/" className="topbar-brand">
          <h1 className="startup">
            <FaUserTie className="user-logo-topbar" />
            <span className="Startup-name-topbar">
            Startup
            </span>
          </h1>
        </a>
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="javascript:void(0);" className="icon topbar-button" onclick="myFunction()">
  <LiaBarsSolid  className='togal-button'/>
  </a>
</div>
    </>
  )
}

export default Topbar
