import * as types from './actionTypes';

export const questionsFetchedSuccess = (payload) => ({
    type: types.QUESTIONS_FETCH_SUCCESS,
    payload
})
export const questionsFetchedFailure = (error) => ({
    type: types.QUESTIONS_FETCH_FAILURE,
    error
})
export const answersFetchedSuccess = (payload) => ({
    type: types.ANSWERS_FETCH_SUCCESS,
    payload
})
export const answersFetchedFailure = (error) => ({
    type: types.ANSWERS_FETCH_FAILURE,
    error
})
