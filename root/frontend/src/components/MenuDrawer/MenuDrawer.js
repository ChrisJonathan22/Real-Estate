import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './MenuDrawer.scss';
import { Link } from 'react-router-dom';

export default function MenuDrawer(props) {
    let { action } = props;
    return (
        <Fragment>
            <div className={`menu_drawer ${action}`}>
                <ul>
                    <li className="nav-item"><Link className="nav-link" exact="true" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sales">Sales</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/lettings">Lettings</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/new-homes">New Homes</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/info">Useful Info</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}


MenuDrawer.propTypes = {
    action: PropTypes.bool
};