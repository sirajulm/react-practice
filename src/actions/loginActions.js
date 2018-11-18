import * as types from './actionTypes'

export const loginUser = ({username, password}, history, redirect) => ({
    type: types.LOGIN_REQUEST,
    username,
    password,
    history,
    redirect
});