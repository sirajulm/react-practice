
import { call, put } from "redux-saga/effects";
import axios from 'axios';
import * as types from '../actions/actionTypes';

function loginUser(username, password) {
    if(username === 'test' && password === 'test') {
        return btoa(username);
    } else {
        return null;
    }
}

function* loginSaga ({username, password, history, redirect}) {
    try {
        const response = yield call(loginUser, username, password);
        const token = response;

        yield put({type: types.LOGIN_SUCCESS, token})
        localStorage.setItem('token', token);
        history.replace(redirect)
    } catch(error) {
        yield put({type: types.LOGIN_FAILURE, error});
    }
}

export { loginSaga }