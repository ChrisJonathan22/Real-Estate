import React, { Component, Fragment } from 'react';
import Hero from '../Hero/Hero';
import sales_hero from '../../Assets/sales_hero.jpg';

export default class Sales extends Component {
    render() {
        return (
            <Fragment>
                <Hero page='sales' image={sales_hero} title="To Buy" />
            </Fragment>
        )
    }
}
