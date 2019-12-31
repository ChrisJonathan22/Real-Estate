  
import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../../Assets/logo.png';
import './Navbar.scss';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from 'react-transition-group';

class Navbar extends Component {
  constructor () {
    super();
    this.state = {
      show: false
    }
    this.showDrawer = this.showDrawer.bind(this);
  }

  showDrawer () {
    let { show } = this.state;
    this.setState({ show: !show });
  }

  render () {
    let { show } = this.state;
    return (
            <div>
                <nav className="navbar navbar-expand-x1 navbar-light @@classList">
                  <div className="container">
                    <ul className="left">
                      <li className="nav-item"><Link className="nav-link" exact to="/">Home</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/sales">Sales</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/lettings">Lettings</Link></li>
                    </ul>
                    <a className="text_logo mx-auto" href="/" >Real Estate</a> 
                    <Link className="navbar-brand mx-auto" exact to="/" ><img alt="logo" src={ Logo } /></Link>
                    <ul className="right">
                      <li className="nav-item"><Link className="nav-link" to="/new-homes">New Homes</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/info">Useful Info</Link></li>
                    </ul>
                    <div className="mobile_menu_icon"><i class="fas fa-bars" onClick={this.showDrawer}></i></div>
                  </div>
                </nav>
              <MenuDrawer action={show} />
            </div>
    );
  }
}

export default Navbar;