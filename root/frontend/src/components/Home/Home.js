import React, { Component, Fragment } from 'react';
import './Home.scss';
import hero_image from '../../Assets/home_hero.jpg';
import SearchForm from '../SearchForm/SearchForm';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="hero_image" style={{backgroundImage: `url(${hero_image})`}}>
                    <SearchForm />
                </div>
            </Fragment>
        )
    }
}
