import React, { Fragment } from 'react';
import './Footer.scss';
import logo from '../../Assets/logo.png';

export default function Footer () {
    return (
        <Fragment>
            <footer>
                <div className="top__footer">
                    <div className="r__container">
                        <div className="logo__container">
                            <a href="/"><img alt="logo" src={logo} /></a>
                        </div>
                    </div>
                </div>
                <div className="bottom__footer">
                    <div className="bottom__footer--container r__container">
                        <p>@ 2020 Real Estate</p>
                        <p>Designed by <a href="https://www.chrisjonathan.co.uk/">Chris Jonathan</a></p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}