import initialState from './initialState';
import * as types from '../actions/actionTypes';

export function apiReducer (state = initialState.api, action) {
    switch(action.type) {
        case types.API_CALL_REQUEST: 
            return { ...state, fetching: true, error: null};
        case types.API_CALL_SUCCESS:
            return { ...state, fetching: false, image: action.image};
        case types.API_CALL_FAILURE:
            return { ...state, fetching: false, error: action.error}
        default:
            return state;
    }
}