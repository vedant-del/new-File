import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Home from './Home/Home'
import Aboutus from './Aboutus/Aboutus'
import Features from './Features/Features'
import Services from './Services/Services'
import Footer from './Footer/Footer'
import Topbar from './phonetopbar/Topbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Login from './Login/Login'

function App() {

  return (
    <>
    <Router>
      {/* <Topbar /> */}
      <Navbar />
      <Header />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="aboutus" exact element={<Aboutus />} />
      <Route path="features" exact element={<Features />} />
      <Route path="Login" exact element={<Login />} />
      <Route path="services" exact element={<Services />} />
      <Route path="footer" exact element={<Footer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
