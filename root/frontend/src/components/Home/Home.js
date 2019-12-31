import React, { Component } from 'react';
import './Home.scss';
import hero_image from '../../Assets/home_hero.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero_image" style={{backgroundImage: `url(${hero_image})`}}>
                </div>
            </div>
        )
    }
}
