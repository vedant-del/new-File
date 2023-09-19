import React from 'react'
import {FaShieldAlt} from 'react-icons/fa'
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className='features-heading'>
      <div className="heading">
          <h3 className="center-heading">OUR SERVICES</h3>
          <h1 className="center-heading">Custom IT Solutions for Your</h1>
          <h1 className="center-heading">Successful Business</h1>
          <div className="line-animated center-animated"></div>
        </div>
        <div className='Services'>
            <div className='Services-content'>
                <div className='Services-row'>
                    <div className='first-box box-Services'>
                        <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                </div>

                <div className='Services-row'>
                    <div className='first-box box-Services'>
                        <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='first-box box-Services'>
                    <div className='innar-box-Services'>
                            <FaShieldAlt className='inner-icon' />
                        </div>
                        <div className='inner-text-Services'>
                        <h2>Cyber Security</h2>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        </div>
                    </div>
                    <div className='last-box-Services box-Services'>
                        {/* <div className=''>
                            <h3 className=''>Call Us For Quote</h3>
                        </div> */}
                        <div className='inner-text-Services'>
                        <h2>Call Us For Quote</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolorum eius corporis esse minima non deleniti nostrum assumenda aliquam qui doloribus facere in, iste sapiente minus accusamus exercitationem beatae soluta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </> 
  )
}

export default Services
