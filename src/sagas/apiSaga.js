
import { call, put } from "redux-saga/effects";
import axios from 'axios';
import * as types from '../actions/actionTypes';

const baseURL = 'http://localhost:8080';

function fetchData(payload) {
    return axios({
        method: payload.method || 'GET',
        url: `${ baseURL }${ payload.endpoint }`
    });
}

function* apiSaga ({type,  payload}) {
    try {
        const response = yield call(fetchData, payload);
        const data = response.data;
        //  yield action based on data from payload
        yield put(payload.actions.success(data));
        yield put({type: types.API_CALL_SUCCESS});
    } catch(error) {
        yield put(payload.actions.success(error));
        yield put({type: types.API_CALL_FAILURE, error});
    }
}

export { apiSaga }