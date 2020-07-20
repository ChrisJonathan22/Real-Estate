import React, { Fragment, useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import hero_image from '../../Assets/home_hero.jpg';
import store from '../../store';
import { ADD_PROPERTIES } from '../../actions/types';
import axios from 'axios';
import ContentSection from '../ContentSection/ContentSection';
import HomeProperties from '../HomeProperties/HomeProperties';
import Form from '../Form/Form';
import Testimonials from '../Testimonials/Testimonials';

export default function Home () {

    const [properties, setProperties] = useState("");

    async function fetchProperties(url) {
        try {
            // Fetch all the properties and store them within the state
            let response = await axios.get(url);
            response = response.data.properties;
            setProperties(response);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        // Once the component mounts fetch all the properties
        fetchProperties('http://localhost:5000/properties');
    }, []);

    let currentProperties = store.getState();
    currentProperties = currentProperties.properties.items;

    // Add properties to the store if there aren't any 
    if (currentProperties <= 0) {
        for(let i = 0; i < properties.length; i++) {
            store.dispatch({type: ADD_PROPERTIES, value: properties[i]});
        }
    }

    return (
        <Fragment>
            <Hero page='home' image={hero_image} />
            <ContentSection />
            <HomeProperties />
            <Form />
            <Testimonials />
        </Fragment>
    )
};
