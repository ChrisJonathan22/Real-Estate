  
import React , { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../../Assets/logo.png';
import './Navbar.scss';
import MenuDrawer from '../MenuDrawer/MenuDrawer';


export default function Navbar () {
  const [show, toggleShow] = useState(false);

  return (
    <Fragment>
      <nav className="r__navbar">
        <div className="r__container">
          <a className="text_logo mx-auto" href="/" >Real Estate</a> 
          <Link className="navbar-brand mx-auto" exact="true" to="/" ><img alt="logo" src={ Logo } /></Link>
          <ul className="menu__items">
            <li className="nav-item"><Link className="nav-link" exact="true" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sales">Sales</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/lettings">Lettings</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/new-homes">New Homes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/info">Useful Info</Link></li>
          </ul>
          <div className="mobile_menu_icon"><i className="fas fa-bars" onClick={() => toggleShow(!show)}></i></div>
        </div>
      </nav>
      <div className="clear_menu"></div>
    <MenuDrawer action={show} />
  </Fragment>
  )
}
