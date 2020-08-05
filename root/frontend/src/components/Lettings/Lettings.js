import React, { Component, Fragment } from 'react'
import Hero from '../Hero/Hero';
import lettings_hero from '../../Assets/lettings_hero.jpg';
import FilteredProperties from '../FilteredProperties/FilteredProperties';

export default class Lettings extends Component {
    render() {
        return (
            <Fragment>
                <Hero page="lets" image={ lettings_hero } title="To Rent" />
                <FilteredProperties contractType="Rent" />
            </Fragment>
        )
    }
}