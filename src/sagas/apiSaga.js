
import { call, put } from "redux-saga/effects";
import axios from 'axios';
import * as types from '../actions/actionTypes';

function fetchData(id) {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/${id}.json`
    });
}

function* apiSaga ({id}) {
    try {
        const response = yield call(fetchData, id);
        const image = response.data.url;

        yield put({type: types.API_CALL_SUCCESS, image})
    } catch(error) {
        yield put({type: types.API_CALL_FAILURE, error});
    }
}

export { apiSaga }