import { FETCH_PROPERTIES, ADD_PROPERTIES, ADD_FILTERS, ADD_VALUE } from '../actions/types';

const initialState = {
    items: [],
    filter: {}
}

export default function propertyReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTIES:
            return state = {...state, items: [...state.items, action.value]};
        case ADD_FILTERS:
            return state = {...state, filter: { ...action.filter }};
        default:
            return state;
    }
}