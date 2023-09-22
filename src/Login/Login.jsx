import React from 'react'
import { Link } from 'react-router-dom'
import carousel from "../img/carousel-1.jpg";
import "./Login.css";

const Login = () => {
  return (
    <>
     <div className="carousel-item active ">
        <div className="background-img carousel-img">
          <img className="slide carousel-img" src={carousel} />
        </div>
        <div className="carousel-caption about-carousel">
          <div className="h1-font-size">
            <h1 className="display-1 h1-font-size carousel-margin-top">Login</h1>
            <h5 className="text-white ">
              <Link className="h-5-Aboout" to="/">
                Home
              </Link>
              0
              <Link className="h-5-Aboout" to="/Login">
                Login
              </Link>
            </h5>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s"> */}
        <div className="container">
          <div className="card-login ms-auto me-auto col-4">
            <h1 className="text-white bg-primary text-center">Login</h1>
            <form  className="p-2 email-label-input">
              <div className="mb-3 email-login">
                <label htmlFor="nameFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Employee Email"
                />
              </div>
              <div className="mb-3 email-login">
                <label htmlFor  ="nameFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Enter Your Password"/>
              </div>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
          </div>
    </>
  )
}

export default Login