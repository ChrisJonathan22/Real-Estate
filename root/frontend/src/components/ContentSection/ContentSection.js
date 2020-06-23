import React, { Fragment } from 'react';
import './ContentSection.scss';


export default function ContentSection () {
    return (
        <Fragment>
            <div className="r__container container">
                <div className="container--inner">
                    <h2 className="container--inner-title">REAL ESTATE BRIEF INTRODUCTION</h2>
                    <p className="container--inner-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}