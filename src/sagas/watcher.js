import { takeLatest } from 'redux-saga/effects';
import { apiSaga } from './apiSaga';
import { loginSaga } from './loginSaga';
import * as types from '../actions/actionTypes';

function* watchAPI() {
    yield takeLatest(types.API_CALL_REQUEST, apiSaga);
}

function* watchLogin() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga)
}
export { watchAPI, watchLogin };