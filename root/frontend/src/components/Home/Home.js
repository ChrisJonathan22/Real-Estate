import React, { Fragment, useState, useEffect } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import store from '../../store';
import { ADD_PROPERTIES } from '../../actions/types';
import axios from 'axios';
import ContentSection from '../ContentSection/ContentSection';
import HomeProperties from '../HomeProperties/HomeProperties';
import Form from '../Form/Form';

export default function Home () {

const [properties, setProperties] = useState("");

async function fetchProperties(url) {
    try {
        // Fetch all the properties and store them within the state
        const response = await axios.get(url);
        setProperties(response.data.properties);
    } catch (error) {
        console.log(error);
    }
}


useEffect(() => {
    // Once the component mounts fetch all the properties
    fetchProperties('http://localhost:5000/properties');
}, []);

// Loop through each property within the state and store it in the store.
for(let i = 0; i < properties.length; i++) {
    store.dispatch({type: ADD_PROPERTIES, value: properties[i]});
}

console.log('This is the store', store.getState());

    return (
        <Fragment>
            <HomeHero />
            <ContentSection />
            <HomeProperties />
            <Form />
        </Fragment>
    )
};
