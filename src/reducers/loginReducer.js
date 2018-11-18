import initialState from './initialState';
import * as types from '../actions/actionTypes';

const token = localStorage.getItem('token');

export function loginReducer (state = {...initialState.auth, token}, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST: 
        return { ...state, processing: true, error: null};
        case types.LOGIN_SUCCESS:
            return { ...state, processing: false, token: action.token, error: null};
        case types.LOGIN_FAILURE:
            return { ...state, processing: false, error: action.error}
        default:
            return state;
    }
}