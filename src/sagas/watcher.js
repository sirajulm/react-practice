import { takeLatest } from 'redux-saga/effects';
import { apiSaga } from './apiSaga';
import * as types from '../actions/actionTypes';

function* watchAPI() {
    yield takeLatest(types.API_CALL_REQUEST, apiSaga);
}

export { watchAPI };