import * as types from './actionTypes'

export const callApi = (payload) => ({
    type: types.API_CALL_REQUEST,
    payload
});