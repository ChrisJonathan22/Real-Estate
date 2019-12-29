  
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
                    <li className="nav-item"><Link className="nav-link" exact to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sales">Sales</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/lettings">Lettings</Link></li>
                  </ul>
                  {/* <a className="navbar-brand mx-auto" href="/" >Real Estate</a> */}
                  <Link className="navbar-brand mx-auto" exact to="/" ><img alt="logo" src={ Logo } /></Link>
                  <ul className="right">
                    <li className="nav-item"><Link className="nav-link" to="/new-homes">New Homes</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/info">Useful Info</Link></li>
                  </ul>
                </div>
              </nav>
          </div>
  );
}

export default Navbar;