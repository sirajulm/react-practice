import initialState from './initialState';
import * as types from '../actions/actionTypes';

export function questionsReducer (state = initialState.questions, action) {
    switch(action.type) {
        case types.QUESTIONS_FETCH_SUCCESS:
            return { ...state, questions: action.payload, error: null};
        case types.QUESTIONS_FETCH_FAILURE:
            return { ...state, error: action.error}
        default:
            return state;
    }
}

export function answersReducer (state = initialState.answers, action) {
    switch(action.type) {
        case types.ANSWERS_FETCH_SUCCESS:
        console.log(action)
            return { ...state, ...action.payload, error: null};
        case types.ANSWERS_FETCH_FAILURE:
            return { ...state, error: action.error}
        default:
            return state;
    }
}