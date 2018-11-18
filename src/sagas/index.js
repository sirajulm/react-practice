import { fork } from 'redux-saga/effects';
import { watchAPI, watchLogin } from './watcher';

export default function* startForeman() {
    yield [
        fork(watchAPI),
        fork(watchLogin)
    ]
}