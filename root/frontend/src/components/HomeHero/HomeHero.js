import React, { Fragment } from 'react';
import './HomeHero.scss';
import hero_image from '../../Assets/home_hero.jpg';
import SearchForm from '../SearchForm/SearchForm';

export default function Home (){
    return (
        <Fragment>
            <div className="hero_image" style={{backgroundImage: `url(${hero_image})`}}>
                <SearchForm />
            </div>
        </Fragment>
    )
};