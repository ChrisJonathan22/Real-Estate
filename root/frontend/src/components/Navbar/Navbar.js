  
import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../../Assets/logo.png';
import './Navbar.scss';

const Navbar =  () => {
  return (
          <div>
              <nav className="navbar navbar-expand-x1 navbar-light @@classList">
                <div className="container">
                  <ul className="left">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Sales</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Lettings</a></li>
                  </ul>
                  {/* <a className="navbar-brand mx-auto" href="/" >Real Estate</a> */}
                  <a className="navbar-brand mx-auto" href="/" ><img src={ Logo } /></a>
                  <ul className="right">
                    <li className="nav-item"><a className="nav-link" href="/">New Homes</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Useful Info</a></li>
                  </ul>
                </div>
              </nav>
          </div>
  );
}

export default Navbar;