import React , { Fragment, useState, useEffect } from 'react';
import store from '../../store';

export default function HomeProperties () {
    console.log("this is the store from home properties", store.getState());
    const properties = store.getState().properties;
    console.log(properties);
    return (
        <Fragment>
            <div className="grid">

            </div>
        </Fragment>
    )
}