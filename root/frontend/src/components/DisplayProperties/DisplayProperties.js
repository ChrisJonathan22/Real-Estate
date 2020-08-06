import React from 'react';
import currencyFormatter from '../../tools/currencyFormatter';
import Spinner from '../Spinner/Spinner';

export default function displayProperties (props) {
    let { properties, contractType, filter } = props;

    return (
    properties.length > 0  ? properties.map((property, index) => {
      const price = currencyFormatter.format(property.price);
      
      if (property.contractType === contractType) return ( 
          <a href="#" key={ index } className="grid__item" style={{ backgroundImage: `url(data:image/png;base64,${property.image})` }}>
              <div className="grid__item-content">
                  <div className="grid__item-content__container">
                      { filter ? <h1>Filtered</h1> : null }
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
    )
  }