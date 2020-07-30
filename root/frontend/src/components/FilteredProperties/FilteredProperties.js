import React, { Fragment, useState, useEffect } from 'react';
import { fetchProperties } from '../../tools/functions';
import { ADD_PROPERTIES } from '../../actions/types';
import currencyFormatter from '../../tools/currencyFormatter';
import Spinner from '../Spinner/Spinner';
import store from '../../store';

export default function FilteredProperties () {
    const [properties, setProperties] = useState("");

    useEffect(() => {
        // Once the component mounts fetch all the properties
        fetchProperties('http://localhost:5000/properties', setProperties);
    }, []);

    let currentProperties = store.getState();
    currentProperties = currentProperties.properties.items;


    // Add properties to the store if there aren't any 
    if (currentProperties <= 0) {
        for(let i = 0; i < properties.length; i++) {
            store.dispatch({type: ADD_PROPERTIES, value: properties[i]});
        }
    }

    console.log('This is the store from the filtered properties component', store.getState());

    return (
        <Fragment>
            <div className="grid r__container">
                {
                    properties.length > 0  ? properties.map((property, index) => {
                        const price = currencyFormatter.format(property.price);
                        if (index <= 4) return ( 
                            <a href="#" key={ index } className="grid__item" style={{ backgroundImage: `url(data:image/png;base64,${property.image})` }}>
                                <div className="grid__item-content">
                                    <div className="grid__item-content__container">
                                        <h4 className="title">{ property.location }</h4>
                                        <h5 className="price">Price: { price }</h5>
                                        <i className="fa fa-bed icon" aria-hidden="true"> { property.bedroom }</i>
                                    </div>
                                </div>
                            </a> 
                        )
                    })
                    :
                    <Spinner />
                }
            </div>
        </Fragment>
    )
}