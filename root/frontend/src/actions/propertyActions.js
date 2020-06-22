import { FETCH_PROPERTIES, ADD_PROPERTIES } from './types';
import axios from 'axios';

export function fetchProperties () {
    return function (dispatch) {
        axios.get('localhost:5000')
        .then(res => res.json())
        .then(properties => dispatch({
            type: FETCH_PROPERTIES,

        }));
    }
}
