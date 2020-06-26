import React , { Fragment, useState, useEffect } from 'react';
import './HomeProperties.scss';
import store from '../../store';

export default function HomeProperties () {
    console.log("this is the store from home properties", store.getState());
    const properties = store.getState().properties.items;
    console.log(properties);
    return (
        <Fragment>
            <div className="grid r__container">
                {
                    properties ? properties.map((property, index) => {
                        const formatter = new Intl.NumberFormat('en-UK', {
                            style: 'currency',
                            currency: 'GBP'
                        });
                        const price = formatter.format(property.price);
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
                    null    
                }
            </div>
        </Fragment>
    )
}