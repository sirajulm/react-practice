import * as types from './actionTypes'

export const callApi = (id) => ({
    type: types.API_CALL_REQUEST,
    id
});