import React, { Fragment } from 'react';
import './Form.scss';

export default function Form() {
    return (
        <Fragment>
            <div className="r__container form--container">
            <h4 className="title">Suscribe to receive all our property updates</h4>
            <div className="form--container-inner">
                <form>
                    <input className="name" type="text" name="name" placeholder="Name" />
                    <input className="telephone" type="tel" name="telephone" placeholder="Telephone" />
                    <input className="email" type="email" name="email" placeholder="Email" />
                    <input className="btn" type="submit" name="submit" value="Subscribe" />
                </form>
            </div>
            </div>
        </Fragment>
    )
}