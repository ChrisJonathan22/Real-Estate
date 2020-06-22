import { FETCH_PROPERTIES, ADD_PROPERTIES, ADD_VALUE } from '../actions/types';

const initialState = {
    items: []
}

export default function propertyReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTIES:
            return state = {...state, items: [...state.items, action.value]};
        default:
            return state;
    }
}