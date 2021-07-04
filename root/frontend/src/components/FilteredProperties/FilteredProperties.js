import React, { Fragment, useState, useEffect } from 'react';
import { fetchProperties } from '../../tools/functions';
import { ADD_PROPERTIES } from '../../actions/types';
import './FilteredProperties.scss';
import DisplayProperties from '../DisplayProperties/DisplayProperties';
import store from '../../store';

export default function FilteredProperties (props) {
    const [properties, setProperties] = useState("");
    let { contractType } = props;
    console.log("This is the contract type prop", contractType);

    useEffect(() => {
        // Once the component mounts fetch all the properties
        fetchProperties('http://localhost:5000/properties', setProperties);
    }, []);

    let state = store.getState();
    let currentProperties = state.properties.items;
    let filter = state.properties.filter;
    

    if (properties.length > 0 && Object.keys(filter).length > 0) {
        //properties = properties.filter()
        console.log("We have properties and filters");
        console.log(filter);
        // properties = properties.filter((property) => {

        // });
    }

    


    // Add properties to the store if there aren't any 
    if (currentProperties <= 0) {
        for(let i = 0; i < properties.length; i++) {
            store.dispatch({type: ADD_PROPERTIES, value: properties[i]});
        }
    }

    console.log('This is the store from the filtered properties component', store.getState());

    return (
        <Fragment>
            <div className="grid r__container clear_search_form">
                {
                    Object.keys(filter).length === 0 ?
                        
                        <DisplayProperties properties={properties} contractType = {contractType} />
                        :
                        <DisplayProperties properties = {properties} contractType = {contractType} filter = {filter} />
                }
            </div>
        </Fragment>
    )
}