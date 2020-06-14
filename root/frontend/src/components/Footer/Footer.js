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
                        <div className="social__container">
                            <div className="icons">
                                <a href="#" className="fa fa-facebook"></a>
                            </div>

                            <div className="icons">
                                <a href="#" className="fa fa-linkedin"></a>
                            </div>
                                
                            <div className="icons">
                                <a href="#" className="fa fa-twitter"></a>
                            </div>
                        </div>

                        <div className="address__container r__container">
                            <div className="left__address">
                                <h5>Gateshead Office</h5>
                                <p>Real Estate</p>
                                <p>1 Long Street</p>
                                <p>Gateshead</p>
                                <p>N11 1XX</p>
                                <p>Tel: <a href="tel:02056786380">020 5678 6380</a></p>
                                <p>Email: <a href="mailto:info-gateshead@realestate.co.uk">info-gateshead@realestate.co.uk</a></p>
                            </div>

                            <div className="left__address">
                                <h5>Newcastle Office</h5>
                                <p>Real Estate</p>
                                <p>1 Short Street</p>
                                <p>Newcastle</p>
                                <p>N20 2XX</p>
                                <p>Tel: <a href="tel:02040786320">020 4078 6320</a></p>
                                <p>Email: <a href="mailto:info-newcastle@realestate.co.uk">info-newcastle@realestate.co.uk</a></p>
                            </div>
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