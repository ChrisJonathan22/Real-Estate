import React , { Fragment, useState, useEffect } from 'react';
import './HomeProperties.scss';
import { fetchProperties } from '../../tools/functions';
import currencyFormatter from '../../tools/currencyFormatter';
import Spinner from '../Spinner/Spinner';

export default function HomeProperties () {

    const [properties, setProperties] = useState("");

    useEffect(() => {
        // Once the component mounts fetch all the properties
        fetchProperties('http://localhost:5000/properties', setProperties);
    }, []);

    return (
        <Fragment>
            <div className="grid r__container">
                {
                    properties.length ? properties.map((property, index) => {
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