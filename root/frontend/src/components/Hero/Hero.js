import React, { Fragment } from 'react';
import './Hero.scss';
import SearchForm from '../SearchForm/SearchForm';

export default function Hero (props){
    console.log('test', props);
    return (
        <Fragment>
            <div className={`hero_image ${props.page}`} style={{backgroundImage: `url(${props.image})`}}>
                {props.title ? <h1>{props.title}</h1> : null}
                <SearchForm page={props.page} />
            </div>
        </Fragment>
    )
};