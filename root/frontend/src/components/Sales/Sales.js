import React, { Fragment, useState } from 'react';
import Hero from '../Hero/Hero';
import sales_hero from '../../Assets/sales_hero.jpg';
import FilteredProperties from '../FilteredProperties/FilteredProperties';
import store from '../../store';

export default function Sales () {

    const [ filters, setFilters ] = useState();

    // store.subscribe(() => console.log(store.getState()));
    // console.log(store.getState());

    return (
        <Fragment>
            <Hero page='sales' image={sales_hero} title="To Buy" />
            <FilteredProperties />
        </Fragment>
    )
}
